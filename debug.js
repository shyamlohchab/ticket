process.on('unhandledRejection', (reason, promise) => {
    console.error('DEBUG: Unhandled Rejection at:', promise, 'reason:', reason);
});
process.on('uncaughtException', (err, origin) => {
    console.error('DEBUG: Uncaught Exception:', err.stack || err, 'origin:', origin);
});
console.log('DEBUG: Starting bot wrapper...');
require('./src/index.js');
