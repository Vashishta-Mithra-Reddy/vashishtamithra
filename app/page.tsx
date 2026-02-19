import Projects from "@/components/Projects";
// import Image from "next/image";
// import LoadingAnimation from "@/components/LoadingAnimation";
// import BottomGradient from "@/components/BottomGradient";
import Me from "@/components/Me";

export default function Home() {
  return (
    <>
    {/* <LoadingAnimation> */}
    {/* <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-satoshi animate-in fade-in">
      <h1 className="text-3xl font-bold">
        Vashishta Mithra Reddy | V19
      </h1>
    </div> */}
    <Me/>
    <Projects/>
    {/* </LoadingAnimation> */}
    </>
  );
}
