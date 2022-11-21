import { FastifyInstance } from 'fastify'
import {prisma} from '../lib/prisma'
import z from 'zod'

export async function emailSubscribedFunction(fastify: FastifyInstance){
    fastify.post('/subscribed/newsletter', async(request, reply)=>{ //trabalhando com rotas no fastify

        const createSubscribedNewsletter = z.object({
            email: z.string()
        })
        const {email} = createSubscribedNewsletter.parse(request.body)
        const emailSub = await prisma.emailsubscribed.create({
            data:{
                email,
                }
        })

        reply.status(201).send({userData: emailSub})
        
    })

    fastify.post('/subscribed/player', async(request,reply)=>{
        const createPlayerSubscribed = z.object({
            playerName: z.string(),
            playerHash: z.string(),
            rankValorant: z.string(),
            
        })
        
        const {playerName, playerHash, rankValorant} = createPlayerSubscribed.parse(request.body)
        const playerSub = await prisma.playerSubscribed.create({
            data:{
                playerHash,
                playerName,
                rankValorant

                
            }
        })
        reply.status(201).send({playerData: playerSub})

    })}
