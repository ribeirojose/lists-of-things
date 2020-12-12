import React from 'react';
import classNames from 'classnames';
import { ToastProps } from 'react-toast-notifications';

const Toast = ({
  children,
  transitionState,
  transitionDuration,
}: ToastProps) => (
  <div
    className={classNames(
      'flex mt-6 mr-2 w-80 px-6 py-4 rounded bg-blue-500 text-white shadow-md transform transition-all',
      transitionState === 'entered'
        ? 'translate-x-0 opacity-100'
        : 'translate-x-64 opacity-0',
    )}
    style={{ transitionDuration: `${transitionDuration}ms` }}
  >
    {children}
  </div>
);

export default Toast;
