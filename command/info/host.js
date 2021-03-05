const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "privsay",
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
            .addField("I cannot breath", message.author, true)
            .addField("I cannot breath", stripIndents`**I cannot breath**`, false)
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor("#36393F")

            

        const channel = message.guild.channels.find(channel => channel.name === "chad");

        channel.send(embed);
    }
}
