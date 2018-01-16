exports.run = (client, message, args, config) => {
    var index = require("../index")
    let modRole = message.guild.roles.find("name", "Mod")
    victim = message.mentions.member.first()
    if (!message.member.roles.has(modRole.id)){
      message.channel.send("Insufficient Permissions.")
    }
    else if (message.mentions.members.size < 1) {
      message.channel.send("Argument missing, use command like this: " + config.prefix + "ban [mention person you wish to ban]")
    }
    else {
      victim.ban()
      console.log(victim + " has been banned")
      message.channel.send(victim + " has been banned by " + message.member.displayName)
      config.bans.push(victim)
    }
};