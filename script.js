/* ════════════════════════════════════════════════════════════════
   PERSONAL CONFIG — edit these values first
   ════════════════════════════════════════════════════════════════ */
const PROFILE = {
  name: 'Evgheni Sischin',
  email: 'newdresden@yahoo.com',
  github: 'https://github.com/Sischin-Evgheni',
  site: 'https://sischin-evgheni.github.io/Portfolio-seit/',
  // Contact form is delivered via formsubmit.co (no backend needed on GitHub Pages).
  // The very first message triggers a one-time activation e-mail to PROFILE.email.
  formEndpoint: 'https://formsubmit.co/ajax/newdresden@yahoo.com'
};

/* Real projects (language-independent part). Texts live in TRANSLATIONS → "projects.items". */
const PROJECTS = [
  {
    id: 'helper',
    name: 'KI-Lernhelfer Bot',
    stack: ['Python', 'aiogram 3', 'Google Gemini 2.5', 'Pillow', 'asyncio'],
    repo: '',
    live: '',
    code: `@dp.message(F.photo)
async def handle_photo(msg):
    image = Image.open(photo_bytes)
    answer = await asyncio.to_thread(
        gemini.generate, [image, PROMPT])
    await msg.answer(answer.text)`
  },
  {
    id: 'zensus',
    name: 'Zensus-Datenbank 2011 / 2022',
    stack: ['PostgreSQL', 'SQL DDL', 'Datenmodellierung', 'CSV-ETL'],
    repo: '',
    live: '',
    code: `CREATE TABLE "GEMEINDE" (
  "ARS"  CHAR(12) PRIMARY KEY,
  "GEMEINDE_NAME" VARCHAR(150),
  "BUNDESLAND_ARS" CHAR(2)
    REFERENCES "BUNDESLAND"
);  -- 10 786 Gemeinden`
  },
  {
    id: 'portfolio',
    name: 'Portfolio · dieses Projekt',
    stack: ['Vanilla JS', 'Canvas API', 'i18n DE/EN/RU', 'GitHub Pages'],
    repo: 'https://github.com/Sischin-Evgheni/Portfolio-seit',
    live: 'https://sischin-evgheni.github.io/Portfolio-seit/',
    code: `const term = new Terminal();
term.on('help', listCommands);
canvas.onmousemove = attract;
setLang(navigator.language);
// press Ctrl + K  ⌨`
  }
];

