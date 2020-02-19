// we can name imports default exports whaterver we like
import person from './person.js'
import prs from './person.js'

// with named exports we must destructure it with the name it called...
import { baseData } from './utility.js'
import { clean } from './utility.js'
// .. or to name it ..
import { baseData as base } from './utility.js'
// .. or to import everything to a * and use an alias
import * as everything from './utility.js'