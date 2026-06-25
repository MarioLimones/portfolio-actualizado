import { useEffect, useRef, useState } from "react";

function asset(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}

const techCarouselItems = [
  { name: "Java", icon: asset("/java-coffee.svg") },
  { name: "Spring Boot", icon: "https://cdn.simpleicons.org/springboot/6DB33F" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/5AA9E6" },
  { name: "SQL", icon: "https://cdn.simpleicons.org/sqlite/8BD3FF" },
  { name: "C#", icon: "https://cdn.simpleicons.org/sharp/A179DC" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/F7D154" },
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/F97316" },
  { name: "CSS3", icon: "https://cdn.simpleicons.org/css/38BDF8" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/FACC15" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/7DD3FC" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/60A5FA" },
  { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress/FFFFFF" },
  { name: "Android", icon: "https://cdn.simpleicons.org/android/7DDC84" },
  { name: "Kotlin", icon: "https://cdn.simpleicons.org/kotlin/C084FC" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/60A5FA" },
  { name: "Swagger", icon: "https://cdn.simpleicons.org/swagger/9FEF00" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F97316" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FB923C" },
];

const projectTechIcons = {
  Java: asset("/java-coffee.svg"),
  "Spring Boot": "https://cdn.simpleicons.org/springboot/6DB33F",
  MySQL: "https://cdn.simpleicons.org/mysql/5AA9E6",
  React: "https://cdn.simpleicons.org/react/7DD3FC",
  Android: "https://cdn.simpleicons.org/android/7DDC84",
  Kotlin: "https://cdn.simpleicons.org/kotlin/C084FC",
  "Persistencia local": "https://cdn.simpleicons.org/sqlite/8BD3FF",
  "Local persistence": "https://cdn.simpleicons.org/sqlite/8BD3FF",
  TypeScript: "https://cdn.simpleicons.org/typescript/60A5FA",
  "Responsive UI": "https://cdn.simpleicons.org/css/38BDF8",
  HTML5: "https://cdn.simpleicons.org/html5/F97316",
  CSS3: "https://cdn.simpleicons.org/css/38BDF8",
  JavaScript: "https://cdn.simpleicons.org/javascript/FACC15",
  WordPress: "https://cdn.simpleicons.org/wordpress/FFFFFF",
};

// ponytail: un solo objeto de contenido evita perseguir strings sueltos por toda la pagina.
const localizedContent = {
  es: {
    nav: {
      about: "Perfil",
      projects: "Proyectos",
      experience: "Trayectoria",
      contact: "Contacto",
    },
    theme: {
      nextModeLabel: {
        dark: "Claro",
        light: "Oscuro",
      },
      switchTo: {
        dark: "Cambiar a modo claro",
        light: "Cambiar a modo oscuro",
      },
    },
    language: {
      triggerLabel: "Idioma",
      menuLabel: "Seleccion de idioma",
      switchTo: "Cambiar idioma a",
    },
    hero: {
      title: "Mario Limones Bernabé",
      description:
        "Desarrollador Full-Stack Junior con foco en Java y Spring Boot, experiencia construyendo APIs REST, CRUDs e integraciones con MySQL, y criterio para llevar esa logica a interfaces claras con React.",
      primaryCta: "Ver proyectos",
      secondaryCta: "Descargar CV",
      badge: "Disponible para proyectos web",
      imageAlt: "Mario Limones en un entorno exterior",
      location: "Sevilla, España",
      caption: "APIs, producto web y experiencia de usuario.",
    },
    ticker: {
      ariaLabel: "Tecnologias",
      logoSuffix: "logo",
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Una seleccion que cuente como trabajas.",
      navLabel: "Navegacion de proyectos",
      previous: "Mostrar proyectos anteriores",
      next: "Mostrar siguientes proyectos",
      openImage: "Ampliar imagen de",
      preview: "Vista previa de",
      lightbox: "Vista ampliada de",
      closeLightbox: "Cerrar imagen ampliada",
      items: [
        {
          title: "Aplicacion de preguntas",
          tag: "Full-Stack",
          description:
            "Aplicacion full-stack con arquitectura por capas, API REST, operaciones CRUD y persistencia en MySQL consumida desde una interfaz en React.",
          stack: ["Java", "Spring Boot", "MySQL", "React"],
          image: asset("/app-preguntas.png"),
          linkLabel: "Ver repositorio",
          linkHref: "https://github.com/MarioLimones/app_preguntas",
        },
        {
          title: "Gestor de tareas Android",
          tag: "Mobile",
          description:
            "App Android para gestion de tareas personales con almacenamiento local y una interfaz simple, clara y orientada al uso diario.",
          stack: ["Android", "Kotlin", "Persistencia local"],
          image: asset("/gestor-tareas.png"),
          linkLabel: "Ver repositorio",
          linkHref: "https://github.com/MarioLimones/gestor_de_tareas_android",
        },
        {
          title: "Dual Psicologia y Formacion",
          tag: "WordPress",
          description:
            "Web corporativa desarrollada en WordPress con HTML y CSS para un centro sanitario centrado en psicoterapia, formacion, acompanamiento y asesoramiento.",
          stack: ["WordPress", "HTML5", "CSS3"],
          image: asset("/dual-psicologia.png"),
          linkLabel: "Ver web",
          linkHref: "https://dualpsicologia.com/",
        },
        {
          title: "Baddelux",
          tag: "WordPress",
          description:
            "E-commerce alemana de muebles de bano y equipamiento para el hogar en la que colabore junto a mi jefe, realizando trabajo en WordPress, maquetacion y ajustes visuales de la tienda online.",
          stack: ["WordPress", "HTML5", "CSS3"],
          image: asset("/baddelux-banner.png"),
          linkLabel: "Ver web",
          linkHref: "https://baddelux.com/",
        },
        {
          title: "Portfolio personal",
          tag: "Frontend",
          description:
            "Mi portfolio anterior, desarrollado con HTML, CSS y un poco de JavaScript, enfocado en presentar proyectos y perfil profesional con una maquetacion sencilla y directa.",
          stack: ["HTML5", "CSS3", "JavaScript"],
          image: asset("/antiguo-portfolio.png"),
          linkLabel: "Ver web",
          linkHref: "https://mariolimones.github.io/mlimones/",
        },
      ],
    },
    experience: {
      eyebrow: "Trayectoria",
      title: "Experiencia contada con ritmo, no con ladrillos.",
      summaryKicker: "Del taller al desarrollo",
      summaryTitle: "Precision, equipo y resolucion practica aplicadas al mundo web.",
      summaryBody:
        "Mi recorrido mezcla entorno industrial y producto digital. Primero aprendi a trabajar con procesos exigentes y despues lo traslade a desarrollo web, responsive y experiencia de usuario.",
      railLabel: "Recorrido profesional",
      items: [
        {
          period: "Nowalia",
          role: "Desarrollador de paginas web",
          company: "Webs",
          summary:
            "Etapa centrada en adaptacion responsive, ajustes visuales y mejora de experiencia de usuario en paginas reales.",
          points: [
            "Adaptacion de paginas a movil, tablet y escritorio para mejorar visualizacion.",
            "Gestion de contenidos, estructura visual y resolucion de incidencias de maquetacion.",
            "Personalizacion de secciones en WordPress mediante HTML, CSS y configuracion del tema.",
          ],
          highlights: [
            "Responsive web",
            "WordPress",
            "HTML y CSS",
            "Maquetacion",
            "Adaptacion rapida",
            "UX visual",
          ],
        },
        {
          period: "Airbus",
          role: "Montador Aeronautico",
          company: "Airbus - C295 y Falcon 8X",
          summary:
            "Participacion en montaje y ensamblaje aeronautico, trabajando con equipos multidisciplinares y procesos exigentes de calidad.",
          points: [
            "Instalacion y verificacion de componentes siguiendo estandares tecnicos altos.",
            "Resolucion de incidencias y problemas complejos con atencion al detalle.",
            "Desarrollo de precision, disciplina y capacidad de trabajo bajo cambios.",
          ],
          highlights: [
            "Trabajo en equipo",
            "Precision tecnica",
            "Montaje aeronautico",
            "Control de calidad",
            "Resolucion de incidencias",
            "Disciplina operativa",
          ],
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      titleStart: "Quieres",
      titleAccent: "hablar?",
      lead:
        "Si necesitas a alguien para incorporacion, un proyecto puntual o simplemente quieres comentar una idea, estoy a un mensaje de distancia.",
      cta: "Contactar aqui",
      chatTitle: "Haz una pregunta",
      closeForm: "Cerrar formulario de contacto",
      launcherOpen: "Abrir chat",
      launcherClose: "Cerrar chat",
      fields: {
        name: "Nombre",
        email: "Correo",
        question: "Tu pregunta",
        phone: "Telefono",
        characters: "Caracteres",
        send: "Enviar",
        sending: "Enviando...",
        placeholders: {
          name: "Escribe tu nombre",
          email: "Escribe tu correo",
          question: "Cuentame con detalle que necesitas",
          phone: "Introduce tu telefono",
        },
      },
      form: {
        notProvided: "No indicado",
        subjectPrefix: "Nuevo mensaje desde el portfolio",
        notices: {
          invalidFields: "Completa nombre, correo y pregunta antes de enviar.",
          success: "Mensaje enviado correctamente. Me llegara directamente al correo.",
          sendError: "No se pudo enviar el mensaje. Intentalo de nuevo en unos minutos.",
        },
      },
      socialLinks: [
        {
          label: "Email directo",
          href: "mailto:mario.limobe@gmail.com",
          icon: "mail",
        },
        {
          label: "WhatsApp",
          href: "https://wa.me/34644484482",
          icon: "whatsapp",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/mariolimonesbernabe/",
          icon: "linkedin",
        },
        {
          label: "GitHub",
          href: "https://github.com/MarioLimones",
          icon: "github",
        },
      ],
      inquiries: [
        {
          id: "hire-full-time",
          label: "Trabajo a tiempo completo",
          description:
            "Buscas un desarrollador para sumar a tu equipo y construir producto con continuidad?",
          icon: "briefcase",
        },
        {
          id: "freelance-project",
          label: "Proyecto freelance",
          description:
            "Necesitas una landing o una aplicacion web bien resuelta y lista para ponerse en marcha?",
          icon: "code",
        },
        {
          id: "collaboration",
          label: "Colaboracion",
          description:
            "Tienes una idea, una startup o un proyecto abierto y quieres comentar como moverlo?",
          icon: "spark",
        },
      ],
    },
  },
  en: {
    nav: {
      about: "Profile",
      projects: "Projects",
      experience: "Journey",
      contact: "Contact",
    },
    theme: {
      nextModeLabel: {
        dark: "Light",
        light: "Dark",
      },
      switchTo: {
        dark: "Switch to light mode",
        light: "Switch to dark mode",
      },
    },
    language: {
      triggerLabel: "Language",
      menuLabel: "Language selector",
      switchTo: "Switch language to",
    },
    hero: {
      title: "Mario Limones Bernabé",
      description:
        "Junior Full-Stack Developer focused on Java and Spring Boot, with hands-on experience building REST APIs, CRUD systems, and MySQL integrations, plus the judgement to turn that logic into clean React interfaces.",
      primaryCta: "View projects",
      secondaryCta: "Download resume",
      badge: "Available for web projects",
      imageAlt: "Mario Limones outdoors",
      location: "Seville, Spain",
      caption: "APIs, web product work, and user experience.",
    },
    ticker: {
      ariaLabel: "Technologies",
      logoSuffix: "logo",
    },
    projects: {
      eyebrow: "Projects",
      title: "A selection that shows how you work.",
      navLabel: "Project navigation",
      previous: "Show previous projects",
      next: "Show next projects",
      openImage: "Open image for",
      preview: "Preview for",
      lightbox: "Expanded view of",
      closeLightbox: "Close expanded image",
      items: [
        {
          title: "Quiz application",
          tag: "Full-Stack",
          description:
            "Full-stack application built with layered architecture, a REST API, CRUD operations, and MySQL persistence, consumed from a React interface.",
          stack: ["Java", "Spring Boot", "MySQL", "React"],
          image: asset("/app-preguntas.png"),
          linkLabel: "View repository",
          linkHref: "https://github.com/MarioLimones/app_preguntas",
        },
        {
          title: "Android task manager",
          tag: "Mobile",
          description:
            "Android app for personal task management with local storage and a simple, clear interface designed for everyday use.",
          stack: ["Android", "Kotlin", "Local persistence"],
          image: asset("/gestor-tareas.png"),
          linkLabel: "View repository",
          linkHref: "https://github.com/MarioLimones/gestor_de_tareas_android",
        },
        {
          title: "Dual Psicologia y Formacion",
          tag: "WordPress",
          description:
            "Corporate website built in WordPress with HTML and CSS for a healthcare center focused on psychotherapy, training, guidance, and advisory services.",
          stack: ["WordPress", "HTML5", "CSS3"],
          image: asset("/dual-psicologia.png"),
          linkLabel: "Visit website",
          linkHref: "https://dualpsicologia.com/",
        },
        {
          title: "Baddelux",
          tag: "WordPress",
          description:
            "German ecommerce store for bathroom furniture and home equipment where I collaborated on WordPress work, layout implementation, and visual refinements for the online shop.",
          stack: ["WordPress", "HTML5", "CSS3"],
          image: asset("/baddelux-banner.png"),
          linkLabel: "Visit website",
          linkHref: "https://baddelux.com/",
        },
        {
          title: "Personal portfolio",
          tag: "Frontend",
          description:
            "My previous portfolio, built with HTML, CSS, and a bit of JavaScript, focused on presenting projects and professional background through a direct, simple layout.",
          stack: ["HTML5", "CSS3", "JavaScript"],
          image: asset("/antiguo-portfolio.png"),
          linkLabel: "Visit website",
          linkHref: "https://mariolimones.github.io/mlimones/",
        },
      ],
    },
    experience: {
      eyebrow: "Journey",
      title: "Experience with rhythm, not walls of text.",
      summaryKicker: "From the workshop floor to web development",
      summaryTitle: "Precision, teamwork, and practical problem-solving brought into web product work.",
      summaryBody:
        "My path combines industrial environments and digital product work. I first learned to operate inside demanding processes, then translated that mindset into web development, responsive implementation, and user experience.",
      railLabel: "Career path",
      items: [
        {
          period: "Nowalia",
          role: "Web developer",
          company: "Websites",
          summary:
            "Stage focused on responsive adaptation, visual refinements, and improving user experience on real production pages.",
          points: [
            "Adapted pages for mobile, tablet, and desktop to improve presentation across devices.",
            "Handled content, visual structure, and layout-related issue resolution.",
            "Customized WordPress sections through HTML, CSS, and theme configuration.",
          ],
          highlights: [
            "Responsive web",
            "WordPress",
            "HTML and CSS",
            "Layout work",
            "Fast adaptation",
            "Visual UX",
          ],
        },
        {
          period: "Airbus",
          role: "Aircraft assembler",
          company: "Airbus - C295 and Falcon 8X",
          summary:
            "Worked on aircraft assembly and installation within multidisciplinary teams and under strict quality-driven processes.",
          points: [
            "Installed and verified components while following demanding technical standards.",
            "Solved incidents and complex issues with close attention to detail.",
            "Built precision, discipline, and the ability to perform under changing conditions.",
          ],
          highlights: [
            "Teamwork",
            "Technical precision",
            "Aircraft assembly",
            "Quality control",
            "Incident resolution",
            "Operational discipline",
          ],
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      titleStart: "Want to",
      titleAccent: "talk?",
      lead:
        "If you need someone for a full-time role, a one-off project, or you simply want to discuss an idea, I am one message away.",
      cta: "Contact here",
      chatTitle: "Ask a question",
      closeForm: "Close contact form",
      launcherOpen: "Open chat",
      launcherClose: "Close chat",
      fields: {
        name: "Name",
        email: "Email",
        question: "Your question",
        phone: "Phone",
        characters: "Characters",
        send: "Send",
        sending: "Sending...",
        placeholders: {
          name: "Type your name",
          email: "Type your email",
          question: "Tell me in detail what you need",
          phone: "Enter your phone number",
        },
      },
      form: {
        notProvided: "Not provided",
        subjectPrefix: "New message from the portfolio",
        notices: {
          invalidFields: "Please complete your name, email, and question before sending.",
          success: "Message sent successfully. It will arrive directly in my inbox.",
          sendError: "The message could not be sent. Please try again in a few minutes.",
        },
      },
      socialLinks: [
        {
          label: "Direct email",
          href: "mailto:mario.limobe@gmail.com",
          icon: "mail",
        },
        {
          label: "WhatsApp",
          href: "https://wa.me/34644484482",
          icon: "whatsapp",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/mariolimonesbernabe/",
          icon: "linkedin",
        },
        {
          label: "GitHub",
          href: "https://github.com/MarioLimones",
          icon: "github",
        },
      ],
      inquiries: [
        {
          id: "hire-full-time",
          label: "Full-time role",
          description:
            "Are you looking for a developer to join your team and help build product with continuity?",
          icon: "briefcase",
        },
        {
          id: "freelance-project",
          label: "Freelance project",
          description:
            "Do you need a landing page or web application that is polished, practical, and ready to launch?",
          icon: "code",
        },
        {
          id: "collaboration",
          label: "Collaboration",
          description:
            "Do you have an idea, startup, or open project and want to talk through how to move it forward?",
          icon: "spark",
        },
      ],
    },
  },
};

const languageOptions = [
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

const contactEmailAddress = "mario.limobe@gmail.com";
const contactFormEndpoint = `https://formsubmit.co/ajax/${contactEmailAddress}`;
const themeStorageKey = "portfolio-theme";
const localeStorageKey = "portfolio-locale";
const languageOptionsUiLegacy = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
];

const languageOptionsUi = [
  { code: "es", label: "Español", flagSrc: asset("/flags/es.svg") },
  { code: "en", label: "English", flagSrc: asset("/flags/gb.svg") },
];

function InquiryIcon({ kind }) {
  if (kind === "briefcase") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M8 7V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1m-8 0h8m-12 3h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (kind === "spark") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 3v4m0 10v4M5.6 5.6l2.8 2.8m7.2 7.2 2.8 2.8M3 12h4m10 0h4m-2.6-6.4-2.8 2.8m-7.2 7.2-2.8 2.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m8 8-4 4 4 4m8-8 4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SocialIcon({ kind }) {
  if (kind === "mail") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 16.5v-9Zm1.2.3 6.2 5 6.2-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (kind === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 20a8 8 0 0 0 8-8 8 8 0 0 0-13.66-5.66A8 8 0 0 0 4 12a7.97 7.97 0 0 0 1.15 4.14L4.5 19.5l3.47-.62A7.97 7.97 0 0 0 12 20Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.4 9.1c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.5 1.3c.1.2 0 .5-.1.7l-.4.5c.6 1 1.4 1.7 2.4 2.2l.5-.4c.2-.1.5-.2.7-.1l1.2.5c.3.1.4.3.4.5v.5c0 .3-.1.5-.4.7-.4.2-.9.3-1.3.2-3-.8-5.4-3.1-6.1-6.1-.1-.5 0-.9.3-1.3Z"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    );
  }

  if (kind === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M6.75 8.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM5.75 9.75h2V18h-2V9.75ZM10.25 9.75h1.92v1.13h.03c.27-.5.93-1.38 2.41-1.38 2.58 0 3.05 1.7 3.05 3.9V18h-2.01v-4.04c0-.96-.02-2.2-1.34-2.2-1.35 0-1.56 1.05-1.56 2.13V18h-2V9.75Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3C7 3 3 7 3 12c0 4 2.6 7.4 6.2 8.6.5.1.7-.2.7-.5v-1.9c-2.5.5-3-1.1-3-1.1-.4-1-.9-1.3-.9-1.3-.8-.5.1-.5.1-.5.8.1 1.3.9 1.3.9.8 1.3 2 1 2.5.8.1-.6.3-1 .6-1.2-2-.2-4.1-1-4.1-4.4 0-1 .3-1.8.9-2.4-.1-.2-.4-1.1.1-2.3 0 0 .7-.2 2.4.9A8.4 8.4 0 0 1 12 7.8c.7 0 1.5.1 2.2.3 1.7-1.1 2.4-.9 2.4-.9.5 1.2.2 2.1.1 2.3.6.6.9 1.4.9 2.4 0 3.4-2.1 4.2-4.1 4.4.3.3.6.8.6 1.7v2.5c0 .3.2.6.7.5A9 9 0 0 0 21 12c0-5-4-9-9-9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ThemeToggleIcon({ theme }) {
  return (
    <span className="theme-toggle-icon" aria-hidden="true">
      <svg
        className={`theme-icon theme-icon-sun${theme === "light" ? " is-active" : ""}`}
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="4.2" fill="currentColor" />
        <path
          d="M12 2.5v2.4M12 19.1v2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
      <svg
        className={`theme-icon theme-icon-moon${theme === "dark" ? " is-active" : ""}`}
        viewBox="0 0 24 24"
      >
        <path
          d="M14.8 3.4a8.8 8.8 0 1 0 5.8 15.4A9.6 9.6 0 0 1 14.8 3.4Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return undefined;

    const node = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return ref;
}

function Reveal({ as: Tag = "div", className = "", children, ...props }) {
  const ref = useReveal();

  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}

function getProjectsPerPage(viewportWidth) {
  return viewportWidth <= 920 ? 1 : 3;
}

function normalizeTheme(value) {
  return value === "light" ? "light" : "dark";
}

function normalizeLocale(value) {
  return value === "en" ? "en" : "es";
}

function getStoredTheme() {
  if (typeof window === "undefined") return "dark";
  return normalizeTheme(window.localStorage.getItem(themeStorageKey));
}

function getStoredLocale() {
  if (typeof window === "undefined") return "es";
  return normalizeLocale(window.localStorage.getItem(localeStorageKey));
}

function runThemeSelfCheck() {
  console.assert(normalizeTheme("light") === "light", "Light theme should stay light.");
  console.assert(normalizeTheme("anything-else") === "dark", "Fallback theme should be dark.");
}

function runLocaleSelfCheck() {
  console.assert(normalizeLocale("en") === "en", "English locale should stay English.");
  console.assert(normalizeLocale("anything-else") === "es", "Fallback locale should be Spanish.");
}

function runProjectsPerPageSelfCheck() {
  console.assert(getProjectsPerPage(390) === 1, "Mobile should show one project per page.");
  console.assert(getProjectsPerPage(768) === 1, "Reduced screens should show one project per page.");
  console.assert(getProjectsPerPage(1280) === 3, "Desktop should keep three projects per page.");
}

function runContentSelfCheck() {
  console.assert(
    localizedContent.es.projects.items.length === localizedContent.en.projects.items.length,
    "Projects should exist in both languages.",
  );
  console.assert(
    localizedContent.es.experience.items.length === localizedContent.en.experience.items.length,
    "Experience items should exist in both languages.",
  );
}

if (import.meta.env.DEV) {
  runThemeSelfCheck();
  runLocaleSelfCheck();
  runProjectsPerPageSelfCheck();
  runContentSelfCheck();
}

function App() {
  const glowRef = useRef(null);
  const chatPanelRef = useRef(null);
  const languageMenuRef = useRef(null);
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const lastScrollYRef = useRef(0);
  const [theme, setTheme] = useState(getStoredTheme);
  const [locale, setLocale] = useState(getStoredLocale);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [themeToggleAnimating, setThemeToggleAnimating] = useState(false);
  const [projectsPerPage, setProjectsPerPage] = useState(() =>
    typeof window === "undefined" ? 3 : getProjectsPerPage(window.innerWidth),
  );
  const [projectPage, setProjectPage] = useState(0);
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);
  const [selectedInquiryId, setSelectedInquiryId] = useState("hire-full-time");
  const [chatWidgetOpen, setChatWidgetOpen] = useState(false);
  const [chatWidgetRendered, setChatWidgetRendered] = useState(false);
  const [contactNotice, setContactNotice] = useState(null);
  const [sendingContact, setSendingContact] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactQuestion, setContactQuestion] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [chatPanelPosition, setChatPanelPosition] = useState({ x: null, y: null });
  const [draggingChatPanel, setDraggingChatPanel] = useState(false);
  const [mobileHeaderHidden, setMobileHeaderHidden] = useState(false);

  const content = localizedContent[locale];
  const currentLanguage =
    languageOptionsUi.find((item) => item.code === locale) ?? languageOptionsUi[0];
  const projects = content.projects.items;
  const experience = content.experience.items;
  const inquiryOptions = content.contact.inquiries;
  const socialLinks = content.contact.socialLinks;
  const totalProjectPages = Math.ceil(projects.length / projectsPerPage);
  const visibleProjects = projects.slice(
    projectPage * projectsPerPage,
    projectPage * projectsPerPage + projectsPerPage,
  );
  const expandedProject =
    projects.find((project) => project.linkHref === expandedProjectId) ?? null;
  const selectedExperience = experience[selectedExperienceIndex] ?? experience[0];
  const selectedInquiry =
    inquiryOptions.find((item) => item.id === selectedInquiryId) ?? inquiryOptions[0];
  const chatFormReady =
    contactName.trim().length > 0 &&
    isValidEmail(contactEmail) &&
    contactQuestion.trim().length > 0;
  useEffect(() => {
    document.body.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(themeStorageKey, theme);
  }, [theme]);

  useEffect(() => {
    if (!themeToggleAnimating) return undefined;

    const timeoutId = window.setTimeout(() => {
      setThemeToggleAnimating(false);
    }, 320);

    return () => window.clearTimeout(timeoutId);
  }, [themeToggleAnimating]);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(localeStorageKey, locale);
  }, [locale]);

  useEffect(() => {
    const syncProjectsPerPage = () => {
      setProjectsPerPage(getProjectsPerPage(window.innerWidth));

      if (window.innerWidth > 640) {
        setMobileHeaderHidden(false);
      }
    };

    syncProjectsPerPage();
    window.addEventListener("resize", syncProjectsPerPage);

    return () => window.removeEventListener("resize", syncProjectsPerPage);
  }, []);

  useEffect(() => {
    setProjectPage((current) => Math.min(current, Math.max(totalProjectPages - 1, 0)));
  }, [totalProjectPages]);

  useEffect(() => {
    const handlePointerMove = (event) => {
      document.body.style.setProperty("--glow-x", `${event.clientX}px`);
      document.body.style.setProperty("--glow-y", `${event.clientY}px`);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!glowRef.current) return;

      glowRef.current.style.transform = `translate3d(0, ${currentScrollY * 0.08}px, 0)`;

      if (window.innerWidth > 640) {
        lastScrollYRef.current = currentScrollY;
        setMobileHeaderHidden(false);
        return;
      }

      const scrollingDown = currentScrollY > lastScrollYRef.current;
      const shouldHideHeader = scrollingDown && currentScrollY > 72;

      setMobileHeaderHidden(shouldHideHeader);
      lastScrollYRef.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!draggingChatPanel) return undefined;

    const handlePointerMove = (event) => {
      if (!chatPanelRef.current) return;

      const panelRect = chatPanelRef.current.getBoundingClientRect();
      const maxX = Math.max(16, window.innerWidth - panelRect.width - 16);
      const maxY = Math.max(16, window.innerHeight - panelRect.height - 16);
      const nextX = Math.min(Math.max(16, event.clientX - dragOffsetRef.current.x), maxX);
      const nextY = Math.min(Math.max(16, event.clientY - dragOffsetRef.current.y), maxY);

      setChatPanelPosition({ x: nextX, y: nextY });
    };

    const stopDragging = () => {
      setDraggingChatPanel(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", stopDragging);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", stopDragging);
    };
  }, [draggingChatPanel]);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!languageMenuRef.current?.contains(event.target)) {
        setLanguageMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setLanguageMenuOpen(false);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!expandedProject) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setExpandedProjectId(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [expandedProject]);

  useEffect(() => {
    if (chatWidgetOpen) {
      setChatWidgetRendered(true);
      return undefined;
    }

    if (!chatWidgetRendered) return undefined;

    const timeoutId = window.setTimeout(() => {
      setChatWidgetRendered(false);
      setChatPanelPosition({ x: null, y: null });
    }, 220);

    return () => window.clearTimeout(timeoutId);
  }, [chatWidgetOpen, chatWidgetRendered]);

  useEffect(() => {
    if (!contactNotice) return undefined;

    const timeoutId = window.setTimeout(() => {
      setContactNotice(null);
    }, 3600);

    return () => window.clearTimeout(timeoutId);
  }, [contactNotice]);

  const goToPreviousProjects = () => {
    setProjectPage((current) => (current === 0 ? totalProjectPages - 1 : current - 1));
  };

  const goToNextProjects = () => {
    setProjectPage((current) =>
      current === totalProjectPages - 1 ? 0 : current + 1,
    );
  };

  const openChatWidget = (inquiryId = selectedInquiry.id) => {
    setSelectedInquiryId(inquiryId);
    setChatWidgetOpen(true);
  };

  const closeChatWidget = () => {
    setChatWidgetOpen(false);
    setDraggingChatPanel(false);
  };

  const openContactComposer = async () => {
    if (!chatFormReady) {
      setContactNotice({
        type: "error",
        messageKey: "invalidFields",
      });
      return;
    }

    try {
      setSendingContact(true);
      setContactNotice(null);

      const response = await fetch(contactFormEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: contactName.trim(),
          email: contactEmail.trim(),
          phone: contactPhone.trim() || content.contact.form.notProvided,
          topic: selectedInquiry.label,
          message: contactQuestion.trim(),
          _subject: `${content.contact.form.subjectPrefix} - ${selectedInquiry.label}`,
          _replyto: contactEmail.trim(),
          _template: "table",
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.message || content.contact.form.notices.sendError);
      }

      setContactNotice({
        type: "success",
        messageKey: "success",
      });
      setContactName("");
      setContactEmail("");
      setContactQuestion("");
      setContactPhone("");
    } catch (error) {
      setContactNotice({
        type: "error",
        message:
          error instanceof Error ? error.message : content.contact.form.notices.sendError,
      });
    } finally {
      setSendingContact(false);
    }
  };

  const startDraggingChatPanel = (event) => {
    if (!chatPanelRef.current) return;

    const rect = chatPanelRef.current.getBoundingClientRect();
    dragOffsetRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };

    setChatPanelPosition({ x: rect.left, y: rect.top });
    setDraggingChatPanel(true);
  };

  const toggleTheme = () => {
    setThemeToggleAnimating(false);
    setTheme((current) => (current === "dark" ? "light" : "dark"));
    setThemeToggleAnimating(true);
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen((current) => !current);
  };

  const switchLocale = (nextLocale) => {
    setLocale(nextLocale);
    setLanguageMenuOpen(false);
  };

  const contactNoticeMessage = contactNotice
    ? contactNotice.message ?? content.contact.form.notices[contactNotice.messageKey]
    : null;
  const resumeFile =
    locale === "en" ? asset("/Limones_Bernabe_Mario_English_CV.pdf") : asset("/Limones_Bernabe_Mario_CV.pdf");
  const resumeDownloadName =
    locale === "en" ? "Limones_Bernabe_Mario_English_CV.pdf" : "Limones_Bernabe_Mario_CV.pdf";

  return (
    <>
      <div ref={glowRef} className="page-glow"></div>

      <header className={`site-header${mobileHeaderHidden ? " is-hidden" : ""}`}>
        <nav className="site-nav">
          <a href="#about">{content.nav.about}</a>
          <a href="#projects">{content.nav.projects}</a>
          <a href="#experience">{content.nav.experience}</a>
          <a href="#contact">{content.nav.contact}</a>

          <div ref={languageMenuRef} className={`locale-switch${languageMenuOpen ? " is-open" : ""}`}>
            <button
              type="button"
              className="locale-trigger"
              onClick={toggleLanguageMenu}
              aria-haspopup="menu"
              aria-expanded={languageMenuOpen}
              aria-label={content.language.triggerLabel}
            >
              <span className="locale-flag" aria-hidden="true">
                <img className="locale-flag-image" src={currentLanguage.flagSrc} alt="" />
              </span>
              <span>{currentLanguage.label}</span>
              <span className="locale-caret" aria-hidden="true">
                ▾
              </span>
            </button>

            {languageMenuOpen ? (
              <div className="locale-menu" role="menu" aria-label={content.language.menuLabel}>
                {languageOptionsUi.map((option) => {
                  const isActive = option.code === locale;

                  return (
                    <button
                      key={option.code}
                      type="button"
                      className={`locale-option${isActive ? " is-active" : ""}`}
                      onClick={() => switchLocale(option.code)}
                      role="menuitemradio"
                      aria-checked={isActive}
                    >
                      <span className="locale-flag" aria-hidden="true">
                        <img className="locale-flag-image" src={option.flagSrc} alt="" />
                      </span>
                      <span>{option.label}</span>
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>

          <button
            type="button"
            className={`theme-toggle${themeToggleAnimating ? " is-animating" : ""}`}
            onClick={toggleTheme}
            aria-label={content.theme.switchTo[theme]}
          >
            <ThemeToggleIcon theme={theme} />
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero section" id="about">
          <Reveal className="hero-copy">
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1>{content.hero.title}</h1>
            <p className="hero-text">{content.hero.description}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                {content.hero.primaryCta}
              </a>
              <a
                className="button button-secondary"
                href={resumeFile}
                download={resumeDownloadName}
              >
                {content.hero.secondaryCta}
              </a>
            </div>
          </Reveal>

          <Reveal className="hero-side">
            <div className="hero-visual-wrap floating-card">
              <div className="profile-badge">{content.hero.badge}</div>
              <img
                className="profile-visual"
                src={asset("/foto-perfil.jpeg")}
                alt={content.hero.imageAlt}
              />
              <div className="profile-caption">
                <strong>{content.hero.location}</strong>
                <span>{content.hero.caption}</span>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="ticker" aria-label={content.ticker.ariaLabel}>
          <div className="ticker-track">
            {[...techCarouselItems, ...techCarouselItems].map((item, index) => (
              <article key={`${item.name}-${index}`} className="ticker-item">
                <img
                  className="ticker-logo"
                  src={item.icon}
                  alt={`${item.name} ${content.ticker.logoSuffix}`}
                  loading="lazy"
                />
                <span>{item.name}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <Reveal className="section-heading projects-head">
            <div>
              <p className="eyebrow">{content.projects.eyebrow}</p>
              <h2 className="projects-title">{content.projects.title}</h2>
            </div>
            <div className="project-nav" aria-label={content.projects.navLabel}>
              <button
                className="project-nav-button"
                type="button"
                onClick={goToPreviousProjects}
                disabled={totalProjectPages <= 1}
                aria-label={content.projects.previous}
              >
                {"<"}
              </button>
              <span className="project-nav-status">
                {projectPage + 1} / {totalProjectPages}
              </span>
              <button
                className="project-nav-button"
                type="button"
                onClick={goToNextProjects}
                disabled={totalProjectPages <= 1}
                aria-label={content.projects.next}
              >
                {">"}
              </button>
            </div>
          </Reveal>

          <div className="project-gallery">
            {visibleProjects.map((project) => (
              <Reveal key={project.linkHref} as="article" className="project-card">
                <button
                  type="button"
                  className="project-image-button"
                  onClick={() => setExpandedProjectId(project.linkHref)}
                  aria-label={`${content.projects.openImage} ${project.title}`}
                >
                  <div className="project-image-frame">
                    <img
                      className="project-image"
                      src={project.image}
                      alt={`${content.projects.preview} ${project.title}`}
                    />
                  </div>
                </button>
                <div className="project-card-body">
                  <p className="project-tag">{project.tag}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="pill-list project-stack">
                    {project.stack.map((item) => (
                      <li key={item} className="project-tech-pill" title={item} aria-label={item}>
                        <img
                          className="project-tech-icon"
                          src={projectTechIcons[item]}
                          alt={item}
                          loading="lazy"
                        />
                      </li>
                    ))}
                  </ul>
                  <a
                    className="button button-secondary project-link"
                    href={project.linkHref}
                    target={project.linkHref.startsWith("http") ? "_blank" : undefined}
                    rel={project.linkHref.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {project.linkLabel}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <Reveal className="section-heading experience-head">
            <div>
              <p className="eyebrow">{content.experience.eyebrow}</p>
              <h2 className="experience-title">{content.experience.title}</h2>
            </div>
          </Reveal>

          <div className="experience-layout experience-layout-plain">
            <Reveal className="experience-rail-wrap">
              <div className="experience-summary-plain">
                <p className="experience-summary-kicker">{content.experience.summaryKicker}</p>
                <h3>{content.experience.summaryTitle}</h3>
                <p>{content.experience.summaryBody}</p>
              </div>

              <div className="experience-rail" role="tablist" aria-label={content.experience.railLabel}>
                {experience.map((item, index) => {
                  const isSelected = index === selectedExperienceIndex;

                  return (
                    <button
                      key={`${item.company}-${item.role}`}
                      type="button"
                      className={`experience-stop${isSelected ? " is-selected" : ""}`}
                      onClick={() => setSelectedExperienceIndex(index)}
                      aria-selected={isSelected}
                    >
                      <span className="experience-stop-dot" aria-hidden="true"></span>
                      <span className="experience-stop-copy">
                        <span className="experience-stop-period">{item.period}</span>
                        <strong>{item.role}</strong>
                        <span>{item.company}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </Reveal>

            <Reveal className="experience-focus">
              <p className="experience-focus-period">{selectedExperience.period}</p>
              <h3>{selectedExperience.role}</h3>
              <p>{selectedExperience.summary}</p>
              <ul className="experience-points">
                {selectedExperience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <ul className="pill-list experience-highlights">
                {selectedExperience.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <Reveal className="contact-showcase">
            <p className="eyebrow">{content.contact.eyebrow}</p>
            <h2 className="contact-title">
              {content.contact.titleStart} <span>{content.contact.titleAccent}</span>
            </h2>
            <p className="contact-lead">{content.contact.lead}</p>

            <div className="contact-card-grid">
              {inquiryOptions.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="contact-choice-card"
                  onClick={() => setSelectedInquiryId(item.id)}
                >
                  <span className="contact-choice-icon" aria-hidden="true">
                    <InquiryIcon kind={item.icon} />
                  </span>
                  <strong>{item.label}</strong>
                  <span>{item.description}</span>
                </button>
              ))}
            </div>

            <div className="contact-actions-row">
              <div className="contact-inline-links">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    className="contact-inline-link"
                    href={link.href}
                    aria-label={link.label}
                    title={link.label}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <SocialIcon kind={link.icon} />
                  </a>
                ))}
              </div>

              <button
                type="button"
                className="contact-connect-button"
                onClick={() => openChatWidget(selectedInquiry.id)}
              >
                {content.contact.cta} <span aria-hidden="true">-&gt;</span>
              </button>
            </div>
          </Reveal>
        </section>
      </main>

      {expandedProject ? (
        <div
          className="project-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${content.projects.lightbox} ${expandedProject.title}`}
          onClick={() => setExpandedProjectId(null)}
        >
          <div className="project-lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="project-lightbox-close"
              onClick={() => setExpandedProjectId(null)}
              aria-label={content.projects.closeLightbox}
            >
              x
            </button>
            <img
              className="project-lightbox-image"
              src={expandedProject.image}
              alt={`${content.projects.lightbox} ${expandedProject.title}`}
            />
          </div>
        </div>
      ) : null}

      {chatWidgetRendered ? (
        <div
          ref={chatPanelRef}
          className={`chat-widget${chatWidgetOpen ? " is-open" : " is-closing"}${draggingChatPanel ? " is-dragging" : ""}`}
          style={
            chatPanelPosition.x !== null && chatPanelPosition.y !== null
              ? {
                  left: `${chatPanelPosition.x}px`,
                  top: `${chatPanelPosition.y}px`,
                  right: "auto",
                  bottom: "auto",
                }
              : undefined
          }
        >
          <div className="chat-widget-head" onPointerDown={startDraggingChatPanel}>
            <div className="chat-widget-title">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 4C7.03 4 3 7.58 3 12c0 2.08.92 3.98 2.43 5.4L4.5 21l4.09-1.68c1.04.44 2.2.68 3.41.68 4.97 0 9-3.58 9-8s-4.03-8-9-8Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{content.contact.chatTitle}</span>
            </div>
            <button
              type="button"
              className="chat-widget-head-close"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={closeChatWidget}
              aria-label={content.contact.closeForm}
            >
              x
            </button>
          </div>

          <div className="chat-widget-body">
            <label className="chat-widget-field">
              <span>{content.contact.fields.name}</span>
              <input
                type="text"
                placeholder={content.contact.fields.placeholders.name}
                value={contactName}
                onChange={(event) => setContactName(event.target.value)}
              />
            </label>

            <label className="chat-widget-field">
              <span>{content.contact.fields.email}</span>
              <input
                type="email"
                inputMode="email"
                placeholder={content.contact.fields.placeholders.email}
                value={contactEmail}
                onChange={(event) => setContactEmail(event.target.value)}
              />
            </label>

            <label className="chat-widget-field">
              <span>{content.contact.fields.question}</span>
              <textarea
                rows="4"
                maxLength={600}
                placeholder={content.contact.fields.placeholders.question}
                value={contactQuestion}
                onChange={(event) => setContactQuestion(event.target.value)}
              />
            </label>

            <label className="chat-widget-field">
              <span>{content.contact.fields.phone}</span>
              <input
                type="tel"
                inputMode="tel"
                placeholder={content.contact.fields.placeholders.phone}
                value={contactPhone}
                onChange={(event) => setContactPhone(event.target.value)}
              />
            </label>

            <div className="chat-widget-meta">
              <span>{content.contact.fields.characters}</span>
              <span>{contactQuestion.length}/600</span>
            </div>

            {contactNoticeMessage ? (
              <div
                className={`chat-widget-notice chat-widget-notice-${contactNotice.type}`}
                role="status"
                aria-live="polite"
              >
                {contactNoticeMessage}
              </div>
            ) : null}

            <button
              type="button"
              className="chat-widget-submit"
              disabled={!chatFormReady || sendingContact}
              onClick={openContactComposer}
            >
              {sendingContact ? content.contact.fields.sending : content.contact.fields.send}
            </button>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        className={`chat-launcher${chatWidgetOpen ? " is-open" : ""}`}
        onClick={chatWidgetOpen ? closeChatWidget : () => openChatWidget(selectedInquiry.id)}
        aria-label={chatWidgetOpen ? content.contact.launcherClose : content.contact.launcherOpen}
      >
        {chatWidgetOpen ? (
          <span className="chat-launcher-close" aria-hidden="true">
            x
          </span>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 4C7.03 4 3 7.58 3 12c0 2.08.92 3.98 2.43 5.4L4.5 21l4.09-1.68c1.04.44 2.2.68 3.41.68 4.97 0 9-3.58 9-8s-4.03-8-9-8Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </>
  );
}

export default App;

