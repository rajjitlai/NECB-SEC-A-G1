import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="flex flex-col items-center">

        <h1 className="text-4xl font-bold">The creative platform for cross-functional work</h1>
        <p className="pt-11 ">Welcome Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quia libero, ut nobis dolores esse corporis facilis eaque ratione, voluptatem iste soluta! Quod veniam minima similique libero illo consequuntur voluptas!</p>
        <button className="p-2 border border-black">ENTER</button>
        <h1 className="text-4xl font-bold">This Creative platform for cross-functional work</h1>
         
        <p className="pt-16 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem aliquam repellat at fuga asperiores ipsam architecto autem error recusandae dolore accusantium tempora libero voluptatum, iste nobis? Asperiores est quam cum?</p>
        <button className="p-3 border border-white-2 rounded-lg">ENTER</button>
      </div>
    </main>
  );
}
 