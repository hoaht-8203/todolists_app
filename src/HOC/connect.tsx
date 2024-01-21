import React from 'react';
import { debug, log } from '../constants';

export interface ExtraInforType {
  debug: boolean;
  log: (value: any) => void;
}

export interface InjectedType {
  user: any;
}

// export default function connect<T>(Component: React.ComponentType<T & ExtraInforType>) {
//   return function (props: Omit<T, keyof ExtraInforType>) {
//     return <Component {...(props as T)} debug={debug} log={log} />;
//   };
// }

export default function connect<P>(injectedProps: P) {
  return function connect<T>(Component: React.ComponentType<T & P>) {
    return function (props: Omit<T, keyof P>) {
      return <Component {...(props as T & {})} {...injectedProps} />;
    };
  };
}
