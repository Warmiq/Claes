// Require the necessary discord.js classes "klient" är alltså botten pretty much
const { Client, Intents, Message, Channel, TextChannel, MessageAttachment } = require('discord.js');
const { token } = require('./config.json');
const Canvas = require('canvas');
var filGöraren = require('fs');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES] });
const { createAudioPlayer, createAudioResource, joinVoiceChannel, AudioPlayer } = require('@discordjs/voice');

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Claes is online');

	//const pinns = '873614838692192286'
	//const kanalen = client.channels.cache.get(pinns);
	//kanalen.guild.members.fetch().then(gubbar => {
	//	let gobbar = gubbar.map(gubbe => ({
	//		gobbe: gubbe.user.username,
	//		diminutiver: gubbe.displayName,
	//		gäjmertagg: gubbe.user.discriminator,
	//		ackolader: gubbe.roles.cache.filter(ackolad => ackolad.name != '@everyone').map(ackolad => ({ designation: ackolad.name })),
	//	}));
	//	console.log(gobbar)
	//	//let gobbGänget = JSON.stringify(gobbar, null, "\t");
	//	//filGöraren.appendFile('BigGgobbar.json', gobbGänget, 'utf8', function (whoops) {
	//	//	if (whoops) throw whoops
	//	//	console.log('najs');
	//	//})
	//})
	//
	//
	//kanalen.messages.fetch({ limit: 100 }).then(messages => {
	//	let telegram = messages.map(meddelande => ({ //Deklarar en funktion som input till messages.map //Två paranteser säger att den här kommer direkt bli en grej jag vill
	//		litteratör: meddelande?.embeds[0]?.author?.name, //kommatecken avgränsar mellan två fält i det jag returnar
	//		dikt: meddelande?.embeds[0]?.description, //frågetecken gör att min funktion inte skiter på sig, jag använder dem eftersom jag inte får göra if satser
	//		hypertavellänk: meddelande?.embeds[0]?.image?.url,
	//		hyperhopplänk: meddelande?.embeds[0]?.fields[0]?.value?.match(/\(([^\)]+)/i)[1],
	//		hyperövrigbonuslänkar: meddelande?.embeds[0]?.fields?.slice(1)?.map(
	//			hyperfält => hyperfält?.value?.match(/\(([^\)]+)/i)[1]),
	//	}))
	//
	//	let rensad = telegram.filter(t => t.litteratör && t.hyperhopplänk)
	//	let JAAAAYSOOOOOon = JSON.stringify(rensad, null, "\t");
	//	//filGöraren.appendFile('Bigpinns.json', JAAAAYSOOOOOon, 'utf8', function (whoops) {
	//	//	if (whoops) throw whoops;
	//	//	console.log('najs');
	//	//}); DEN HÄR SKA AKTIVERAS SEN NÄR BOTTEN ÄR REDO FÖR RIKTIG BUSINESS
	//
	//	console.log(rensad)
	//
	//
	//
	//
	//
	//
	//})
});

var svampbob = function (harang) {
	var chars = harang.toLowerCase().split("");
	for (var i = 0; i < chars.length; i += 2) {
		chars[i] = chars[i].toUpperCase();
	}
	return chars.join("");
};

const prefix = 'hej'

client.on("messageCreate", async (meddelande) => {  //=> är en funktion
	//if (meddelande.channelId == pinns && meddelande.author.id == "873614862578769940" && meddelande.embeds[0]) { den här är sparad eftersom den har NQN botten
	console.log(meddelande.content.length)
	var aleaIactaEst = Math.floor(Math.random() * 50)
	console.log('Tärningen är kastad! ' + aleaIactaEst)
	if (aleaIactaEst == 18 && meddelande.author.id !== "745345949295181886") {

		let jamesCameron = 'https://cdn.discordapp.com/avatars/' + meddelande.author.id + '/' + meddelande.author.avatar
		async function webbKrok() {
			try {
				const channel = client.channels.cache.get(meddelande.channel.id);
				var webhook = await channel.createWebhook('"' + svampbob(meddelande.member.displayName) + '"', {
					avatar: jamesCameron,
				})

				await webhook.send({
					content: '**' + svampbob(meddelande.content) + '**',
					username: '"' + svampbob(meddelande.member.displayName) + '"',
					avatarURL: jamesCameron,
				});
				webhook.delete()
			} catch (whoops) {
				console.error('Här sket det sig: ', whoops);
			}
		}
		webbKrok();

	};
	let dravel = meddelande.content.toLowerCase()
	if (/.+\?([\n\r\t !]|$)/ig.test(dravel) && aleaIactaEst < 10 && meddelande.author.id !== "745345949295181886") meddelande.reply('Bra fråga, återkommer :)');
	if (dravel === 'hey guys') { meddelande.reply('https://www.youtube.com/watch?v=fqoM2BJ6_-8') }
	else if (dravel.endsWith('maakep happen')) {
		if (meddelande.member.voice.channel !== null) {
			let channel = meddelande.member.voice.channel
			const player = createAudioPlayer();
			const resource = createAudioResource('/home/hugo/Claes/bow bow.wav');
			const connection = joinVoiceChannel({
				channelId: channel.id,
				guildId: channel.guild.id,
				adapterCreator: channel.guild.voiceAdapterCreator,
			});
			player.play(resource)
			const subscription = connection.subscribe(player)
			if (subscription) {
				setTimeout(() => subscription.unsubscribe(), 4_000);
				setTimeout(() => connection.destroy(), 4_000);
				setTimeout(() => player.stop(), 4_000)
			}
		}
		const minusMaakep = dravel.slice(0, -14) // tar meddelandet som vi fått med prefixet, tar bort så många bokstäver som prefixet är
		var behållare = ['', '', '', '', '']
		var spelareLista = minusMaakep.split(" ", 5)
		for (var i of spelareLista) {
			behållare.push(i);
			behållare.shift()
		}
		console.log(behållare)
		console.log(spelareLista)
		//// Loop through the array and switch places
		//with a random position for every item in array
		function shuffleArray(arr) {
			const array = [...arr];
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
			}
			return array;
		}
		const omSkuffadSamling = shuffleArray(behållare)
		console.log(omSkuffadSamling)
		const prioriteringar = omSkuffadSamling.join(" > ") 
		const svampPrio = svampbob(prioriteringar)
		//meddelande.reply(svampbob(prioriteringar))

		const canvas = Canvas.createCanvas(700, 250);
		const context = canvas.getContext('2d');

		const background = await Canvas.loadImage('/home/hugo/Claes/maakep.png');
		context.drawImage(background, 0, 0, canvas.width, canvas.height);

		context.font = "40pt Calibri";
		context.fillStyle = '#ffffff';
		context.fillText(`${svampPrio}`, 0, 0); //, canvas.width / 2.5, canvas.height / 1.8);

		const attachment = new MessageAttachment(canvas.toBuffer(), 'maakepHappen.png');

		meddelande.reply({ files: [attachment] });

	}
	if (!dravel.startsWith(prefix)) return; //det här fattar tom jag :) 
	const commandBody = dravel.slice(prefix.length) // tar meddelandet som vi fått med prefixet, tar bort så många bokstäver som prefixet är
	const args = commandBody.split(' '); //skapar "en array of sub-strings" för allt som är mellanslag. Denna heter "args
	const command = args.shift().toLowerCase() //gör allt som finns i args till lowercase, och kallar allt för command   



	if (command === "claes") { //blabla om command är hej bla bla

		meddelande.reply(`PEE IS STORED IN BALLS`);
	}

});

// Login to Discord with your client's token this should always go last I guess? 
client.login(token);
