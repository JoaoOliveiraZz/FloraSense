import { FastifyInstance } from 'fastify'
import { prisma } from '../../lib/prisma'

export async function getWeather(app : FastifyInstance){
    app.get('/weather', async () => {
        const data = await prisma.weather.findMany();

        return data;
    })
}