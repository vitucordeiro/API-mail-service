import { FastifyInstance } from 'fastify'
import { middleware } from '../plugins/middleware'




export async function emailSubscribedFunction(fastify: FastifyInstance){
    
    fastify.post('/subscribed/newsletter', middleware)
}
