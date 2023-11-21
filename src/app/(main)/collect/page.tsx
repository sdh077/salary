"use client"

import { useState } from "react";
import { numToKorean } from 'num-to-korean'
import income from '@/components/income.json'
import SalaryInput from "../(root)/SalaryInput";
import Sale from "../sale";
import { Button } from "@/components/flowbite";

type MoneyType = 'expense' | 'saving'

export default function Component() {
    const [salary, setSalary] = useState(60000000)
    const [family, setFamily] = useState(1)
    const [child, setChild] = useState(0)
    const [nonTaxableAmount, setNonTaxableAmount] = useState(0)
    const [type, setType] = useState<MoneyType>('expense')
    const [userMoney, setUserMoney] = useState(0);
    const [goalMoney, setGoalMoney] = useState(0);
    const sale = new Sale(salary, family, nonTaxableAmount)

    const output = goalMoney / (type === 'expense' ? sale.actualSalary - userMoney : userMoney)

    return (
        <div>
            <div className="grid grid-cols-1 gap-4">
                <div className="bg-white rounded dark:bg-gray-800">
                    <SalaryInput salary={salary}
                        setSalary={setSalary}
                        family={family} setFamily={setFamily}
                        child={child} setChild={setChild}
                        nonTaxableAmount={nonTaxableAmount}
                        setNonTaxableAmount={setNonTaxableAmount}
                    />
                    <div className=" dark:border-gray-700 mb-4">
                        <div>
                            <label className="mx-2">
                                <input
                                    type="radio"
                                    value="expense"
                                    checked={type === 'expense'}
                                    onChange={() => setType('expense')}
                                />
                                월 지출
                            </label>

                            <label className="mx-2">
                                <input
                                    type="radio"
                                    value="saving"
                                    checked={type === 'saving'}
                                    onChange={() => setType('saving')}
                                />
                                월 저축
                            </label>
                            <input
                                aria-label="Hourly Rate"
                                className="w-1/3 text-right py-2 px-4 border-0 ring-1 ring-inset ring-gray-300 rounded-md  bg-transparent"
                                placeholder="Enter your hourly rate"
                                type="number"
                                value={userMoney}
                                onChange={e => setUserMoney(Number(e.target.value))}
                            />
                            <div className="inline-block w-[120px] text-left px-4 py-2">
                                {numToKorean(userMoney)}
                            </div>
                        </div>
                    </div>
                    <div className=" dark:border-gray-700 mb-4 lg:flex">
                        <div className="inline-block w-[120px] text-left px-4 py-2">
                            목표 금액
                        </div>
                        <input
                            aria-label="Hourly Rate"
                            className="w-1/3 text-right py-2 px-4 border-0 ring-1 ring-inset ring-gray-300 rounded-md  bg-transparent"
                            placeholder="Enter your hourly rate"
                            type="number"
                            value={goalMoney}
                            onChange={e => setGoalMoney(Number(e.target.value))}
                        />
                        <div className="inline-block w-[120px] text-left px-4 py-2">
                            {numToKorean(goalMoney)}
                        </div>
                        <div className=" dark:border-gray-700 mb-4 flex">
                            <label className="mx-2">
                                <Button
                                    onClick={() => setGoalMoney(50000000)}
                                >
                                    5천만
                                </Button>
                            </label>
                            <label className="mx-2">
                                <Button
                                    onClick={() => setGoalMoney(100000000)}
                                >
                                    1억
                                </Button>
                            </label>
                            <label className="mx-2">
                                <Button
                                    onClick={() => setGoalMoney(200000000)}
                                >
                                    2억
                                </Button>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {Math.ceil(output)}개월
            </div>
        </div>
    )
}
