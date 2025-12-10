# Patrick Gonzalez - JavaScript Portfolio (SDC355 Project 5.8)

This repository contains my SDC355 project for **5.8 – Creating Scalable Foundations**.  
The goal is to demonstrate how a portfolio page can use **JavaScript objects, arrays, DOM manipulation, and browser storage** to manage and render project data in a scalable way.

## Overview

The portfolio page loads an array of custom project objects, stores them using `sessionStorage`, and dynamically renders project cards and a skills list to the DOM. This pattern is similar to how many modern web apps treat content as structured data that is programmatically displayed.

## Files

- `index.html` – Main portfolio page with header, skills section, and projects section.
- `portfolio.js` – JavaScript that:
  - Defines custom project objects.
  - Stores and retrieves project data from `sessionStorage`.
  - Dynamically generates the skills list and project cards.
- `README.md` – Documentation for this project and repository.

## Technologies Used

- **HTML5**
  - Semantic structure (`header`, `main`, `section`, `footer`)
  - Meta viewport for responsive layout
- **CSS3**
  - Basic layout and styling for a clean, card-based portfolio
- **JavaScript (ES6+)**
  - Custom objects and arrays
  - DOM selection and manipulation
  - Event handling (`DOMContentLoaded`)
  - Browser storage using `sessionStorage`
- **Git & GitHub**
  - Version control and hosting via GitHub Pages

## Project Data & Browser Storage

The portfolio uses an array called `defaultProjects` in `portfolio.js`.  
Each project is an object with the following properties:

- `title` – Project title
- `summary` – Short 1–2 sentence description
- `iconUrl` – URL for an icon or image to visually represent the project
- `repoUrl` – Link to the GitHub repository

On page load:

1. The script checks `sessionStorage` using the key `portfolioProjects`.
2. If **no data exists**, it:
   - Saves the `defaultProjects` array using `JSON.stringify()`.
   - Returns the default data.
3. If **data does exist**, it:
   - Parses the JSON string using `JSON.parse()`.
   - Uses the parsed projects to render the page.

This satisfies the requirement to use `JSON.stringify()` and `sessionStorage` so that project data persists and can be retrieved on reload during the browser session.

## Dynamic Content

- **Skills List**  
  The `skills` array contains at least 5 technologies. A loop generates `<li>` elements and appends them to the `#skillsList` `<ul>` so the list is fully dynamic.

- **Project Cards**  
  The `renderProjects()` function loops over the project array and creates:
  - A card container
  - An image/icon
  - Title and summary text
  - A link to the GitHub repository

These cards are appended to the `#projectGrid` element and styled as a responsive grid.

## How to Run Locally

1. Clone or download this repository.
2. Open `index.html` in any modern web browser.
3. Refresh the page to see that project data is loaded from `sessionStorage`.

No build tools or external dependencies are required.

## GitHub Pages

To make the page publicly accessible:

1. Push this repository to GitHub (if it is not already).
2. In the repository settings, enable **GitHub Pages** and select the `main` branch as the source.
3. GitHub will provide a public URL where the portfolio can be viewed.

## Customization

- Update `defaultProjects` in `portfolio.js` with your real project titles, summaries, icons, and repo links.
- Add or remove items in the `skills` array to match your current tech stack.
- Adjust the styling in the `<style>` block inside `index.html` to match your personal branding.
