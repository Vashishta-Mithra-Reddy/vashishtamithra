import Link  from "next/link";
// import Image from "next/image";
import ThemeSwitcher from "../theme-switcher";

export default function Footer() {
return(
    <footer className="w-full flex items-center justify-between text-center text-xs gap-8 max-w-7xl mb-16 md:mb-16 rounded-none md:rounded-xl">
      <div className="w-full py-16 px-20 flex items-center justify-between text-center text-xs gap-8 backdrop-blur-3xl">
      <Link href={"/"} className="text-xl font-semibold">
      <div className="flex items-center">
      {/* <Image src="/v19.png" width={80} height={80} alt="v19 Logo" className="rounded-full"/> */}
      <p className="pl-4 text-4xl font-bold font-satoshi">V19</p>
      </div>
      </Link>
      <ThemeSwitcher />
      </div>
    </footer>
);
}