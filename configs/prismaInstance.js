const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

prisma.$connect().then(() => {
    console.log('Connected to database');
}).catch((err) => {
    console.log(err);
});

module.exports = prisma;