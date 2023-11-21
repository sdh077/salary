'use client';

import { Dropdown, Navbar, Avatar } from '@flowbite';
import { usePathname } from 'next/navigation';

export default function NavbarWithDropdown() {
    const pathname = usePathname()
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="https://flowbite-react.com">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">실수령 계산기</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="/" active={pathname === '/'}>
                    연봉 계산기
                </Navbar.Link>
                <Navbar.Link href="/chart" active={pathname === '/chart'}>연봉 실수령 표</Navbar.Link>
                <Navbar.Link href="/collect" active={pathname === '/collect'}>1억 모으기</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}


