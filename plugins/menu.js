const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: '',
};
for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu = `

*HELLO ${pushname}*✨
╰──────────●●►
╭──────────●●►
*│📜 MAIN COMMANDS*
│   ───────
   ${menu.main}
╰───────────●●►
╭───────────●●►
*│⬇️ DOWNLOAD COMMANDS*
│   ───────
   ${menu.download}
╰───────────●●►
╭───────────●●►
*│🔱 GROUP COMMANDS*
│   ───────
   ${menu.group}
╰───────────●●►
╭───────────●●►
*│👨‍💻 OWNER COMMANDS*
│   ───────
   ${menu.owner}
╰───────────●●►
╭───────────●●►
*│🔗 CONVERT COMMANDS*
│   ───────
  ${menu.convert}
╰───────────●●►
╭───────────●●►
*│🔍SEARCH COMMANDS*
│   ───────
  ${menu.search}
╰───────────●●►

CODE BY CHAMINDU -QUEEN_THARU_V➄
`
await conn.sendMessage(from,{image:{url:"https://i.ibb.co/YhYStZ8/IMG-20240923-WA0006.jpg"},caption:madeMenu},{quoted:mek})



}catch(e){
console.log(e)
reply(`${e}`)
}
})
