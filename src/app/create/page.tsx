import { createPost } from '@/actions/action'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, DoorClosed } from 'lucide-react'
// import {getKindeServerSession} from '@kinde-oss/kinde-auth-nextjs/server';
// import { redirect } from 'next/navigation';
import {LogoutLink} from '@kinde-oss/kinde-auth-nextjs/components';

export default async function Page() {
    // const { isAuthenticated } = getKindeServerSession();
    // if(!(await isAuthenticated())) {
    //     redirect('/api/auth/login?post_login_redirect_url=/create');
    // }
  return (
    <main className='text-center pt-16 mt-7 items-center'>
        <h1 className= "text-4xl md:text-5xl font-bold mb-5 tracking-tighter">Create post</h1>
        <form action={createPost} className='space-x-2 mt-10 flex flex-col gap-y-2 mx-10'>
            <input type="text" name="title" placeholder="Title for new post" className='border rounded px-3 h-full py-2 outline-none mx-2'/>
            <textarea name="body" placeholder="Body content for new post" className='border rounded px-3 h-64 py-2 outline-none mx-2'/>
            <Button className='rounded-md font-bold'><ArrowUpRight/></Button>
        </form>
        <LogoutLink>
        <Button className='m-4 font-bold tracking-tighter px-4 rounded-full text-base inline-flex item-center gap-2 z-10'>Logout<DoorClosed/></Button>
        </LogoutLink>
    </main>
  )
}