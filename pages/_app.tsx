import React from 'react';

import 'tailwindcss/tailwind.css';
import { ToastProvider } from 'react-toast-notifications';
import { Toast } from '@components';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <ToastProvider autoDismiss autoDismissTimeout={5000} components={{ Toast }}>
    <Component {...pageProps} />
  </ToastProvider>
);

export default App;
