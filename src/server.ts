import Fastify, { FastifyReply } from "fastify";
import cors from '@fastify/cors'
import { route } from "./routes/route";

async function bootstrap() {
    const fastify = Fastify({
        logger:true})
    
    fastify.register(cors, {
        origin:true }) 
    
    fastify.get('/', (request,  reply)=>{
        reply.status(201) })
    
    fastify.get('*/, (request, reply)=>{
        reply.status(401) })
    
    fastify.register(route)
    
    fastify.listen({port:3333})
}

bootstrap()