/* ─── TRANSLATIONS ─── */
const TRANSLATIONS = {
  de: {
    "nav.about": "Über mich", "nav.services": "Leistungen", "nav.skills": "Skills", "nav.experience": "Erfahrung",
    "nav.projects": "Projekte", "nav.process": "Arbeitsweise", "nav.contact": "Kontakt",
    "hero.status": "Offen für neue Projekte",
    "hero.roles": ["Fullstack-Entwickler", "KI-Integrationsspezialist", "Datenbank-Modellierer", "Bot-Entwickler"],
    "hero.subtitle": "Ich verbinde Mensch\nund Maschine.",
    "hero.description": "Ich entwickle skalierbare, KI-gestützte Webanwendungen, die Menschen und Technologie nahtlos zusammenbringen. Präzise Architektur, durchdachtes Interface — beides gehört für mich untrennbar zusammen.",
    "hero.contactBtn": "Kontakt aufnehmen →",
    "hero.cvBtn": "↓ Lebenslauf",
    "hero.hint": "Tipp: Drücke Ctrl + K für das Terminal",
    "services.title": "Leistungen",
    "services.statExp": "Jahre Erfahrung",
    "services.statClients": "Unternehmen betreut",
    "services.statSpeed": "Schnelleres Delivery",
    "services.statReply": "Antwortzeit",
    "services.web.title": "Web-Apps & Produktentwicklung",
    "services.web.desc": "Von der ersten Idee bis zur Launch-Ready Lösung — moderne, schnelle und wartbare Webanwendungen für Startups und Mittelstand.",
    "services.web.item1": "React, Next.js und TypeScript",
    "services.web.item2": "Performance-optimierte UX",
    "services.web.item3": "Saubere Architektur und Skalierung",
    "services.ai.title": "KI-Integration & Automatisierung",
    "services.ai.desc": "Ich verbinde bestehende Prozesse mit KI-Features, damit Teams schneller arbeiten und bessere Entscheidungen treffen.",
    "services.ai.item1": "GPT-, Gemini-, RAG- und Agenten-Workflows",
    "services.ai.item2": "Chatbots (Telegram & Web) und intelligente Dashboards",
    "services.ai.item3": "Analyse, Dokumentenverarbeitung und Automatisierung",
    "services.ops.title": "Datenbanken & Datenmodellierung",
    "services.ops.desc": "Saubere relationale Modelle, zuverlässige Importe und Daten, auf die man sich verlassen kann.",
    "services.ops.item1": "ER-Modelle, Normalisierung, Schlüssel",
    "services.ops.item2": "ETL: Bereinigung, CSV-Import, Validierung",
    "services.ops.item3": "PostgreSQL, SQL-Abfragen und Reports",
    "about.title": "Über mich",
    "about.p1": "Ich bin Fullstack-Entwickler mit über 5 Jahren Erfahrung in der Entwicklung moderner Webanwendungen — von der Datenbankschicht bis zum letzten Pixel im Interface. Mein Fokus liegt auf der intelligenten Integration von KI in bestehende Produktprozesse.",
    "about.p2": "Was mich antreibt: die Überzeugung, dass exzellente Software nicht nur funktioniert, sondern sich richtig anfühlt. Ich arbeite gerne mit agilen Teams zusammen und bringe sowohl technische Tiefe als auch ein Gespür für Nutzerbedürfnisse mit.",
    "about.labelExp": "Erfahrung", "about.exp": "5+ Jahre",
    "about.labelLocation": "Standort", "about.location": "Remote / EU",
    "about.labelLang": "Sprachen", "about.langs": "DE, EN, RU, RO",
    "about.labelFocus": "Schwerpunkt", "about.focus": "Fullstack & KI",
    "skills.title": "Technologien", "skills.tools": "Tools & Infra", "skills.ai": "KI & Daten",
    "exp.title": "Berufserfahrung",
    "projects.title": "Ausgewählte Projekte", "projects.featured": "Projekt",
    "projects.code": "Code", "projects.live": "Live ansehen", "projects.private": "Code auf Anfrage",
    "process.title": "Arbeitsweise",
    "process.s1.title": "Verstehen", "process.s1.desc": "Kurzes Gespräch: Ziel, Nutzer, Daten, Deadline. Danach weiß jeder, was „fertig“ bedeutet.",
    "process.s2.title": "Prototyp", "process.s2.desc": "Innerhalb weniger Tage ein klickbarer Prototyp oder ein funktionierender Datenfluss — echtes Feedback statt Folien.",
    "process.s3.title": "Bauen", "process.s3.desc": "Iterativ, mit Git, sauberer Struktur und regelmäßigen Zwischenständen. Keine Blackbox.",
    "process.s4.title": "Übergeben", "process.s4.desc": "Deployment, Dokumentation und Einweisung — damit das Projekt auch ohne mich weiterläuft.",
    "contact.badge": "Was kommt als nächstes?",
    "contact.title": "Kontakt aufnehmen",
    "contact.desc": "Ich bin offen für neue Projekte, Freelance-Anfragen und Festanstellungen im deutschsprachigen Raum. Schreiben Sie mir — ich melde mich schnellstmöglich zurück.",
    "contact.avail": "Verfügbar",
    "contact.availValue": "Remote / EU",
    "contact.response": "Antwortzeit",
    "contact.responseValue": "Innerhalb von 24 Stunden",
    "contact.localTime": "Meine Ortszeit", "contact.meLine": "Freue mich auf Ihre Nachricht!",
    "contact.formName": "Name",
    "contact.formEmail": "E-Mail",
    "contact.formMessage": "Nachricht",
    "contact.formSubmit": "Nachricht senden",
    "contact.formSending": "Wird gesendet…",
    "contact.formStatus": "Ihre Nachricht geht direkt in mein Postfach.",
    "contact.formOk": "Danke! Ihre Nachricht ist angekommen — ich melde mich bald.",
    "contact.formFail": "Senden fehlgeschlagen. Ich öffne stattdessen Ihr E-Mail-Programm…", "contact.formLocal": "Das Formular funktioniert nur auf der Live-Seite (github.io). Ich öffne Ihr E-Mail-Programm…", "contact.formActivate": "Fast geschafft: Das Formular wird gerade aktiviert. Bitte später erneut senden.",
    "contact.copied": "E-Mail kopiert!",
    "footer.built": "Entwickelt von Evgheni Sischin",
    "footer.source": "Quellcode auf GitHub",
    "toast.theme": "Design gewechselt",
    "exp.jobs": [
      { period: "2022 — Heute", title: "Senior Fullstack Engineer", company: "KI-Plattform GmbH", location: "Berlin · Remote",
        bullets: ["Entwicklung und Architektur einer KI-gestützten SaaS-Plattform für Unternehmensworkflows — von der API-Schicht bis zum interaktiven React-Dashboard, genutzt von über 80 Unternehmenskunden.", "Integration von Large Language Models (OpenAI, Anthropic) in bestehende Geschäftsprozesse — einschließlich RAG-Pipelines, semantischer Suche und automatisierter Dokumentenanalyse.", "Performance-Optimierung des Backends: API-Latenz um 55 % reduziert durch Query-Optimierung, Caching-Strategien und asynchrone Verarbeitung."] },
      { period: "2020 — 2022", title: "Frontend Developer", company: "DigitalWerk AG", location: "München · Hybrid",
        bullets: ["Aufbau eines firmenweiten Design-Systems in React und TypeScript — reduzierte die Entwicklungszeit neuer Features um 35 % und schuf eine einheitliche Produktsprache über 4 Produktteams hinweg.", "Enge Zusammenarbeit mit UX-Designern und Produktmanagern in agilen Sprints — vollständige Umsetzung komplexer Benutzeroberflächen nach Figma-Spezifikationen.", "Einführung von End-to-End-Tests (Playwright) und CI/CD-Workflows, die die Fehlerrate in Production-Releases um 60 % senkten."] },
      { period: "2018 — 2020", title: "Webentwickler", company: "Softlab Solutions", location: "Remote",
        bullets: ["Entwicklung von Kundenprojekten für mittelständische Unternehmen: E-Commerce-Plattformen, Buchungssysteme und interne Verwaltungstools.", "Aufbau RESTful APIs mit Node.js und PostgreSQL, Integration von Zahlungsanbietern (Stripe, PayPal) und Drittanbieter-Services."] }
    ],
    "projects.items": {
      helper: "Telegram-Bot, der Fotos von Aufgaben mit Google Gemini 2.5 Flash analysiert und eine verständliche Lösung mit Erklärung zurückschickt. Asynchron mit aiogram 3, Bildverarbeitung mit Pillow, Schlüssel sicher in .env, Schutz vor dem 4096-Zeichen-Limit von Telegram.",
      zensus: "Relationales Datenmodell für die Zensus-Daten 2011 und 2022: Bundesländer, 10 786 Gemeinden und Bevölkerungsstatistiken nach Alter und Familienstand. Rohdaten aus Excel bereinigt, als CSV exportiert und per SQL-Skript mit Primär- und Fremdschlüsseln in PostgreSQL importiert.",
      portfolio: "Diese Seite: ohne Framework, dreisprachig, mit interaktivem Neuronen-Hintergrund, eingebautem Terminal (Ctrl + K), Dark/Light-Mode und echtem Kontaktformular — gehostet auf GitHub Pages."
    }
  },
  en: {
    "nav.about": "About", "nav.services": "Services", "nav.skills": "Skills", "nav.experience": "Experience",
    "nav.projects": "Projects", "nav.process": "Process", "nav.contact": "Contact",
    "hero.status": "Open to new projects",
    "hero.roles": ["Fullstack Developer", "AI Integration Specialist", "Database Modeler", "Bot Builder"],
    "hero.subtitle": "I connect humans\nand machines.",
    "hero.description": "I build scalable, AI-powered web applications that bring people and technology together seamlessly. Precise architecture, thoughtful interfaces — both are inseparable for me.",
    "hero.contactBtn": "Get in touch →",
    "hero.cvBtn": "↓ Resume",
    "hero.hint": "Tip: press Ctrl + K to open the terminal",
    "services.title": "Services",
    "services.statExp": "Years of experience",
    "services.statClients": "Companies supported",
    "services.statSpeed": "Faster delivery",
    "services.statReply": "Reply time",
    "services.web.title": "Web Apps & Product Development",
    "services.web.desc": "From the first idea to a launch-ready solution — modern, fast, and maintainable web applications for startups and medium-sized businesses.",
    "services.web.item1": "React, Next.js, and TypeScript",
    "services.web.item2": "Performance-optimized UX",
    "services.web.item3": "Clean architecture and scaling",
    "services.ai.title": "AI Integration & Automation",
    "services.ai.desc": "I connect existing workflows with AI features so teams can move faster and make better decisions.",
    "services.ai.item1": "GPT, Gemini, RAG, and agent workflows",
    "services.ai.item2": "Chatbots (Telegram & web) and smart dashboards",
    "services.ai.item3": "Analytics, document processing, and automation",
    "services.ops.title": "Databases & Data Modeling",
    "services.ops.desc": "Clean relational models, reliable imports, and data you can actually trust.",
    "services.ops.item1": "ER models, normalization, keys",
    "services.ops.item2": "ETL: cleaning, CSV import, validation",
    "services.ops.item3": "PostgreSQL, SQL queries, and reports",
    "about.title": "About Me",
    "about.p1": "I am a fullstack developer with 5+ years of experience building modern web applications — from the database layer to the last pixel of the interface. My focus is on intelligently integrating AI into existing product workflows.",
    "about.p2": "What drives me: the conviction that great software not only works, but feels right. I enjoy collaborating with agile teams and bring both technical depth and a strong sense for user needs.",
    "about.labelExp": "Experience", "about.exp": "5+ Years",
    "about.labelLocation": "Location", "about.location": "Remote / EU",
    "about.labelLang": "Languages", "about.langs": "DE, EN, RU, RO",
    "about.labelFocus": "Focus", "about.focus": "Fullstack & AI",
    "skills.title": "Technologies", "skills.tools": "Tools & Infra", "skills.ai": "AI & Data",
    "exp.title": "Work Experience",
    "projects.title": "Featured Projects", "projects.featured": "Project",
    "projects.code": "Code", "projects.live": "View live", "projects.private": "Code on request",
    "process.title": "How I Work",
    "process.s1.title": "Understand", "process.s1.desc": "A short call: goal, users, data, deadline. Afterwards everyone knows what “done” means.",
    "process.s2.title": "Prototype", "process.s2.desc": "A clickable prototype or working data flow within days — real feedback instead of slides.",
    "process.s3.title": "Build", "process.s3.desc": "Iterative, with Git, clean structure, and regular check-ins. No black box.",
    "process.s4.title": "Hand over", "process.s4.desc": "Deployment, documentation, and onboarding — so the project keeps running without me.",
    "contact.badge": "What's Next?",
    "contact.title": "Get In Touch",
    "contact.desc": "I am open to new projects, freelance requests, and full-time positions in the DACH region. Write me — I will get back to you as soon as possible.",
    "contact.avail": "Available",
    "contact.availValue": "Remote / EU",
    "contact.response": "Response time",
    "contact.responseValue": "Within 24 hours",
    "contact.localTime": "My local time", "contact.meLine": "Looking forward to hearing from you!",
    "contact.formName": "Name",
    "contact.formEmail": "E-mail",
    "contact.formMessage": "Message",
    "contact.formSubmit": "Send message",
    "contact.formSending": "Sending…",
    "contact.formStatus": "Your message goes straight to my inbox.",
    "contact.formOk": "Thank you! Your message arrived — I'll get back to you soon.",
    "contact.formFail": "Sending failed. Opening your e-mail app instead…", "contact.formLocal": "The form only works on the live site (github.io). Opening your e-mail app…", "contact.formActivate": "Almost there: the form is being activated. Please try again a bit later.",
    "contact.copied": "E-mail copied!",
    "footer.built": "Designed & Built by Evgheni Sischin",
    "footer.source": "Source on GitHub",
    "toast.theme": "Theme switched",
    "exp.jobs": [
      { period: "2022 — Present", title: "Senior Fullstack Engineer", company: "KI-Plattform GmbH", location: "Berlin · Remote",
        bullets: ["Designed and built an AI-powered SaaS platform for enterprise workflows — from the API layer to an interactive React dashboard used by 80+ enterprise clients.", "Integrated Large Language Models (OpenAI, Anthropic) into existing business processes — including RAG pipelines, semantic search, and automated document analysis.", "Optimized backend performance: reduced API latency by 55% through query optimization, caching strategies, and async processing."] },
      { period: "2020 — 2022", title: "Frontend Developer", company: "DigitalWerk AG", location: "Munich · Hybrid",
        bullets: ["Built a company-wide design system in React and TypeScript — reduced feature development time by 35% and established a unified product language across 4 product teams.", "Collaborated closely with UX designers and product managers in agile sprints, responsible for the complete implementation of complex UIs from Figma specifications.", "Introduced end-to-end tests (Playwright) and CI/CD workflows that reduced production release error rates by 60%."] },
      { period: "2018 — 2020", title: "Web Developer", company: "Softlab Solutions", location: "Remote",
        bullets: ["Developed client projects for small and medium businesses: e-commerce platforms, booking systems, and internal admin tools.", "Built RESTful APIs with Node.js and PostgreSQL, integrated payment providers (Stripe, PayPal) and third-party services."] }
    ],
    "projects.items": {
      helper: "A Telegram bot that analyzes photos of assignments with Google Gemini 2.5 Flash and replies with a clear, explained solution. Async with aiogram 3, image handling with Pillow, secrets kept in .env, and a guard for Telegram's 4096-character limit.",
      zensus: "A relational data model for the German census 2011 and 2022: federal states, 10,786 municipalities, and population statistics by age and marital status. Raw Excel data cleaned, exported to CSV, and imported into PostgreSQL via an SQL script with primary and foreign keys.",
      portfolio: "This very site: no framework, three languages, an interactive neural-network background, a built-in terminal (Ctrl + K), dark/light mode, and a working contact form — hosted on GitHub Pages."
    }
  },
  ru: {
    "nav.about": "Обо мне", "nav.services": "Услуги", "nav.skills": "Навыки", "nav.experience": "Опыт",
    "nav.projects": "Проекты", "nav.process": "Как я работаю", "nav.contact": "Контакт",
    "hero.status": "Открыт для новых проектов",
    "hero.roles": ["Fullstack-разработчик", "Специалист по интеграции ИИ", "Проектировщик баз данных", "Разработчик ботов"],
    "hero.subtitle": "Я соединяю людей\nи машины.",
    "hero.description": "Разрабатываю масштабируемые веб-приложения с интеграцией ИИ, которые органично объединяют людей и технологии. Точная архитектура, продуманный интерфейс — для меня это неразделимо.",
    "hero.contactBtn": "Написать мне →",
    "hero.cvBtn": "↓ Резюме",
    "hero.hint": "Подсказка: нажмите Ctrl + K, чтобы открыть терминал",
    "services.title": "Услуги",
    "services.statExp": "Лет опыта",
    "services.statClients": "Поддержанных компаний",
    "services.statSpeed": "Быстрее доставка",
    "services.statReply": "Время ответа",
    "services.web.title": "Веб-приложения и разработка продуктов",
    "services.web.desc": "От первой идеи до готового к запуску решения — современные, быстрые и поддерживаемые веб-приложения для стартапов и среднего бизнеса.",
    "services.web.item1": "React, Next.js и TypeScript",
    "services.web.item2": "UX с оптимизацией производительности",
    "services.web.item3": "Чистая архитектура и масштабируемость",
    "services.ai.title": "Интеграция ИИ и автоматизация",
    "services.ai.desc": "Я связываю существующие процессы с функциями ИИ, чтобы команды работали быстрее и принимали лучшие решения.",
    "services.ai.item1": "GPT, Gemini, RAG и агентные процессы",
    "services.ai.item2": "Чат-боты (Telegram и веб) и умные дашборды",
    "services.ai.item3": "Аналитика, обработка документов и автоматизация",
    "services.ops.title": "Базы данных и моделирование",
    "services.ops.desc": "Чистые реляционные модели, надёжный импорт и данные, которым можно доверять.",
    "services.ops.item1": "ER-модели, нормализация, ключи",
    "services.ops.item2": "ETL: очистка, импорт CSV, валидация",
    "services.ops.item3": "PostgreSQL, SQL-запросы и отчёты",
    "about.title": "Обо мне",
    "about.p1": "Я fullstack-разработчик с более чем 5-летним опытом создания современных веб-приложений — от слоя базы данных до последнего пикселя интерфейса. Мой фокус — умная интеграция ИИ в существующие продуктовые процессы.",
    "about.p2": "Что меня движет: убеждение, что отличный программный продукт не просто работает, а ощущается правильно. Я люблю работать с agile-командами и привношу как техническую глубину, так и чуткость к потребностям пользователей.",
    "about.labelExp": "Опыт", "about.exp": "5+ лет",
    "about.labelLocation": "Локация", "about.location": "Удалённо / ЕС",
    "about.labelLang": "Языки", "about.langs": "DE, EN, RU, RO",
    "about.labelFocus": "Фокус", "about.focus": "Fullstack & ИИ",
    "skills.title": "Технологии", "skills.tools": "Инструменты", "skills.ai": "ИИ и данные",
    "exp.title": "Опыт работы",
    "projects.title": "Избранные проекты", "projects.featured": "Проект",
    "projects.code": "Код", "projects.live": "Открыть", "projects.private": "Код по запросу",
    "process.title": "Как я работаю",
    "process.s1.title": "Понять", "process.s1.desc": "Короткий созвон: цель, пользователи, данные, сроки. После него всем ясно, что значит «готово».",
    "process.s2.title": "Прототип", "process.s2.desc": "За несколько дней — кликабельный прототип или работающий поток данных. Живой фидбек вместо слайдов.",
    "process.s3.title": "Разработка", "process.s3.desc": "Итеративно, с Git, понятной структурой и регулярными промежуточными результатами. Никакого «чёрного ящика».",
    "process.s4.title": "Передача", "process.s4.desc": "Деплой, документация и инструктаж — чтобы проект работал и без меня.",
    "contact.badge": "Что дальше?",
    "contact.title": "Написать мне",
    "contact.desc": "Открыт для новых проектов, фриланс-запросов и постоянных позиций. Напишите мне — я отвечу как можно скорее.",
    "contact.avail": "Доступен",
    "contact.availValue": "Удалённо / ЕС",
    "contact.response": "Время ответа",
    "contact.responseValue": "В течение 24 часов",
    "contact.localTime": "Моё местное время", "contact.meLine": "Буду рад вашему сообщению!",
    "contact.formName": "Имя",
    "contact.formEmail": "E-mail",
    "contact.formMessage": "Сообщение",
    "contact.formSubmit": "Отправить сообщение",
    "contact.formSending": "Отправляю…",
    "contact.formStatus": "Сообщение придёт прямо мне на почту.",
    "contact.formOk": "Спасибо! Сообщение получено — скоро отвечу.",
    "contact.formFail": "Не удалось отправить. Открываю почтовую программу…", "contact.formLocal": "Форма работает только на живом сайте (github.io). Открываю почтовую программу…", "contact.formActivate": "Почти готово: форма активируется. Попробуйте отправить чуть позже.",
    "contact.copied": "E-mail скопирован!",
    "footer.built": "Разработано Евгением Сищиным",
    "footer.source": "Исходный код на GitHub",
    "toast.theme": "Тема переключена",
    "exp.jobs": [
      { period: "2022 — сейчас", title: "Senior Fullstack Engineer", company: "KI-Plattform GmbH", location: "Берлин · Удалённо",
        bullets: ["Проектирование и разработка SaaS-платформы на базе ИИ для корпоративных рабочих процессов — от API-слоя до интерактивного React-дашборда, которым пользуются более 80 корпоративных клиентов.", "Интеграция больших языковых моделей (OpenAI, Anthropic) в бизнес-процессы — включая RAG-пайплайны, семантический поиск и автоматизированный анализ документов.", "Оптимизация бэкенда: снизил задержку API на 55% за счёт оптимизации запросов, стратегий кэширования и асинхронной обработки."] },
      { period: "2020 — 2022", title: "Frontend Developer", company: "DigitalWerk AG", location: "Мюнхен · Гибрид",
        bullets: ["Создал общекорпоративную дизайн-систему на React и TypeScript — сократил время разработки новых фич на 35% и обеспечил единый продуктовый язык для 4 команд.", "Тесно взаимодействовал с UX-дизайнерами и продакт-менеджерами в agile-спринтах — полная реализация сложных UI по Figma-спецификациям.", "Внедрил E2E-тесты (Playwright) и CI/CD-воркфлоу, снизив частоту ошибок в production-релизах на 60%."] },
      { period: "2018 — 2020", title: "Веб-разработчик", company: "Softlab Solutions", location: "Удалённо",
        bullets: ["Разрабатывал клиентские проекты для малого и среднего бизнеса: e-commerce-платформы, системы бронирования и внутренние административные инструменты.", "Строил RESTful API на Node.js и PostgreSQL, интегрировал платёжные сервисы (Stripe, PayPal) и сторонние системы."] }
    ],
    "projects.items": {
      helper: "Telegram-бот: получает фото задания, анализирует его через Google Gemini 2.5 Flash и присылает понятное решение с объяснением. Асинхронный aiogram 3, обработка изображений через Pillow, ключи в .env, защита от лимита Telegram в 4096 символов.",
      zensus: "Реляционная модель данных переписи населения Германии 2011 и 2022 годов: федеральные земли, 10 786 общин и статистика населения по возрасту и семейному положению. Сырые данные из Excel очищены, выгружены в CSV и импортированы в PostgreSQL SQL-скриптом с первичными и внешними ключами.",
      portfolio: "Этот сайт: без фреймворков, на трёх языках, с интерактивным фоном-нейросетью, встроенным терминалом (Ctrl + K), тёмной/светлой темой и рабочей формой связи — хостинг на GitHub Pages."
    }
  }
};

