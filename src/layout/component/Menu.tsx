'use client';

import { Dropdown, Navbar, Avatar } from '@flowbite';

export default function NavbarWithDropdown() {
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="https://flowbite-react.com">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">넥스트 공부</span>
            </Navbar.Brand>
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="/openGraph">About</Navbar.Link>
                <Navbar.Link href="/getData">Services</Navbar.Link>
                <Navbar.Link href="#">Pricing</Navbar.Link>
                <Navbar.Link href="#">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}


