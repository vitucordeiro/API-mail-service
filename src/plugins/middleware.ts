import z from 'zod'

import {prisma} from '../lib/prisma'
import { mailchimpServices } from './mailService'
const mailchimp = new mailchimpServices()

export async function middleware(request,reply){
   
    const dataUser = await z.object({
        email: z.string() })
   
    const {email} = dataUser.parse(request.body)

    const validation = await prisma.emailsubscribed.findUnique({
        where:{
            email:email
        } })

    if(!validation){      
        try{
            await prisma.emailsubscribed.create({data:{email}})
            mailchimp.addMemberAtList(email)
            reply.status(201).send({message:"Sucess"})
        }catch(error){
            reply.status(400).send({error})}
       
        reply.status(201).send({userData: emailSub})
       
       }else{ 
         reply.status(400).send({message:'Try another email.'}) }
   }
