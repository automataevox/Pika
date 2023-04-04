const commons = require('../../commons.json');
var interactions = 1;
var subreddit = "shitposting";

module.exports = {
    execute(client, r){        
        //var channel = client.channels.cache.get(commons.room.forum.shitpost);
        //var url = r.getSubreddit(subreddit).getHot({limit: interactions}).map(post => post.permalink).
        console.log("https://reddit.com"+r.getSubreddit(subreddit).getHot({limit: interactions}).map(post => post.permalink).then(console.log));
                
        
    }
}