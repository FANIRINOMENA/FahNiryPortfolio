// App.jsx
import React, { useState, useEffect } from 'react';

const App = () => {
  const [activeChapter, setActiveChapter] = useState('accueil');
  const [loading, setLoading] = useState(true);

  const chapters = [
    { id: 'accueil', label: '✦ Couverture', icon: '' },
    { id: 'competences', label: '⚙ Compétences', icon: '' },
    { id: 'etudes', label: '🎓 Études', icon: '' },
    { id: 'experience', label: '⚜ Expériences', icon: '' },
    { id: 'projets', label: '🗂 Projets', icon: '' },
    { id: 'contact', label: '✉ Contact', icon: '' }
  ];

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // durée du loading (2s)

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (activeChapter === 'competences') {
      setTimeout(() => {
        const bars = document.querySelectorAll('.skill-bar-fill');
        bars.forEach(bar => {
          const width = bar.getAttribute('data-w');
          if (width) bar.style.width = `${width}%`;
        });
      }, 100);
    }
  }, [activeChapter]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#2C1A0E]">
        <div className="text-center">
          <div className="dots flex justify-center gap-2">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2C1A0E] via-[#3A2416] to-[#2C1A0E]">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-down">
          {chapters.map(chapter => (
            <button
              key={chapter.id}
              onClick={() => setActiveChapter(chapter.id)}
              className={`
                px-5 py-2 rounded-lg font-serif italic transition-all duration-300
                ${activeChapter === chapter.id 
                  ? 'bg-amber-800/80 text-amber-200 border-amber-500 shadow-lg shadow-amber-900/30' 
                  : 'bg-stone-800/60 text-stone-300 border-stone-600 hover:bg-stone-700/80'
                }
                border backdrop-blur-sm
              `}
            >
              <span className="mr-2">{chapter.icon}</span>
              {chapter.label}
            </button>
          ))}
        </nav>

        {/* Book Container */}
        <div className="perspective-2400">
          <div className="relative w-full">
            {/* Cover Page */}
            <div className={`
              grid grid-cols-1 md:grid-cols-2 gap-0 transition-all duration-700
              ${activeChapter === 'accueil' ? 'block md:grid' : 'hidden'}
              animate-page-open
            `}>
              {/* Left Cover */}
              <div className="bg-gradient-to-br from-stone-800 to-stone-900 min-h-[600px] p-12 flex flex-col items-center justify-center text-center border-4 border-amber-700 outline outline-2 outline-amber-600 outline-offset-[-12px] rounded-lg shadow-2xl">
                <div className="w-28 h-28 rounded-full border-4 border-amber-500 bg-amber-700 flex items-center justify-center text-5xl mb-6 shadow-xl">
                  👤
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-amber-300 mb-2">Fanirinomena</h2>
                <p className="text-amber-200/80 italic text-lg mb-5">Développeur Full-Stack</p>
                <div className="w-20 h-px bg-amber-500/60 my-4"></div>
                <p className="text-amber-100/70 italic max-w-xs leading-relaxed">
                  "Je conçois et développe des applications web modernes, performantes et centrées sur l’utilisateur, en transformant chaque idée en solution concrète."
                </p>
                <div className="w-20 h-px bg-amber-500/60 my-4"></div>
                <p className="text-amber-100/40 text-sm italic">
                  Développeur Full-Stack
                </p>
              </div>

              {/* Right Cover */}
              <div className="bg-amber-50 bg-opacity-95 min-h-[600px] p-12 relative shadow-inner">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22300%22%20height%3D%22300%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.75%22%20numOctaves%3D%224%22%2F%3E%3CfeColorMatrix%20type%3D%22saturate%22%20values%3D%220%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22300%22%20height%3D%22300%22%20filter%3D%22url(%23n)%22%20opacity%3D%220.06%22%2F%3E%3C%2Fsvg%3E')] opacity-50 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="text-xs tracking-[0.3em] uppercase text-amber-700 mb-2">Introduction</div>
                  <h2 className="font-serif text-2xl md:text-3xl text-stone-800 mb-5 border-b border-amber-200 pb-3">
                    Bienvenue dans <span className="text-amber-700">mon portfolio</span>
                  </h2>
                  <p className="text-stone-700 leading-relaxed mb-4 text-justify dropcap">
                    Ce portfolio est pensé comme un livre, car chaque ligne de code, chaque projet réalisé et chaque défi relevé représente un chapitre de mon parcours. À travers ces pages, je vous invite à découvrir l'évolution d'un développeur fullstack passionné.
                  </p>
                  <p className="text-stone-700 leading-relaxed mb-4 text-justify">
                    Avec <span className="font-bold text-amber-800">2 ans d'expérience en développement web</span>, j'ai conçu et développé des applications modernes en intervenant aussi bien sur le <span className="italic text-amber-700">frontend</span> que sur le <span className="italic text-amber-700">backend</span>. Cette polyvalence me permet de créer des solutions complètes, performantes et adaptées aux besoins.
                  </p>
                  <p className="text-stone-700 leading-relaxed mb-4 text-justify">
                    Curieux et rigoureux, je considère chaque projet comme une nouvelle opportunité d'apprendre, d'innover et de repousser mes limites techniques tout en offrant une expérience utilisateur de qualité.
                  </p>
                  <div className="text-center text-amber-500 text-2xl my-6 tracking-[0.5em]">· ✦ · ✦ · ✦ ·</div>
                  <div className="text-center text-amber-500 text-3xl mt-6 opacity-60">❧</div>
                  <div className="absolute bottom-6 left-12 text-sm text-amber-600 italic">p. i</div>
                </div>
              </div>
            </div>

            {/* Contact Page */}
            <div className={`
              grid grid-cols-1 md:grid-cols-2 gap-0 transition-all duration-700
              ${activeChapter === 'contact' ? 'block md:grid' : 'hidden'}
              animate-page-open
            `}>
              <div className="bg-amber-50 bg-opacity-95 min-h-[600px] p-12 relative shadow-inner">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22300%22%20height%3D%22300%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.75%22%20numOctaves%3D%224%22%2F%3E%3CfeColorMatrix%20type%3D%22saturate%22%20values%3D%220%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22300%22%20height%3D%22300%22%20filter%3D%22url(%23n)%22%20opacity%3D%220.06%22%2F%3E%3C%2Fsvg%3E')] opacity-50 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="text-xs tracking-[0.3em] uppercase text-amber-700 mb-2">Chapitre V</div>
                  <h2 className="font-serif text-2xl md:text-3xl text-stone-800 mb-5 border-b border-amber-200 pb-3">
                    Me <span className="text-amber-700">Contacter</span>
                  </h2>
                  <p className="text-stone-700 leading-relaxed mb-6">Pour toute collaboration, question ou simplement pour dire bonjour — toutes les voies vous sont ouvertes.</p>
                  <div className="text-center text-amber-500 text-2xl my-6">· ✦ ·</div>
                  
                  <div className="flex items-start gap-3 mb-4 p-3 bg-amber-100/30 border-l-4 border-amber-600 rounded-r">
                    <span className="text-2xl">✉</span>
                    <div>
                      <div className="text-xs tracking-wider uppercase text-amber-700">Email</div>
                      <a href="mailto:rahfanirih@gmail.com" className="text-stone-800 hover:text-amber-700 transition">rahfanirih@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 mb-4 p-3 bg-amber-100/30 border-l-4 border-amber-600 rounded-r">
                    <span className="text-2xl">📞</span>
                    <div>
                      <div className="text-xs tracking-wider uppercase text-amber-700">Téléphone</div>
                      <span className="text-stone-800">+261 38 78 981 43</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 mb-4 p-3 bg-amber-100/30 border-l-4 border-amber-600 rounded-r">
                    <span className="text-2xl">📍</span>
                    <div>
                      <div className="text-xs tracking-wider uppercase text-amber-700">Localisation</div>
                      <span className="text-stone-800">Mahitsy, Madagascar</span>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-12 text-sm text-amber-600 italic">p. 2</div>
                </div>
              </div>

              <div className="bg-amber-50 bg-opacity-95 min-h-[600px] p-12 relative shadow-inner">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22300%22%20height%3D%22300%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.75%22%20numOctaves%3D%224%22%2F%3E%3CfeColorMatrix%20type%3D%22saturate%22%20values%3D%220%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22300%22%20height%3D%22300%22%20filter%3D%22url(%23n)%22%20opacity%3D%220.06%22%2F%3E%3C%2Fsvg%3E')] opacity-50 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="text-xs tracking-[0.3em] uppercase text-amber-700 mb-2">Réseaux</div>
                  <h2 className="font-serif text-2xl md:text-3xl text-stone-800 mb-5 border-b border-amber-200 pb-3">
                    Mes <span className="text-amber-700">Liens</span>
                  </h2>
                  
                  <div className="flex items-start gap-3 mb-4 p-3 bg-amber-100/30 border-l-4 border-amber-600 rounded-r">
                    <span className="text-2xl">💼</span>
                    <div>
                      <div className="text-xs tracking-wider uppercase text-amber-700">LinkedIn</div>
                      <a href="https://linkedin.com/in/fanirinomena" target="_blank" rel="noopener noreferrer" className="text-stone-800 hover:text-amber-700 transition">linkedin.com/in/fanirinomena</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 mb-4 p-3 bg-amber-100/30 border-l-4 border-amber-600 rounded-r">
                    <span className="text-2xl">🐙</span>
                    <div>
                      <div className="text-xs tracking-wider uppercase text-amber-700">GitHub</div>
                      <a href="https://github.com/FANIRINOMENA" target="_blank" rel="noopener noreferrer" className="text-stone-800 hover:text-amber-700 transition">github.com/FANIRINOMENA</a>
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-12 text-sm text-amber-600 italic">p. 3</div>
                </div>
              </div>
            </div>

            {/* Experience Page */}
            <div className={`
              grid grid-cols-1 md:grid-cols-2 gap-0 transition-all duration-700
              ${activeChapter === 'experience' ? 'block md:grid' : 'hidden'}
              animate-page-open
            `}>
              <div className="bg-amber-50 bg-opacity-95 min-h-[600px] p-12 relative shadow-inner">
                <div className="relative z-10">
                  <div className="text-xs tracking-[0.3em] uppercase text-amber-700 mb-2">Chapitre III</div>
                  <h2 className="font-serif text-2xl md:text-3xl text-stone-800 mb-5 border-b border-amber-200 pb-3">
                    Mes <span className="text-amber-700">Expériences</span>
                  </h2>
                  
                  <div className="relative pl-6 before:absolute before:left-1 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-amber-600 before:to-amber-300">
                    <div className="relative mb-6 before:absolute before:-left-6 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-amber-600 before:border-2 before:border-amber-50 before:shadow">
                      <div className="text-sm italic text-amber-700 mb-1">Juin 2025 — Novembre 2025</div>
                      <div className="font-serif text-lg font-bold text-stone-800">Développeur Fullstack</div>
                      <div className="text-amber-700 italic text-sm mb-2">UPSKILL · Analamahitsy</div>
                      <div className="text-stone-600 text-sm leading-relaxed">
                        Développement d'applications web complètes (frontend et backend), intégration d'API, optimisation des performances et participation à la conception technique des projets.
                      </div>
                    </div>
                    
                    <div className="relative mb-6 before:absolute before:-left-6 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-amber-600 before:border-2 before:border-amber-50 before:shadow">
                      <div className="text-sm italic text-amber-700 mb-1">Février 2025 — Juin 2025</div>
                      <div className="font-serif text-lg font-bold text-stone-800">Stagiaire Développeur Web</div>
                      <div className="text-amber-700 italic text-sm mb-2">UPSKILL · Analamahitsy</div>
                      <div className="text-stone-600 text-sm leading-relaxed">
                        Participation au développement de projets web, intégration d'interfaces utilisateur et apprentissage des bonnes pratiques en développement.
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-12 text-sm text-amber-600 italic">p. 4</div>
                </div>
              </div>

              <div className="bg-amber-50 bg-opacity-95 min-h-[600px] p-12 relative shadow-inner">
                <div className="relative z-10">
                  <div className="text-xs tracking-[0.3em] uppercase text-amber-700 mb-2">Freelance & Projets</div>
                  <h2 className="font-serif text-2xl md:text-3xl text-stone-800 mb-5 border-b border-amber-200 pb-3">
                    Activités <span className="text-amber-700">Libres</span>
                  </h2>
                  
                  <div className="relative pl-6 before:absolute before:left-1 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-amber-600 before:to-amber-300">
                    <div className="relative mb-6 before:absolute before:-left-6 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-amber-600 before:border-2 before:border-amber-50 before:shadow">
                      <div className="text-sm italic text-amber-700 mb-1">Novembre 2025 — Présent</div>
                      <div className="font-serif text-lg font-bold text-stone-800">Développeur Freelance</div>
                      <div className="text-amber-700 italic text-sm mb-2">Indépendant</div>
                      <div className="text-stone-600 text-sm leading-relaxed">
                        Réalisation de projets web sur mesure pour des clients, création d'applications modernes, développement d'API et accompagnement technique.
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center text-amber-500 text-2xl my-6">· ✦ ·</div> 
                  <div className="absolute bottom-6 right-12 text-sm text-amber-600 italic">p. 5</div>
                </div>
              </div>
            </div>

            {/* Studies Page */}
            <div className={`
              grid grid-cols-1 md:grid-cols-2 gap-0 transition-all duration-700
              ${activeChapter === 'etudes' ? 'block md:grid' : 'hidden'}
              animate-page-open
            `}>
              <div className="bg-amber-50 bg-opacity-95 min-h-[600px] p-12 relative shadow-inner">
                <div className="relative z-10">
                  <div className="text-xs tracking-[0.3em] uppercase text-amber-700 mb-2">Chapitre II</div>
                  <h2 className="font-serif text-2xl md:text-3xl text-stone-800 mb-5 border-b border-amber-200 pb-3">
                    Mes <span className="text-amber-700">Études</span>
                  </h2>
                  
                  <div className="relative pl-6 before:absolute before:left-1 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-amber-600 before:to-amber-300">
                    <div className="relative mb-6 before:absolute before:-left-6 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-amber-600 before:border-2 before:border-amber-50 before:shadow">
                      <div className="text-sm italic text-amber-700 mb-1">2022 — Présent</div>
                      <div className="font-serif text-lg font-bold text-stone-800">Licence Informatique (Bac +3)</div>
                      <div className="text-amber-700 italic text-sm mb-2">CNTEMAD</div>
                      <div className="text-stone-600 text-sm leading-relaxed">
                        Formation en informatique couvrant le développement web, les bases de données, les systèmes informatiques et les concepts fondamentaux du génie logiciel.
                      </div>
                    </div>
                    
                    <div className="relative mb-6 before:absolute before:-left-6 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-amber-600 before:border-2 before:border-amber-50 before:shadow">
                      <div className="text-sm italic text-amber-700 mb-1">2021</div>
                      <div className="font-serif text-lg font-bold text-stone-800">Baccalauréat</div>
                      <div className="text-amber-700 italic text-sm mb-2">Lycée Catholique Notre Dame de l'Assomption, Mahitsy</div>
                      <div className="text-stone-600 text-sm leading-relaxed">
                        Diplôme de fin d'études secondaires avec une orientation scientifique.
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-12 text-sm text-amber-600 italic">p. 6</div>
                </div>
              </div>

              <div className="bg-amber-50 bg-opacity-95 min-h-[600px] p-12 relative shadow-inner">
                <div className="relative z-10">
                  <div className="text-xs tracking-[0.3em] uppercase text-amber-700 mb-2">Formations</div>
                  <h2 className="font-serif text-2xl md:text-3xl text-stone-800 mb-5 border-b border-amber-200 pb-3">
                    Formations & <span className="text-amber-700">Apprentissages</span>
                  </h2>
                  
                  <div className="relative pl-6 before:absolute before:left-1 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-amber-600 before:to-amber-300">
                    <div className="relative mb-6 before:absolute before:-left-6 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-amber-600 before:border-2 before:border-amber-50 before:shadow">
                      <div className="text-sm italic text-amber-700 mb-1">2024</div>
                      <div className="font-serif text-lg font-bold text-stone-800">Formation Développement Web</div>
                      <div className="text-amber-700 italic text-sm mb-2">Udemy</div>
                      <div className="text-stone-600 text-sm leading-relaxed">
                        Approfondissement des compétences en développement web moderne avec des technologies comme React, Symfony et Laravel à travers des projets pratiques.
                      </div>
                    </div>
                    
                    <div className="relative mb-6 before:absolute before:-left-6 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-amber-600 before:border-2 before:border-amber-50 before:shadow">
                      <div className="text-sm italic text-amber-700 mb-1">2023</div>
                      <div className="font-serif text-lg font-bold text-stone-800">Formation Développement Web</div>
                      <div className="text-amber-700 italic text-sm mb-2">Hopes Formation</div>
                      <div className="text-stone-600 text-sm leading-relaxed">
                        Formation complète en développement web couvrant le frontend et le backend, avec réalisation de projets concrets.
                      </div>
                    </div>
                    
                    <div className="relative mb-6 before:absolute before:-left-6 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-amber-600 before:border-2 before:border-amber-50 before:shadow">
                      <div className="text-sm italic text-amber-700 mb-1">2022</div>
                      <div className="font-serif text-lg font-bold text-stone-800">Certification Niveau B1</div>
                      <div className="text-amber-700 italic text-sm mb-2">Alliance Française d'Antananarivo</div>
                      <div className="text-stone-600 text-sm leading-relaxed">
                        Certification attestant d'un niveau intermédiaire en langue française (compréhension et communication écrite et orale).
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-12 text-sm text-amber-600 italic">p. 7</div>
                </div>
              </div>
            </div>

            {/* Skills Page */}
            <div className={`
              grid grid-cols-1 md:grid-cols-2 gap-0 transition-all duration-700
              ${activeChapter === 'competences' ? 'block md:grid' : 'hidden'}
              animate-page-open
            `}>
              <div className="bg-amber-50 bg-opacity-95 min-h-[600px] p-12 relative shadow-inner">
                <div className="relative z-10">
                  <div className="text-xs tracking-[0.3em] uppercase text-amber-700 mb-2">Chapitre I</div>
                  <h2 className="font-serif text-2xl md:text-3xl text-stone-800 mb-5 border-b border-amber-200 pb-3">
                    Mes <span className="text-amber-700">Compétences</span>
                  </h2>
                  
                  {[
                    { name: 'JavaScript / TypeScript', level: 92 },
                    { name: 'React / Next.js', level: 88 },
                    { name: 'Node.js / Express', level: 82 },
                    { name: 'PHP (Laravel / Symfony)', level: 85 },
                    { name: 'Python / Django', level: 75 },
                    { name: 'Bases de données', level: 80 },
                    { name: 'Docker / DevOps', level: 70 }
                  ].map((skill, idx) => (
                    <div key={idx} className="mb-3">
                      <div className="flex justify-between text-sm text-stone-700 mb-1">
                        <span>{skill.name}</span>
                        <span className="text-amber-700">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-amber-200 rounded-full overflow-hidden">
                        <div 
                          className="skill-bar-fill h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full transition-all duration-1000"
                          data-w={skill.level}
                          style={{ width: activeChapter === 'competences' ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                  <div className="absolute bottom-6 left-12 text-sm text-amber-600 italic">p. 8</div>
                </div>
              </div>

              <div className="bg-amber-50 bg-opacity-95 min-h-[600px] p-12 relative shadow-inner">
                <div className="relative z-10">
                  <div className="text-xs tracking-[0.3em] uppercase text-amber-700 mb-2">Outils & competences</div>
                  <h2 className="font-serif text-2xl md:text-3xl text-stone-800 mb-5 border-b border-amber-200 pb-3">
                    Boîte à <span className="text-amber-700">Outils</span>
                  </h2>
                  
                  {[
                      { title: 'Frontend', tags: ['HTML5', 'CSS3', 'SCSS', 'TailwindCSS', 'Bootstrap', 'React.js', 'Next.js', 'Vue.js'] },
                      { title: 'Backend & API', tags: ['PHP', 'Laravel', 'Symfony', 'Node.js', 'Express', 'Django', 'REST API', 'GraphQL'] },
                      { title: 'CMS', tags: ['WordPress', 'WooCommerce', 'Prestashop'] },
                      { title: 'Applications Mobiles', tags: ['React Native', 'Flutter'] },
                      { title: 'Bases de Données', tags: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'] },
                      { title: 'Cloud & DevOps', tags: ['Docker', 'AWS', 'CI/CD'] },
                      { title: 'Design & Outils', tags: ['Figma', 'Git', 'Agile'] },
                      { title: 'Outils de Test / QA', tags: ['Selenium', 'Postman', 'Jest', 'Cypress', 'JMeter', 'TestRail'] },
                      { title: 'Soft Skills', tags: ['Leadership', 'Communication', 'Créativité', 'Adaptabilité'] },                      
                  ].map((group, idx) => (
                    <div key={idx} className="mb-4">
                      <div className="text-xs tracking-wider uppercase text-amber-700 mb-2">{group.title}</div>
                      <div className="flex flex-wrap gap-1.5">
                        {group.tags.map((tag, tagIdx) => (
                          <span key={tagIdx} className="px-3 py-1 bg-amber-100 border border-amber-300 text-stone-700 text-sm italic rounded hover:bg-amber-200 transition cursor-default">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="absolute bottom-6 right-12 text-sm text-amber-600 italic">p. 9</div>
                </div>
              </div>
            </div>

            {/* Projects Page */}
            <div className={`
              grid grid-cols-1 md:grid-cols-2 gap-0 transition-all duration-700
              ${activeChapter === 'projets' ? 'block md:grid' : 'hidden'}
              animate-page-open
            `}>
              <div className="bg-amber-50 bg-opacity-95 min-h-[600px] p-12 relative shadow-inner">
                <div className="relative z-10">
                  <div className="text-xs tracking-[0.3em] uppercase text-amber-700 mb-2">Chapitre IV</div>
                  <h2 className="font-serif text-2xl md:text-3xl text-stone-800 mb-5 border-b border-amber-200 pb-3">
                    Mes <span className="text-amber-700">Projets</span>
                  </h2>
                  
                  {[
                    { name: '🛒 izyStand', desc: 'Site e-commerce développé avec PrestaShop, permettant la gestion des produits, des commandes et des paiements en ligne.', tags: ['PrestaShop', 'E-commerce', 'PHP'], link: 'https://votresiteenprod.com/izy-stand/' },
                    { name: '🌐 Xelor', desc: 'Site vitrine développé avec WordPress pour présenter les services et améliorer la présence digitale d\'une entreprise.', tags: ['WordPress', 'CMS', 'UI/UX'], link: 'https://xelor.fr' },
                    { name: '🤖 Chatbotte', desc: ' Site web développé avec WordPress, dédié à la présentation et à l’intégration de solutions chatbot pour améliorer l\'expérience utilisateur et l\'automatisation des interactions.', tags: ['WordPress', 'CMS', 'UI/UX'], link: 'https://www.chatbotte.fr' },
                    { name: '🌍 IndigoBe', desc: ' Site web de voyage développé avec WordPress, mettant en avant des destinations touristiques, des offres de séjours et des expériences uniques. Conçu pour offrir une navigation fluide et immersive, avec une attention particulière portée à l’interface utilisateur et à la mise en valeur des contenus visuels.', tags: ['WordPress', 'CMS', 'UI/UX'], link: 'https://indigobe.com' },
                    { name: '🛍 Cocobe', desc: ' Site vitrine e-commerce développé avec WordPress et WooCommerce, permettant la présentation de produits, la gestion des commandes et des paiements en ligne. Conçu pour offrir une expérience utilisateur fluide, avec une interface moderne et une navigation optimisée.', tags: ['WordPress', 'CMS', 'WooCommerce', 'UI/UX'], link: 'https://cocobe.mg' },
                    { name: '💬 Gasytalk', desc: '  Application mobile de messagerie instantanée développée avec React Native, permettant aux utilisateurs d’échanger des messages en temps réel, de partager des contenus et de communiquer de manière fluide. Inspirée de Messenger, l’application met l’accent sur la performance, la simplicité d’utilisation et l’expérience utilisateur.', tags: ['React Native', 'UI/UX'], link: '' },
                    { name: 'SmartHotel', desc: '  SmartHotel est une application web moderne permettant la gestion complète d’un hôtel : réservations, clients, chambres et paiements.', tags: ['ReactJS', 'NodeJS', 'Mysql', 'UI/UX'], link: 'https://smart-hotel-six.vercel.app' },
                    { name: 'EcoFin', desc: '   EcoFin est une application web conçue pour aider les utilisateurs à suivre et gérer leurs finances personnelles. Elle permet de gérer les dépenses, les revenus et de générer des rapports financiers simples.', tags: ['ReactJS', 'NodeJS', 'Mysql', 'UI/UX'], link: 'https://eco-fin-umber.vercel.app/' },
                  ].map((project, idx) => (
                    <div key={idx} className="bg-amber-100/50 border border-amber-200 rounded p-4 mb-4 transition-all hover:shadow-lg hover:-translate-y-0.5 group">
                      <div className="font-serif font-bold text-stone-800 mb-1">{project.name}</div>
                      <div className="text-stone-600 text-sm leading-relaxed mb-2">{project.desc}</div>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tags.map((tag, tagIdx) => (
                          <span key={tagIdx} className="px-2 py-0.5 bg-amber-200/50 text-amber-800 text-xs italic rounded">{tag}</span>
                        ))}
                      </div>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-amber-700 text-sm italic border-b border-amber-300 hover:gap-2.5 transition-all group-hover:text-amber-600">
                        🌐 Voir en ligne →
                      </a>
                    </div>
                  ))}
                  <div className="absolute bottom-6 left-12 text-sm text-amber-600 italic">p. 10</div>
                </div>
              </div>

              <div className="bg-amber-50 bg-opacity-95 min-h-[600px] p-12 relative shadow-inner">
                <div className="relative z-10">
                  <div className="text-xs tracking-[0.3em] uppercase text-amber-700 mb-2">Suite des Projets</div>
                  <h2 className="font-serif text-2xl md:text-3xl text-stone-800 mb-5 border-b border-amber-200 pb-3">
                    Réalisations <span className="text-amber-700">Récentes</span>
                  </h2>
                  
                  <div className="bg-amber-100/50 border border-amber-200 rounded p-4 mb-4 transition-all hover:shadow-lg hover:-translate-y-0.5 group">
                    <div className="font-serif font-bold text-stone-800 mb-1">🚀 Formafusion</div>
                    <div className="text-stone-600 text-sm leading-relaxed mb-2">
                      Plateforme web développée avec React.js, Laravel et SQL, permettant la gestion de formations, des utilisateurs et des contenus pédagogiques.
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      <span className="px-2 py-0.5 bg-amber-200/50 text-amber-800 text-xs italic rounded">React.js</span>
                      <span className="px-2 py-0.5 bg-amber-200/50 text-amber-800 text-xs italic rounded">Laravel</span>
                      <span className="px-2 py-0.5 bg-amber-200/50 text-amber-800 text-xs italic rounded">SQL</span>
                    </div>
                    <a href="https://mg.formafusion.io/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-amber-700 text-sm italic border-b border-amber-300 hover:gap-2.5 transition-all group-hover:text-amber-600">
                      🌐 Voir en ligne →
                    </a>
                  </div>

                  <div className="bg-amber-100/50 border border-amber-200 rounded p-4 mb-4 transition-all hover:shadow-lg hover:-translate-y-0.5 group">
                    <div className="font-serif font-bold text-stone-800 mb-1">🛒 Madamarket</div>
                    <div className="text-stone-600 text-sm leading-relaxed mb-2">
                    Plateforme e-commerce développée avec React (TypeScript), Node.js et SQL, permettant la gestion complète d’un système de vente en ligne (catalogue produits, panier, commandes et utilisateurs). L’application est conçue pour offrir une expérience fluide, sécurisée et performante.
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      <span className="px-2 py-0.5 bg-amber-200/50 text-amber-800 text-xs italic rounded">React.Ts</span>
                      <span className="px-2 py-0.5 bg-amber-200/50 text-amber-800 text-xs italic rounded">NodeJs</span>
                      <span className="px-2 py-0.5 bg-amber-200/50 text-amber-800 text-xs italic rounded">SQL</span>
                    </div>
                    <a href="https://mada-market.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-amber-700 text-sm italic border-b border-amber-300 hover:gap-2.5 transition-all group-hover:text-amber-600">
                      🌐 Voir en ligne →
                    </a>
                  </div>
                  
                  <div className="text-center text-amber-500 text-2xl my-6">· ✦ · ✦ ·</div> 
                  <div className="absolute bottom-6 right-12 text-sm text-amber-600 italic">p. 11</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-down {
          animation: fade-down 0.8s ease-out;
        }
        
        @keyframes page-open {
          from {
            opacity: 0;
            transform: rotateY(-15deg) scale(0.95);
          }
          to {
            opacity: 1;
            transform: rotateY(0) scale(1);
          }
        }
        
        .animate-page-open {
          animation: page-open 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .perspective-2400 {
          perspective: 2400px;
        }
        
        .dropcap::first-letter {
          font-size: 3.8em;
          float: left;
          line-height: 0.78;
          margin-right: 6px;
          margin-top: 4px;
          color: #b97f10;
          font-weight: 900;
          font-family: 'Playfair Display', serif;
        }
        
        @media (max-width: 768px) {
          .dropcap::first-letter {
            font-size: 2.8em;
          }
        }
      `}</style>
    </div>
  );
};

export default App;