import { Request, Response } from 'express';
import {Op} from 'sequelize'

import {sequelize} from '../instaces/mysql'
//Para utilizar o model importar ele

import { Product } from '../models/Product';
import {user} from '../models/user';

export const home = async (req: Request, res: Response)=>{


  let meu = await user.findByPk(1)
  console.log(meu)

    console.log(meu)

    let results = await user.findAll({where:{
        id:2
    }})

    if(results.length>0){
        let meuUser = results[0]
        await meuUser.destroy()
  
    }
   
   
    let clientes = await user.findAll()
  
    
    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
        clientes
       
    });
};

export const novoUsuario = async (req:Request, res:Response)=>{
//pegando dados do meu formulario e salvando no banco
//req.body para pegar dados enviado via Post
  let {fnome, fidade}=req.body
  const users = await user.create({
      nome:fnome,
      idade:fidade
  })
  res.redirect('/')//comando para após inserir no banco redirecionar para a home
}














/* regra de atualização
    let result = await user.findAll({where:{id:8}})
    if(result.length>0){//condição para ver se foi encontrado oq procurava
        let meuUser = result[0]
        meuUser.nome='Geraldo Junior'
        await meuUser.save()
        
    }*/