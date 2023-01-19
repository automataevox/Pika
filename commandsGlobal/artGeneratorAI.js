const { SlashCommandBuilder } = require('discord.js');
const aiArtHandler = require('../AI/art-operator.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('imagine')
		.setDescription('Creates AI generated art.')
		.addStringOption(option =>
            option.setName('prompt')
                .setDescription('prompt to generate image from')
                .setRequired(true)),
	async execute(event) {
		const prompt = event.options.getString('prompt');

		const reply = await aiArtHandler.execute(prompt);
		if(reply) event.reply("```[AI Handler] OK```"); else event.reply("```[AI Handler] KO```");
	},
};