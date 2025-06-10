const scheduling = [
  {
    id: 1,
    student: 'Alice Mendes',
    period: '5º período',
    registration: 'GEP-101',
    time: '08:00',
  },
  {
    id: 2,
    student: 'Bruno Carvalho',
    period: '6º período',
    registration: 'GEP-102',
    time: '09:00',
  },
  {
    id: 3,
    student: 'Carla Nogueira',
    period: '7º período',
    registration: 'GEP-103',
    time: '10:00',
  },
  {
    id: 4,
    student: 'Daniel Souza',
    period: '8º período',
    registration: 'GEP-104',
    time: '11:00',
  },
  {
    id: 5,
    student: 'Eduarda Lima',
    period: '9º período',
    registration: 'GEP-105',
    time: '12:00',
  },
  {
    id: 6,
    student: 'Felipe Martins',
    period: '10º período',
    registration: 'GEP-106',
    time: '13:00',
  },
  {
    id: 7,
    student: 'Gabriela Torres',
    period: '5º período',
    registration: 'GEP-107',
    time: '14:00',
  },
  {
    id: 8,
    student: 'Henrique Silva',
    period: '6º período',
    registration: 'GEP-108',
    time: '15:00',
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
    </div>

    <div class="schedule-time">
      <span class="material-icons-outlined">schedule</span>
      ${s.time}
    </div>

    <button>
      <span class="material-icons-outlined">check_circle</span>
    </button>
  </div>
`).join('')}`
