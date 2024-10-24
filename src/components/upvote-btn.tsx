"use client";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useState } from "react";
export default function UpvoteBtn() {
  const [upvoteCount, setUpvoteCount] = useState(0);
  return (
    <Button variant={"outline"} onClick={()=>{
        setUpvoteCount(upvoteCount + 1);
    }} className="p-2 mt-10 gap-2">{upvoteCount}<Heart/></Button>
  )
}
