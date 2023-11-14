'use client';

import { Sidebar } from '@flowbite';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

export default function DefaultSidebar() {
    return (
        <Sidebar aria-label="Default sidebar example">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item
                        href="/modal"
                        icon={HiChartPie}
                    >
                        <p>
                            Modal
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="/swr"
                        icon={HiViewBoards}
                        labelColor="dark"
                    >
                        <p>
                            swr
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="/paper"
                        icon={HiInbox}
                        label="3"
                    >
                        <p>
                            paper
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="/pay"
                        icon={HiUser}
                    >
                        <p>
                            카카오 네이버
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                        icon={HiShoppingBag}
                    >
                        <p>
                            Products
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                        icon={HiArrowSmRight}
                    >
                        <p>
                            Sign In
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                        icon={HiTable}
                    >
                        <p>
                            Sign Up
                        </p>
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}


