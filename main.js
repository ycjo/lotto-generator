import './lotto-generator.js';

document.addEventListener('DOMContentLoaded', () => {
  const backgroundClasses = [
    'bg1', 'bg2', 'bg3', 'bg4', 'bg5',
    'bg6', 'bg7', 'bg8', 'bg9', 'bg10'
  ];

  const setRandomBackground = () => {
    const randomClass = backgroundClasses[Math.floor(Math.random() * backgroundClasses.length)];
    document.body.className = ''; // Clear existing classes
    document.body.classList.add(randomClass);
  };

  setRandomBackground();
});
