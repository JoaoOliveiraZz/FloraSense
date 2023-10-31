import { FastifyInstance } from "fastify";
import { prisma } from '../../lib/prisma'
import { z } from "zod";
import { dateFormater } from "../../utils/dateFormater";

export async function registerNewWeatherData(app: FastifyInstance) {
    app.post('/register', async (request, reply) => {
        const paramsSchema = z.object({
            temperature: z.number(),
            humidity: z.number(),
            brightness: z.number()
        })

        const { temperature, humidity, brightness } = paramsSchema.parse(request.body)

        if (!temperature || !humidity || !brightness) {
            reply.code(401).send("The weather value is required")
        }

        const created_at = String(dateFormater(new Date(), 'date'))
        const hour_created = String(dateFormater(new Date(), 'hour'))

        const data = {
            temperature,
            humidity,
            brightness,
            hour_created,
            created_at
        }

        await prisma.weather.create({
            data: data
        }).then(() => {
            reply.code(200).send("Success")
        }).catch((error) => {
            reply.code(500).send(`Something went wrong ${error}`)
        })

    })
} 