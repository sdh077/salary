import { SubmitButton } from '@/components/submit-button'

export default function Page() {
    async function create(formData: FormData) {
        'use server'

        // mutate data
        // revalidate cache
    }

    return <form action={create}>...
        <SubmitButton />
    </form>
}