import { Request, Response } from 'express';
import {user} from '../models/user';

export const nome = (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;

    res.render('pages/nome', {
        nome,
        idade
    });
};

export const idadeForm = (req: Request, res: Response) => {
    res.render('pages/idade');
};

export const idadeAction = (req: Request, res: Response) => {
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    if(req.body.ano) {
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
};

export const addIdade = async (req:Request , res:Response)=>{
    res.redirect('/')
    let id= req.params.id//pegando o id do usuario pela url
    let nome:string =''
    let idade:number =0
    let meuUsuario =  await user.findAll({where:{id}})
    if(meuUsuario.length>0){
        let atual = meuUsuario[0]
        atual.idade++
        await atual.save()

    }
}
export const diminuirIdade = async (req:Request , res:Response)=>{
    res.redirect('/')
    let id = req.params.id
    let todos = await user.findAll({where:{id}})
    if(todos.length>0){
        let userAtual = todos[0]
        userAtual.idade--

        await userAtual.save()

    }

}

export const excluir = async (req:Request , res:Response)=>{
    res.redirect('/')
    let id= req.params.id//
    let todosAqui = await user.findAll({where:{id}})
    if(todosAqui.length>0){
        let atualUser = todosAqui[0]
         atualUser.destroy()
    }
}


