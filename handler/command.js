const { readdirSync } = require("fs");

const ascii = require("ascii-table"); 

let table = new ascii("Commands");

module.exports = (client) => {
    readdirSync("./command/").forEach(dir => {
        const commands = readdirSync(`./command/${dir}/`).filter(file => file.endsWith(".js"));

        for (let file of commands) {
            let pull = require(`../command/${dir}/${file}`);

            if (pull.name) {
                client.commands.set(pull.name, pull);
                table.addRow(file, '✅');
            } else {
                table.addRow(file, `❌ -> missing something??`)
                continue; 
            }
        if (pull.alliases && Array.isArray(pull))
            pull.alliases.forEach(alias => client.alliases.set(alias, pull.name));
        
        
        }
    });
}