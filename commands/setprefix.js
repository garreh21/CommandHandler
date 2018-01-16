exports.run = (client, message, args, config) => {
    var index = require("../index")
    let modRole = message.guild.roles.find("name", "Mod")
    let args = message.content.split(" ").slice(1)
    if (!message.member.roles.has(modRole.id)){
      message.channel.send("Insufficient Permissions.")
    }
    else if (args[0] === undefined) {
      message.channel.send("Argument missing, use command like this: " + prefix + "setprefix [Symbol you want the prefix to be]")
    }
    else {
      config.prefix = args[0]
      index.saveConfig();
      message.channel.send("Prefix set to: " + config.prefix)
    }
  };
