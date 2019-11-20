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
            .setURL("https://teambh.ca/") 
            .setTitle(splitted[0])
            .addField("Custom key", splitted[1], true)
            .addField("Host", message.author, true)
            .addField("Rules", stripIndents`**YOU MAY** fight if contested off spawn at your drop
            **DO NOT** fight or shoot at all until 2nd zone has fully closed
            **DO NOT** Stream snipe/use anonymous or streamer mode
            **DO NOT** grief players in any way until the 2nd zone has fully closed
            \n
            **GRIEFING** including but is not limited to:
            breaking or shooting structures/vehicles, stealing loot/vehicles or building on top of eachother`, false)
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor("#36393F")

            

        const channel = message.guild.channels.find(channel => channel.name === "custom-events");

        channel.send(embed);
    }
}
