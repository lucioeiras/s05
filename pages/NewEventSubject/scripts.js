const subjects = [
  {
    id: 1,
    name: 'Cálculo III',
    shortname: 'M005',
  },
  {
    id: 2,
    name: 'Física II',
    shortname: 'F202',
  },
  {
    id: 3,
    name: 'Interface Homem Máquina',
    shortname: 'S205',
  },
  {
    id: 4,
    name: 'Gerenciamento e configuração de software',
    shortname: 'S107',
  },
  {
    id: 5,
    name: 'Otimização II',
    shortname: 'P108',
  },
  {
    id: 6,
    name: 'Ciências Humanas e Sociais',
    shortname: 'H003',
  },
];

const subjectsList = document.querySelector('div#subjects-list');

subjectsList.innerHTML = `${subjects.map(s => `
  <a href="../NewEventTime/index.html" class="subject-container">
    <div>
      <p>${s.name}</p>
      <small>${s.shortname}</small>
    </div>
    <span class="material-icons-outlined">arrow_forward</span>
  </a>
`).join('')}`
