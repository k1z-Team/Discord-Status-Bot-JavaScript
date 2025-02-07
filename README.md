---
# **🎮 Discord Status Bot** 🚀

A simple **Discord bot** that allows you to set a custom **Playing**, **Watching**, **Listening**, or **Streaming** status. Easy to configure and get started! 💬✨

---

### **✨ Features:**
- ✅ Set **custom activity** (Playing, Watching, Listening, Streaming)  
- ✅ **Easy-to-edit** settings for your bot’s status  
- ✅ Supports **streaming URLs** for Twitch/YouTube 🎥  
- ✅ **Privacy-first** with token stored in `.env` 🔒  
- ✅ **Lightweight** and **beginner-friendly** 💡  

---

### **🔧 How to Use:**

1. **Install required packages**:
   ```bash
   npm install discord.js dotenv
   ```

2. **Setup**:
   - Copy **`.env.example`** to **`.env`**.
   - Replace the `"YOUR_BOT_TOKEN_HERE"` in the `.env` file with your **Discord bot token** 🔑.

3. **Edit your bot's activity**:
   - Open `main.js` and modify the `ACTIVITY_TYPE` (e.g., "playing", "watching", "listening", "streaming") and `ACTIVITY_TEXT` to your desired status. ✨

4. **Run the bot**:
   ```bash
   node main.js
   ```

---

### **🛡️ License:**
This project is **open-source** under the **MIT License**. You can **use**, **modify**, and **distribute** it, but you **must provide credit** and **cannot claim it as your own**.

🔗 **[View the Code](https://github.com/K1z-Team/discord-status-bot-JavaScript)**

---

### **📁 Project Structure:**

```
/discord-status-bot
│
├── main.js                 # Main bot script
├── .env.example           # Example environment file (for your bot token)
├── .gitignore             # Ignores .env file from being pushed to GitHub
└── README.md              # This file
```

---

Feel free to fork and modify it to fit your needs! 🎉 Enjoy coding and let your bot shine! ✨🚀

---
