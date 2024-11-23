import express from "express"
import connectaraoBanco from "./scr/config/dbconfig.js";

const conexao = await connectaraoBanco(process.env.STIRNG_CONEXAO)

const posts = [
    
    {
        descricao: "Foto teste",
        imagem: "https://placecast.com/millie/300/150",
        id: 1
    },
          
    {
        descricao: "gatinho fazendo yoga",
        imagem: "https://placecast.com/millie/300/150",
        id: 2
    },

    {
        descricao: "gatinho fazendo panqueca",
        imagem: "https://placecast.com/millie/300/150",
        id: 3
    },
  ];

const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log("Servidor Escutado...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

async function gettodosospost(){
    const db = conexao.db("imersao-instabytes")
    const colecao = db.collection(posts)
    return colecao.find().toArray()
}

function buscarPostPorID(id){
    return posts.findIndex((post) => {
        return post.id == Number(id)
    })
}

app.get("/posts/:id", async(req, res) => {
    const posts = await gettodosospost()
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts);
});