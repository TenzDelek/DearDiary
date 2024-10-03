const { PrismaClient } = require('@prisma/client');

// create a new instance of prisma client
const prisma = new PrismaClient();

// connect to the database
prisma.$connect().then(() => {
    console.log('Connected to database');
}).catch((err) => {
    console.log(err);
});

// export the prisma client
module.exports = prisma;