const SECTIONS = ['hero', 'about', 'services', 'skills', 'experience', 'projects', 'process', 'contact'];
const LANGS = Object.keys(TRANSLATIONS);
let currentLang = 'de';
let currentTheme = 'dark';
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─── HELPERS ─── */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const t = key => TRANSLATIONS[currentLang][key] ?? TRANSLATIONS.de[key] ?? key;
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* storage unavailable */ } }
};

/* ─── TOASTS ─── */
function toast(msg) {
  const box = $('#toasts');
  if (!box) return;
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  box.appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
  setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 400); }, 2600);
}

/* ─── LANGUAGE ─── */
function setLang(lang) {
  if (!TRANSLATIONS[lang]) lang = 'de';
  currentLang = lang;
  document.documentElement.lang = lang;
  store.set('lang', lang);

  $$('[data-i18n]').forEach(el => {
    const val = t(el.getAttribute('data-i18n'));
    if (typeof val === 'string') el.textContent = val;
  });
  $$('.nav-links button, .mobile-menu button').forEach(btn => {
    const key = btn.getAttribute('data-i18n') || btn.getAttribute('data-mob-i18n');
    if (key) btn.textContent = '.' + t(key);
  });
  $$('[data-lang-btn]').forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang));

  renderExperience();
  renderProjects();
  restartTypewriter();
}

