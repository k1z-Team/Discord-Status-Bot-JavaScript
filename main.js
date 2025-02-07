// Import the 'discord.js' library and 'dotenv' to load the .env file
require('dotenv').config(); // Load environment variables from .env

const Discord = require('discord.js');
const client = new Discord.Client();

// 🔹 SET ACTIVITY SETTINGS HERE:
const ACTIVITY_TYPE = "PLAYING";  // Options: "PLAYING", "WATCHING", "LISTENING", "STREAMING"
const ACTIVITY_TEXT = "Change me";  // Custom text for the status
const STREAM_URL = "https://twitch.tv/example";  // Only needed if ACTIVITY_TYPE is "STREAMING"

// 🔹 Get the token from the .env file
const BOT_TOKEN = process.env.BOT_TOKEN;  // The token is stored in the .env file

// Event listener for when the bot is ready
client.once('ready', () => {
    console.log(`✅ Logged in as ${client.user.tag}`);

    // Set the bot's activity
    let activity;
    if (ACTIVITY_TYPE === "STREAMING") {
        activity = new Discord.Activity({
            type: ACTIVITY_TYPE,
            name: ACTIVITY_TEXT,
            url: STREAM_URL,
        });
    } else {
        activity = new Discord.Activity({
            type: ACTIVITY_TYPE,
            name: ACTIVITY_TEXT,
        });
    }

    client.user.setActivity(activity)
        .then(() => console.log(`✅ Status set to: ${ACTIVITY_TYPE} ${ACTIVITY_TEXT}`))
        .catch(console.error);
});

// Log in to Discord using the bot's token
client.login(BOT_TOKEN);
