const { RichEmbed } = require("discord.js"); 

module.exports = class info {
    constructor() {
        this.name = "bilgi",
        this.alias = [],
        this.usage = "%bilgi"
    }

    async run(client, message, args) {
        try{
         let infoEmbed = new RichEmbed()
         .setTitle("**Lokum**")
         .setDescription("Sunucu Yedekleme")
         .addField("Davet", "[BANA TIKLA !](discordapp.com/oauth2/authorize?client_id=676497255364296705&scope=bot&permissions=1610083447)")
         .addField("Discord", "[BANA TIKLA !](https://discord.gg/U5VUTct)")
         .addField("Prefix", "%", true)
         .addField("Sunucular", client.guilds.size, true)
         .addField("Kullanıcılar:", client.users.size, true)
         .setFooter("CSR Bilişim gururla sunar, Imper'e de saygılarını iletir.")
            message.channel.send(infoEmbed)
        }catch(e) {
            throw e;
        }
    }
}