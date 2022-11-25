import { FastifyInstance } from 'fastify'
import { newDataOfSubscribed } from '../plugins/userSubscribedCreate'




export async function emailSubscribedFunction(fastify: FastifyInstance){

    
    fastify.post('/subscribed/newsletter', async(request, reply)=>{ 

        await newDataOfSubscribed(request,reply)
    })

}
