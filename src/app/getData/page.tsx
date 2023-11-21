async function getData() {
    const res = await fetch('https://stgmanage.dtverse.net/api/common/menu-list');
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
function Child({ menu, menus }) {
    return <>
        <>
            {menu.menuNm}
            {menus.filter(m => m.upperMenuId === menu.menuId).map(m =>
                <div key={m.menuId}>---<Child menu={m} menus={menus}/></div>
            )}
        </></>
}
export default async function Page() {
    const data = await getData()
    return <div>
        {data.data.filter(m => m.upperMenuId === null).map(menu =>
            <Child menu={menu} key={menu.menuId} menus={data.data} />
        )}
    </div>
}

