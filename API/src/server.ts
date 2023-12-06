import fastify from "fastify";
import { z } from "zod";

// Routes imports
import { registerNewWeatherData } from "./routes/registerNewWeatherData";
import { getWeather } from "./routes/getWeahter";
import { registerString } from "./routes/registerString";
import { fastifyCors } from "@fastify/cors";

const app = fastify();

app.register(fastifyCors, {
  origin: true,
});

app.register(registerNewWeatherData);
app.register(getWeather);
app.register(registerString);

app.listen({ port: 3333 }, () => {
  console.log("Server is Running");
});
