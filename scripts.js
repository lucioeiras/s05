const events = [
  {
      id: 1,
      title: 'Semana do Software 2025',
      date: '12/05',
      time: '10:00',
      location: 'Salão de Eventos',
      type: 'tech',
      description: 'Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400'
  },
  {
      id: 2,
      title: 'Workshop de IoT',
      date: '12/01',
      time: '08:00',
      location: 'Laboratório CS&I',
      type: 'tech',
      description: 'Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400'
  },
  {
      id: 3,
      title: 'Festa dos Alunos 2025',
      date: '18/05',
      time: '19:00',
      location: 'Área Esportiva do Inatel',
      type: 'cultural',
      description: 'Venha comemorar a melhor Festa dos Alunos de todos os tempos!',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400'
  },
  {
      id: 4,
      title: 'Feira de Oportunidades',
      date: '04/05',
      time: '10:00',
      location: 'Salão de Eventos',
      type: 'academic',
      description: 'Venha conhecer empresas e projetos com destaque na área da engenharia.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400'
  }
];

let theme = localStorage.getItem('theme') || 'light-theme'

events.forEach(event => {
  const carouselContainer = document.querySelector('main div#news div.carousel')
  console.log(carouselContainer)

  const carouselCard = document.createElement('div')
  carouselCard.className = 'card'
  carouselCard.innerHTML = `
    <img src="${event.image}" alt="${event.title}">
    <div class="info">
        <h3>${event.title}</h3>
        <p>${event.description}</p>
        <p><span class="material-icons-outlined icon">event</span> ${event.date} às ${event.time} <span class="material-icons-outlined icon">pin_drop</span> ${event.location}</p>
    </div>
  `
  carouselContainer.appendChild(carouselCard)
})

const modalContainer = document.querySelector('div#modal_container')

function openThemeModal() {
  modalContainer.style.visibility = 'visible'
}

function selectTheme(selectedTheme) {
  if (selectedTheme === 'light-theme') {
    theme = selectedTheme
  } else {
    theme = selectedTheme
  }

  modalContainer.style.visibility = 'hidden'

  document.body.id = theme
  localStorage.setItem('theme', theme)
}