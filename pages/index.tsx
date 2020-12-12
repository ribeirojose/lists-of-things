import React from 'react';

import { MainLayout } from '@components';
import Head from 'next/head';

const Index = () => (
  <div>
    <Head>
      <title>Lists of things</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <MainLayout />
  </div>
);

export default Index;
