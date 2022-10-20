/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1: Trasformare la stringa foto in una immagine effettiva
BONUS 2: Organizzare i singoli membri in card/schede  */


const riga = document.querySelector('.row');

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Waleter gordon',
        role: 'Chief Editor',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Waleter gordon',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Grafic designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
]

for (let i = 0; i < team.length; i++) {
    const persona = team[i];
    const col = document.createElement('div');
    col.classList.add('col');
    const myCard = document.createElement('div');
    myCard.classList.add('myCard');
    col.append(myCard)
    myCard.innerHTML = `
    <img src=" assets/img/${persona.image}" alt="">
    <h5 class="pt-3">${persona.name}</h5>
    <h6 class="pb-3">${persona.role}</h6>
    `
    riga.insertAdjacentElement('beforeend', col);

}