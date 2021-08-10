import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express'
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
//gql é uma função que trabalha em cima de templates strings. Por ela eu consigo construir as queries na sintaxe do graphql dentro do javascript

async function startApolloServer() {
    const server = new ApolloServer({
        typeDefs, // posso omitir a propriedade typeDefs: pois o valor dela é igual e já é entendido que a propriedade typeDefs vai ter um valor que é typeDefs (uma constante)
        resolvers,
    });
    await server.start();
    const app = express();

    server.applyMiddleware({
        app,
        cors: {
            origin: ['http://localhost:3000','https://studio.apollographql.com']
        },
        bodyParserConfig: true,
    })

// const enableCors = cors({origin: 'http://localhost:3000})
//   server.get('/status', (_, response) => {
//     response.send({
//         status: 'Okay',
//     });
// });

// server.options('/authenticate', enabelCors).post('/authenticate', enabelCors, expressjson(), (request, response)=>{
//     console.log('Email', request.body.email, 'Senha', request.body.password);
//     response.send({
//         Okay: true,
//     });
// });

    const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;

    const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

    await app.listen(8000, HOSTNAME, () => {
        console.log(`Server is listening at http://${HOSTNAME}:${PORT}.`)
    })
}

startApolloServer()






// server.get('/status', (_, response) => {
//     response.send({
//         status: 'Okay',
//     })
// });

// const enableCors = cors({
//     origin: 'http://localhost:3000'
// });

// server.options('/authenticate', enableCors).post('/authenticate', enableCors, express.json(), (request, response) => {
//     console.log(
//         'Email', request.body.email,
//         'Senha', request.body.password
//     )
//     response.send({
//         Okay: true
//     });
// })


