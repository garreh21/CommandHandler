exports.run = (client, message, args, config) => {
    var index = require("../index")
    message.author.send("This is a list of all commands that are curretly usable:")
    message.author.send(config.prefix + "help (Shows this prompt)")
    message.author.send(config.prefix + "ip (tells you what the servers ip is)")
    message.author.send(config.prefix + "version (tells you what version the server)")
    message.author.send("That is all the non moderator commands use '" + config.prefix + "modhelp' for the moderator commands")
};