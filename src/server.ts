import Fastify from "fastify";
import cors from '@fastify/cors'
import { emailSubscribedFunction } from "./routes/subscribedEmail";


async function bootstrap() {
    const fastify = Fastify({
        logger:true
    })
    fastify.register(cors, {
        origin:true
    })
    //testing nodemailer router



    //
    await fastify.get('/', (request,  reply)=>{
        return {message:"Sorry!"}
    })
    await fastify.register(emailSubscribedFunction)


    
    fastify.listen({port:3333})
}

bootstrap()