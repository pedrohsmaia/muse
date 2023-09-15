import { ChatInputCommandInteraction } from 'discord.js';
import Command from '.';
import { SlashCommandBuilder } from '@discordjs/builders';
export default class implements Command {
  public readonly slashCommand = new SlashCommandBuilder()
    .setName('anna')
    .setDescription('fala algo muito legal sobre a Anna');


  public async execute(interaction: ChatInputCommandInteraction): Promise<void> {

    await interaction.reply('A Anna é a mulher mais linda do mundo! e a mais gostosa também! e a mais inteligente! e a mais tudo! <3');
  }
}
