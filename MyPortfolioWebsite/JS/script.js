const chatWindow = document.querySelector("#chat-window");
const chatForm = document.querySelector("#chat-form");
const chatInput = document.querySelector("#chat-input");
const sectionLabel = document.querySelector("#section-label");
const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-icon");
const paletteToggle = document.querySelector("#palette-toggle");
const palettePanel = document.querySelector("#palette-panel");

const projects = [
  {
    title: "Grand Hotel",
    tag: "Luxury",
    description:
      "A modern luxury hotel website designed to showcase elegant rooms, premium services, and a comfortable booking experience for guests.",
    stack: "HTML · CSS",
    url: "https://grandhotel-gemmechul.vercel.app/",
  },

  {
    title: "Ecommerce App",
    tag: "StoreBrand",
    description:
      "A modern e-commerce application that allows users to browse products, view product details, manage their cart, and enjoy a smooth online shopping experience.",
    stack: "HTML · Tailwind CSS · Next.js · React · Express.js",
    url: "https://ecommerce-storebrand.vercel.app/",
  },

  {
    title: "Manakireessaa",
    tag: "Rental",
    description:
      "A simple rental marketplace concept that helps people explore houses and apartments, compare details, and connect with listing owners.",
    stack: "HTML · Tailwind CSS · next js . React . Express JS",
    url: "#",
  },

  {
    title: "Ethiopian Airlines Exam Hub",
    tag: "EAEH",
    description:
      "A responsive Exam hub website concept with a clear layout, attractive department sections, and details Resource.",
    stack: "HTML · CSS · Tailwind CSS . React . Next JS . Postgres",
    url: "#",
  },

  {
    title: "Moggaasa Maqaa",
    tag: "MaqaaAmmayyaa",
    description:
      "A responsive layout Letters, spacing, and mobile-friendly page sections.",
    stack:
      "HTML · Tailwind CSS . React JS . TypeScript . Express Js . Bun. Postgres",
    url: "#",
  },

  {
    title: "Carraakee Daily Lottery",
    tag: "Carrakee",
    description:
      "A responsive layout Letters, spacing, and mobile-friendly page sections.",
    stack:
      "HTML · Tailwind CSS . React JS . TypeScript . Express Js . Bun. Postgres",
    url: "#",
  },

  {
    title: "Portfolio Website",
    tag: "PORTFOLIO",
    description:
      "This chat style developer portfolio, including theme controls and interactive topic navigation.",
    stack: "HTML · CSS · Tailwind CSS . JavaScript",
    url: "https://gemmechuportfolioweb.vercel.app/",
  },
];

let projectIndex = 0;

function addMessage(content, sender = "assistant") {
  const message = document.createElement("div");
  message.className = `message ${sender === "user" ? "user-message" : "assistant-message"}`;
  if (sender === "assistant") {
    const avatar = document.createElement("div");
    avatar.className = "chat-avatar";
    avatar.textContent = "GB";
    message.appendChild(avatar);
  }
  const body = document.createElement("div");
  body.className = "message-content";
  body.innerHTML = content;
  if (sender === "user") {
    body.style.marginLeft = "auto";
    body.style.padding = "9px 14px";
    body.style.borderRadius = "16px 16px 3px 16px";
    body.style.background = "var(--surface-2)";
    body.style.maxWidth = "85%";
  }
  message.appendChild(body);
  chatWindow.appendChild(message);
  message.scrollIntoView({ behavior: "smooth", block: "nearest" });
  return message;
}

function addActions(actions) {
  const row = document.createElement("div");
  row.className = "options-row";
  actions.forEach((item) => {
    const button = document.createElement("button");
    button.textContent = item.label;
    if (item.outline) button.classList.add("outline");
    button.addEventListener("click", () => showSection(item.action));
    row.appendChild(button);
  });
  chatWindow.appendChild(row);
}

