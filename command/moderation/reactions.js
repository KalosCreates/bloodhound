const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {

    name: "reactions",
    category: "moderation",
    description: "embed reactions",
    usage: "<mention, id>",

    run: async (client, message, args) => {
                if (message.deletable) message.delete();
                
                let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);

            
        if (rMember.hasPermission("BAN_MEMBERS") || rMember.user.bot)
            return message.channel.send("You cannot use this command").then(m => m.delete(5000));

        if (!args[1])
            return message.channel.send("Provide a message to react to!").then(m => m.delete(5000));
            
        const channel = message.guild.channels.find(c => c.name === "📢self-assign")

        if (!channel)
            return message.channel.send("Couldn't find a `📢self-assign` channel").then(m => m.delete(5000));
            const embed = new RichEmbed()
            .setColor("#ff0000")
            .setTimestamp()
            .setAuthor(message.guild.name, message.guild.iconURL)
            .setDescription(stripIndents`**> Member:** ${rMember} (${rMember.user.id})
            
            **> Description** ${args.slice(1).join(" ")}`);
            return channel.send(embed);
    }
}