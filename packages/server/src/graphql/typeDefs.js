import { gql } from 'apollo-server-express'
import { typeDefs as nodeTypeDefs } from './Node/Node';
import { typeDefs as listTypeDefs } from './List/List';
import { typeDefs as clientTypeDefs } from './Client/Client'
import { typeDefs as demandTypeDefs } from './Demand/Demand'

const typeDefs = gql`
    type Query{
        _root: String
    }
    
    type Mutation{
        _root: String
    }
    ${nodeTypeDefs}
    ${listTypeDefs}
    ${clientTypeDefs}
    ${demandTypeDefs}
`;
// o tipo query é usado para pegar os dados /operar em cima dos grafos  // geralmente só "assistem dados"/ retornam o dado quando solicitado // é obrigatório ter o tipo Query na raiz/root // representa tidis is pontos de entrada possíveis na API GraphQL.
// o tipo mutation faz modificções de dados no nosso servidor/aplicação // serve para eu criar, modificar e deletar dados // serve para fazer uma mutabilidade em um dado que eu tenho no servidor // não é obrigatório eu ter um tipo Mutation
// esses dois tipos definem o "ponto de entrada" de cada consulta GraphQL.

export default typeDefs;