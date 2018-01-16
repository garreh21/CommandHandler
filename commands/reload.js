exports.run = (client, message, args, config) => {
  let modRole = message.guild.roles.find("name", "Mod")
  if (!message.member.roles.has(modRole.id)) {
    message.channel.send("Insufficient Permissions.")
  }
    if(!args || args.size < 1) return message.reply("Argument missing, use command like this: " + config.prefix + "reload [name of command you want to reload]");
    delete require.cache[require.resolve(`./${args[0]}.js`)];
    message.reply(`The command ${args[0]} has been reloaded`);
  };