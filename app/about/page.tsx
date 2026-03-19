import Image from "next/image";

export default function About() {
  return (
    <main className="h-screen w-full flex flex-col gap-2 justify-center items-center bg-white text-black">
      <div className="p-10 flex flex-col gap-5 text-center">
        <h1 className="text-[45px] font-bold">
          This is the <span className="text-gray-600">basic</span> tutorial of NEXT JS
        </h1>
        <p className="text-lg">
          In this tutorial, we will create a simple Next.js application.
        </p>
      </div>
    </main>
  );
}
