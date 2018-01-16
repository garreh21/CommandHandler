exports.run = (client, message, args, config) => {
    var index = require("../index")
    let modRole = message.guild.roles.find("name", "Mod")
    let muteRole = message.guild.roles.find("name", "Muted")
    let args = message.content.split(" ").slice(1)
    victim = message.mentions.member.first()
    if (!message.member.roles.has(modRole.id)){
      message.channel.send("Insufficient Permissions.")
    }
    else if (message.mentions.members.size < 1) {
      message.channel.send("Argument missing, use command like this: " + config.prefix + "unmute [mention person you wish to unmute]")
    }
    else {

      victim.removeRole(muteRole);
      console.log(victim + " has been unmuted")
      message.channel.send(victim + " has been unmuted by " + message.member.displayName)
    }
  };