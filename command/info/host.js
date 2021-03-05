const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "host",
    category: "info",
    description: "Host something",
    run: async (client, message, args) => {
        const splitted = args
            .join(" ")
            .split(" | ");

        const embed = new RichEmbed()
            .setURL("https://pornhub.com") 
            .setTitle(splitted[0])
            .addField("coon", splitted[1], true)
            .addField("nigger", message.author, true)
            .addField("faggot", stripIndents`**nigger coon**`, false)
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor("#36393F")

            

        const channel = message.guild.channels.find(channel => channel.name === "chad");

        channel.send(embed);
    }
}
