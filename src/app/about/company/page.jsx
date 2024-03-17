"use client";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Company = () => {
  const route = useRouter();
  const pathName = usePathname();
  const params = useSearchParams();

  //console.log(pathName);
  console.log(params.get("txt"));

  return <div>company
    <button onClick={() => {
      route.replace('/')      
    }}>Nagivate to home</button>
  </div>;
}

export default Company;