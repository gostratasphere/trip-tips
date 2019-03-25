// Testing the moment.js library
// Ignore this file except as an experiment

var moment = require("moment");
moment().format();

var eventTime = moment("2019-03-27T15:29:00-05:00");
console.log(eventTime);
var reminderTime = moment(eventTime).subtract(1, "days");
console.log(reminderTime);
// 2019-03-27T15:29:00-05:00
