import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="top-0 sticky left-0 w-full h-16 bg-black flex gap-5">
        <Link href="/">
          Home
        </Link>
        <Link href="/#2">Nr2</Link>
      </div>
      <section className="h-[90vh] bg-red-500">This is App router canary</section>
      <section id="2" className="h-[90vh] bg-green-500">
        nr.2
      </section>
    </>
  );
}
