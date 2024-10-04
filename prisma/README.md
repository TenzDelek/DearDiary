# Prisma and Supabase Setup

Prisma and Supabase setup can sometimes lead to errors and port issues, so let’s keep it simple. Follow these steps:

## 1. Install Prisma
```bash
npm i -D prisma
npm i @prisma/client
npx prisma init
```

## 2. Environment Variables
You need the following two environment variables:

```env
NEXT_PUBLIC_SUPABASE_ANON_KEY=fdgdgd
DATABASE_URL=""
```

- **Anon Key**: The Anon key is in the home when you first create the project.

- **Database URL**: 
  1. Go to **Left Panel > Project Settings > Database**.
  2. Copy the connection string.
  3. Replace the password with your set password.
  4. Change the default port (6543) to **5432**.

Your `DATABASE_URL` should look like this:

```
.pooler.supabase.com:5432/postgres
```

## 3. Generate Prisma Client
Run the following commands to generate the Prisma client, migrate the database, and open Prisma Studio:

```bash
npx prisma generate
npx prisma db push
npx prisma studio
```

## 4. Prisma Schema

Here’s an example of your `prisma.schema` file:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id    String @id @default(uuid())
  name  String
}
```

## 5. Setup Database Connection in `lib/db.ts`

```typescript
import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton> | undefined;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;
```

## 6. Update `package.json`

Make sure to add the following script to your `package.json`:

```json
"scripts": {
  "postinstall": "prisma generate"
}
```