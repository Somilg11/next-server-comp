/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import prisma from "@/lib/db";

export default async function Page() {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
  const posts = await prisma.post.findMany();
  return (
    <main className="px-32 pt-32">
      <h1 className="text-4xl md:text-5xl font-bold mb-14 md:mb-5 text-center">
        All posts
      </h1>
      <div className="max-w-[750px] md:mx-auto leading-8">
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="mb-3">
              <Alert className="alert-dialog">
                <Terminal className="h-4 w-4" />
                <AlertTitle>
                  {" "}
                  <Link href={`/posts/${post.id}`}>{post.title}</Link>
                </AlertTitle>
                <AlertDescription className="text-slate-500 hidden md:block">{post.body?.split(' ').slice(0, 10).join(' ')} ...</AlertDescription>
              </Alert>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
