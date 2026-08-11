import 'dotenv/config';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  const products = [
    {
      nome: 'Bone verde',
      descricao: 'A smooth and responsive wireless mouse.',
      preco: 29.99,
      tamanho: 'G',
      foto_um: 'foto_um',
      foto_dois: 'foto_dois'
    },
    {
      nome: 'Bone preto',
      descricao: 'A smooth and responsive wireless mouse.',
      preco: 25.99,
      tamanho: 'M',
      foto_um: 'foto_um',
      foto_dois: 'foto_dois'
    },
  ];

  for (const product of products) {
    await prisma.produto.create({
      data: product,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });