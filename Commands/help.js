const { RichEmbed } = require("discord.js");
module.exports = class {
    constructor() {
        this.name = "yardım",
        this.alias = [""],
        this.usage = "%yardım"
    }

    async run(client, message, args) {
        try{
            if(!args[1]) {
              
            let helpEmbed = new RichEmbed()
            .setTitle("__**Oluştur**__")
            .setDescription(`
            
            __**Güvenlik**__
            
            **%yedekleme**      Sunucunuzun yedeğini oluşturur.
            
            __**Diğerleri.**__
          
            **%yardım**         Bu mesajı gösterir
            **%bilgi**          Bilgilendirme mesajını iletir. 
            **%davet**          Bot davet linkini iletir.
            **%ayrıl**          Bot Sunucudan Çıkar.
            **%ping**           Ping ölçer.
         
            
            `)
             .setFooter(`Kullanım \`**%yardım [komut]\` komutu böyle kullan..
            Kullanım \`**%yardım [kategori]\` katagoriyi böyle kullan.`)
            .setColor("#5DBCD2")
            message.channel.send(helpEmbed)
              return;
            }

            if(args[1] === "yedekleme") {
                const embed = new RichEmbed()
                    .setTitle(`**%backup**

Oluşturur ve yeniden yükler.

__**Komutlar**__
`)
                    .setDescription(`
                b!yedekleme create        Oluştur , geri yükle
                b!yedekleme delete        Geri yükle siler
                b!yedekleme info          Geri yükleme hakkında bilgi verir.
                b!yedekleme list          Geri yükleme listesi
                b!yedekleme load          Yüklere bakar.
                b!yedekleme purge         Geri yüklemelerin hepsini silrr.`)
                    .addBlankField()
                    .setFooter(`Kullanım \`b!help [command]\` Daha Çok Bilgi Alabilirsin
\`b!help [category]\` Kullanarak Katagori Hakkında Daha Çok Bilgi Edin`)
                    .setColor("#5DBCD2")
                message.channel.send(embed)
            }

            if(args[1] === "help") {
                let showsThisMessageEmbed = new RichEmbed()
                    .setTitle("**b!help [command]**")
                    .setDescription("Bu Mesajı Gör")
                    .addBlankField()
                    .setFooter(`Kullanım \`b!help [command]\` Daha Çok Bilgi Alabilirsin
\`b!help [category]\` Kullanarak Katagori Hakkında Daha Çok Bilgi Edin`)
                    .setColor("#5DBCD2")
                    message.channel.send(showsThisMessageEmbed);
            }

            if(args[1] === "info") {
                let infoEmbed = new RichEmbed()
                    .setTitle("**b!info**")
                    .setDescription("Baron Hakkında Bilgi Alırsınız")
                    .addBlankField()
                    .setFooter(`Kullanım \`b!help [command]\` Daha Çok Bilgi Alabilirsin
\`b!help [category]\` Kullanarak Katagori Hakkında Daha Çok Bilgi Edin`)
                    .setColor("#5DBCD2")
                    message.channel.send(infoEmbed);
            }

            if(args[1] === "invite") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**b!invite**")
                    .setDescription("İnvite Baron")
                    .addBlankField()
                    .setFooter(`Kullanım \`b!help [command]\` Daha Çok Bilgi Alabilirsin
\`b!help [category]\` Kullanarak Katagori Hakkında Daha Çok Bilgi Edin`)
                    .setColor("#5DBCD2")
                    message.channel.send(inviteEmbed)
            }

            if (args[1] === "leave") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**b!leave**")
                    .setDescription("Bot Sunucudan Cıkar")
                    .addBlankField()
                    .setFooter(`Kullanım \`b!help [command]\` Daha Çok Bilgi Alabilirsin
\`b!help [category]\` Kullanarak Katagori Hakkında Daha Çok Bilgi Edin`)
                    .setColor("#5DBCD2")
                message.channel.send(inviteEmbed)
            }

            if (args[1] === "ping") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**b!ping**")
                    .setDescription("Pong")
                    .addBlankField()
                    .setFooter(`Kullanım \`b!help [command]\` Daha Çok Bilgi Alabilirsin
\`b!help [category]\` Kullanarak Katagori Hakkında Daha Çok Bilgi Edin`)
                    .setColor("#5DBCD2")
                message.channel.send(inviteEmbed)
            }



        }catch(e) {
            throw e;
        }
    }
}
