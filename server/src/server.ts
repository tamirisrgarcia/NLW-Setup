import Fastify from 'fastify';
import { PrismaClient } from '@prisma/client'
import cors from '@fastify/cors'

const app = Fastify(); //criar rotas
const prisma = new PrismaClient(); //banco de dados

app.register(cors); //configuração do CORS para permitir que o frontend consiga consumir os dados do backend. É possível configurar um único endereço para ter acesso a esse backend, por exemplo

app.get('/habits', async () => {
    const habits = await prisma.habit.findMany();
    return habits;
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('listening on port')
})