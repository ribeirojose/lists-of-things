import React from 'react';
import Select from 'react-select';
import { useRouter } from 'next/router';

import Footer from '@components/Footer';
import Header from '@components/Header';
import { listsIndex } from 'lib';
import { List, ListData } from 'lib/types';

interface MainLayoutProps {
  list?: List;
  listData?: ListData;
  children?: React.ReactNode;
}

const MainLayout = ({ list, children }: MainLayoutProps) => {
  const router = useRouter();

  const handleChange = (option) => {
    router.push('/[listName]', `/${option.value}`);
  };

  return (
    <div className="container mx-auto my-8">
      <Header />

      <div className="my-10 mx-5 md:mx-32">
        <main className="mt-5">
          <div className="py-4">
            <Select
              value={list}
              options={listsIndex}
              onChange={handleChange}
              placeholder="Find the thing you want a list for"
            />
            <span className="font-bold">Click list to copy to clipboard.</span>
          </div>
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
