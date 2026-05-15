# Bot básico em discord.py usando getenv
# Instale:
# pip install discord.py python-dotenv

import os
import discord
from dotenv import load_dotenv
from discord.ext import commands

# Carrega o arquivo .env
load_dotenv()

# Pega o token da variável de ambiente
TOKEN = os.getenv("TOKEN")

# Intents
intents = discord.Intents.default()
bot = commands.Bot(command_prefix="!", intents=intents)

# Evento de inicialização
@bot.event
async def on_ready():
    print(f"Logado como {bot.user}")

# Comando simples
@bot.command()
async def ping(ctx):
    await ctx.send("Pong! 🏓")

# Liga o bot
bot.run(TOKEN)
