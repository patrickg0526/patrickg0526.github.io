/*
  Assignment: 5.8 Project - Creating Scalable Foundations
  Student: Patrick Gonzalez (patgon2554)
  Date: 12/10/2025
  Purpose: Define reusable project objects, store them in sessionStorage,
           retrieve and parse them on page load, and dynamically render
           both a project grid and a skills list into the portfolio page.
*/

"use strict";

// ---------- Project data & sessionStorage helpers ----------

// Default array of custom project objects
const defaultProjects = [
  {
    title: "Fitness Challenge Tracker",
    summary:
      "A community-focused fitness web app that lets users log workouts, join challenges, and view progress stats.",
    iconUrl: "https://via.placeholder.com/80x80.png?text=Fit",
    repoUrl: "https://github.com/patgon2554/fitness-challenge-tracker"
  },
  {
    title: "Bill Splitter Utility",
    summary:
      "JavaScript-powered restaurant calculator that computes tip, total, and per-person cost with live validation.",
    iconUrl: "https://via.placeholder.com/80x80.png?text=Bill",
    repoUrl: "https://github.com/patgon2554/bill-splitter"
  },
  {
    title: "Trip Stats Dashboard",
    summary:
      "Trip summary tool that calculates total miles, fuel economy, and persists summary data using browser storage.",
    iconUrl: "https://via.placeholder.com/80x80.png?text=Trip",
    repoUrl: "https://github.com/patgon2554/trip-stats-dashboard"
  }
  // You can add more project objects here later if you want.
];

// Key used for sessionStorage
const PROJECTS_STORAGE_KEY = "portfolioProjects";

// Skill / technology list to demonstrate dynamic content loop
const skills = [
  "HTML5 & Semantic Layout",
  "CSS3 & Responsive Design",
  "JavaScript (ES6+)",
  "DOM Manipulation & Events",
  "Browser Storage (sessionStorage)",
  "Git & GitHub Workflow"
];

/**
 * Get project data from sessionStorage if it exists.
 * If no data is stored, use the defaultProjects array and
 * write it into sessionStorage as a JSON string.
 */
function getProjectsFromStorage() {
  const storedProjects = sessionStorage.getItem(PROJECTS_STORAGE_KEY);

  if (storedProjects === null) {
    // Nothing in storage yet: save defaultProjects as JSON
    const json = JSON.stringify(defaultProjects);
    sessionStorage.setItem(PROJECTS_STORAGE_KEY, json);
    return defaultProjects;
  }

  // sessionStorage has data: parse JSON back into an array of objects
  try {
    const parsed = JSON.parse(storedProjects);
    return parsed;
  } catch (error) {
    console.error("Error parsing project data from sessionStorage:", error);
    // Fallback to defaults if parsing fails for some reason
    return defaultProjects;
  }
}

// ---------- DOM rendering helpers ----------

/**
 * Render the skills array as a list of <li> elements.
 * This satisfies the rubric requirement to use a loop to generate
 * a well-structured list of 5+ dynamic items.
 */
function renderSkills() {
  const skillsList = document.getElementById("skillsList");
  skillsList.innerHTML = "";

  skills.forEach(function (skill) {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });
}

/**
 * Render project cards into the projectGrid container.
 * Each card shows the project's title, summary, icon, and repo link.
 */
function renderProjects(projectArray) {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = "";

  projectArray.forEach(function (project) {
    // Outer card
    const card = document.createElement("article");
    card.className = "project-card";

    // Header section with icon + title
    const headerDiv = document.createElement("div");
    headerDiv.className = "project-header";

    const img = document.createElement("img");
    img.src = project.iconUrl;
    img.alt = project.title + " icon";

    const title = document.createElement("h3");
    title.className = "project-title";
    title.textContent = project.title;

    headerDiv.appendChild(img);
    headerDiv.appendChild(title);

    // Summary paragraph
    const summary = document.createElement("p");
    summary.className = "project-summary";
    summary.textContent = project.summary;

    // Link to repository
    const linkWrapper = document.createElement("p");
    linkWrapper.className = "project-link";

    const repoLink = document.createElement("a");
    repoLink.href = project.repoUrl;
    repoLink.target = "_blank";
    repoLink.rel = "noopener noreferrer";
    repoLink.textContent = "View repository on GitHub";

    linkWrapper.appendChild(repoLink);

    // Assemble card
    card.appendChild(headerDiv);
    card.appendChild(summary);
    card.appendChild(linkWrapper);

    // Add card to grid
    grid.appendChild(card);
  });
}

// ---------- Initialization on page load ----------

document.addEventListener("DOMContentLoaded", function () {
  // Load project data (from sessionStorage if it exists)
  const projects = getProjectsFromStorage();

  // Render the skills list and the project cards
  renderSkills();
  renderProjects(projects);
});
