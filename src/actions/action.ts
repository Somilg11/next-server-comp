"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData){
    //auth check
    const {isAuthenticated} = getKindeServerSession();
    if(!(await isAuthenticated())){
        redirect('/api/auth/login?post_login_redirect_url=/create');
    }
    const title = formData.get('title') as string;
    const body = formData.get('body') as string;
    
    await prisma.post.create({
        data:{
            title,
            body
        },
    });

    revalidatePath('/posts');
}