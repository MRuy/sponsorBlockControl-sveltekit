/// <reference types="@sveltejs/kit" />

type Segment = {
  videoID: string,
  timeSubmitted: number,
  startTime: number,
  endTime: number,
  views: number,
  votes: number,
  category: string,
  UUID: string,
  hidden: boolean,
  locked: boolean,
  shadowHidden: boolean,
  actionType: string,
  userID: string,
}

type TPurgeSegments = {
  videoID: string,
  userID: string,
}

type TLockCategories = {
  videoID: string,
  userID: string,
  reason: string,
  categories: string[],
  actionTypes: string[],
}

type TUserInfo = {
  warnings: number,
  warningReason: string,
}

type TWarnUser = {
  issuerUserID: string,
  userID: string,
  reason: string,
  enabled: boolean,
}