function showSection(topic) {
  const key = (topic || "").toLowerCase().trim();
  chatWindow.innerHTML = "";
  const titles = {
    about: "About Me",
    skills: "Skills",
    projects: "Projects",
    clients: "Clients",
    contact: "Contact",
    hobbies: "Hobbies",
    cv: "CV/Resume",
    hello: "Welcome",
  };
  sectionLabel.textContent = titles[key] || "Portfolio";

  if (key === "about") {
    addMessage(
      `<p class="info-row">I'm <strong>Gemmechu Bekele</strong>, a Software developer focused on building clean, responsive, and easy to use web interfaces.</p>
      <ul class="info-row">
        <li>🏠 Based in Addis Ababa, Ethiopia</li>
        <li>💻 Learning and building with HTML, CSS, JavaScript, and TypeScript</li>
        <li>🎯 Interested in responsive design and practical web projects</li>
        <li>🤝 Open to learning, collaboration, and junior opportunities</li>
      </ul>`,
    );
    addActions([
      { label: "View My Skills", action: "skills" },
      { label: "View My Projects", action: "projects", outline: true },
    ]);
  } else if (key === "skills") {
    addMessage(
      `
      <p class="info-row">Here are the technologies I'm currently learning and practicing.</p>
      <p class="info-row"><strong>Frontend</strong></p>
      <div class="skill-line">
        <span class="skill-chip">HTML5</span>
        <span class="skill-chip">CSS3</span>
        <span class="skill-chip">JS</span>
        <span class="skill-chip">TailwindCSS</span>
        <span class="skill-chip">TypeScript</span>
        <span class="skill-chip">Bootstrap</span>
        <span class="skill-chip">React and Next</span>
      </div>

      <p class="info-row"><strong>Backend</strong></p>
      <div class="skill-line">
        <span class="skill-chip">Node JS</span>
        <span class="skill-chip">Bun</span>
        <span class="skill-chip">Express JS</span>
        <span class="skill-chip">Django</span>
        <span class="skill-chip">Python</span>
        <span class="skill-chip">Next JS</span>
      </div>

      <p class="info-row"><strong>Database</strong></p>
      <div class="skill-line">
        <span class="skill-chip">SQL</span>
        <span class="skill-chip">MYSQL</span>
        <span class="skill-chip">Postgres</span>
        <span class="skill-chip">MongoDB</span>
      </div>

      <p class="info-row"><strong>Mobile</strong></p>
      <div class="skill-line">
        <span class="skill-chip">Dart</span>
        <span class="skill-chip">Flutter</span>
        <span class="skill-chip">React Native</span>
      </div>

      <p class="info-row"><strong>Tools & Development</strong></p>
      <div class="skill-line">
        <span class="skill-chip">Git</span>
        <span class="skill-chip">GitHub</span>
        <span class="skill-chip">Figma</span>
        <span class="skill-chip">AI Models</span>
        <span class="skill-chip">RAG</span>
        <span class="skill-chip">Prompt Eng</span>
        <span class="skill-chip">AI Agents</span>
        <span class="skill-chip">Vector DB</span>
      </div>`,
    );
    addActions([
      { label: "View My Projects", action: "projects" },
      { label: "Download CV", action: "cv", outline: true },
    ]);
  } else if (key === "projects") {
    renderProject();
  } else if (key === "clients") {
    addMessage(
      `<p class="info-row">
        I'm building my professional experience and looking forward to collaborating with teams, 
        businesses, and people who need thoughtful web experiences.
      </p>
        <div class="client-grid">
          <div class="client-logo">Personal Projects</div>
          <div class="client-logo">Learning Projects</div>
          <div class="client-logo">Open Source</div>
          <div class="client-logo">Web Design</div>
          <div class="client-logo">UI Practice</div>
          <div class="client-logo">Collaboration</div>
      </div>`,
    );
    addActions([
      { label: "Contact Me", action: "contact" },
      { label: "View Projects", action: "projects", outline: true },
    ]);
  } else if (key === "contact") {
    addMessage(
      `<p class="info-row">I'm open to connecting about frontend projects, learning opportunities, and collaboration.</p>
      <p class="info-row">✉️  Email: <a class="contact-link" href="mailto:gemechu.bekele.berga@gmail.com">gemechu.bekele.berga@gmail.com</a></p>
      <p class="info-row">🏠 Location: Addis Ababa, Ethiopia</p>
      <p class="info-row">📞 Phone:+251939322619</p>
      <div class="social-row">
        <a href="https://github.com/GemmechuBekele" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
        <a href="https://codeforces.com/profile/Geme7" target="_blank" rel="noreferrer" aria-label="Codeforces">CF</a>
        <a href="https://leetcode.com/u/AmanuelBekeleA/" target="_blank" rel="noreferrer" aria-label="LeetCode">LC</a>
        <a href="https://www.linkedin.com/in/amanuelbekele7/?isSelfProfile=true" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
        <a href="https://web.facebook.com/gemmechubekkele" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
        <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">X</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">IG</a>
      </div>`,
    );
    addActions([
      { label: "View Projects", action: "projects" },
      { label: "About Me", action: "about", outline: true },
    ]);
  } else if (key === "hobbies") {
    addMessage(
      `<p class="info-row">
      Outside of coding, I enjoy learning new technologies, 
      practicing design-to-code projects, 
      and improving my problem-solving skills.
      </p>`,
    );
    addActions([
      { label: "About Me", action: "about" },
      { label: "Contact Me", action: "contact", outline: true },
    ]);
  } else if (key === "cv" || key === "resume") {
    addMessage(`
        <p>You can download my CV. </p>

        <a
          href="./assets/cv.pdf"
          download="Gemmechu_Bekele_CV.pdf"
          class="cv-download"
        >
          Download My CV (PDF)
        </a>
      `);
    addActions([
      { label: "View Skills", action: "skills" },
      { label: "Contact Me", action: "contact", outline: true },
    ]);
  } else {
    addMessage(
      `<p class="info-row">Hi, I'm <strong>Gemmechu Bekele</strong>, a software developer learning and building modern web interfaces.</p>
      <p class="info-row">Choose a topic below or type <strong>about</strong>, <strong>skills</strong>, <strong>projects</strong>, <strong>clients</strong>, or <strong>contact</strong>.</p>`,
    );
    addActions([
      { label: "About Me", action: "about" },
      { label: "Skills", action: "skills", outline: true },
      { label: "Projects", action: "projects" },
    ]);
  }
}

