import Fastify from 'fastify';
import UserController from "./controllers/UserController.js";
import fastifyCors from "@fastify/cors";

const fastify = Fastify({ logger: true })

fastify.setErrorHandler((error, request, reply) => {
    request.log.error(error);

    reply.status(500).send({
        timestamp: new Date().toISOString(),
        message: 'Internal Server Error',
        error: error.message
    });
});

fastify.register(fastifyCors, {
    origin: [
        'https://evrly-test-frontend.vercel.app',
        /^http:\/\/localhost(:\d+)?$/, // http://localhost or http://localhost:ANY_PORT
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
});

fastify.register(UserController);

fastify.listen({ port: 3000 }, (err, address) => {
    if (err) {
        fastify.log.error(err)
    }
})
