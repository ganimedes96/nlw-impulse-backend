import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import cors from 'cors';


export const routes = express.Router()


routes.use(cors())


routes.post('/feedbacks',async (req,res)=>{
    
    const {type, comment, screenshot} = req.body
    
   const prismaFeedbacksRepository = new PrismaFeeedbacksRepository()
   const nodemailerMailAdapter = new  NodemailerMailAdapter()

   const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        nodemailerMailAdapter
   )
    
   await submitFeedbackUseCase.execute({
       type, 
       comment,
       screenshot,
   })
       
        
        return res.status(201).send()
    })
    