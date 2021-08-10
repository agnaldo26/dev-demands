import { resolvers as nodeResolvers } from './Node/Node';
import { resolvers as listResolvers } from './List/List';
import { resolvers as clientResolvers } from './Client/Client';
import { resolvers as demandResolvers } from './Demand/Demand'


const resolvers = {
    ...demandResolvers,
    ...listResolvers,
    ...clientResolvers,
    ...nodeResolvers,
    

    //eu acho que não precisava disso, pois já coloquei os tipos query no main.js antes dos resolvers
    Query: {
        ...clientResolvers.Query,
        ...demandResolvers.Query
    },
    //o mesmo para a mutation
    Mutation: {
        ...clientResolvers.Mutation,
      },
}
// os resolvers são funções que conseguem resolver a query que eu faço dentro do graphql para os dados que eu preciso de verdade // faz as queries funcionarem // Cada campo em cada tipo é apoiado por uma função resolver, que é fornecida pelo desenvolvedor do servidor GraphQL. Quando um campo é executado, o resolver correspondente é chamado para produzir o próximo valor.

export default resolvers;