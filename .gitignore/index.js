const Discord = require("discord.js");
const fs = require("fs");
const util = require("util");
var schedule = require('node-schedule');
const self = new Discord.Client();
var mentions = [];
var imgs = [];
var urls = [];
var msgs = [];
 
self.on("ready", () => {
    var interval = setInterval (function () {
        self.channels.get("542828013599850516").send("je suis une star")
        console.log("Message bien envoyé")
      }, 1 * 10000); 
    });
 
