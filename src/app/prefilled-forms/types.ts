import type { INTEREST_OPTIONS, PAST_TALKS } from './constants'

export type Interest = (typeof INTEREST_OPTIONS)[number]
export type PastTalk = (typeof PAST_TALKS)[number]
export interface Profile {
  company: string
  email: string
  interests: Interest[]
  jobTitle: string
  name: string
  pastAttendance: PastTalk[]
  userId: string
}
