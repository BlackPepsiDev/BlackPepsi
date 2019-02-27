const Discord = require("discord.js");
const self = new Discord.Client();
var mentions = [];
var imgs = [];
var urls = [];
var msgs = [];
 
self.login("NTQ2MzcwNzA3OTc4ODQ2Mjcy.D1Wxcg.nKBFae2vuJLw4pXkvd0jUyXiJ7g");
self.on("ready", () => {
    self.user.setPresence({game:{name:"Soumis Activé"}});
    var interval = setInterval (function () {
        self.channels.get("548899611763277824").send("Je suis le soumis de <@546370707978846272> et j'écris toutes les 1minutes pour qui gagne du level!")
      }, 1 * 60000); 
    });
 
