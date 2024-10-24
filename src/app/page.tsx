"use client";
 
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import WordPullUp from "@/components/ui/word-pull-up";
import { Button } from "@/components/ui/button";
import { CoolMode } from "@/components/ui/cool-mode";
import { ArrowUpRight} from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background ">
      <div className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
      <WordPullUp
      className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
      words="Welcome to my blog"
    />
        
      </div>
      {/* <p className="text-center mx-10 p-10 font-semibold text-2xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores perferendis amet, quidem itaque voluptatem ipsa quia atque est aliquid provident et deleniti illo tempore facere placeat reprehenderit, dignissimos voluptatibus in!</p> */}
      <CoolMode>
        <Link href="/posts" className="z-10">
        <Button className="m-4 font-bold tracking-tighter px-4 rounded-full text-base inline-flex item-center gap-2 z-10">
          Explore! <ArrowUpRight size={30}/>
          </Button>
          </Link>
      </CoolMode>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
}
