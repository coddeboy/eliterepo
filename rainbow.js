const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});

client.on("ready", () => {

  console.log(`Logged in as ${client.user.username}!`);

  client.user.setActivity('eagle premium', {type: "streaming"})

console.log(`${client.user.tag} running on ${client.guilds.size} guilds with ${client.users.size} users.`);


});

 
client.on("message", async (message) => {
	
	let prefix = "^^";
	
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	
    const input = message.content.slice(prefix.length).split(' ');

    const cmd = input.shift();

  
if(cmd === `ping`) {

message.channel.send(`Hoold on!`).then(m => {


    m.edit(`🏓 Wew, made it over the ~waves~ ! **Pong!** (Roundtrip took: ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Heartbeat: ` + Math.round(client.ping) + `ms.)`);


    });

 }

if(cmd === `newcommand`) {

message.channel.send(`My new command`)

}

if(cmd === `anothercommand`) {

message.channel.send(`My another command`)

}

if(cmd === `yobot`) {
	
	message.channel.send(`hello sir!`)
	
}

if(cmd === `supbot`) {
	
	message.channel.send(`fine what about you`)
	
}


if(cmd === `rgb89354926`) {

let help = message.content.split(' ').slice(1)

if(!help[0] || help[0 === 'help']) return message.channel.send('**Usage: #rgb <code> <role>**')
	
let colors = ['RANDOM'];

let role = message.mentions.roles.first();

if(!role) return message.channel.send(`You didn't metion a valid role or that role does not exist.`)

setInterval(function() {

role.setColor(colors[Math.floor(Math.random() * colors.length)])
 
  }, 100)

}



if (cmd ===`rgb`) {
	
	message.channel.send('**you dont have login key or its expired**')
	
}

if(cmd ===`rgb99846362`) {

let help = message.content.split(' ').slice(1)

if(!help[0] || help[0 === 'help']) return message.channel.send('**Usage: #rgb <code> <role>**')
	
let colors = ['RANDOM'];

let role = message.mentions.roles.first();

if(!role) return message.channel.send(`You didn't metion a valid role or that role does not exist.`)

setInterval(function() {

role.setColor(colors[Math.floor(Math.random() * colors.length)])
 
  }, 100)

}




});

 

client.login("NTQ4ODg3OTUzODU5MDE4Nzgy.D1fyAw.X741ZuDpK-0C79fpMNS3c360C6k");
 
 
