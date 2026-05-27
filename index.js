// Bot básico em discord.js usando dotenv
// Instale:
// npm install discord.js dotenv

import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";

// Carrega o arquivo .env
dotenv.config();

// Pega o token da variável de ambiente
const TOKEN = process.env.TOKEN;

// Cria o cliente do bot
const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

// Evento de inicialização
client.once("ready", () => {
    console.log(`Logado como ${client.user.tag}`);
});

// Comando simples
client.on("messageCreate", async (message) => {
    // Ignora bots
    if (message.author.bot) return;

    // Prefixo
    const prefix = "!";

    // Comando ping
    if (message.content === `${prefix}ping`) {
        await message.reply("Pong! 🏓");
    }
});

// Liga o bot
client.login(TOKEN);
