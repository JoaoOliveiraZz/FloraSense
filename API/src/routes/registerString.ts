import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../lib/prisma';
import { dateFormater } from '../../utils/dateFormater';

interface JsonData {
    temperature: number;
    humidity: number;
    brightness: number;
    hour_created: string;
    created_at: string;
}

export async function registerString(app : FastifyInstance){
    app.post('/string', async (request, reply) => {
        const paramsSchema = z.object({
            data: z.string()
        });

        const { data } = paramsSchema.parse(request.body);

        const dataJson : JsonData = JSON.parse(data)

        dataJson.created_at = dateFormater(new Date, 'date')
        dataJson.hour_created = dateFormater(new Date, 'hour')

        console.log(dataJson)

        await prisma.weather.create({
            data: dataJson
        }).then(() => {
            reply.code(200).send('success')
         }).catch((err) => {
            reply.code(500).send('something went wrong ' + err)
         })

    
    })
}