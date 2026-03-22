const KB = {
  summary:
    "Dynamic and results-oriented SDET and QA Automation Engineer with strong experience designing robust end-to-end test frameworks and delivering in Agile environments.",
  skills: [
    "Cypress",
    "Selenium",
    "TestNG",
    "JUnit",
    "Rest Assured",
    "GraphQL",
    "Postman",
    "GitLab",
    "Azure",
    "Bitbucket",
    "Functional, regression, smoke, and integration testing",
    "Datadog including RUM, logs, and synthetics",
  ],
  experience: [
    {
      company: "Bounteous x Accolite",
      title: "QA Functional and Automation Engineer",
      period: "February 2025 - Present, Remote",
      highlights: [
        "Automation across the Tribute Technology suite including Tribute Book, Tribute Video, Ecommerce Legacy, Front Runner, Front Runner Pro, TCO, and Funeral Tech.",
        "End-to-end QA for high-quality releases.",
      ],
    },
    {
      company: "LTIMindtree Ltd.",
      title: "QA Functional and Automation Engineer",
      period: "October 2021 - February 2025, Powai, Mumbai",
      highlights: [
        "Cypress and Selenium using Page Object Model and Cucumber BDD for UI and API testing.",
        "Led testing for Coldwell Banker platforms and Exclusive Look, with Postman, GraphQL, and Datadog monitoring.",
      ],
    },
    {
      company: "Hexaware Technology Ltd.",
      title: "Software Tester",
      period: "June 2019 - October 2020, Navi Mumbai",
      highlights: [
        "Manual and functional testing for ticketing systems with Java Selenium UI automation.",
        "Managed ALM and JIRA defect tracking and resolution support.",
      ],
    },
    {
      company: "Conneqt Business Solutions Limited",
      title: "Associate",
      period: "July 2018 - March 2019, Thane",
      highlights: ["Handled network testing and enterprise support solutions."],
    },
  ],
  projects: [
    {
      name: "eCommerce Legacy Touch",
      tech: "Shopify",
      role: "Full-stack QA Engineer",
    },
    {
      name: "Front Runner and Front Runner Pro",
      tech: "Web, management, florist, and tribute platform",
      role: "Full-stack QA Engineer",
    },
    {
      name: "Funeral Tech",
      tech: "Industry solution suite",
      role: "Full-stack QA Engineer",
    },
    {
      name: "Coldwell Banker",
      tech: "Next.js, React, Django, REST, Datadog",
      wins: ["80% test coverage improvement", "Optimized regression and smoke cycles"],
    },
    {
      name: "Exclusive Look",
      tech: "Angular, Django, GraphQL",
      wins: ["30% faster end-to-end testing", "Strong GraphQL validation coverage"],
    },
    {
      name: "Coldwell Banker Homes",
      tech: ".NET, JavaScript, SQL, REST",
      wins: ["40% test coverage improvement", "Supported on-time deployments"],
    },
  ],
  education: [
    "B.Sc. in Information Technology - Birla College, University of Mumbai (2015-2018)",
    "HSC - Panna Jr College, University of Mumbai (2013-2015)",
    "SSC - Don Bosco English High School (2013)",
  ],
  certs: [
    "E2E Cypress Automation (LTIMindtree, 2022)",
    "CAST (Excelsis, 2021)",
    "Core Java, JUnit, TestNG, UI and API Selenium (Excelsis, 2021)",
    "MERN Full Stack Developer (Coding Ninja, 2024-2025)",
    "GenAI for Everyone and IBM WatsonxAI (LTIMindtree, 2024)",
  ],
  personal: {
    dob: "20 March 1997",
    languages: ["English", "Hindi", "Marathi"],
    strengths: ["Adaptable", "Detail-oriented", "Active listener"],
  },
  contact: {
    phone: "+91-7498367949",
    email: "this.vineetpandey@gmail.com",
    linkedin: "https://www.linkedin.com/in/vineet-kumar-pandey20/",
  },
};

function normalize(text) {
  return (text || "").toLowerCase();
}

const INTENTS = [
  { key: "summary", tests: ["summary", "about", "overview", "who is vineet", "intro"] },
  { key: "skills", tests: ["skills", "competenc", "stack", "tools", "technology", "tech stack"] },
  { key: "experience", tests: ["experience", "work history", "companies", "roles", "job", "career"] },
  { key: "projects", tests: ["projects", "highlights", "case studies", "portfolio"] },
  { key: "education", tests: ["education", "degree", "college", "school"] },
  { key: "certs", tests: ["certification", "certifications", "courses", "training"] },
  { key: "contact", tests: ["contact", "email", "phone", "linkedin", "reach"] },
  { key: "personal", tests: ["personal", "dob", "languages", "strengths", "bio"] },
];