/* ─── EXPERIENCE ─── */
function renderExperience() {
  const box = $('#exp-list');
  if (!box) return;
  box.innerHTML = t('exp.jobs').map(job => `
    <div class="exp-item reveal">
      <div class="exp-period">${esc(job.period)}</div>
      <div class="exp-body">
        <div class="exp-title">${esc(job.title)} <span class="exp-company">@ ${esc(job.company)}</span></div>
        <div class="exp-location">${esc(job.location)}</div>
        <ul class="exp-bullets">${job.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul>
      </div>
    </div>`).join('');
  reobserve();
}

/* ─── PROJECTS ─── */
const ICON_GH = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>';
const ICON_EXT = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';

function renderProjects() {
  const box = $('#projects-list');
  if (!box) return;
  const texts = t('projects.items');
  box.innerHTML = PROJECTS.map((p, i) => {
    const links = [];
    if (p.repo) links.push(`<a href="${esc(p.repo)}" target="_blank" rel="noopener">${ICON_GH}<span>${esc(t('projects.code'))}</span></a>`);
    if (p.live) links.push(`<a href="${esc(p.live)}" target="_blank" rel="noopener">${ICON_EXT}<span>${esc(t('projects.live'))}</span></a>`);
    if (!links.length) links.push(`<span class="proj-private">🔒 ${esc(t('projects.private'))}</span>`);
    return `
    <div class="project-item${i % 2 ? ' reverse' : ''} reveal">
      <div class="project-img-wrap tilt">
        <div class="project-img-placeholder proj-gradient-${i % 3}">
          <div class="proj-window-bar"><i></i><i></i><i></i><span>${esc(p.id)}.${p.id === 'zensus' ? 'sql' : p.id === 'helper' ? 'py' : 'js'}</span></div>
          <pre class="proj-screen-text">${esc(p.code)}</pre>
        </div>
      </div>
      <div class="project-info">
        <p class="proj-label">${esc(t('projects.featured'))} ${String(i + 1).padStart(2, '0')}</p>
        <h3 class="proj-name">${esc(p.name)}</h3>
        <div class="proj-desc-card spot"><p>${esc(texts[p.id] || '')}</p></div>
        <ul class="proj-stack">${p.stack.map(s => `<li>${esc(s)}</li>`).join('')}</ul>
        <div class="proj-links">${links.join('')}</div>
      </div>
    </div>`;
  }).join('');
  initTilt();
  reobserve();
}

