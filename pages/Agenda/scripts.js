const scheduling = [
  {
    id: 1,
    student: 'Mateus Marcos Oliveira',
    period: '8º período',
    registration: 'GEP-000',
    date: 'Segunda-feira, 09/06/25',
    isConfirmed: false,
    subject: 'M005',
    time: '08:00',
  },
  {
    id: 2,
    student: 'Ana Beatriz Ferreira',
    period: '6º período',
    registration: 'GEP-001',
    date: 'Segunda-feira, 09/06/25',
    isConfirmed: false,
    subject: 'S205',
    time: '09:00',
  },
  {
    id: 3,
    student: 'Lucas Henrique da Silva',
    period: '7º período',
    registration: 'GEP-002',
    date: 'Terça-feira, 10/06/25',
    isConfirmed: true,
    subject: 'F202',
    time: '10:00',
  },
  {
    id: 4,
    student: 'Juliana Rocha Santos',
    period: '8º período',
    registration: 'GEP-003',
    date: 'Quarta-feira, 11/06/25',
    isConfirmed: true,
    subject: 'M005',
    time: '11:00',
  },
  {
    id: 5,
    student: 'Rafael Almeida Costa',
    period: '5º período',
    registration: 'GEP-004',
    date: 'Quarta-feira, 11/06/25',
    isConfirmed: true,
    subject: 'S205',
    time: '12:00',
  },
  {
    id: 6,
    student: 'Fernanda Lopes Martins',
    period: '9º período',
    registration: 'GEP-005',
    date: 'Quinta-feira, 12/06/25',
    isConfirmed: true,
    subject: 'F202',
    time: '13:00',
  },
  {
    id: 7,
    student: 'Gustavo Ribeiro Nunes',
    period: '6º período',
    registration: 'GEP-006',
    date: 'Quinta-feira, 12/06/25',
    isConfirmed: true,
    subject: 'M005',
    time: '14:00',
  },
  {
    id: 8,
    student: 'Isabela Cristina Moura',
    period: '7º período',
    registration: 'GEP-007',
    date: 'Sexta-feira, 13/06/25',
    isConfirmed: true,
    subject: 'S205',
    time: '15:00',
  },
  {
    id: 9,
    student: 'Thiago Moreira Pinto',
    period: '8º período',
    registration: 'GEP-008',
    date: 'Sexta-feira, 13/06/25',
    isConfirmed: true,
    subject: 'F202',
    time: '16:00',
  },
  {
    id: 10,
    student: 'Marina Duarte Figueiredo',
    period: '10º período',
    registration: 'GEP-009',
    date: 'Sábado, 14/06/25',
    isConfirmed: true,
    subject: 'M005',
    time: '17:00',
  },
  {
    id: 11,
    student: 'Bruno César Lima',
    period: '5º período',
    registration: 'GEP-010',
    date: 'Sábado, 14/06/25',
    isConfirmed: true,
    subject: 'S205',
    time: '08:00',
  }
];

const schedulingList = document.querySelector('div#scheduling-list');

schedulingList.innerHTML = `${scheduling.map(s => `
  <div class="scheduling-container">
    <div class="schedule-left">
      <p>${s.student}</p>
      <div class="schedule-info">
        <span class="material-icons-outlined">info</span>
        ${s.period + ' / ' + s.registration}
      </div>
      <div class="schedule-info schedule-last">
        <span class="material-icons-outlined">calendar_today</span>
        ${s.date}
      </div>

      ${s.isConfirmed ? '' : (`
        <div class="schedule-options">
          <button class="schedule-reject">Recusar</button>
          <button class="schedule-accept">Aceitar</button>
        </div>
      `)}
    </div>

    <div class="schedule-time">
      <span class="material-icons-outlined">schedule</span>
      ${s.time}
    </div>
  </div>
`).join('')}`
