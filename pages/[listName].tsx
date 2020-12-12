import { MainLayout } from "@components";
import Head from "next/head";

import { listsIndex } from "lib";
import { GetStaticPropsResult, GetStaticPathsResult } from "next";
import { ListData, List } from "lib/types";

const ListPage = ({ list, listData }) => {
  const copyToClipboard = (event) => {
    const el = document.createElement("textarea");
    el.value = event.target.innerText;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  return list ? (
    <div>
      <Head>
        <title>Lists of things</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout {...{ list, listData }}>
        <div onClick={copyToClipboard} className="font-light">
          {listData.join(", ")}
        </div>
      </MainLayout>
    </div>
  ) : (
    ""
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
    `../data/lists/${list.value}.json`
  );
  return {
    props: { list, listData },
  };
}
