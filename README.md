## 🌐 Vineet Kumar Pandey – About Page with Interactive Assistant

### 🧩 Overview

This project is a **modern personal “About” page** for **Vineet Kumar Pandey**, designed in the clean style of [mattpalmer.io](https://mattpalmer.io/about).
It includes a fully responsive layout (HTML + CSS only, no frameworks) and a **smart AI-style chat assistant** that answers questions about Vineet directly from his resume (PDF data converted to JSON knowledge base).

---

### ⚙️ Project Structure

```
📁 vineet-about/
│
├── index.html         # Main webpage (about page + chat widget)
├── styles.css         # Full styling and layout
├── script.js          # Vineet Assistant logic (PDF-powered Q&A)
├── hero.png           # Decorative hero/portrait image
└── README.md          # Project documentation (this file)
```

---

### 💬 Vineet Assistant – Features

- **Offline knowledge base** — answers are taken from Vineet’s resume (Professional Summary, Skills, Experience, Projects, Education, Certifications, and Contact Info).
- **Intent detection** — understands queries like:

  - “Show me Vineet’s experience”
  - “What are his certifications?”
  - “Tell me about his projects”
  - “Contact details?”

- **Keyword fallback search** — If a question doesn’t match a known intent, it searches all sections to find the most relevant info.
- **Context-aware tone** — Polished and factual answers, formatted as bullet points where needed.
- **No server / API needed** — Works entirely client-side.

---

### 🖥️ How to Run

1. **Download or clone** the project files.
2. Open `index.html` in any modern browser (Chrome, Edge, Firefox).
3. Click the **“Chat”** button at the bottom-right corner.
4. Ask questions like:

   - “Give me Vineet’s summary.”
   - “Show me his experience at LTIMindtree.”
   - “List his certifications.”
   - “What projects has he done?”
   - “How to contact him?”

---

### 🧠 How It Works

- `script.js` contains a small JSON object `KB` (Knowledge Base) extracted from Vineet’s resume.
- A simple **intent-detection engine** matches the question text to a category (summary, skills, projects, etc.).
- If no direct match is found, it runs a **keyword similarity** search across all fields and returns the best match.
- All messages are dynamically added to the chat container via JavaScript (no frameworks required).

---

### 🧩 Customization

| File         | What to Edit                 | Description                                               |
| ------------ | ---------------------------- | --------------------------------------------------------- |
| `index.html` | Hero text & section content  | Modify main About Page text or add new sections           |
| `styles.css` | Visual design                | Adjust colors, spacing, or fonts                          |
| `script.js`  | Knowledge base (`KB` object) | Update resume info, add new projects, or modify responses |
| `hero.png`   | Image                        | Replace with your own professional or abstract portrait   |

---

### 🧱 Dependencies

This project runs **100% locally**.
✅ No npm, Node.js, or API keys required.
✅ Compatible with all major browsers (Edge, Chrome, Safari, Firefox).

---

### 📦 Future Enhancements (optional ideas)

- 🔹 Add chat context memory (follow-up questions).
- 🔹 Integrate OpenAI API for natural responses (if desired).
- 🔹 Add dark/light theme toggle.
- 🔹 Deploy on GitHub Pages or Netlify.
- 🔹 Add speech-to-text support for the chat.

---

### 📄 License

This project is **open for personal or educational use**.
Feel free to reuse or modify for personal portfolios with credit to _Vineet Kumar Pandey_.

---

### 👤 Author

**Vineet Kumar Pandey**
Full-Stack SDET & QA Automation Engineer
📧 [this.vineetpandey@gmail.com](mailto:this.vineetpandey@gmail.com)
🔗 [linkedin.com/in/vineetpandey](https://linkedin.com/in/vineetpandey)
