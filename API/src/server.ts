import fastify from "fastify";
import { z } from 'zod'

// Routes imports
import { registerNewWeatherData } from './routes/registerNewWeatherData'
import { getWeather } from "./routes/getWeahter";

const app = fastify();

app.register(registerNewWeatherData)
app.register(getWeather)

app.listen({ port: 3333 }, () => {
    console.log('Server is Running');
})

