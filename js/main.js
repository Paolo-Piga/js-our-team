// creo l'array di oggetti 

const team = [
    {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    img: "img/wayne-b.jpg"
    },

    {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    img: "img/angela-c.jpg"
    },
    
    {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    img: "img/walter-g.jpg"
    },
    
    {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    img: "img/angela-l.jpg"
    },
    {
    nome: "Scott Estrada",
    ruolo: "Developer",
    img: "img/scott-e.jpg"
    },
    {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    img: "barbara-r.jpg"
    },
]

// stampo su console con un ciclo per tutta la lunghezza dell'array
for (let i = 0; i < team.length; i++){
    let tutti = team[i];
    let info = document.createElement(`div`);
    
}

// const team = {
//     "nome" : ["Wayne Barnett", "Angela Caroll","Walter Gordon","Angela Lopez","Scott Estrada","Barbara Ramos"],
//     "ruolo" : ["Founder & CEO","Chief Editor","Office Manager","Social Media Manager","Developer","Graphic Designer"],
//     "foto" : "img\wayne-barnett-founder-ceo.jpg"
// };