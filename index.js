

module.exports = {
    reloadConfig: function(){

    var config = require("./config.json");
  
  },
  
  saveConfig: function(){
    newConfig = {
      "prefix": config.prefix,
      "blacklist": config.blacklist,
      "bans": config.bans
    }
    fs.writeFile("./config.json", JSON.stringify(newConfig), (err) => {
      if (err) console.error(err)
    });
  }
};

const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();

var config = require("./config.json");
var token = process.argv[2];



if(token==undefined){
    console.error("Please provide a valid Bot User Token")
} else {
    console.log("Valid token provided")
    client.login(token);
}



fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      let eventFunction = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      
      client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
  });

client.on("message", message => {
    if (message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let muteRole = message.guild.roles.find("name", "Muted")
    let modRole = message.guild.roles.find("name", "Mod")
    let msg = message.content.toLowerCase().split(" ")
    if (message.member.roles.has(modRole.id)) {
      try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, args, config);
    } catch (err) {
      console.error(err);
    };
  }

    else if (config.blacklist.some(word => ~msg.indexOf(word.toLowerCase()))) {
      message.member.addRole(muteRole);
      message.channel.send(message.member.displayName + " has been muted for using a blacklisted word");
      console.log(message.member.displayName + " has been muted for using blacklisted word")
    }
    else try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, args, config);
    } catch (err) {
      console.error(err);
    };
    
  });