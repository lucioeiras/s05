class AulasComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Cria o Shadow DOM
    this.aulas = [
      {
        id: 1,
        disciplina: 'S05 - Interface Homem-máquina',
        data: 'ter',
        horario: '10:00',
        local: 'P1-S17',
        prova_alert: false,
        prova: '12/05',
        frequencia: '10/25',
        nota: 10
      },
      {
        id: 2,
        disciplina: 'E01 - Circuitos Elétricos em Corrente Contínua',
        data: 'ter',
        horario: '10:00',
        local: 'P1-S17',
        prova_alert: true,
        prova: '12/05',
        frequencia: '10/25',
        nota: 5
      },
      {
        id: 3,
        disciplina: 'M02 - Álgebra e Geometria Analítica',
        data: 'qua',
        horario: '10:00',
        local: 'P1-S17',
        prova_alert: true,
        prova: '12/05',
        frequencia: '10/25',
        nota: 7
      }
    ];
    this.hoje = "ter"; // Dia atual
  }

  connectedCallback() {
    this.render(); // Renderiza o componente
  }

  calcularNota(nota) {
    if (nota < 6) {
      return 'style="background: red"';
    } else if (nota >= 6 && nota < 8) {
      return 'style="background: orange"';
    } else if (nota >= 8) {
      return 'style="background: green"';
    }
  }

  // Método para renderizar o conteúdo do componente
  render() {
    const aulasDia = this.aulas.filter(a => a.data === this.hoje); // Filtra as aulas para o dia de hoje
    this.shadowRoot.innerHTML = `
      <style>
      .comp-aula {
        position: relative;
        background-color: white;
        top: 0px;
        left: 0px;
        rigth: 0px;
        padding: 15px;
        margin: 20px;
        border-radius: 10px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      }

      .titulo_aula {
        font-family: "Arimo", sans-serif;
        font-optical-sizing: auto;
        font-weight: bold;
        font-style: normal;
        font-size: 15px;
        color: var(--cor-text);
        padding-left: 5px;
        padding-right: 5px;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      
      p {
        font-family: "Arimo", sans-serif;
        font-optical-sizing: auto;
        font-weight: <weight>;
        font-style: normal;
        font-size: 11px;
        color: var(--cor-text);
        line-height: 1.5;
        orphans: 3;
        padding-left: 5px;
        padding-right: 5px
      }

      .lables {
        display: flex;
        /*justify-content: space-between;*/
      }

      .lable-prova {
        background-color: var(--prova);
        padding: 7px;
        padding-right: 15px;
        padding-left: 15px;
        margin-bottom: 10px;
        border-radius: 500px;
        text-align: center
      }

      .lable-frequencia {
        background-color: var(--frequencia);
        padding: 7px;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: 10px;
        border-radius: 500px;
      }
      
      .lable-nota {
        padding: 7px;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: 10px;
        border-radius: 500px;
      }

      .p_lable {
        font-family: "Arimo", sans-serif;
        font-optical-sizing: auto;
        font-weight: <weight>;
        font-style: normal;
        font-size: 11px;
        color: white;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      </style>
      <div>
        ${aulasDia.map(a => {
          let provaDisplay = a.prova_alert ? '' : 'display: none;';
          return `
            <div class="comp-aula">
              <div class="lable-prova p_lable" style="${provaDisplay}">PROVA: <b>${a.prova}</b></div>
              <div class="titulo_aula">${a.disciplina}</div>
              <p class="p">Local e Horário: <b>${a.local} - ${a.horario}</b></p>
              <div class="lables">
                <div class="lable-frequencia p_lable">FALTAS: <b>${a.frequencia}</b></div>
                <div class="lable-nota p_lable" ${this.calcularNota(a.nota)}>CR: <b>${a.nota}</b></div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }
}



// Registrando o componente
customElements.define('aulas-component', AulasComponent);