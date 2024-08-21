const express = require('express');
const app = express();
const port = 3000;

//middleware para interpretar JSON

app.use(express.json());

const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
];

const people = [
    {
        id: 1,
        name: 'Rafael Silva',
        abilidades: ['FrontEnd', 'React Native', 'ReactJs', 'Nodejs', 'Javascript']
    },
    { id: 2, name: 'Angela Vazquez' },
    { id: 3, name: 'Rodrigo Silva' },
    { id: 4, name: 'Bruna Silva' }
]

//Endpoint GET básico
app.get('/', (req, res) => {
    res.send('Bem-vindo à minha API!');
})

app.get('/items', (req, res) => {

    res.json(items);
})

app.get('/people', (req, res) => {
    res.send(people)
})

//obter a informações pelo id
app.get('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(i => i.id === id);

    if (item) {
        res.json(item);
    } else {
        res.status(404).send({ message: 'Item não encontrado' });
    }
})

//Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});