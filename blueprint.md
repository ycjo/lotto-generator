# Lotto Number Generator

## Overview

This project is a web-based lottery number generator. It provides users with a set of 6 unique random numbers with the click of a button. The application is built using modern web development practices, including Web Components for modularity, and is designed with a clean, modern aesthetic that includes a pulsating glow effect and beautiful, randomly selected nature backgrounds.

## Features

*   **Random Number Generation:** Generates 6 unique random numbers between 1 and 45.
*   **Modern UI:** A visually appealing and responsive user interface.
*   **Pulsating Glow Animation:** Each number's circular border has a soft, pulsating glow that fades in and out over a 2-second interval.
*   **Random Nature Backgrounds:** On each page load, one of ten beautiful, high-resolution nature images is randomly selected and set as the background, creating a serene and healing user experience.
*   **Web Component-based:** The core functionality is encapsulated in a reusable Web Component.

## Design

*   **Color Palette:** A vibrant and energetic color palette for the main components, contrasted with the natural colors of the backgrounds.
*   **Typography:** Expressive and clear typography to enhance readability against various backgrounds.
*   **Layout:** A centered, clean layout for easy interaction.
*   **Effects:** Multi-layered drop shadows for a 3D effect, and a CSS-based pulsating glow animation on the number borders.
*   **Backgrounds:** A collection of 10 curated, high-quality nature photographs.

## Current Plan

1.  **Create Image Assets:**
    *   Select 10 high-quality, license-free nature images.
2.  **Update `style.css`**:
    *   Add styles for the `body` to set a base background and transition properties.
    *   Define 10 separate CSS classes, each setting a different background image from the selected collection.
    *   To ensure readability against any background, update the `.card` component to have a semi-transparent dark background and light-colored text.
3.  **Update `main.js`**:
    *   Create an array containing the names of the 10 background CSS classes.
    *   Write a function that runs on page load, which will:
        *   Randomly select one class name from the array.
        *   Apply the selected class to the `<body>` element.
