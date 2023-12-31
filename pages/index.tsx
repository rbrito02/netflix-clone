import { NextPageContext } from 'next';
import { getSession, signOut } from 'next-auth/react';

import React from 'react';
import useCurrentUser from '@/hooks/userCurrentUser';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
      <h1 className="text-2xl text-green-300">Netflix Clone</h1>
      <p className="text-white">
        Logged in as :
        {user?.name}
      </p>
      <button onClick={() => signOut()} className="h-10 w-full bg-white">
        LogOut!
      </button>
    </>
  );
}
