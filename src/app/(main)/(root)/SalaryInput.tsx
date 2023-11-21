/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dsQ2Y234pOX
 */

import { Button } from "@/components/flowbite";
import { numToKorean } from 'num-to-korean'

export default function SalaryInput({ salary, setSalary, family, setFamily, child, setChild, nonTaxableAmount, setNonTaxableAmount }) {
    return (
        <>
            <div className=" dark:border-gray-700 mb-4 lg:flex">
                <div className="inline-block w-[120px] text-left px-4 py-2">
                    연봉:
                </div>
                <input
                    aria-label="Hourly Rate"
                    className="w-1/3 text-right py-2 px-4 border-0 ring-1 ring-inset ring-gray-300 rounded-md  bg-transparent"
                    placeholder="Enter your hourly rate"
                    type="number"
                    value={salary}
                    onChange={e => setSalary(e.target.value)}
                />
                <div className="inline-block w-[120px] text-left px-4 py-2">
                    {numToKorean(salary)}
                </div>
                <div className=" dark:border-gray-700 mb-4 flex">
                    <label className="mx-2">
                        <Button
                            onClick={() => setSalary(salary => Math.max(salary - 10000000, 0))}
                        >
                            -1천만
                        </Button>
                    </label>
                    <label className="mx-2">
                        <Button
                            onClick={() => setSalary(salary => salary + 10000000)}
                        >
                            +1천만
                        </Button>
                    </label>
                </div>
            </div>
            <div className=" dark:border-gray-700 mb-4">
                <div className="inline-block w-[120px] text-left px-4 py-2">
                    부양가족:
                </div>
                <input
                    aria-label="Hours Per Week"
                    className="w-1/3 text-right py-2 px-4 border-0 ring-1 ring-inset ring-gray-300 rounded-md bg-transparent"
                    placeholder="Enter hours worked per week"
                    type="number"
                    value={family}
                    onChange={e => setFamily(e.target.value)}
                />
            </div>
            <div className=" dark:border-gray-700 mb-4">
                <div className="inline-block w-[120px] text-left px-4 py-2">
                    20세 이하:
                </div>
                <input
                    aria-label="Hours Per Week"
                    className="w-1/3 text-right py-2 px-4 border-0 ring-1 ring-inset ring-gray-300 rounded-md bg-transparent"
                    placeholder="Enter hours worked per week"
                    type="number"
                    value={child}
                    onChange={e => setChild(e.target.value)}
                />
            </div>
            <div className=" dark:border-gray-700 mb-4">
                <div className="inline-block w-[120px] text-left px-4 py-2">
                    비과세액:
                </div>
                <input
                    aria-label="Weeks Per Year"
                    className="w-1/3 text-right py-2 px-4 border-0 ring-1 ring-inset ring-gray-300 rounded-md bg-transparent"
                    placeholder="Enter weeks worked per year"
                    type="number"
                    value={nonTaxableAmount}
                    onChange={e => setNonTaxableAmount(Number(e.target.value))}
                />
                <div className="inline-block w-[120px] text-left px-4 py-2">
                    {numToKorean(nonTaxableAmount)}
                </div>
            </div>
        </>
    )
}