/* ─── TYPEWRITER (hero roles) ─── */
let typeTimer;
function restartTypewriter() {
  const el = $('#hero-typed');
  if (!el) return;
  clearTimeout(typeTimer);
  const roles = t('hero.roles');
  if (reducedMotion) { el.textContent = roles[0]; return; }
  let r = 0, c = 0, deleting = false;
  const tick = () => {
    const word = roles[r];
    c += deleting ? -1 : 1;
    el.textContent = word.slice(0, c);
    let delay = deleting ? 35 : 70;
    if (!deleting && c === word.length) { deleting = true; delay = 1800; }
    else if (deleting && c === 0) { deleting = false; r = (r + 1) % roles.length; delay = 300; }
    typeTimer = setTimeout(tick, delay);
  };
  el.textContent = '';
  tick();
}

/* ─── THEME ─── */
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.classList.toggle('light-mode', theme === 'light');
  const btn = $('#theme-toggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀' : '☽';
  const meta = $('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#080d14' : '#eef2f7');
  store.set('theme', theme);
}
function toggleTheme() {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  toast(t('toast.theme'));
}

/* ─── COPY EMAIL ─── */
function copyEmail() {
  const done = () => toast(t('contact.copied'));
  if (navigator.clipboard) navigator.clipboard.writeText(PROFILE.email).then(done, done);
  else done();
}

