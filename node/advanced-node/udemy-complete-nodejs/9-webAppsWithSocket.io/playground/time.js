/** timesamps **/
// all of the numbers are timestamps. minus or plus.
// They are all referring to Jan 1st 1970 00:00:00 am (utc) this is 0.
// 1000 is 1 sec - Jan 1st 1970 00:00:01 am.
// that means that the timestamps numbers is the amount of ms the passed.

const date1 = new Date();
console.log(date1.getMonth()); // 9 => the date is 1/10/2018 because it starts from 0 index

const months = ['January' ,'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
console.log(months[date1.getMonth()]); // October

// we can use moment
const moment = require('moment');

/** change the format of the date **/
const date2 = moment();
// you can find all of the formats in 'momentsjs.com' under Display/Format
console.log(date2.format()); // 2018-10-01T18:34:57+03:00
console.log(date2.format('MMM')); // Oct
console.log(date2.format('MMM YYYY')); // Oct 2018
console.log(date2.format('Do')); // 1st
console.log(date2.format('MMM Do, YYYY')); // Oct 1st, 2018

/** do some manipulated on the date **/
date2.add(100, 'years');
console.log(date2.format('MMM Do, YYYY')); // Oct 1st, 2118

date2.add(100, 'years').subtract(9, 'months');
console.log(date2.format('MMM Do, YYYY')); // Jan 1st, 2218

/** change the format of the hour **/
const date3 = moment();
console.log(date3.format('h:mm a'));

