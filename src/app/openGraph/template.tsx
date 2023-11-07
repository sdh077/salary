
'use client'

import { useEffect, useState } from "react"

export default function Template({ children }: { children: React.ReactNode }) {
    const [count, setCount] = useState(1)
    const [title, setTitle] = useState('')
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
            .then(response => response.json())
            .then(res => setTitle(res.title))
        setCount(count => count + 1)
    }, [])
    return <div>{title}{count}{children}</div>
}