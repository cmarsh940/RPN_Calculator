/** 
 *    implement a command - line reverse polish notation(RPN) calculator using a language that you know well.
 *  Specifications
 *  1. The calculator should use standard input and standard output
 *  2. It should implement the four standard arithmetic operators
 *  3. The calculator should handle errors and recover gracefully
 *  4. The calculator should exit when it receives a q command or an end of input indicator(EOF / Ctrl + D)

 * @param {string} tokens
 * @return {number}
 */


let stack = []

function getResults(tokens) {

    const isValidInput = validateInput(tokens)

    if (!isValidInput) {
        return "Enter a valid operation."
    }

    const total = calculateTotal(parseToken(tokens))

    if (Number.isNaN(total)) {
        return "Not a valid operation."
    }

    return total
}

function parseToken(tokens) {
    return tokens
        .trim()
        .split(' ')
        .filter(value => value !== '')
}

function isOperator(token) {
    const operator = new Set(['+', '-', '*', '/'])
    return operator.has(token)
}

function rpnCalculate(token) {
        if (isOperator(token)) {
            const number1 = Number(stack.pop())
            const number2 = Number(stack.pop())
            stack.push(resolve(number2, token, number1))
        } else {
            stack.push(token)
        }

    return stack[0]
};

function resolve(number1, operator, number2) {
    if (operator === '+') {
        return number1 + number2
    }
    if (operator === '-') {
        return number1 - number2
    }
    if (operator === '*') {
        return number1 * number2
    }
    if (operator === '/') {
        return Math.trunc(number1 / number2)
    }
}


function calculateTotal(input) {
    input.forEach((value) => {
        rpnCalculate(value)
    })

    const result = stack[stack.length - 1]
    return result
}


function validateInput(input) {

    if (!input) {
        return false
    }

    const allowedInputs = parseToken(input)
        .every((value) => (value * 1) || isOperator(value))

    if (!allowedInputs) {
        return false
    }

    return true
}

module.exports = { getResults, isOperator }