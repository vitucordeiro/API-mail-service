import Fastify, { FastifyReply } from "fastify";
import cors from '@fastify/cors'
import { emailSubscribedFunction } from "./routes/subscribedEmail";
import { mailchimpServices } from "./plugins/mailChimpCrud";

const mail = new mailchimpServices()

async function bootstrap() {

    const fastify = Fastify({
        logger:true
    })
    fastify.register(cors, {
        origin:true
    })
   



    //
    await fastify.get('/', (request,  reply)=>{
        
        reply.send(mail.getListSpecified())
    })

    await fastify.register(emailSubscribedFunction)


    
    fastify.listen({port:3333})
}

bootstrap()