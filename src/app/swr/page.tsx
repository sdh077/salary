'use client'
import fetcher from '@/components/fetcher'
import useSWR from 'swr'
export default function Page() {
    const { data, error, isLoading } = useSWR('/api/test', fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    // 데이터 렌더링
    return <div>hello {data.product}!</div>
}