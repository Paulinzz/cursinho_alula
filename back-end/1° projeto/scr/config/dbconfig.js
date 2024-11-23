import { MongoClient } from "mongodb";

export default async function connectaraoBanco(StringConexao) {
    let MongoClient;
    
    try {
        MongoClient = new MongoClient(StringConexao)
        console.log("Conectado ao cluster do banco de dados...");
        await MongoClient.connect();
        console.log("Conectado ao Mongo Atlas com sucesso!");

        return MongoClient;
    } catch(erro){
        console.error("Falha na conexão do banco!", erro);
        process.exit
    }
}