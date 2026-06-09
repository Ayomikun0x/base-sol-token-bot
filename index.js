import 'dotenv/config';
import { startMonitor } from './src/monitor.js';

console.log('🚀 Base + Sol Token Bot starting...');
console.log('🔑 Token check:', process.env.TELEGRAM_BOT_TOKEN ? 'FOUND' : 'MISSING');
console.log('💬 Chat ID check:', process.env.TELEGRAM_CHAT_ID ? 'FOUND' : 'MISSING');

startMonitor();
