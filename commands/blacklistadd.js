exports.run = (client, message, args, config) => {
    var index = require("../index")
    let modRole = message.guild.roles.find("name", "Mod")
    let args = message.content.split(" ").slice(1)
    if (!message.member.roles.has(modRole.id)){
      message.channel.send("Insufficient Permissions.")
    }
    else if (args[0] === undefined){
      message.channel.send("argument missing, use command like this: " + config.prefix + "blacklistadd [Word to add to blacklist]" )
    }
    else{
      config.blacklist.push(args[0])

      index.saveConfig;

      message.channel.send("Word added to blacklist")

    }
};