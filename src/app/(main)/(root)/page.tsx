"use client"

import { useState } from "react";
import SalaryInput from "./SalaryInput";
import Tax from "./Tax";
import SalaryOutput from "./SalaryOutput";
import income from '@/components/income.json'
export default function Component() {
    const [salary, setSalary] = useState(60000000)
    const [family, setFamily] = useState(1)
    const [child, setChild] = useState(0)
    const [nonTaxableAmount, setNonTaxableAmount] = useState(0)
    const realSalary = salary / 12 - nonTaxableAmount

    const { nationalPension,
        healthInsurance,
        longTermCare,
        employmentInsurance } = calculator(realSalary)

    const { incomeTax, localIncomeTax } = incomeCal(realSalary, family - child)
    const Taxs = [
        {
            title: '국민연금',
            price: nationalPension,
        },
        {
            title: '건강보험',
            price: healthInsurance,
        },
        {
            title: '장기요양',
            price: longTermCare,
        },
        {
            title: '고용보험',
            price: employmentInsurance,
        },
        {
            title: '소득세',
            price: incomeTax,
        },
        {
            title: '지방소득세',
            price: localIncomeTax,
        }
    ]

    const taxTotal = Taxs.reduce((acc, item) => acc + item.price, 0);
    const actualSalary = realSalary - taxTotal + nonTaxableAmount

    return (
        <div>
            <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
                <div className="bg-white rounded dark:bg-gray-800">
                    <SalaryInput salary={salary}
                        setSalary={setSalary}
                        family={family} setFamily={setFamily}
                        child={child} setChild={setChild}
                        nonTaxableAmount={nonTaxableAmount}
                        setNonTaxableAmount={setNonTaxableAmount}
                    />
                    <SalaryOutput
                        taxTotal={taxTotal}
                        actualSalary={actualSalary}
                    />
                </div>
                <div className="">
                    <Tax Taxs={Taxs} />
                </div>
            </div>
        </div>
    )
}



const calculator = (realSalary: number) => {
    const nationalPension = realSalary * 0.045;
    const healthInsurance = realSalary * 0.03545;
    const longTermCare = healthInsurance * 0.1281;
    const employmentInsurance = realSalary * 0.009;
    return {
        nationalPension,
        healthInsurance,
        longTermCare,
        employmentInsurance,
    }
}

const incomeCal = (realSalary: number, family: number) => {
    if (!realSalary || (family < 1)) return { incomeTax: 0, localIncomeTax: 0 }
    const index = Math.floor(realSalary / 1000 / 20) * 20
    if (!income[index]) return { incomeTax: 0, localIncomeTax: 0 }
    const incomeTax = income[index][family];
    const localIncomeTax = incomeTax * 0.1;
    return { incomeTax, localIncomeTax }

}