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
          width: 100%;
          box-sizing: border-box;
        }
        .card {
          background: var(--card-background, rgba(0,0,0,0.5));
          padding: 1.5rem;
          border-radius: 20px;
          box-shadow: 0 10px 40px var(--shadow-color, rgba(0, 0, 0, 0.3));
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          margin: 1rem auto;
          width: calc(100% - 2rem);
          max-width: 600px;
          box-sizing: border-box;
        }
        h1 {
          font-size: 1.8rem;
          color: var(--primary-color, #FFFFFF);
          margin-bottom: 0.5rem;
          font-weight: 700;
          letter-spacing: -0.5px;
        }
        p {
            margin-bottom: 1.5rem;
            color: var(--text-color, #E0E0E0);
            font-size: 1rem;
            line-height: 1.4;
        }
        .numbers {
          display: flex;
          justify-content: center;
          gap: 0.8rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        .number-container {
            position: relative;
            width: 54px;
            height: 54px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .number {
          width: 48px;
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          background-color: var(--number-bg, rgba(255, 255, 255, 0.15));
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--primary-color, #FFFFFF);
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          position: relative;
          z-index: 1;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .glow-border {
            position: absolute;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            box-shadow: 0 0 12px 4px var(--primary-glow, rgba(255, 255, 255, 0.3));
            animation: fade-pulse 2.5s infinite alternate ease-in-out;
        }

        @keyframes fade-pulse {
            0% {
                opacity: 0.3;
                transform: scale(0.95);
            }
            100% {
                opacity: 1;
                transform: scale(1.05);
            }
        }

        button {
          background-color: var(--primary-color, #FFFFFF);
          color: #1a1a1a;
          border: none;
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          border-radius: 50px;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          font-family: var(--font-family, 'Montserrat', sans-serif);
          font-weight: 700;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
          width: 100%;
          max-width: 280px;
        }
        button:active {
            transform: scale(0.95);
        }
        button:hover {
            background-color: #f8f8f8;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        /* Tablet and Desktop */
        @media (min-width: 480px) {
          .card {
            padding: 3rem;
          }
          h1 {
            font-size: 2.4rem;
          }
          .numbers {
            gap: 1.2rem;
          }
          .number-container {
            width: 80px;
            height: 80px;
          }
          .number {
            width: 70px;
            height: 70px;
            font-size: 1.8rem;
          }
          .glow-border {
            width: 70px;
            height: 70px;
          }
          button {
            width: auto;
          }
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
