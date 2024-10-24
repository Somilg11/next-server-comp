

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <>

      <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4 mt-10">
        <Card className="w-full max-w-3xl shadow-lg border border-gray-200 rounded-md p-6">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">About Our Blog</CardTitle>
            <CardDescription className=" mt-2">
              A platform to share insights, stories, and ideas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed mb-4">
              Welcome to our blog! We are a team of passionate writers dedicated to bringing you fresh 
              perspectives on a variety of topics. Whether it&apos;s technology, lifestyle, or personal development, 
              we aim to deliver content that educates, entertains, and inspires.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Our Mission</h2>
            <p className="mt-2 ">
              Our mission is to foster a space for learning and discussion, where readers can explore new ideas 
              and gain insights into subjects that matter most to them.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Meet the Team</h2>
            <p className="mt-2 ">
              Our team is composed of a diverse group of writers, developers, and creatives who love sharing 
              knowledge and stories. We believe that everyone has a story to tell, and we&apos;re here to help share them.
            </p>

            <div className="mt-6">
              <Button>
                Learn More About Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
