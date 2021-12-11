const mineflayer = require('mineflayer')
const sleep = ms => new Promise((resolve) => setTimeout(resolve, ms))
const inventoryViewer = require('mineflayer-web-inventory')
const client = new Discord.Client();
const bot = mineflayer.createBot({
  host: 'mstnw.net', // minecraft server ip
  username: 'midfire', // minecraft username
  version: '1.12.2'
})
var enderman = bot.nearestEntity(e => e.mobType === 'Enderman' && e.position.distanceTo(bot.entity.position) < 2)
var a



async function first() {
    await sleep (10000)
    bot.chat ('/l 2222')
    await sleep (6000)
    bot.chat ('/reg gaygaygay gaygaygay')
    await sleep (2000)
    bot.chat ('/l 2222')
    await sleep (5000)
    bot.activateItem()
    console.info ('Compass')
    await sleep (2000)
    bot.clickWindow (20,1,0)
    await sleep (3000)
    bot.chat ('/dm open anarchy')
    await sleep (1000)
    bot.clickWindow (25,1,0)
    console.log ('sad')
    farm(1)
    comspam ('/clear enderpearl')
}

async function farm(g){
  a = g
  while (a == 1){
    try{enderman = bot.nearestEntity(e => e.mobType === 'Enderman' && e.position.distanceTo(bot.entity.position) < 2)
      bot.attack(enderman)}
    catch (err){}
    await sleep (600)
  } }
async function comspam(com){
  while (com != ''){
    bot.chat (com)
    bot.chat (com)
    bot.chat ('/feed')
    await sleep (90000)
  }}
bot.on('windowOpen', async() => {
    console.warn ('Window')
})


bot.on('message',async msg => {
  mess = msg.toAnsi()
  msg = msg.toString()
  console.log(mess)
  try{
  if (msg.includes('DumkaMurka')) {
    if (msg.includes('gay')) bot.chat ('gay')
    if (msg.includes('tp')) bot.chat ('/tpa DumkaMurka')
    if (msg.includes('start')) farm(1)
    if (msg.includes('stop')) farm(0)
    if (msg.includes('money')) bot.chat ('/money')
    if (msg.includes ('spammer')) comspam (msg.split ('spammer ')[1])

  }}
  catch (err){}
  if (msg.includes ('Ваш баланс:')) bot.chat('/pay DumkaMurka ' +((msg.split (': ')[1]).split ('.')[0]))

})

bot.once('kicked', console.log)
bot.once('error', console.log)

first()
