const { RichEmbed } = require("discord.js");
module.exports = class invite {
    constructor() {
        this.name = "davet",
        this.alias = [],
        this.usage = "%davet"
    }

    async run(client, message, args) {
        try{
            let info = client.emojis.get("655091815401127966") || "ℹ️"
            client.generateInvite(['ADMINISTRATOR']).then(link => {
            let inviteEmbed = new RichEmbed()
            .setTitle(`${info} Lokum - CSR Bilişim`)
            .setDescription(`Lokum'u sunucuna eklemek için,
[Destek Sunucumuz](https://discord.gg/U5VUTct)
[Lokum'u Sunucuna Ekle](https://discordapp.com/oauth2/authorize?client_id=676497255364296705&scope=bot&permissions=8) 
`)
            .setColor("#5DBCD2")
            message.channel.send(inviteEmbed);
            })
        }catch(e) {
            throw e;
        }
    }
}
