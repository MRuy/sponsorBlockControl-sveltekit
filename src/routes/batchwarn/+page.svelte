<script lang="ts">
  import { Config } from '../../stores/config';
  import MultiStatus, { STATUS } from '../../components/MultiStatus.svelte';
  import { warningTypeList, warningTypeTitles } from '../../config';

  type User = {
    userID: string,
    type: number,
  }
  const section_regex = new RegExp(/\n\s*\n/,'dg'); // basically a blankline detector, TS has no idea about the 'd' flag
  const vipnote_regex = /^\s*\**\[[\s\S]+\]\**\s*$/; // "[vip note: ...]  ", "  ***[vip note: ...]***"
  const sbb_regex = /sb\.ltn\.fi\/userid\/([0-9a-f]{64})/i;
  const dab_regex = /dearrow\.minibomba\.pro\/user_id\/([0-9a-f]{64})/i;
  const uid_regex = /[0-9a-f]{64}/i;

  let inputValid = false;
  let inputText = '';
  let defaultType = 0;
  let status: [string, symbol][] = [];
  let userText = '';
  let users: Array<User> = [];

  $: {
    // Find all section bounduaries
    const sectionBounds = Array.from(inputText.matchAll(section_regex)) as (RegExpExecArray & {indices: [[number, number]]})[]; // TS has no idea about the 'd' regex flag
    let header: string;

    switch (sectionBounds.length) {
      case 0:
        // no sections, all header
        header = inputText.trim();
        userText = '';
        break;
      case 1:
        // header + main, no trailer
        header = inputText.slice(0, sectionBounds[0].indices[0][0]); // first section
        userText = inputText.slice(sectionBounds[0].indices[0][1]).trim();  // second section
        break;
      default: {
        // header + main + maybe trailer
        header = inputText.slice(0, sectionBounds[0].indices[0][0]); // first section
        let trailer = inputText.slice(sectionBounds[sectionBounds.length-1].indices[0][1]);  // last section
        if (vipnote_regex.test(trailer)) {
          userText = inputText.slice(sectionBounds[0].indices[0][1], sectionBounds[sectionBounds.length-1].indices[0][0]); // second - second-last section
        } else {
          userText = inputText.slice(sectionBounds[0].indices[0][1]).trim(); // second section - end
        }
      }
    }

    // Find userid links in the header, one per line
    const tmpUsers = [];
    for (const line of header.split('\n')) {
      let match = sbb_regex.exec(line);
      if (match) {
        tmpUsers.push({
          userID: match[1].toLowerCase(),
          type: 0 // SB
        });
        continue;
      }

      match = dab_regex.exec(line);
      if (match) {
        tmpUsers.push({
          userID: match[1].toLowerCase(),
          type: 1 // DA
        });
        continue;
      }

      match = uid_regex.exec(line);
      if (match) {
        tmpUsers.push({
          userID: match[0].toLowerCase(),
          type: defaultType,
        });
        continue;
      }
    }
    users = tmpUsers;
    inputValid = inputText.length > 0 && users.length > 0;
  }


  async function doAction() {
    status = users.map(u => [`${warningTypeTitles[u.type]}/${u.userID}`, STATUS.WORKING]);
    const promises = [];

    for (const i in users) {
      const user = users[i];
      promises.push((async () => {
        const postData: TWarnUser = {
          issuerUserID: $Config.privateUUID,
          userID: user.userID,
          reason: userText,
          type: user.type,
          enabled: true,
        };

        const result = await fetch(`${$Config.sponsorBlockApi}/api/warnUser`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        }).then(function (response) {
          return response.status;
        });
        if (result === 200) {
          status[i][1] = STATUS.SUCCESS;
        }
        if (result === 400) {
          status[i][1] = STATUS.ERROR_INVALID;
        }
        if (result === 403) {
          status[i][1] = STATUS.ERROR_UNAUTHORIZED;
        }
        if (result === 409) {
          status[i][1] = STATUS.DUPLICATE;
        }

        if (status[i][1] === STATUS.WORKING) {
          // Still "working", but request has already finished - this means we've missed an error
          status[i][1] = STATUS.ERROR_OTHER;
        }
      })());
    }

    await Promise.allSettled(promises);
  }
</script>

<svelte:head>
	<title>Batch warn | SponsorBlockControl</title>
</svelte:head>

<main>
  <div class="container">
    <fieldset>
      <legend>Batch warn:</legend>
      <div class="form" class:working={Object.values(status).some(s => s[1] == STATUS.WORKING)}>
        <div>
          <label for="warning-type">Default warn target:</label><br />
          <select id="warning-type" bind:value={defaultType}>
            <option value="">--- Where it applies ---</option>
            {#each warningTypeList as warningType, index}
              <option value={warningType}>{warningTypeTitles[index]}</option>
            {/each}
          </select>
        </div>
        <div>
          <label for="reason">Warn log text:</label><br />
          <textarea
            id="reason"
            cols="80"
            rows="10"
            bind:value={inputText}
            placeholder={"https://sb.ltn.fi/userid/1234...\nhttps://dearrow.minibomba.pro/user_id/5678...\n9abc...\n\nReason...\n\n[vip note: ... (will be removed)]"}></textarea>
        </div>

        <div class="actions">
          <button
            type="button"
            disabled={!inputValid}
            on:click={doAction}
          >Warn</button>
        </div>
      </div>
    </fieldset>
    <fieldset>
      <legend>Preview</legend>
      <div>
        Targetted users:
        <ul>
        {#each users as user}
          <li>{user.userID} ({warningTypeTitles[user.type]})</li>
        {/each}
        </ul>
      </div>
      <div>
        <label for="reason-preview">Warn text to be sent to the users:</label><br />
        <textarea 
          id="reason-preview"
          disabled 
          cols="80"
          rows="10"
          bind:value={userText} 
        />
      </div>
    </fieldset>

    <MultiStatus {status} />
  </div>
</main>

<style>
  .form {
    position: relative;
  }
  .working:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.3);
  }

  select {
    color: #dee2e6;
    border: 1px solid #6c757d;
    border-radius: .25rem;
    background-color: #000;
    padding: .175rem .5rem;
  }

  ul {
    margin: 0;
  }
</style>
