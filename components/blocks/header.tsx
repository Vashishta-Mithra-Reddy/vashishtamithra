import Link from "next/link";
import Navigation from "./navigation";
// import Image from "next/image";

export default function Header() {
return (
         <nav className="w-full max-w-6xl flex justify-center h-20 backdrop-blur-3xl sticky top-0 md:top-8 rounded-none md:rounded-xl px-6 md:px-4 z-50">
          <div className="w-full max-w-7xl flex justify-between items-center p-3 px-2 md:px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Link href={"/"} className="text-3xl pl-4 font-bold font-satoshi">V19</Link>
              {/* <Link href={"/"} className="text-xl font-bold px-0 md:px-10">
              <Image src="/v19.png" width={60} height={60} priority alt="V19 Logo" className="rounded-full"/>
              </Link> */}
            </div>
            <Navigation />
            <button className="px-6 py-3 rounded-xl font-satoshi bg-foreground text-background text-sm tracking-wide">
              Contact
            </button>
          </div>
        </nav>
);
}