class LottoGenerator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          text-align: center;
        }
        .card {
          background: var(--card-background, rgba(0,0,0,0.5));
          padding: 2.5rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px var(--shadow-color, rgba(0,0,0,0.25));
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        h1 {
          font-size: 2.5rem;
          color: var(--primary-color, #FFFFFF);
          margin-bottom: 1rem;
          font-weight: 700;
        }
        p {
            margin-bottom: 2rem;
            color: var(--text-color, #E0E0E0);
            font-size: 1.1rem;
        }
        .numbers {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .number-container {
            position: relative;
            width: 80px;
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .number {
          width: 70px;
          height: 70px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          background-color: var(--number-bg, rgba(255, 255, 255, 0.2));
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--primary-color, #FFFFFF);
          box-shadow: 0 6px 15px rgba(0,0,0,0.08);
          position: relative;
          z-index: 1;
        }
        .glow-border {
            position: absolute;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            box-shadow: 0 0 15px 5px var(--primary-glow, rgba(255, 255, 255, 0));
            animation: fade-pulse 2s infinite alternate;
        }

        @keyframes fade-pulse {
            0% {
                opacity: 0;
                box-shadow: 0 0 10px 3px var(--primary-glow, rgba(255, 255, 255, 0));
            }
            50% {
                opacity: 1;
                box-shadow: 0 0 20px 8px var(--primary-glow, rgba(255, 255, 255, 0.5));
            }
            100% {
                opacity: 0;
                box-shadow: 0 0 10px 3px var(--primary-glow, rgba(255, 255, 255, 0));
            }
        }

        button {
          background-color: var(--primary-color, #FFFFFF);
          color: #333;
          border: none;
          padding: 1rem 2rem;
          font-size: 1.2rem;
          border-radius: 50px;
          cursor: pointer;
          box-shadow: 0 5px 15px var(--primary-glow, rgba(255, 255, 255, 0.4));
          font-family: var(--font-family, 'Montserrat', sans-serif);
          font-weight: 700;
          transition: background-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
        }
        button:hover {
            background-color: #f0f0f0;
            color: #000;
        }
      </style>
      <div class="card" part="card">
        <h1 part="title">Lotto Number Generator</h1>
        <p part="text">Click the button to get your lucky numbers!</p>
        <div class="numbers"></div>
        <button>Generate Numbers</button>
      </div>
    `;

    this.shadowRoot.querySelector('button').addEventListener('click', () => this.generateNumbers());
    this.generateNumbers();
  }

  generateNumbers() {
    const numbersContainer = this.shadowRoot.querySelector('.numbers');
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while(numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    [...numbers].sort((a,b) => a-b).forEach(number => {
      const numberContainer = document.createElement('div');
      numberContainer.classList.add('number-container');

      const glowBorder = document.createElement('div');
      glowBorder.classList.add('glow-border');

      const numberElement = document.createElement('div');
      numberElement.classList.add('number');
      numberElement.setAttribute('part', 'number');
      numberElement.textContent = number;
      
      numberContainer.appendChild(glowBorder);
      numberContainer.appendChild(numberElement);

      numbersContainer.appendChild(numberContainer);
    });
  }
}

customElements.define('lotto-generator', LottoGenerator);
