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
    id: 'dashboard',
    name: 'ShopPulse – Verkaufsanalyse',
    stack: ['D3.js', 'JavaScript', 'HTML/CSS', 'Datenaufbereitung'],
    repo: 'https://github.com/Sischin-Evgheni/shoppulse-dashboard',
    live: 'https://sischin-evgheni.github.io/shoppulse-dashboard/',
    code: `// 2.255 Buchungen → 1 Dashboard
const revenue = d3.sum(sales, d => d.price);
const payout  = revenue - logistics
              - storage - fees - returns;
drawWaterfall(revenue, payout);`
  },
  {
    id: 'flower',
    name: 'Flower Valley 3D',
    stack: ['Three.js', 'WebGL', 'JavaScript', 'GitHub Pages'],
    repo: 'https://github.com/Sischin-Evgheni/flower-valley-3d',
    live: 'https://sischin-evgheni.github.io/flower-valley-3d/',
    code: `import * as THREE from 'three';
const composer = new EffectComposer(renderer);
composer.addPass(new UnrealBloomPass(
  size, 1.2, 0.4, 0.85));
// Blumen wachsen bei Bewegung 🌸`
  },
  {
    id: 'zensus',
    name: 'Zensus-Datenbank 2011 / 2022',
    stack: ['PostgreSQL', 'SQL', 'Datenmodellierung', 'CSV-Import'],
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
    stack: ['JavaScript', 'Canvas API', 'i18n DE/EN/RU', 'GitHub Pages'],
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
    "hero.status": "Offen für eine Stelle im IT-Support · Dresden",
    "hero.roles": ["IT-Support", "IT-Servicetechniker", "KI & Automatisierung", "Web-Projekte"],
    "hero.subtitle": "Ich verbinde Mensch\nund Maschine.",
    "hero.description": "Über 8 Jahre Praxis mit Computern, Smartphones und Kunden – von der Fehlerdiagnose bis zur Reparatur. Dazu eigene Projekte mit KI, Automatisierung und Web.",
    "hero.contactBtn": "Kontakt aufnehmen →",
    "hero.cvBtn": "↓ Lebenslauf",
    "hero.hint": "Tipp: Drücke Ctrl + K für das Terminal",
    "services.title": "Leistungen",
    "services.statExp": "Jahre Praxis mit Technik",
    "services.statClients": "Sprachen",
    "services.statSpeed": "Eigene Projekte",
    "services.statReply": "Antwortzeit",
    "services.web.title": "IT-Support & Reparatur",
    "services.web.desc": "Schnelle, geduldige Hilfe bei Problemen mit PCs, Smartphones und Zubehör – vor Ort oder per Fernwartung.",
    "services.web.item1": "Windows 10/11 installieren, einrichten, reparieren",
    "services.web.item2": "Smartphones (Android, iOS): Einrichtung, Display- und Akkutausch",
    "services.web.item3": "Remote-Support, Datensicherung, Virenentfernung",
    "services.ai.title": "KI & Automatisierung",
    "services.ai.desc": "Ich nutze KI-Tools, um wiederkehrende Aufgaben schneller und zuverlässiger zu erledigen.",
    "services.ai.item1": "ChatGPT, Claude und KI-Agenten im Arbeitsalltag",
    "services.ai.item2": "Kleine Skripte und Automatisierungen",
    "services.ai.item3": "Automatische Auswertungen und Datensicherung",
    "services.ops.title": "Web & Daten",
    "services.ops.desc": "Einfache Websites und übersichtliche Dashboards aus Rohdaten.",
    "services.ops.item1": "Websites mit HTML, CSS, JavaScript",
    "services.ops.item2": "Dashboards und Diagramme (D3.js)",
    "services.ops.item3": "SQL-Grundlagen (PostgreSQL)",
    "about.title": "Über mich",
    "about.p1": "Ich bin IT-Servicetechniker aus Dresden mit über 8 Jahren Praxis: im Elektronik-Fachhandel, im technischen Support für Mobilfunk und in der Betreuung von Produktions- und Büro-PCs. Ich finde Fehler, erkläre Lösungen verständlich und bleibe auch bei Störungen ruhig.",
    "about.p2": "In meiner Freizeit baue ich eigene Projekte mit KI, Automatisierung und Web – von einer interaktiven 3D-Website bis zum Verkaufs-Dashboard. Mein Ziel: eine feste Stelle im IT-Support, in der ich Technik und Kundenkontakt verbinde.",
    "about.labelExp": "Erfahrung", "about.exp": "8+ Jahre",
    "about.labelLocation": "Standort", "about.location": "Dresden",
    "about.labelLang": "Sprachen", "about.langs": "DE (B1), RU, RO, EN (A2)",
    "about.labelFocus": "Schwerpunkt", "about.focus": "IT-Support & KI",
    "skills.title": "Kenntnisse", "skills.support": "IT-Support", "skills.net": "Netzwerk & Office", "skills.ai": "KI & Automatisierung", "skills.tools": "Web & Daten",
    "exp.title": "Berufserfahrung",
    "projects.title": "Ausgewählte Projekte", "projects.featured": "Projekt",
    "projects.code": "Code", "projects.live": "Live ansehen", "projects.private": "Code auf Anfrage",
    "process.title": "Arbeitsweise",
    "process.s1.title": "Zuhören", "process.s1.desc": "Was genau funktioniert nicht, seit wann, was wurde geändert? Gute Fragen sparen die meiste Zeit.",
    "process.s2.title": "Diagnose", "process.s2.desc": "Schritt für Schritt die Ursache finden – Hardware, Software oder Bedienung.",
    "process.s3.title": "Lösen", "process.s3.desc": "Fehler beheben und dem Nutzer verständlich erklären, was passiert ist.",
    "process.s4.title": "Dokumentieren", "process.s4.desc": "Lösung festhalten, damit das Problem beim nächsten Mal schneller erledigt ist.",
    "contact.badge": "Was kommt als nächstes?",
    "contact.title": "Kontakt aufnehmen",
    "contact.desc": "Ich suche eine Festanstellung im IT-Support oder als IT-Servicetechniker in Dresden und Umgebung. Schreiben Sie mir – ich melde mich schnellstmöglich zurück.",
    "contact.avail": "Verfügbar",
    "contact.availValue": "Dresden & Umgebung",
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
      { period: "2022 — 2023", title: "Mitarbeiter Pharmalogistik & Vertrieb", company: "Alliance HealthCare Deutschland GmbH", location: "Dresden",
        bullets: ["Fachgerechter Transport, Kommissionierung und termingerechte Auslieferung von pharmazeutischen Produkten.", "Eigenständige Disposition und detaillierte Tourenplanung unter Einhaltung aller Qualitätsvorgaben."] },
      { period: "2020 — 2022", title: "Mitarbeiter IT-Support / Mobilfunk", company: "Moldcell", location: "Chișinău (Moldau)",
        bullets: ["Technischer Kundensupport: Behebung von Verbindungsproblemen, Beratung zu Tarifen und Diensten.", "Wartung, Reparatur und Einrichtung von Computern, Mobilgeräten und IT-Komponenten.", "Aktivierung von SIM-Karten, Einrichtung von Mobilfunkdiensten, Datenübertragung beim Gerätewechsel."] },
      { period: "2016 — 2019", title: "Technischer Mitarbeiter – Druckanlagen", company: "Printing Park Campas-Cop", location: "Chișinău (Moldau)",
        bullets: ["Überwachung der vernetzten, computergesteuerten Druckmaschinen über den zentralen Steuerrechner.", "Erkennung und Analyse von Fehlern an Maschinen und Steuerungssoftware.", "IT-Betreuung der Produktions- und Büro-PCs: Windows und Anwendungssoftware."] },
      { period: "2010 — 2016", title: "Verkaufsberater & Servicetechniker", company: "Elektronik-Fachgeschäft (Einzelunternehmen Borisov)", location: "Moskau",
        bullets: ["Reparatur und Fehlerdiagnose an Hard- und Software von elektronischen Geräten.", "Installation von Betriebssystemen und Software, Kundenberatung und Verkauf."] }
    ],
    "projects.items": {
      dashboard: "Interaktives Verkaufs-Dashboard für Marktplatz-Händler: aus über 2.000 Einzelbuchungen eines Wochenberichts werden Umsatz, Rückgaben, Gebühren und Auszahlung anschaulich dargestellt. Mit Demo-Daten.",
      flower: "Interaktive 3D-Landingpage mit Three.js: Beim Bewegen der Maus wächst ein nächtliches Blumental in Echtzeit – mit Bloom-Effekt und responsivem Layout.",
      zensus: "Übungsprojekt (Weiterbildung): relationales Datenmodell für die Zensus-Daten 2011 und 2022 mit 10 786 Gemeinden. Excel-Rohdaten bereinigt, als CSV exportiert und per SQL-Skript in PostgreSQL importiert.",
      portfolio: "Diese Seite: ohne Framework, dreisprachig, mit interaktivem Hintergrund, eingebautem Terminal (Ctrl + K), Dark/Light-Mode und Kontaktformular — gehostet auf GitHub Pages."
    }
  },
  en: {
    "nav.about": "About", "nav.services": "Services", "nav.skills": "Skills", "nav.experience": "Experience",
    "nav.projects": "Projects", "nav.process": "Process", "nav.contact": "Contact",
    "hero.status": "Open to an IT support position · Dresden",
    "hero.roles": ["IT Support", "IT Service Technician", "AI & Automation", "Web Projects"],
    "hero.subtitle": "I connect humans\nand machines.",
    "hero.description": "8+ years of hands-on work with computers, smartphones and customers – from troubleshooting to repair. Plus my own projects with AI, automation and web.",
    "hero.contactBtn": "Get in touch →",
    "hero.cvBtn": "↓ Resume",
    "hero.hint": "Tip: press Ctrl + K to open the terminal",
    "services.title": "Services",
    "services.statExp": "Years hands-on with tech",
    "services.statClients": "Languages",
    "services.statSpeed": "Own projects",
    "services.statReply": "Reply time",
    "services.web.title": "IT Support & Repair",
    "services.web.desc": "Fast, patient help with PCs, smartphones and accessories – on site or via remote support.",
    "services.web.item1": "Install, configure and repair Windows 10/11",
    "services.web.item2": "Smartphones (Android, iOS): setup, screen and battery replacement",
    "services.web.item3": "Remote support, data backup, malware removal",
    "services.ai.title": "AI & Automation",
    "services.ai.desc": "I use AI tools to get recurring tasks done faster and more reliably.",
    "services.ai.item1": "ChatGPT, Claude and AI agents in daily work",
    "services.ai.item2": "Small scripts and automations",
    "services.ai.item3": "Automated reports and backups",
    "services.ops.title": "Web & Data",
    "services.ops.desc": "Simple websites and clear dashboards built from raw data.",
    "services.ops.item1": "Websites with HTML, CSS, JavaScript",
    "services.ops.item2": "Dashboards and charts (D3.js)",
    "services.ops.item3": "SQL basics (PostgreSQL)",
    "about.title": "About Me",
    "about.p1": "I am an IT service technician from Dresden with 8+ years of hands-on experience: in electronics retail, in technical support for a mobile network operator and in looking after production and office PCs. I find faults, explain solutions clearly and stay calm when things break.",
    "about.p2": "In my free time I build my own projects with AI, automation and web – from an interactive 3D website to a sales dashboard. My goal: a permanent IT support role where I combine technology and customer contact.",
    "about.labelExp": "Experience", "about.exp": "8+ Years",
    "about.labelLocation": "Location", "about.location": "Dresden",
    "about.labelLang": "Languages", "about.langs": "DE (B1), RU, RO, EN (A2)",
    "about.labelFocus": "Focus", "about.focus": "IT Support & AI",
    "skills.title": "Skills", "skills.support": "IT Support", "skills.net": "Network & Office", "skills.ai": "AI & Automation", "skills.tools": "Web & Data",
    "exp.title": "Work Experience",
    "projects.title": "Featured Projects", "projects.featured": "Project",
    "projects.code": "Code", "projects.live": "View live", "projects.private": "Code on request",
    "process.title": "How I Work",
    "process.s1.title": "Listen", "process.s1.desc": "What exactly isn't working, since when, what changed? Good questions save the most time.",
    "process.s2.title": "Diagnose", "process.s2.desc": "Find the root cause step by step – hardware, software or usage.",
    "process.s3.title": "Fix", "process.s3.desc": "Solve the problem and explain to the user what happened, in plain words.",
    "process.s4.title": "Document", "process.s4.desc": "Write down the solution so the next time is faster.",
    "contact.badge": "What's Next?",
    "contact.title": "Get In Touch",
    "contact.desc": "I am looking for a permanent position in IT support or as an IT service technician in the Dresden area. Write me — I will get back to you as soon as possible.",
    "contact.avail": "Available",
    "contact.availValue": "Dresden area",
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
      { period: "2022 — 2023", title: "Pharmaceutical Logistics & Distribution", company: "Alliance HealthCare Deutschland GmbH", location: "Dresden",
        bullets: ["Proper transport, order picking and on-time delivery of pharmaceutical products.", "Independent dispatching and detailed route planning in line with all quality standards."] },
      { period: "2020 — 2022", title: "IT Support / Mobile Network", company: "Moldcell", location: "Chișinău (Moldova)",
        bullets: ["Technical customer support: fixing connection problems, advice on plans and services.", "Maintenance, repair and setup of computers, mobile devices and IT components.", "SIM activation, mobile service setup, data transfer when switching devices."] },
      { period: "2016 — 2019", title: "Technical Staff – Printing Systems", company: "Printing Park Campas-Cop", location: "Chișinău (Moldova)",
        bullets: ["Monitoring networked, computer-controlled printing machines via the central control computer.", "Detecting and analysing faults in machines and control software.", "IT support for production and office PCs: Windows and application software."] },
      { period: "2010 — 2016", title: "Sales Advisor & Service Technician", company: "Electronics store (sole proprietorship Borisov)", location: "Moscow",
        bullets: ["Repair and troubleshooting of hardware and software of electronic devices.", "Installation of operating systems and software, customer advice and sales."] }
    ],
    "projects.items": {
      dashboard: "Interactive sales dashboard for marketplace sellers: 2,000+ individual records from a weekly report turned into a clear view of revenue, returns, fees and payout. Uses demo data.",
      flower: "Interactive 3D landing page built with Three.js: move the mouse and a night valley of flowers grows in real time – with bloom effect and responsive layout.",
      zensus: "Training project (further education): a relational data model for the German census 2011 and 2022 with 10,786 municipalities. Raw Excel data cleaned, exported to CSV and imported into PostgreSQL via SQL script.",
      portfolio: "This very site: no framework, three languages, an interactive background, a built-in terminal (Ctrl + K), dark/light mode and a contact form — hosted on GitHub Pages."
    }
  },
  ru: {
    "nav.about": "Обо мне", "nav.services": "Услуги", "nav.skills": "Навыки", "nav.experience": "Опыт",
    "nav.projects": "Проекты", "nav.process": "Как я работаю", "nav.contact": "Контакт",
    "hero.status": "Ищу работу в IT-поддержке · Дрезден",
    "hero.roles": ["IT-поддержка", "Сервисный IT-техник", "ИИ и автоматизация", "Веб-проекты"],
    "hero.subtitle": "Я соединяю людей\nи технику.",
    "hero.description": "Более 8 лет практики с компьютерами, смартфонами и клиентами – от диагностики до ремонта. Плюс собственные проекты с ИИ, автоматизацией и вебом.",
    "hero.contactBtn": "Написать мне →",
    "hero.cvBtn": "↓ Резюме",
    "hero.hint": "Подсказка: нажмите Ctrl + K, чтобы открыть терминал",
    "services.title": "Услуги",
    "services.statExp": "Лет практики с техникой",
    "services.statClients": "Языка",
    "services.statSpeed": "Собственных проектов",
    "services.statReply": "Время ответа",
    "services.web.title": "IT-поддержка и ремонт",
    "services.web.desc": "Быстрая и терпеливая помощь с компьютерами, смартфонами и техникой – на месте или удалённо.",
    "services.web.item1": "Установка, настройка и восстановление Windows 10/11",
    "services.web.item2": "Смартфоны (Android, iOS): настройка, замена экрана и аккумулятора",
    "services.web.item3": "Удалённая помощь, резервное копирование, удаление вирусов",
    "services.ai.title": "ИИ и автоматизация",
    "services.ai.desc": "Использую ИИ-инструменты, чтобы делать повторяющиеся задачи быстрее и надёжнее.",
    "services.ai.item1": "ChatGPT, Claude и ИИ-агенты в работе",
    "services.ai.item2": "Небольшие скрипты и автоматизация",
    "services.ai.item3": "Автоматические отчёты и резервные копии",
    "services.ops.title": "Веб и данные",
    "services.ops.desc": "Простые сайты и наглядные дашборды из сырых данных.",
    "services.ops.item1": "Сайты на HTML, CSS, JavaScript",
    "services.ops.item2": "Дашборды и графики (D3.js)",
    "services.ops.item3": "Основы SQL (PostgreSQL)",
    "about.title": "Обо мне",
    "about.p1": "Я сервисный IT-техник из Дрездена с опытом более 8 лет: магазин электроники, техническая поддержка у мобильного оператора, обслуживание производственных и офисных компьютеров. Нахожу неисправности, понятно объясняю решения и сохраняю спокойствие при сбоях.",
    "about.p2": "В свободное время делаю собственные проекты с ИИ, автоматизацией и вебом – от интерактивного 3D-сайта до дашборда продаж. Цель: постоянная работа в IT-поддержке, где я совмещаю технику и общение с клиентами.",
    "about.labelExp": "Опыт", "about.exp": "8+ лет",
    "about.labelLocation": "Город", "about.location": "Дрезден",
    "about.labelLang": "Языки", "about.langs": "DE (B1), RU, RO, EN (A2)",
    "about.labelFocus": "Фокус", "about.focus": "IT-поддержка и ИИ",
    "skills.title": "Навыки", "skills.support": "IT-поддержка", "skills.net": "Сеть и офис", "skills.ai": "ИИ и автоматизация", "skills.tools": "Веб и данные",
    "exp.title": "Опыт работы",
    "projects.title": "Избранные проекты", "projects.featured": "Проект",
    "projects.code": "Код", "projects.live": "Открыть", "projects.private": "Код по запросу",
    "process.title": "Как я работаю",
    "process.s1.title": "Выслушать", "process.s1.desc": "Что именно не работает, с какого момента, что меняли? Правильные вопросы экономят больше всего времени.",
    "process.s2.title": "Диагностика", "process.s2.desc": "Шаг за шагом найти причину – железо, программа или использование.",
    "process.s3.title": "Решение", "process.s3.desc": "Устранить проблему и простыми словами объяснить пользователю, что произошло.",
    "process.s4.title": "Документация", "process.s4.desc": "Записать решение, чтобы в следующий раз всё прошло быстрее.",
    "contact.badge": "Что дальше?",
    "contact.title": "Написать мне",
    "contact.desc": "Ищу постоянную работу в IT-поддержке или сервисным IT-техником в Дрездене и окрестностях. Напишите мне — я отвечу как можно скорее.",
    "contact.avail": "Доступен",
    "contact.availValue": "Дрезден и окрестности",
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
      { period: "2022 — 2023", title: "Сотрудник фармлогистики и сбыта", company: "Alliance HealthCare Deutschland GmbH", location: "Дрезден",
        bullets: ["Транспортировка, комплектация и своевременная доставка фармацевтической продукции.", "Самостоятельная диспетчеризация и планирование маршрутов с соблюдением стандартов качества."] },
      { period: "2020 — 2022", title: "IT-поддержка / мобильная связь", company: "Moldcell", location: "Кишинёв (Молдова)",
        bullets: ["Техническая поддержка клиентов: устранение проблем со связью, консультации по тарифам и услугам.", "Обслуживание, ремонт и настройка компьютеров, мобильных устройств и IT-компонентов.", "Активация SIM-карт, настройка услуг связи, перенос данных при смене устройства."] },
      { period: "2016 — 2019", title: "Технический сотрудник – печатное оборудование", company: "Printing Park Campas-Cop", location: "Кишинёв (Молдова)",
        bullets: ["Мониторинг сетевых печатных машин с компьютерным управлением через центральный компьютер.", "Выявление и анализ ошибок машин и управляющего ПО.", "Обслуживание производственных и офисных ПК: Windows и прикладные программы."] },
      { period: "2010 — 2016", title: "Продавец-консультант и сервисный техник", company: "Магазин электроники (ИП Борисов)", location: "Москва",
        bullets: ["Ремонт и диагностика аппаратной и программной части электроники.", "Установка операционных систем и ПО, консультации и продажи."] }
    ],
    "projects.items": {
      dashboard: "Интерактивный дашборд продаж для продавцов на маркетплейсах: более 2 000 строк недельного отчёта превращаются в наглядную картину выручки, возвратов, комиссий и выплат. На демо-данных.",
      flower: "Интерактивная 3D-страница на Three.js: при движении мыши в реальном времени вырастает ночная долина цветов – с эффектом свечения и адаптивной вёрсткой.",
      zensus: "Учебный проект (повышение квалификации): реляционная модель данных переписи Германии 2011 и 2022 годов, 10 786 общин. Данные из Excel очищены, выгружены в CSV и импортированы в PostgreSQL SQL-скриптом.",
      portfolio: "Этот сайт: без фреймворков, на трёх языках, с интерактивным фоном, встроенным терминалом (Ctrl + K), тёмной/светлой темой и формой связи — хостинг на GitHub Pages."
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
    sudo: { hidden: true, run: () => print('Nice try 😏  — permission denied. But I know how to fix it: hire me.', 't-err') },
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
