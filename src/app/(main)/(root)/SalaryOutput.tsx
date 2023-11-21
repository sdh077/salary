/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dsQ2Y234pOX
 */

import { Button } from "@/components/flowbite";
import { round } from "../../util";
import { numToKorean } from 'num-to-korean'

export default function SalaryOutput({ actualSalary, taxTotal }) {
    return (
        <>
            <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-4">
                <h3 className="font-semibold text-center mb-2">공제액 합계</h3>
                <p className="text-right text-xl py-2 px-4 border-0 ring-1 ring-inset ring-gray-300 rounded-md bg-transparent">{round(taxTotal)}</p>
                <div className="inline-block text-left px-4 py-2">
                    {numToKorean(round(taxTotal))}
                </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-4">
                <h3 className="font-semibold text-center mb-2">실수령 월급</h3>
                <p className="text-right text-xl py-2 px-4 border-0 ring-1 ring-inset ring-gray-300 rounded-md bg-transparent">{round(actualSalary)}</p>
                <div className="inline-block text-left px-4 py-2">
                    {numToKorean(round(actualSalary))}
                </div>
            </div>
        </>
    )
}