function detectIntent(question) {
  const normalizedQuestion = normalize(question);

  for (const intent of INTENTS) {
    for (const test of intent.tests) {
      if (normalizedQuestion.includes(test)) {
        return intent.key;
      }
    }
  }

  if (/(cypress|selenium|rest|postman|graphql|datadog)/.test(normalizedQuestion)) {
    return "skills";
  }

  if (/(bounteous|accolite|ltimindtree|hexaware|conneqt|experience|role)/.test(normalizedQuestion)) {
    return "experience";
  }

  if (/(project|coldwell|exclusive|front runner|funeral|shopify)/.test(normalizedQuestion)) {
    return "projects";
  }

  return null;
}

function answer(intent, question) {
  switch (intent) {
    case "summary":
      return KB.summary;
    case "skills":
      return `Key skills: ${KB.skills.join(", ")}.`;
    case "experience":
      return KB.experience
        .map((entry) => `- ${entry.company} - ${entry.title} (${entry.period}). ${entry.highlights.join(" ")}`)
        .join("\n");
    case "projects":
      return KB.projects
        .map((project) => {
          const extras = [];
          if (project.tech) extras.push(project.tech);
          if (project.wins) extras.push(`Wins: ${project.wins.join("; ")}`);
          if (project.role) extras.push(`Role: ${project.role}`);
          return `- ${project.name} - ${extras.join(" - ")}`;
        })
        .join("\n");
    case "education":
      return KB.education.map((item) => `- ${item}`).join("\n");
    case "certs":
      return KB.certs.map((item) => `- ${item}`).join("\n");
    case "personal":
      return `DOB: ${KB.personal.dob}\nLanguages: ${KB.personal.languages.join(", ")}\nStrengths: ${KB.personal.strengths.join(", ")}`;
    case "contact":
      return `Phone: ${KB.contact.phone}\nEmail: ${KB.contact.email}\nLinkedIn: ${KB.contact.linkedin}`;
    default: {
      const normalizedQuestion = normalize(question);
      const docs = [
        ["summary", KB.summary],
        ["skills", KB.skills.join(", ")],
        [
          "experience",
          KB.experience
            .map((entry) => [entry.company, entry.title, entry.period, entry.highlights.join(" ")].join(" - "))
            .join("\n"),
        ],
        [
          "projects",
          KB.projects
            .map((project) =>
              [project.name, project.tech, (project.wins || []).join(" "), project.role]
                .filter(Boolean)
                .join(" - ")
            )
            .join("\n"),
        ],
        ["education", KB.education.join(" | ")],
        ["certs", KB.certs.join(" | ")],
        ["personal", `DOB ${KB.personal.dob}; Languages ${KB.personal.languages.join(", ")}`],
        ["contact", Object.values(KB.contact).join(" | ")],
      ];

      let bestDoc = docs[0];
      let bestScore = 0;
      const tokens = normalizedQuestion.split(/[^a-z0-9+]+/).filter(Boolean);

      for (const doc of docs) {
        const text = normalize(doc[1]);
        let score = 0;

        for (const token of tokens) {
          if (text.includes(token)) {
            score += 1;
          }
        }

        if (score > bestScore) {
          bestDoc = doc;
          bestScore = score;
        }
      }

      if (bestScore === 0) {
        return "I could not find that in Vineet's profile. Try asking about his experience, projects, skills, education, or contact details.";
      }

      return bestDoc[1];
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const openChatButton = document.getElementById("open-chat");
  const chatWidget = document.getElementById("chat-widget");
  const closeChatButton = document.getElementById("close-chat");
  const chatBody = document.getElementById("chat-body");
  const chatInput = document.getElementById("chat-input");
  const sendButton = document.getElementById("send-btn");

  function appendMessage(text, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender === "user" ? "user-message" : "bot-message");
    messageDiv.textContent = text;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function handleUserMessage() {
    const text = (chatInput.value || "").trim();
    if (!text) return;

    appendMessage(text, "user");
    chatInput.value = "";

    const intent = detectIntent(text);
    const response = answer(intent, text);

    setTimeout(() => appendMessage(response, "bot"), 250);
  }

  openChatButton.addEventListener("click", () => {
    chatWidget.classList.remove("closed");
    chatWidget.setAttribute("aria-hidden", "false");
    openChatButton.style.display = "none";
    chatInput.focus();
  });

  closeChatButton.addEventListener("click", () => {
    chatWidget.classList.add("closed");
    chatWidget.setAttribute("aria-hidden", "true");
    openChatButton.style.display = "block";
  });

  sendButton.addEventListener("click", handleUserMessage);
  chatInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleUserMessage();
    }
  });
});
