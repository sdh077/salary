async function getData() {
    const res = await fetch('http://localhost:3100/api/test');
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
function Child({ data }) {
    console.log(data);
    return <><div>sad</div></>
}
export default async function Page() {
    const data = await getData()
    return <Child data={data} />;
}

