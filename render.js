//const ipc = require('electron').ipcRenderer
//const asyncMsgBtn = document.getElementById('async-msg')

const R = require("r-script");

var message = R("message.R")
  .data()
  .callSync();

document.getElementById('my').innerHTML = message;