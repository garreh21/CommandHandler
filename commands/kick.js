exports.run = (client, message, args, config) => {
    var index = require("../index")
    let modRole = message.guild.roles.find("name", "Mod")
    if (!message.member.roles.has(modRole.id)){
      message.channel.send("Insufficient Permissions.")
    }
    else if (message.mentions.members.size < 1) {
      message.channel.send("Argument missing, use command like this: " + config.prefix + "kick [mention person you wish to kick]")
    }
    else {
      victim = message.mentions.member.first()
      victim.kick()
      console.log(victim + " has been kick")
      message.channel.send(victim + " has been kicked by " + message.member.displayName)
    }

};