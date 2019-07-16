import {DefaultResult} from './common';

export interface CurUser {
  uid: string;
  username: string;
  hasLogin: boolean;
  avatarUrl: string;
}
export interface LoginRequest {
  username: string;
  password: string;
}
export type LoginErrorCode = 'passwordWrong' | 'usernameHasExisted';
export const loginErrorCode = {
  passwordWrong: 'passwordWrong',
  usernameHasExisted: 'usernameHasExisted',
};
export type LoginResponse = DefaultResult<CurUser, {code: LoginErrorCode; message: string}>;
