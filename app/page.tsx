import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">Here we create project that we desire</h1>
          <p className="pt-10 pb-20 text-center">wellcome to the page start by creating a source code in visual studio code</p>
          <button className="p-2  border border-black ">ENTER</button>
        </div>
    </main>
  );
}
