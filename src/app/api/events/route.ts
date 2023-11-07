import { fetchData, addData } from "./data"

export async function GET(request: Request) {
    const events = await fetchData()
    return Response.json({ events })
}
export async function POST(request: Request) {
    const json = await request.json()
    await addData(json)
    return Response.json({ json })
}
