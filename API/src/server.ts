import fastify from "fastify";
import { z } from 'zod'

// Routes imports
import { registerNewWeatherData } from './routes/registerNewWeatherData'

const app = fastify();

app.register(registerNewWeatherData)

app.listen({ port: 3333 }, () => {
    console.log('Server is Running');
})

