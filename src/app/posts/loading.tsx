import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex items-center justify-center flex-col h-screen gap-y-5 md:gap-y-10">
      {/* <Skeleton className="h-12 w-12 rounded-full" /> */}
        <Skeleton className="h-10 md:h-20 w-[250px] md:w-[600px]" />
        <Skeleton className="h-10 md:h-20 w-[350px] md:w-[900px]" />
        <Skeleton className="h-10 md:h-20 w-[350px] md:w-[900px]" />
        <Skeleton className="h-10 md:h-20 w-[350px] md:w-[900px]" />
    </div>
  )
}
