'use server'
 
import { redirect } from 'next/navigation'
import { revalidatePath, revalidateTag } from 'next/cache'
 
export default async function submit() {
//   const id = await addPost()
  revalidateTag('posts') // Update cached posts
  redirect(`/post/${1}`) // Navigate to new route
}

 
export async function createTodo(prevState: any, formData: FormData) {
  try {
    return revalidatePath('/')
  } catch (e) {
    return { message: 'Failed to create' }
  }
}

