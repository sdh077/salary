const income = require('./income.json')
const i = income.reduce((acc, item) => {
    acc[item.min] = item
    return acc
}, {})
console.log(JSON.stringify(i))
//node tt.js > raw.json