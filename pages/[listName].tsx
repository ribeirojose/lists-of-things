import React from 'react';

import { MainLayout } from '@components';
import Head from 'next/head';
import { useToasts } from 'react-toast-notifications';

import { listsIndex } from 'lib';
import { GetStaticPropsResult, GetStaticPathsResult } from 'next';
import { ListData, List } from 'lib/types';

interface ListPageProps {
  list: List;
  listData: ListData;
}

const ListPage = ({ list, listData }: ListPageProps) => {
  const { addToast } = useToasts();

  const copyToClipboard = () => {
    addToast(<>JSON list copied to clipboard.</>);

    const el = document.createElement('textarea');
    el.value = JSON.stringify(listData);
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  return list ? (
    <div>
      <Head>
        <title>Lists of things</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout {...{ list, listData }}>
        <span onClick={copyToClipboard} className="font-light">
          {listData.join(', ')}
        </span>
        <div className="mt-2 text-sm text-blue-600 font-light">
          <a href={list.source}>Source: {list.source}</a>
        </div>
      </MainLayout>
    </div>
  ) : (
    ''
  );
};

export default ListPage;

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const paths = listsIndex.map(({ value: listName }) => ({
    params: { listName },
  }));

  return {
    paths,
    fallback: false,
  };
}

interface StaticProps {
  list: List;
  listData: ListData;
}

export async function getStaticProps({
  params,
}): Promise<GetStaticPropsResult<StaticProps>> {
  const list = listsIndex.find((element) => element.value == params.listName);
  const { default: listData } = await import(
    `../lib/data/lists/${list.value}.json`
  );
  return {
    props: { list, listData },
  };
}
