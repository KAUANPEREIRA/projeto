import{Model, DataTypes} from 'sequelize';
import{sequelize} from '../instaces/mysql';

export interface userInstance extends Model{
    id:number;
    idade:number;
    nome:string;

}

export const user= sequelize.define<userInstance>("User",{//este nome userInstance poderia ser qualquer nome
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    idade:{
        type:DataTypes.INTEGER
    },
    nome:{
        type:DataTypes.STRING
    }

},{
    tableName:'usuariaos',
    timestamps:false

})