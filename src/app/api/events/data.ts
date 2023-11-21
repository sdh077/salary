import { Event } from "@/app/meeting-room/page";

const events = [{
    id: 1,
    title: 'My Event',
    start: '2023-11-07 08:00:00',
}];
export async function fetchData() {
    return await fetch('http://localhost:3003/board')
}
export async function addData(event: Event) {
    const result = await fetch('http://localhost:3003/board', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(event)
    })
    return result
}

async function getEvents() {
    return events
}