function renderProject() {
  const project = projects[projectIndex];
  const html = `<p 
  class="next-project
    pl-5 py-2 pl-lg-0 border border-black/[0.09]
    dark:border-white/[0.10]
    rounded-[15px]
    text-gray-300
    shadow-[0_30px_80px_rgba(0,0,0,0.2)]
    dark:shadow-[0_30px_80px_rgba(0,0,0,0.5)]
    ">
  Project ${projectIndex + 1} of ${projects.length}. Use the button below to explore the next project.</p>
  <div class="project-card">
    <div class="project-art">
      <a href="${project.url}" target="_blank" rel="noreferrer" aria-label="${project.title}">${project.tag}</a>
    </div>
    <div class="project-details">
      <h3>${project.title}</h3>
      <p class="info-row">${project.description}</p>
      <p><strong>${project.stack}</strong></p>
      <button class="inline-action" id="next-project">Next Project <span class="pl-2">❯❯</span></button>
    </div>
  </div>`;
  addMessage(html);
  document.querySelector("#next-project").addEventListener("click", () => {
    projectIndex = (projectIndex + 1) % projects.length;
    chatWindow.innerHTML = "";
    renderProject();
  });
  addActions([
    { label: "View My Clients", action: "clients" },
    { label: "Contact Me", action: "contact", outline: true },
  ]);
}

function interpretMessage(value) {
  const text = value.toLowerCase().trim();
  const topics = [
    "about",
    "skills",
    "projects",
    "clients",
    "contact",
    "hobbies",
    "cv",
    "resume",
    "hello",
  ];
  const matched = topics.find(
    (topic) => text === topic || text.includes(topic),
  );
  if (matched) return matched;
  if (text.includes("education") || text.includes("experience")) return "about";
  if (text.includes("technology") || text.includes("tech stack"))
    return "skills";
  if (
    text.includes("email") ||
    text.includes("hire") ||
    text.includes("message")
  )
    return "contact";
  return "hello";
}

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = chatInput.value.trim();
  if (!value) return;
  addMessage(`<p>${escapeHTML(value)}</p>`, "user");
  chatInput.value = "";
  const topic = interpretMessage(value);
  window.setTimeout(() => showSection(topic), 120);
});

document.querySelectorAll("[data-action]").forEach((button) => {
  button.addEventListener("click", () => showSection(button.dataset.action));
});

themeToggle.addEventListener("click", () => {
  const next = document.body.dataset.theme === "dark" ? "light" : "dark";

  document.body.dataset.theme = next;

  document.documentElement.classList.toggle("dark", next === "dark");

  themeIcon.textContent = next === "dark" ? "☾" : "☀";

  themeToggle.setAttribute(
    "aria-label",
    `Switch to ${next === "dark" ? "light" : "dark"} mode`,
  );

  try {
    localStorage.setItem("portfolio-theme-mode", next);
  } catch (_) {}
});

paletteToggle.addEventListener("click", () =>
  palettePanel.classList.toggle("open"),
);
document.querySelectorAll("[data-theme-color]").forEach((swatch) => {
  swatch.addEventListener("click", () => {
    const color = swatch.dataset.themeColor;
    document.body.classList.remove(
      "theme-gold",
      "theme-blue",
      "theme-green",
      "theme-pink",
      "theme-purple",
    );
    document.body.classList.add(`theme-${color}`);
    document
      .querySelectorAll(".swatch")
      .forEach((item) => item.classList.toggle("active", item === swatch));
    try {
      localStorage.setItem("portfolio-accent-color", color);
    } catch (_) {}
  });
});

document.addEventListener("click", (event) => {
  if (
    !palettePanel.contains(event.target) &&
    !paletteToggle.contains(event.target)
  )
    palettePanel.classList.remove("open");
});

function escapeHTML(value) {
  return value.replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[char],
  );
}

try {
  const savedMode = localStorage.getItem("portfolio-theme-mode");
  if (savedMode === "light" || savedMode === "dark") {
    document.body.dataset.theme = savedMode;

    // Restore Tailwind dark mode
    document.documentElement.classList.toggle("dark", savedMode === "dark");

    themeIcon.textContent = savedMode === "dark" ? "☾" : "☀";
  }
  const savedAccent = localStorage.getItem("portfolio-accent-color");
  if (["gold", "blue", "green", "pink", "purple"].includes(savedAccent)) {
    document.body.classList.remove(
      "theme-gold",
      "theme-blue",
      "theme-green",
      "theme-pink",
      "theme-purple",
    );
    document.body.classList.add(`theme-${savedAccent}`);
    document
      .querySelectorAll(".swatch")
      .forEach((item) =>
        item.classList.toggle(
          "active",
          item.dataset.themeColor === savedAccent,
        ),
      );
  }
} catch (_) {}
