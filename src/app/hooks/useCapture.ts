'use client'
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function useCapture<S>(key: string, initialState: S): [boolean, S, Dispatch<SetStateAction<S>>] {
    const [loading, setLoad] = useState(false)
    const [get, set] = useState(initialState)
    useEffect(() => {
        if (typeof window !== 'undefined') set(JSON.parse(localStorage.getItem(key)))
        setLoad(true);
    }, []);
    const handle = (value: S) => set(() => {
        localStorage.setItem(
            key, JSON.stringify(value)
        );
        return value
    })
    return [loading, get, handle]
}
export function initCapture(key: string): void {
    useEffect(() => {
        localStorage.setItem(
            key, null
        );
    })
}