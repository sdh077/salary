'use client'
import fetcher from '@/components/fetcher'
import useSWR from 'swr'
interface Menu {
    menuId: number
    menuNm: string
    menuUrl: string
    upperMenuId: number
    menuLevel: number
    menuIcon: string
    snbYn: string
    sortOrder: number
    loginYn: string
    deleteYn: string
    childYn: string
}
export default function Page() {
    const { data, error, isLoading } = useSWR('https://stgmanage.dtverse.net/api/common/menu-list', fetcher)
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    // 데이터 렌더링
    return <div>
        {data.data.filter((m: Menu) => m.upperMenuId === null).map(menu =>
            <Child menu={menu} key={menu.menuId} menus={data.data} />
        )}
    </div>
}
function Child({ menu, menus}) {
    return <>
        <>
            {menu.menuNm}
            {menus.filter(m => m.upperMenuId === menu.menuId).map(m =>
                <div key={m.menuId}>---<Child menu={m} menus={menus} /></div>
            )}
        </></>
}


