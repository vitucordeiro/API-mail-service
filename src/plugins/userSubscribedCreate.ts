import z from 'zod'

import {prisma} from '../lib/prisma'
import { mailchimpServices } from './mailChimpCrud'
const mailchimp = new mailchimpServices()

export async function newDataOfSubscribed(request,reply){
   
    const createSubscribedNewsletter = await z.object({
        email: z.string() })
   
    const {email} = createSubscribedNewsletter.parse(request.body)

    const validationEmailDataBase = await prisma.emailsubscribed.findUnique({
        where:{
            email:email
        } })

    if(!validationEmailDataBase){
        const emailSub = await prisma.emailsubscribed.create({
            data:{email}})
      
        try{
            mailchimp.addMemberAtList(email)
            reply.status(201).send({message:"Sucess"})
        }catch(e){
            reply.status(400).send({e})}
       
        reply.status(201).send({userData: emailSub})
       
       }else{ 
         reply.status(400).send({message:'Try another email.'}) }
   }
