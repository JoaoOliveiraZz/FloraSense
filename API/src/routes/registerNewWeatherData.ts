import { FastifyInstance } from "fastify";
import { prisma } from '../../lib/prisma'
import { z } from "zod";
import { dateFormater } from "../../utils/dateFormater";

export async function registerNewWeatherData(app: FastifyInstance) {
    app.post('/weather', async (request, reply) => {
        const paramsSchema = z.object({
            data: z.number()
        })

        const { data } = paramsSchema.parse(request.body)

        if (!data) {
            reply.code(401).send("The weather value is required")
        }

        const formatDate = dateFormater(new Date())

        await prisma.weather.create({
            data: {
                value: data,
                created_at: new Date()
            }
        }).then(() => {
            reply.code(200).send("Success")
        }).catch((error) => {
            reply.code(500).send(`Something went wrong ${error}`)
        })

    })
} 