import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste.",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Paisagem incrível!",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "Comida deliciosa!",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 4,
        descricao: "Um pôr do sol mágico na praia.",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 5,
        descricao: "Cachorro brincando no parque.",
        imagem: "https://placecats.com/millie/300/150"
    },
];

const app  = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id);
    res.status(200).json(posts[index]);
});