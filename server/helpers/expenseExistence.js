const path = require('path')
const fs = require('fs')

function expenseExistence(expenseID) {
    const pathToExpenses = path.join(__dirname, '..', 'Dao', 'storage', 'expense')
    const allExpenses = fs.readdirSync(pathToExpenses)

    return allExpenses.includes(`${expenseID}.json`)
}

module.exports = expenseExistence