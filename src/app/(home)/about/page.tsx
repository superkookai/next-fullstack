//localhost:PORT/about

import { notFound } from "next/navigation";
import AboutContent from "../ui/AboutContent";

export const metadata = {
  title: "About Us",
  description: "This is all about us.",
};

async function getData(){
  const res = await fetch("https://api.codingthailand.com/api/version"); //SSG (Static site generation)
  
  // const res = await fetch("https://api.codingthailand.com/api/version",{
  //   next: {revalidate:10} //fetch every 10 seconds >> ISR (Incremental Static Regeneration )
  // });
  
  // const res = await fetch("https://api.codingthailand.com/api/version",{
  //   cache: 'no-store' // no cache, immediately update >> SSR (Server-side rendering)
  // });

  if(res.status === 404){
    notFound();
  }
  
  if (!res.ok){
    throw new Error("Cannot fetch data!!");
  }
  
  return res.json();
}

export default async function AboutPage() {

  const data = await getData();

  return (
    <>
      <AboutContent data={data}/>
    </>
  );
}
