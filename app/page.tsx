'use client'
import WebApp from "@twa-dev/sdk";
import {useEffect, useState} from 'react';
interface userData {
  id: number, 
  first_name: string,
  last_name: string,
  username?: string,
  language_code?: string,
  is_premium?: boolean,
}
export default function Home() {
  const [userData, setUserData] = useState<userData | null>(null);

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as userData);
    }
  }, []);
  return (
   <main className="p-4">
    {
      userData ? (
        <div>
          <h1 className="text-2xl font-bold">Welcome {userData.first_name}</h1>
          <p className="text-lg">Your id is: {userData.id}</p>
          <p className="text-lg">Your username is: {userData.username}</p>
          <p className="text-lg">Your language code is: {userData.language_code}</p>
          <p className="text-lg">Your premium status is: {userData.is_premium ? "Yes" : "No"}</p>
        </div>
      ) : (
        <h1 className="text-2xl font-bold">Loading...</h1>
      )
    }
   </main>
  );
}
