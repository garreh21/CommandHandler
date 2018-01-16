exports.run = (client, message, args, config) => {
    var index = require("../index")
    let modRole = message.guild.roles.find("name", "Mod")
    if (!message.member.roles.has(modRole.id)){
      message.channel.send("Insufficient Permissions.")
    }
    else{
      index.reloadConfig();
      message.channel.send("Configs Reloaded successfully");
      message.channel.send("Current prefix is: " + config.prefix);
    }
  };
