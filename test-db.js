const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({
    datasources: {
        db: {
            url: 'postgresql://ticketuser:ticketpassword@localhost:5432/dtv4?sslmode=disable'
        }
    }
});
async function main() {
    console.log('Connecting...');
    await prisma.$connect();
    console.log('Connected successfully!');
    await prisma.$disconnect();
}
main().catch(err => {
    console.error('Connection failed:', err);
    process.exit(1);
});
