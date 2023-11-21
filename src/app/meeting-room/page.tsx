import FC from "./FC"

async function getData(): Promise<Event[]> {
    const res = await fetch('http://localhost:3003/board', { cache: 'no-store' })
    return res.json()
}

export default async function page() {
    const events = await getData()
    return (
        <div>
            <FC events={events} />
        </div>
    )
}

export interface Event {
    id: number;
    title: string;
    start: string;
}

