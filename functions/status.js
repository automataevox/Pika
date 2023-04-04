const { ActivityType } = require("discord.js");
const cron = require("cron");

var timeStatus = "online";
module.exports = {
    async execute(client){
        var changeStatusOnline =new cron.CronJob('* 30 8 * * *', () => {
            timeStatus = "online";
        });

        var changeStatusIdle = new cron.CronJob('* 00 21 * * *', () => {
            timeStatus = "idle";
        });
        var changeStatusDnd = new cron.CronJob('* 00 23 * * *', () => {
            timeStatus = "dnd";
        });
        const statusArray= [
            {
                type: ActivityType.Playing,
                content: "FL Studio 21",
            },
            {
                type: ActivityType.Listening,
                content: "DXVIL",
            },
            {
                type: ActivityType.Watching,
                content: "Sword Art Online",
            }
        ];
        async function pickPresence(){
            
            const option = Math.floor(Math.random()*statusArray.length);
            changeStatusOnline.start();
            changeStatusIdle.start();
            changeStatusDnd.start();
            if(timeStatus === "idle"){
                try{
                    client.user.setPresence({
                        activities: [
                            {
                                name: "Chillin\'",
                                type: ActivityType.Playing
    
                            }
                        ],
                        status: timeStatus
                        
                    });
                    //console.log(timeStatus);
                } catch(error){
                    console.error(error);
                }
            } else if (timeStatus === "dnd"){
                try{
                    client.user.setPresence({
                        activities: [
                            {
                                name: "Sleeping 💤",
                                type: ActivityType.Playing
    
                            }
                        ],
                        status: timeStatus
                        
                    });
                    //console.log(timeStatus);
                } catch(error){
                    console.error(error);
                }
            }else {
                try{
                    client.user.setPresence({
                        activities: [
                            {
                                name: statusArray[option].content,
                                type: statusArray[option].type
    
                            }
                        ],
                        status: timeStatus
                        
                    });
                    //console.log(timeStatus);
                } catch(error){
                    console.error(error);
                }
            }
        }
        setInterval(pickPresence, 8 * 1000);
    }
    
};