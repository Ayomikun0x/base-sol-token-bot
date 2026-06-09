import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function sendAlert({ type, name, symbol, tokenAddress, liquidity, chain }) {
  const chainLabel = chain === 'SOL' ? '🟣 Solana' : '🔵 Base';
  const explorerUrl = chain === 'SOL'
    ? `https://solscan.io/token/${tokenAddress}`
    : `https://basescan.org/token/${tokenAddress}`;

  const msg = `
${chainLabel} | New Token Alert 🚨
Name: ${name} (${symbol})
Contract: ${tokenAddress}
Liquidity: $${liquidity}
Explorer: ${explorerUrl}
  `.trim();

  try {
    await bot.telegram.sendMessage(CHAT_ID, msg);
  } catch (e) {
    console.log('❌ Telegram error: ' + e.message);
  }
}

export async function sendHeartbeat() {
  try {
    await bot.telegram.sendMessage(CHAT_ID, '💓 Bot alive');
  } catch (e) {}
}
