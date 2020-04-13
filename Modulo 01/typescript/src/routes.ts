import {Request, Response} from 'express';
import createUser from './services/CreateUser';

export default function helloWorld(req: Request, res: Response){
   const user = createUser({
      name: 'Takao', 
      email: 'takao@takao.com', 
      password: '12345',
      techs: [
         'Node',
         'React',
         'React Native',
         {title: 'Javascript', experience: 2}
      ]
   });
   
   return res.json({message: 'Hello World'})
}