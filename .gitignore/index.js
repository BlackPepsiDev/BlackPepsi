const Discord = require("discord.js");
const fs = require("fs");
const util = require("util");
var schedule = require('node-schedule');
const self = new Discord.Client();
var mentions = [];
var imgs = [];
var urls = [];
var msgs = [];
 
self.login("NDE2OTM1MDIzODIwNjY4OTM5.D1BriQ.D5wsmSWXJ8jt7GGLlaE8rl8GVZw");
self.on("ready", () => {
    var interval = setInterval (function () {
        self.channels.get("542828013599850516").send("je suis une star")
        console.log("Message bien envoyé")
      }, 1 * 10000); 
    });
 
