const qrcode = require("qrcode-terminal");
const fs = require("fs");
const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    args: ["--no-sandbox"],
  },
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

async function createUserRepository(user) {
  const usersRepository = await loadUsersRepository();
  const data = [...usersRepository, user];
  fs.writeFileSync("./db.json", JSON.stringify(data));
  return user.id;
}

async function loadUsersRepository() {
  const data = await fs.readFileSync("./db.json", "utf8");
  const users = JSON.parse(data);
  return users;
}

async function loadUsers() {
  const data = await fs.readFileSync("./db.json", "utf8");
  return data;
}

client.on("message", async (msg) => {
  if (msg.body == "!entra") {
    const Users = await loadUsersRepository();
    const contact = await msg.getContact();
    const chat = await msg.getChat();
    const user = contact.id.user;
    console.log(user);
    const newUser = {
      id: contact.id.user,
    };

    const savedUser = await createUserRepository(newUser);
    // fs.writeFileSync("./db.json", [
    //   ...users,
    //   JSON.parse(JSON.stringify(contact.id.user)),
    // ]);
    await chat.sendMessage(`Bem vindo ${savedUser}`);
  }

  if (msg.body == "!users") {
    const chat = await msg.getChat();
    const Users = await loadUsers();
    await chat.sendMessage(`${Users}`);
  }
});

client.initialize();
