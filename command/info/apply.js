const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "apply",
    category: "info",
    description: "Host something",
    run: async (client, message, args) => {
        message.delete(10000);
        const splitted = args
            .join(" ")
            .split(" | ");

        const embed = new RichEmbed()
            .setURL("https://teambh.ca/") 
            .setTitle(splitted[0])
            .addField("When:", splitted[1], true)
            .addField("Applied by:", message.author, true)
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor("#36393F")

            

        const channel = message.guild.channels.find(channel => channel.name === "applications");

        channel.send(embed);
    }
}
