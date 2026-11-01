const translations = {
es: {
navAbout:"Nosotros",navCapabilities:"Capacidades",navProjects:"Proyectos",navApproach:"Enfoque",navContact:"Hablemos",
heroEyebrow:"INDEPENDENT TECHNOLOGY & ENGINEERING",heroTitle:"Engineering<br><em>what comes next.</em>",heroLede:"Convertimos ideas complejas en tecnología tangible. Diseñamos, desarrollamos y conectamos software, electrónica y sistemas inteligentes.",exploreProjects:"Explorar proyectos",discoverHOA:"Descubre HOA",heroFoot:"IDEAS → SYSTEMS → REALITY",heroBottom:"TECNOLOGÍA CON INTENCIÓN. INGENIERÍA CON PROPÓSITO.",
indexAbout:"/ QUIÉNES SOMOS",introOverline:"UN ESTUDIO DE TECNOLOGÍA MULTIDISCIPLINAR",introTitle:"No seguimos el futuro.<br><span>Construimos sus herramientas.</span>",introText:"HOA Industries es un entorno independiente de desarrollo e investigación tecnológica. Unimos disciplinas para explorar soluciones donde el software, la electrónica y la ingeniería trabajan como un solo sistema.",
indexCapabilities:"/ QUÉ HACEMOS",capTitle:"Ideas que toman<br><span>forma y función.</span>",capIntro:"Trabajamos en la intersección entre disciplinas. Desde una primera arquitectura hasta un prototipo funcional, cada reto requiere las herramientas adecuadas.",cap1Title:"Inteligencia artificial",cap1Text:"Modelos, automatización, visión artificial y sistemas de asistencia inteligente.",cap2Title:"Robótica & sistemas",cap2Text:"Electrónica, control embebido, sensores y sistemas autónomos experimentales.",cap3Title:"Software & plataformas",cap3Text:"Aplicaciones, herramientas digitales, experiencias web e infraestructura de software.",cap4Title:"Diseño & prototipado",cap4Text:"Diseño técnico, integración de componentes y validación iterativa de conceptos.",
indexProjects:"/ PORTFOLIO",projectsTitle:"Tecnología en<br><span>desarrollo.</span>",projectsIntro:"Una selección de iniciativas que exploran distintas posibilidades tecnológicas. Cada proyecto evoluciona mediante investigación, diseño y experimentación.",statusActive:"EN DESARROLLO",statusRAndD:"I+D",statusConcept:"PROYECTO",mindDesc:"Una experiencia de inteligencia artificial diseñada para convertir ideas en trabajo útil.",aeroDesc:"Investigación de una plataforma robótica aérea para tareas de limpieza y percepción de superficies.",focusDesc:"Concepto de plataforma de productividad y concentración con herramientas inteligentes.",ticketDesc:"Herramienta digital para organizar y conservar entradas y documentos de eventos.",portfolioNote:"Los proyectos se encuentran en distintas fases de desarrollo e investigación.",githubCta:"Explorar GitHub",
indexApproach:"/ CÓMO TRABAJAMOS",approachOverline:"DEL CONCEPTO AL SISTEMA",approachTitle:"Pensar con rigor.<br><em>Construir con intención.</em>",step1Title:"Investigar",step1Text:"Entender el problema, estudiar el contexto y definir qué merece construirse.",step2Title:"Diseñar",step2Text:"Traducir requisitos en arquitectura, experiencia y decisiones técnicas.",step3Title:"Desarrollar",step3Text:"Integrar hardware y software mediante ciclos de desarrollo y pruebas.",step4Title:"Validar",step4Text:"Medir resultados, documentar aprendizajes y mejorar el sistema.",
indexContact:"/ CONTACTO",contactOverline:"THE NEXT IDEA STARTS HERE",contactTitle:"¿Y si lo<br><em>construimos?</em>",contactText:"Las buenas soluciones empiezan con una conversación clara sobre el reto.",contactButton:"Conectar con HOA",contactSide:"INDEPENDENT TECHNOLOGY<br>ENGINEERING & DEVELOPMENT",footerLine:"INGENIERÍA PARA LO QUE VIENE."
},
en: {
navAbout:"About",navCapabilities:"Capabilities",navProjects:"Projects",navApproach:"Approach",navContact:"Let's talk",
heroEyebrow:"INDEPENDENT TECHNOLOGY & ENGINEERING",heroTitle:"Engineering<br><em>what comes next.</em>",heroLede:"We turn complex ideas into tangible technology. We design, develop and connect software, electronics and intelligent systems.",exploreProjects:"Explore projects",discoverHOA:"Discover HOA",heroFoot:"IDEAS → SYSTEMS → REALITY",heroBottom:"TECHNOLOGY WITH INTENT. ENGINEERING WITH PURPOSE.",
indexAbout:"/ WHO WE ARE",introOverline:"A MULTIDISCIPLINARY TECHNOLOGY STUDIO",introTitle:"We don't follow the future.<br><span>We build its tools.</span>",introText:"HOA Industries is an independent technology development and research environment. We bring disciplines together to explore solutions where software, electronics and engineering work as one system.",
indexCapabilities:"/ WHAT WE DO",capTitle:"Ideas that take<br><span>shape and function.</span>",capIntro:"We work at the intersection of disciplines. From an initial architecture to a working prototype, every challenge requires the right tools.",cap1Title:"Artificial intelligence",cap1Text:"Models, automation, computer vision and intelligent assistance systems.",cap2Title:"Robotics & systems",cap2Text:"Electronics, embedded control, sensors and experimental autonomous systems.",cap3Title:"Software & platforms",cap3Text:"Applications, digital tools, web experiences and software infrastructure.",cap4Title:"Design & prototyping",cap4Text:"Technical design, component integration and iterative concept validation.",
indexProjects:"/ PORTFOLIO",projectsTitle:"Technology in<br><span>the making.</span>",projectsIntro:"A selection of initiatives exploring different technological possibilities. Each project evolves through research, design and experimentation.",statusActive:"IN DEVELOPMENT",statusRAndD:"R&D",statusConcept:"PROJECT",mindDesc:"An artificial intelligence experience designed to turn ideas into useful work.",aeroDesc:"Research into an aerial robotic platform for surface cleaning and perception tasks.",focusDesc:"A productivity and focus platform concept with intelligent tools.",ticketDesc:"A digital tool to organise and preserve tickets and event documents.",portfolioNote:"Projects are at different stages of development and research.",githubCta:"Explore GitHub",
indexApproach:"/ HOW WE WORK",approachOverline:"FROM CONCEPT TO SYSTEM",approachTitle:"Think with rigour.<br><em>Build with intent.</em>",step1Title:"Research",step1Text:"Understand the problem, study the context and define what is worth building.",step2Title:"Design",step2Text:"Translate requirements into architecture, experience and technical decisions.",step3Title:"Develop",step3Text:"Integrate hardware and software through development and testing cycles.",step4Title:"Validate",step4Text:"Measure outcomes, document learnings and improve the system.",
indexContact:"/ CONTACT",contactOverline:"THE NEXT IDEA STARTS HERE",contactTitle:"What if we<br><em>built it?</em>",contactText:"Good solutions start with a clear conversation about the challenge.",contactButton:"Connect with HOA",contactSide:"INDEPENDENT TECHNOLOGY<br>ENGINEERING & DEVELOPMENT",footerLine:"ENGINEERING WHAT'S NEXT."
}
};
let currentLang = "es";
const langSwitch = document.getElementById("langSwitch");
function setLanguage(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  langSwitch.textContent = lang === "es" ? "EN" : "ES";
  langSwitch.setAttribute("aria-label",lang === "es" ? "Switch to English" : "Cambiar a español");
}
langSwitch.addEventListener("click",()=>setLanguage(currentLang === "es" ? "en" : "es"));
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".desktop-nav");
menuToggle.addEventListener("click",()=>{
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",String(open));
});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded","false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}
  });
},{threshold:.12});
document.querySelectorAll(".cap-card,.project-row,.process>div,.intro-content,.section-heading").forEach(el=>{
  el.classList.add("reveal");
  observer.observe(el);
});