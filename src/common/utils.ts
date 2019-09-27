import {GetFieldDecoratorOptions, WrappedFormUtils} from 'antd/lib/form/Form';

import {Store} from 'redux';
import {message as antdMessage} from 'antd';

export const message = {
  success: (content: string) => {
    antdMessage.success(content);
  },
  error: (content: string) => {
    antdMessage.error(content);
  },
};
export type ExtractArray<T extends any[]> = T[Extract<keyof T, number>];
export type OmitSelf<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

let inited = false;
export function setInited(store: Store) {
  inited = true;
  store.dispatch({type: 'app/ClientInited'});
  const initLoading = document.getElementById('g-init-loading');
  initLoading && initLoading.parentNode!.removeChild(initLoading);
}
export function getInited() {
  return inited;
}
export function isServer(): boolean {
  return typeof window === 'undefined';
}
export function extract<T, K extends keyof T, U extends K[], P extends ExtractArray<U>>(target: T, ...args: U): Pick<T, P> & {$: OmitSelf<T, P>} {
  const clone = {...target};
  const result: any = (args as string[]).reduce((prev, cur) => {
    prev[cur] = target[cur];
    delete clone[cur];
    return prev;
  }, {});
  result.$ = clone;
  return result;
}

export function uniqueKey(): string {
  //server端和client端产生的随机值不一致导致生成的url不一致，RN报warning，可忽略
  if (!inited || isServer()) {
    return '';
  }
  return Math.random()
    .toString(16)
    .substr(2);
}

export function simpleEqual(obj1: any, obj2: any): boolean {
  if (obj1 === obj2) {
    return true;
  } else if (typeof obj1 !== typeof obj2 || typeof obj1 !== 'object') {
    return false;
  } else {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    } else {
      for (const key of keys1) {
        if (!simpleEqual(obj1[key], obj2[key])) {
          return false;
        }
      }
      return true;
    }
  }
}
export function pickEqual<T, P extends T, K extends keyof T>(obj1: T, obj2: P, props: K[]): boolean {
  for (let i = 0, k = props.length; i < k; i++) {
    const key = props[i];
    if (!simpleEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}

export function reference(data: any) {
  return data;
}

export function getFormDecorators<D>(form: WrappedFormUtils, fields: {[key in keyof D]?: GetFieldDecoratorOptions}, initValues: {[key in keyof D]?: any}) {
  type Keys = keyof typeof fields;
  const decorators = {};
  Object.keys(fields).forEach(key => {
    const item: GetFieldDecoratorOptions = fields[key];
    item.initialValue = initValues[key];
    decorators[key] = form.getFieldDecorator(key, fields[key]);
  });
  return decorators as {[K in Keys]: (node: React.ReactNode) => React.ReactNode};
}
export const metaKeys = {
  HomePathname: '/poster/home',
  LoginPathname: '/login',
  RegisterPathname: '/register',
  UserHomePathname: '/user/home',
  ClientInitedAction: 'app/ClientInited',
  LoginRedirectSessionStorageKey: 'LoginRedirectTo',
  AnchorParamKey: 'anchor',
  SessionIDSessionStorageKey: 'SessionID',
};
