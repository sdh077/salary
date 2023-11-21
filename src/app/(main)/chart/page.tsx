
'use client';

import { Table } from 'flowbite-react';
import Sale from "../sale";

export default function Page() {
    return (
        <Table>
            <Table.Head>
                <Table.HeadCell>연봉</Table.HeadCell>
                <Table.HeadCell>실수령액</Table.HeadCell>
                <Table.HeadCell>공제액계</Table.HeadCell>
                <Table.HeadCell>국민연금</Table.HeadCell>
                <Table.HeadCell>건강보험</Table.HeadCell>
                <Table.HeadCell>장기요양</Table.HeadCell>
                <Table.HeadCell>고용보험</Table.HeadCell>
                <Table.HeadCell>소득세</Table.HeadCell>
                <Table.HeadCell>지방소득세</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                {Array.from({ length: 90 }).map((_, index) => {
                    const sale = new Sale(100000 * (10 + index), 1, 0)
                    const data = sale.getData()
                    return (
                        <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>{data.salary}</Table.Cell>
                            <Table.Cell>{data.actualSalary}</Table.Cell>
                            <Table.Cell>{data.taxTotal}</Table.Cell>
                            <Table.Cell>{data.nationalPension}</Table.Cell>
                            <Table.Cell>{data.healthInsurance}</Table.Cell>
                            <Table.Cell>{data.healthInsurance}</Table.Cell>
                            <Table.Cell>{data.employmentInsurance}</Table.Cell>
                            <Table.Cell>{data.incomeTax}</Table.Cell>
                            <Table.Cell>{data.localIncomeTax}</Table.Cell>
                        </Table.Row>
                    )
                }
                )}
            </Table.Body>
        </Table >
    );
}
