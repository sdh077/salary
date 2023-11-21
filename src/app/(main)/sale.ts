import { round } from '../util';
import income from '@/components/income.json'

interface SalaryData {
    salary: number // 연봉
    realSalary: number; // 실제 월급
    nationalPension: number; // 국민연금
    healthInsurance: number; // 건강보험
    longTermCare: number; // 장기요양보험
    employmentInsurance: number; // 고용보험
    taxTotal: number; // 과세총액
    actualSalary: number; // 실수령액
    incomeTax: number; // 소득세
    localIncomeTax: number; // 지방소득세
}

class Sale {
    salary: number;
    realSalary: number;
    nationalPension: number;
    healthInsurance: number;
    longTermCare: number;
    employmentInsurance: number;
    taxTotal: number;
    actualSalary: number;
    incomeTax: number;
    localIncomeTax: number;
    nonTaxableAmount: number;

    private static readonly HEALTH_INSURANCE_RATE = 0.03545;
    private static readonly LONG_TERM_CARE_RATE = 0.1281;
    private static readonly EMPLOYMENT_INSURANCE_RATE = 0.009;
    private static readonly NATIONAL_PENSION_RATE = 0.045;

    constructor(realSalary: number, family: number, nonTaxableAmount: number) {
        this.salary = realSalary
        this.realSalary = realSalary / 12 - nonTaxableAmount;
        this.nonTaxableAmount = nonTaxableAmount
        this.calculator(this.realSalary)
        const { incomeTax, localIncomeTax } = this.incomeCal(this.realSalary, family)
        this.incomeTax = incomeTax;
        this.localIncomeTax = localIncomeTax;
        this.taxTotal = this.nationalPension +
            this.healthInsurance +
            this.longTermCare +
            this.employmentInsurance +
            this.incomeTax
            + this.localIncomeTax
        this.actualSalary = this.realSalary - this.taxTotal + this.nonTaxableAmount
    }

    getData(): SalaryData {
        const propertiesToConvert: (keyof SalaryData)[] = [
            'salary',
            'realSalary',
            'nationalPension',
            'healthInsurance',
            'longTermCare',
            'employmentInsurance',
            'taxTotal',
            'actualSalary',
            'incomeTax',
            'localIncomeTax'
        ];

        return propertiesToConvert.reduce((result, property) => {
            result[property] = round(this[property]);
            return result;
        }, {} as SalaryData);
    }

    calculator = (realSalary: number) => {
        this.nationalPension = realSalary * Sale.NATIONAL_PENSION_RATE;
        this.healthInsurance = realSalary * Sale.HEALTH_INSURANCE_RATE;
        this.longTermCare = this.healthInsurance * Sale.LONG_TERM_CARE_RATE;
        this.employmentInsurance = realSalary * Sale.EMPLOYMENT_INSURANCE_RATE;
    }

    incomeCal = (realSalary: number, family: number) => {
        if (!realSalary || family < 1) return { incomeTax: 0, localIncomeTax: 0 };

        const index = Math.floor(realSalary / 1000 / 20) * 20;
        const incomeTax = income?.[index]?.[family] || 0;
        const localIncomeTax = incomeTax * 0.1;

        return { incomeTax, localIncomeTax };
    }
}

export default Sale