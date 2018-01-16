exports.run = (client, message, args, config) => {
    var index = require("../index")
    message.author.send("This is a list of all moderator commands that are curretly usable:")
    message.author.send(config.prefix + "modhelp (Shows this prompt)")
    message.author.send(config.prefix + "setprefix [Symbol you wish to use] (Sets the prefix to use)")
    message.author.send(config.prefix + "reloadconfig (reloads config files)")
    message.author.send(config.prefix + "blacklistadd [word you wish to add to blacklist] (adds a word to blacklist)")
    message.author.send(config.prefix + "mute [mention person you wish to mute] (mutes said person)")
    message.author.send(config.prefix + "unmute [mention person you wish to unmute] (unmutes said person)")
    message.author.send(config.prefix + "kick [mention person you wish to kick] (kicks said person)")
    message.author.send(config.prefix + "ban [mention person you wish to ban] (bans said person)")
    message.author.send(config.prefix + "reload [name of command you want to reload] (reloads said command)")
    message.author.send("That is all the moderator commands use '" + config.prefix + "help' for the non moderator commands")
  };