module.exports = class leave {
    constructor() {
        this.name = "ayrıl",
        this.alias = [],
        this.permLevel = 3  
        this.usage = "%ayrıl"
    }

    async run(client, message, args) {
        try{
            message.channel.send("Görüşürüz ;(")
            message.guild.leave();
        }catch(e) {
            throw e;
        }
    }
}