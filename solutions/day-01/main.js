import {countries} from "./countries.js"

countries.splice(countries.indexOf('Ethiopia'),1)

console.log(countries)

countries.indexOf('Ethiopia') === -1
?countries.push('Ethiopia')
:console.log("ETHIOPIA")

console.log(countries)
