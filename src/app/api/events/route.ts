import { fetchData, addData } from "./data"

export async function GET(request: Request) {
    const events = await fetchData()
    return Response.json( [{
        id: 1,
        title: 'My Event',
        start: '2023-11-07 08:00:00',
    }])
}
export async function POST(request: Request) {
    const json = await request.json()
    await addData(json)
    return Response.json({ json })
}
