const remarkParse = require("remark-parse")
const unified = require("unified")

const parser = unified().use(remarkParse)

const goodAst = parser.parse(`~~this works~~`)
const badAst = parser.parse(`~~this doesn't ~~`)

/**
 * In this ast, you will find a type `delete`
 */
console.log("== THIS WORKS ==")
console.log(JSON.stringify(goodAst, null, 2))

/**
 * In this ast, you will not find a type `delete`.
 *
 * Furthermore, you will find the literal text `~~This doesn't ~~` including
 * the tokens in it.
 */
console.log("== THIS DOES NOT ==")
console.log(JSON.stringify(badAst, null, 2))
