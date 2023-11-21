
'use client'

import { useEffect, useState } from "react"

export default function Template({ children }: { children: React.ReactNode }) {
    const [count, setCount] = useState(1)
    useEffect(() => {
        setCount(count => count + 1)
        console.log('lay')
    },[])
    return <div>l{count}{children}</div>
  }