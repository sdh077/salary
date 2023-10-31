'use client';

import { Table, Pagination } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

export default function HoverState(prop) {
    const router = useRouter()
    const currentPage = Number(prop.searchParams.page)
    return (
        <div>
            <TableExam />
            <Pagination
                currentPage={currentPage}
                onPageChange={page => { router.push(`/table?page=${page}`) }}
                totalPages={100}
            />
        </div>
    )
}
function TableExam() {
    const [item, setItem] = useState(1);
    useEffect(() => {
        window.history.scrollRestoration = 'manual';

        // 페이지 이동 후 저장되어 있던 위치로 스크롤 복원
        const capItem = sessionStorage.getItem('capture');
        if (capItem) {
            // 스크롤 복원 후 저장된 위치 제거
            setItem(Number(capItem))
            sessionStorage.removeItem('capture');
        }


        return () => {
            sessionStorage.setItem(
                'capture', String(item)
            );
        };
    }, []);
    return (
        <Table hoverable>
            <Table.Head>
                <Table.HeadCell>
                    Product name
                </Table.HeadCell>
                <Table.HeadCell>
                    Color
                </Table.HeadCell>
                <Table.HeadCell>
                    Category
                </Table.HeadCell>
                <Table.HeadCell>
                    Price
                </Table.HeadCell>
                <Table.HeadCell>
                    <span className="sr-only">
                        Edit
                    </span>
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Apple MacBook Pro 17"
                    </Table.Cell>
                    <Table.Cell>
                        Sliver
                    </Table.Cell>
                    <Table.Cell>
                        Laptop
                    </Table.Cell>
                    <Table.Cell>
                        $2999
                    </Table.Cell>
                    <Table.Cell>
                        <a
                            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                            href="/tables"
                        >
                            <p>
                                Edit
                            </p>
                        </a>
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        <p>
                            Microsoft Surface Pro
                        </p>
                    </Table.Cell>
                    <Table.Cell>
                        White
                    </Table.Cell>
                    <Table.Cell>
                        Laptop PC
                    </Table.Cell>
                    <Table.Cell>
                        $1999
                    </Table.Cell>
                    <Table.Cell>
                        <a
                            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                            href="/tables"
                        >
                            <p>
                                Edit
                            </p>
                        </a>
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Magic Mouse 2
                    </Table.Cell>
                    <Table.Cell>
                        Black
                    </Table.Cell>
                    <Table.Cell>
                        Accessories
                    </Table.Cell>
                    <Table.Cell>
                        $99
                    </Table.Cell>
                    <Table.Cell>
                        <a
                            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                            href="/tables"
                        >
                            <p>
                                Edit
                            </p>
                        </a>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}