/* ─── CONTACT FORM (real delivery + mailto fallback) ─── */
async function handleContactSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  if (data._honey) return; // bot trap
  const status = $('#form-status');
  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = t('contact.formSending');
  status.className = 'form-status';

  const fallbackToMail = () => {
    const subject = encodeURIComponent(`Neue Anfrage von ${data.name || 'Unbekannt'}`);
    const body = encodeURIComponent(`Name: ${data.name}\nE-Mail: ${data.email}\n\n${data.message}`);
    setTimeout(() => { window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`; }, 1200);
  };

  try {
    // FormSubmit only works from a real web origin, not from a file opened from disk
    if (location.protocol === 'file:') {
      status.textContent = t('contact.formLocal');
      status.classList.add('err');
      fallbackToMail();
      return;
    }
    const res = await fetch(PROFILE.formEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: data.name, email: data.email, message: data.message,
        _subject: `Portfolio: neue Anfrage von ${data.name || 'Unbekannt'}`,
        _template: 'table', _captcha: 'false'
      })
    });
    const json = await res.json().catch(() => ({}));
    const serverMsg = String(json.message || '');
    if (/activat/i.test(serverMsg)) {
      // first submission ever: FormSubmit e-mailed an activation link to the owner
      status.textContent = t('contact.formActivate');
      status.classList.add('ok');
      return;
    }
    if (!res.ok || String(json.success) !== 'true') throw new Error(serverMsg || `HTTP ${res.status}`);
    status.textContent = t('contact.formOk');
    status.classList.add('ok');
    form.reset();
  } catch (err) {
    console.warn('[contact form]', err);
    status.textContent = t('contact.formFail');
    status.classList.add('err');
    fallbackToMail();
  } finally {
    btn.disabled = false;
    btn.textContent = t('contact.formSubmit');
  }
}

/* ─── NAVIGATION ─── */
function toggleMenu(force) {
  const menu = $('#mobile-menu');
  const btn = $('#menu-toggle');
  if (!menu) return;
  const open = typeof force === 'boolean' ? force : !menu.classList.contains('open');
  menu.classList.toggle('open', open);
  if (btn) { btn.textContent = open ? '✕' : '☰'; btn.setAttribute('aria-expanded', open); }
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
  toggleMenu(false);
}

function initScrollUI() {
  const bar = $('#scroll-progress');
  const top = $('#back-to-top');
  const nav = $('.nav');
  const onScroll = () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    if (bar) bar.style.transform = `scaleX(${h > 0 ? window.scrollY / h : 0})`;
    if (top) top.classList.toggle('visible', window.scrollY > 500);
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
    let current = 'hero';
    SECTIONS.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 140) current = id;
    });
    $$('[data-nav-section]').forEach(b => b.classList.toggle('active', b.getAttribute('data-nav-section') === current));
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  if (top) top.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' }));
}

/* ─── REVEAL + COUNTERS ─── */
let observer;
function reobserve() {
  if (observer) $$('.reveal:not(.visible)').forEach(el => observer.observe(el));
}
function animateCount(el) {
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  if (reducedMotion) { el.textContent = target + suffix; return; }
  const start = performance.now(), dur = 1400;
  const step = now => {
    const p = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
function initReveal() {
  if (!('IntersectionObserver' in window)) { $$('.reveal').forEach(el => el.classList.add('visible')); return; }
  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('visible');
      $$('.skill-bar-fill', el).forEach(bar => { bar.style.width = bar.getAttribute('data-level') + '%'; });
      $$('[data-count]', el).forEach(n => { if (!n.dataset.done) { n.dataset.done = 1; animateCount(n); } });
      observer.unobserve(el);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  reobserve();
}

/* ─── SPOTLIGHT + TILT ─── */
function initSpotlight() {
  document.addEventListener('pointermove', e => {
    const card = e.target.closest && e.target.closest('.spot');
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  }, { passive: true });
}
function initTilt() {
  if (reducedMotion || !window.matchMedia('(hover: hover)').matches) return;
  $$('.tilt').forEach(el => {
    if (el.dataset.tilt) return;
    el.dataset.tilt = 1;
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.02)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });
}

/* ─── LOCAL TIME ─── */
function initClock() {
  const el = $('#local-time');
  if (!el) return;
  const fmt = new Intl.DateTimeFormat('de-DE', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Berlin' });
  const tick = () => { el.textContent = fmt.format(new Date()) + ' · Berlin'; };
  tick();
  setInterval(tick, 30000);
}

/* ─── NEURAL NETWORK CANVAS (mouse-reactive) ─── */
function initCanvas() {
  const canvas = $('#bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const COLORS = ['#00e5ff', '#a855f7', '#00bcd4'];
  const MAX_DIST = 160, MOUSE_DIST = 200;
  const mouse = { x: -9999, y: -9999 };
  let nodes = [], dpr = 1, running = true;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = innerWidth * dpr;
    canvas.height = innerHeight * dpr;
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function makeNodes() {
    const count = Math.min(80, Math.floor(innerWidth * innerHeight / 15000));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * innerWidth, y: Math.random() * innerHeight,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.8, color: COLORS[Math.floor(Math.random() * COLORS.length)]
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    const light = document.documentElement.classList.contains('light-mode');
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < MAX_DIST) {
          ctx.strokeStyle = `rgba(0,200,220,${(1 - d / MAX_DIST) * (light ? 0.12 : 0.18)})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
      if (md < MOUSE_DIST) {
        ctx.strokeStyle = `rgba(168,85,247,${(1 - md / MOUSE_DIST) * (light ? 0.25 : 0.45)})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        a.x += (mouse.x - a.x) * 0.002; a.y += (mouse.y - a.y) * 0.002;
      }
    }
    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = n.color + (light ? '60' : '90');
      ctx.fill();
      if (!reducedMotion) { n.x += n.vx; n.y += n.vy; }
      if (n.x < 0 || n.x > innerWidth) n.vx *= -1;
      if (n.y < 0 || n.y > innerHeight) n.vy *= -1;
    });
    if (running && !reducedMotion) requestAnimationFrame(draw);
  }

  resize(); makeNodes(); draw();
  let rt;
  addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { resize(); makeNodes(); if (reducedMotion) draw(); }, 200); });
  addEventListener('pointermove', e => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
  document.addEventListener('pointerleave', () => { mouse.x = mouse.y = -9999; });
  document.addEventListener('visibilitychange', () => {
    const was = running;
    running = !document.hidden;
    if (running && !was && !reducedMotion) requestAnimationFrame(draw);
  });
}

/* ════════════════════════════════════════════════════════════════
   TERMINAL  (Ctrl + K  /  the >_ button)
   ════════════════════════════════════════════════════════════════ */
const Terminal = (() => {
  let modal, out, input;
  const history = [];
  let hIndex = -1;

  const print = (html, cls = '') => {
    const line = document.createElement('div');
    line.className = 'term-line ' + cls;
    line.innerHTML = html;
    out.appendChild(line);
    out.scrollTop = out.scrollHeight;
  };
  const link = (href, label) => `<a href="${esc(href)}" target="_blank" rel="noopener">${esc(label || href)}</a>`;

  const COMMANDS = {
    help: { d: 'list all commands', run: () => {
      print(Object.entries(COMMANDS).filter(([, c]) => !c.hidden)
        .map(([k, c]) => `<span class="t-cmd">${k.padEnd(11)}</span><span class="t-dim">${c.d}</span>`).join('\n'));
    } },
    whoami: { d: 'who is this guy?', run: () => print(`<b>${esc(PROFILE.name)}</b> — ${esc(t('hero.roles').join(' · '))}\n<span class="t-dim">${esc(t('about.location'))} · ${esc(t('about.langs'))}</span>`) },
    about: { d: 'short bio', run: () => { print(esc(t('about.p1'))); } },
    skills: { d: 'tech stack', run: () => {
      const groups = $$('.skill-card').map(card => {
        const title = card.querySelector('.skill-card-title').textContent.replace('>', '').trim();
        const items = $$('.skill-item', card).map(li => {
          const name = li.querySelector('.skill-name').textContent.trim();
          const lvl = +li.querySelector('.skill-bar-fill').dataset.level;
          const bar = '█'.repeat(Math.round(lvl / 10)) + '░'.repeat(10 - Math.round(lvl / 10));
          return `  ${esc(name.padEnd(20))} <span class="t-acc">${bar}</span> ${lvl}%`;
        });
        return `<span class="t-cmd">${esc(title)}</span>\n${items.join('\n')}`;
      });
      print(groups.join('\n\n'));
    } },
    projects: { d: 'what I built', run: () => {
      print(PROJECTS.map((p, i) => `<span class="t-acc">[${i + 1}]</span> <b>${esc(p.name)}</b>\n    <span class="t-dim">${esc(p.stack.join(' · '))}</span>${p.repo ? '\n    ' + link(p.repo) : ''}`).join('\n'));
    } },
    experience: { d: 'work history', run: () => {
      print(t('exp.jobs').map(j => `<span class="t-acc">${esc(j.period)}</span>  <b>${esc(j.title)}</b> @ ${esc(j.company)}`).join('\n'));
    } },
    contact: { d: 'how to reach me', run: () => print(`email   ${link('mailto:' + PROFILE.email, PROFILE.email)}\ngithub  ${link(PROFILE.github)}\n<span class="t-dim">tip: type "email" to copy the address</span>`) },
    email: { d: 'copy e-mail to clipboard', run: () => { copyEmail(); print('✓ ' + esc(PROFILE.email) + ' copied', 't-ok'); } },
    github: { d: 'open my GitHub', run: () => { window.open(PROFILE.github, '_blank', 'noopener'); print('opening GitHub…', 't-dim'); } },
    cv: { d: 'open resume', run: () => { window.open('cv.html', '_blank', 'noopener'); print('opening cv.html…', 't-dim'); } },
    goto: { d: 'goto <section>', run: ([s]) => {
      if (!SECTIONS.includes(s)) return print(`sections: ${SECTIONS.join(', ')}`, 't-err');
      close(); scrollToSection(s);
    } },
    theme: { d: 'toggle dark / light', run: () => { toggleTheme(); print(`theme → ${currentTheme}`, 't-ok'); } },
    lang: { d: 'lang <de|en|ru>', run: ([l]) => {
      if (!LANGS.includes(l)) return print(`usage: lang ${LANGS.join('|')}`, 't-err');
      setLang(l); print(`language → ${l}`, 't-ok');
    } },
    date: { d: 'current date', run: () => print(new Date().toString()) },
    clear: { d: 'clear screen', run: () => { out.innerHTML = ''; } },
    exit: { d: 'close terminal', run: () => close() },
    sudo: { hidden: true, run: () => print('Nice try 😏  — permission denied. Maybe just hire me instead?', 't-err') },
    ls: { hidden: true, run: () => print('about.txt  skills/  projects/  experience.log  contact.vcf  cv.html') },
    hire: { hidden: true, run: () => { print('Excellent choice! 🚀 Scrolling to contact…', 't-ok'); setTimeout(() => { close(); scrollToSection('contact'); }, 700); } }
  };
  const ALIASES = { 'cat': 'about', '?': 'help', 'cls': 'clear', 'q': 'exit', 'quit': 'exit' };

  function exec(raw) {
    const line = raw.trim();
    print(`<span class="t-prompt">guest@sischin:~$</span> ${esc(line)}`);
    if (!line) return;
    history.unshift(line); hIndex = -1;
    let [cmd, ...args] = line.split(/\s+/);
    cmd = cmd.toLowerCase();
    cmd = ALIASES[cmd] || cmd;
    const c = COMMANDS[cmd];
    if (c) c.run(args);
    else print(`command not found: ${esc(cmd)} — type <span class="t-cmd">help</span>`, 't-err');
  }

  function open() {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    setTimeout(() => input.focus(), 50);
  }
  function close() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }
  function toggle() { modal.classList.contains('open') ? close() : open(); }

  function init() {
    modal = $('#terminal');
    if (!modal) return;
    out = $('#term-out');
    input = $('#term-input');
    print(`<span class="t-acc">Sischin OS</span> v2.0 — interactive portfolio shell\nType <span class="t-cmd">help</span> to see available commands.`);
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') { exec(input.value); input.value = ''; }
      else if (e.key === 'ArrowUp') { if (hIndex < history.length - 1) input.value = history[++hIndex]; e.preventDefault(); }
      else if (e.key === 'ArrowDown') { input.value = hIndex > 0 ? history[--hIndex] : (hIndex = -1, ''); e.preventDefault(); }
      else if (e.key === 'Tab') {
        e.preventDefault();
        const match = Object.keys(COMMANDS).filter(k => !COMMANDS[k].hidden && k.startsWith(input.value.trim()));
        if (match.length === 1) input.value = match[0] + ' ';
        else if (match.length > 1) print(match.join('  '), 't-dim');
      }
    });
    modal.addEventListener('click', e => { if (e.target === modal) close(); });
    $('#term-body').addEventListener('click', () => input.focus());
    document.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); toggle(); }
      else if (e.key === 'Escape' && modal.classList.contains('open')) close();
    });
  }
  return { init, open, close, toggle };
})();

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
  const urlLang = new URLSearchParams(location.search).get('lang');
  const browserLang = (navigator.language || 'de').slice(0, 2);
  setLang(urlLang || store.get('lang') || (LANGS.includes(browserLang) ? browserLang : 'de'));

  const savedTheme = store.get('theme');
  applyTheme(savedTheme || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));

  $('#year') && ($('#year').textContent = new Date().getFullYear());
  initCanvas();
  initReveal();
  initScrollUI();
  initSpotlight();
  initClock();
  Terminal.init();
});
