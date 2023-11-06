'use client'
import React, { useEffect, useRef } from 'react'
import Paper from '@/utils/paper/dist/paper-core'

export default function page() {
    const canvasRef = useRef(null)
    useEffect(() => {
        if(!canvasRef) return 
        const canvas = canvasRef.current;
    }, [canvasRef]);
    return (
        <canvas ref={canvasRef} id="canvas" />
    )
}
