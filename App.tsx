import { useState } from 'react';
import { 
  MapPin, Coffee, Accessibility, Store, Baby, Trees, HelpCircle, Activity, 
  BookOpen, Newspaper, MessageCircle, Mic, Users, HeartHandshake, AlertCircle, 
  Menu, X 
} from 'lucide-react';

export default function App() {
  // Steuert, ob das Handy-Menü offen oder zu ist
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Kleine Hilfsfunktion, damit sich das Menü beim Klicken schließt
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      
      {/* LGBTQ+ Pride Border am oberen Rand */}
      <div className="h-1.5 w-full bg-gradient-to-r from-red-500 via-orange-400 via-yellow-400 via-green-400 via-blue-500 to-purple-500"></div>

      {/* NAVIGATION - Jetzt mit Handy-Menü */}
      <header className="bg-[#fcd34d] sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 md:py-6">
          <div className="flex justify-between items-center">
            
            {/* Sichtbar auf Handy: Kleines Logo/Name für die Übersicht */}
            <div className="md:hidden flex items-center gap-2 text-orange-900 font-bold text-lg">
              <MessageCircle className="w-5 h-5" />
              <span>Praxis Brendel</span>
            </div>

            {/* Desktop Navigation (Versteckt auf dem Handy) */}
            <nav className="hidden md:flex flex-wrap justify-center md:justify-between items-center gap-6 text-[#ea580c] text-lg font-medium tracking-wide w-full">
              <a href="#praxis" className="hover:text-orange-900 transition">Die Praxis</a>
              <a href="#fragen" className="hover:text-orange-900 transition">Fragen zur Therapie</a>
              <a href="#stoerungen" className="hover:text-orange-900 transition">Störungsbilder</a>
              <a href="#schulungen" className="hover:text-orange-900 transition">Schulungsangebote</a>
              <a href="#aktuelles" className="hover:text-orange-900 transition">Aktuelles</a>
            </nav>

            {/* Hamburger Button für das Handy */}
            <button 
              className="md:hidden text-orange-900 p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {/* Die weiße Linie aus dem Original-Design (nur auf Desktop sichtbar) */}
          <div className="hidden md:block mt-3 w-full h-1 bg-white/80 rounded-full"></div>
        </div>

        {/* Aufklappbares Menü für das Smartphone */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#fcd34d] border-t border-orange-300/30 px-4 py-4 flex flex-col gap-4 text-orange-900 font-medium shadow-inner absolute w-full">
            <a href="#praxis" onClick={closeMenu} className="block py-2 border-b border-orange-300/20">Die Praxis</a>
            <a href="#fragen" onClick={closeMenu} className="block py-2 border-b border-orange-300/20">Fragen zur Therapie</a>
            <a href="#stoerungen" onClick={closeMenu} className="block py-2 border-b border-orange-300/20">Störungsbilder</a>
            <a href="#schulungen" onClick={closeMenu} className="block py-2 border-b border-orange-300/20">Schulungsangebote</a>
            <a href="#aktuelles" onClick={closeMenu} className="block py-2">Aktuelles</a>
          </div>
        )}
      </header>

      {/* HERO BEREICH - Mehr Luft und modernere Abstände */}
      <section className="bg-white py-24 md:py-32 px-4 border-b border-stone-200 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-80 bg-orange-50 rounded-full blur-3xl opacity-60 -z-10"></div>
        
        <div className="max-w-4xl mx-auto">
          {/* LGBTQ+ Safe Space Badge */}
          <div className="inline-flex items-center gap-2 bg-stone-50 text-stone-700 px-5 py-2.5 rounded-full text-sm font-medium mb-10 border border-stone-200 shadow-sm hover:shadow-md transition">
            <HeartHandshake className="w-4 h-4 text-red-500" />
            Safe Space – Alle sind hier willkommen 🏳️‍🌈
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-stone-800 mb-8 tracking-tight leading-tight">
            Praxis für Logopädie <br className="hidden md:block" />
            <span className="text-[#ea580c]">Simone Brendel</span>
          </h1>
          <p className="text-lg md:text-2xl text-stone-500 max-w-2xl mx-auto leading-relaxed font-light">
            Wir freuen uns, Sie an unseren zwei Standorten in Cremlingen und Sickte in entspannter, offener Atmosphäre begrüßen zu dürfen.
          </p>
        </div>
      </section>

      {/* 1. DIE PRAXIS */}
      <section id="praxis" className="py-24 px-4 max-w-7xl mx-auto scroll-mt-24">
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* STANDORT CREMLINGEN */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition duration-300">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-bold text-sm mb-8">
              <MapPin className="w-4 h-4" />
              Standort Cremlingen
            </div>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              Die Praxis für Logopädie Simone Brendel besteht seit 2003 und befindet sich direkt in Cremlingen am Übergang vom Neubaugebiet Steiferlingen zum alten Ortsteil.
            </p>
            <ul className="space-y-8">
              <li className="flex items-start gap-5">
                <div className="bg-orange-50 p-4 rounded-2xl text-[#ea580c]"><Store className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-stone-800 text-lg mb-1">Zentrale Lage</h4>
                  <p className="text-stone-600">Die Gemeindeverwaltung, diverse Einkaufsmöglichkeiten und Banken befinden sich nur wenige Gehminuten entfernt.</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="bg-orange-50 p-4 rounded-2xl text-[#ea580c]"><Baby className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-stone-800 text-lg mb-1">Für wartende Geschwister</h4>
                  <p className="text-stone-600">Außer dem Wartezimmer gibt es die Möglichkeit, einen Spielplatz zu besuchen, der gleich um die Ecke liegt.</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="bg-orange-50 p-4 rounded-2xl text-[#ea580c]"><Coffee className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-stone-800 text-lg mb-1">Entspannte Wartezeit</h4>
                  <p className="text-stone-600">Gegenüber lädt ein Feldweg zum Spaziergang ein... oder Sie überbrücken die Zeit mit einem Getränk und einer Zeitschrift im Wartezimmer.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* STANDORT SICKTE */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition duration-300">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-bold text-sm mb-8">
              <MapPin className="w-4 h-4" />
              Standort Sickte
            </div>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              Die Praxis befindet sich in einem medizinischen Zentrum zusammen mit einer Hausarztpraxis für Allgemeinmedizin, einer Apotheke und einer Praxis für Ernährungsberatung.
            </p>
            <ul className="space-y-8">
              <li className="flex items-start gap-5">
                <div className="bg-orange-50 p-4 rounded-2xl text-[#ea580c]"><Accessibility className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-stone-800 text-lg mb-1">Barrierefrei & Parken</h4>
                  <p className="text-stone-600">Ein großer Parkplatz befindet sich direkt vor der Tür. Die Praxis ist barrierefrei über einen Fahrstuhl zu erreichen.</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="bg-orange-50 p-4 rounded-2xl text-[#ea580c]"><Store className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-stone-800 text-lg mb-1">Infrastruktur</h4>
                  <p className="text-stone-600">Diverse Einkaufsmöglichkeiten und Banken befinden sich nur wenige Gehminuten entfernt.</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="bg-orange-50 p-4 rounded-2xl text-[#ea580c]"><Trees className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-stone-800 text-lg mb-1">Wartezeit angenehm gestalten</h4>
                  <p className="text-stone-600">Gegenüber lädt ein Feldweg zum Spaziergang ein. Im Wartezimmer warten Getränke, Zeitschriften und Spielmaterialien für Geschwister.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. FRAGEN ZUR THERAPIE */}
      <section id="fragen" className="bg-white py-24 px-4 border-t border-stone-200 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-10 h-10 text-[#ea580c]" />
            </div>
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Was ist Logopädie?</h2>
          </div>
          
          <div className="bg-stone-50 p-10 md:p-14 rounded-[2rem] border border-stone-100 shadow-sm">
            <p className="text-xl md:text-2xl text-stone-700 font-medium mb-8 italic border-l-4 border-yellow-400 pl-6">
              Der Begriff stammt aus dem Griechischen und leitet sich von „logos“ = „das Wort“ und „pädeuein“ = „erziehen“ ab.
            </p>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
              <p>
                Heute bezeichnet die Logopädie die noch junge medizinisch-therapeutische Fachdisziplin, die den durch eine Sprach-, Sprech-, Stimm-, Schluck- oder Hörbeeinträchtigung in seiner zwischenmenschlichen Kommunikationsfähigkeit eingeschränkten Menschen zum Gegenstand hat.
              </p>
              <p>
                Die Logopädie beschäftigt sich in Theorie und Praxis mit Prävention, Beratung, Diagnostik, Therapie und Rehabilitation, Lehre und Forschung auf den Gebieten der <strong>Stimme</strong> (Stimmstörungen und Stimmtherapie), des <strong>Sprechens</strong> (Sprechstörungen und Sprechtherapie), der <strong>Sprache</strong> (Sprachstörungen und Sprachtherapie) sowie des <strong>Schluckens</strong> (Schluckstörungen und Schlucktherapie).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STÖRUNGSBILDER */}
      <section id="stoerungen" className="py-24 px-4 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Activity className="w-10 h-10 text-[#ea580c]" />
            </div>
            <h2 className="text-4xl font-bold text-stone-800 mb-6">Störungsbilder</h2>
            <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full text-stone-700 shadow-sm border border-stone-200 font-medium">
              <GlobeIcon className="w-6 h-6 text-blue-500" />
              <span>Wir behandeln Kinder und Erwachsene in <strong>deutscher und polnischer Sprache</strong>.</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-stone-100 hover:shadow-lg transition duration-300">
              <MessageCircle className="w-10 h-10 text-[#ea580c] mb-8" />
              <h3 className="text-2xl font-bold text-stone-800 mb-6">Störungen der Sprache</h3>
              <blockquote className="bg-orange-50/50 text-orange-900 p-6 rounded-2xl mb-8 font-medium italic border border-orange-100">
                „Wenn die Sprache nicht stimmt, so ist das, was gesagt wird, nicht das, was gemeint ist.“ <br/>
                <span className="text-sm text-orange-700/80 not-italic mt-3 block font-bold uppercase tracking-wider">Konfuzius</span>
              </blockquote>
              <p className="text-stone-600 leading-relaxed text-lg">
                Hierbei handelt es sich z.B. um Sprachentwicklungsstörungen, Störungen des Lautsystems (phonologische Störung), reduzierten Wortschatz, Störung der Grammatikentwicklung (Dysgrammatismus), Aphasie nach Schlaganfall, Hirnblutungen, Schädel-Hirn-Traumen, Tumore, Hirnoperationen oder degenerative Erkrankungen (z.B. Demenz).
              </p>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-stone-100 hover:shadow-lg transition duration-300">
              <Mic className="w-10 h-10 text-[#ea580c] mb-8" />
              <h3 className="text-2xl font-bold text-stone-800 mb-6">Störungen des Sprechens</h3>
              <blockquote className="bg-orange-50/50 text-orange-900 p-6 rounded-2xl mb-8 font-medium italic border border-orange-100">
                „Wer deutlich spricht, riskiert, verstanden zu werden.“ <br/>
                <span className="text-sm text-orange-700/80 not-italic mt-3 block font-bold uppercase tracking-wider">Norbert Stoffel</span>
              </blockquote>
              <p className="text-stone-600 leading-relaxed text-lg">
                Sprechstörungen im Kindesalter treten häufig im Rahmen von Entwicklungsstörungen und Behinderungen auf. Wie bei Erwachsenen handelt es sich um zentral oder peripher bedingte Störungen der Sprechorgane. Es finden sich Störungen der Aussprache (Lispeln), Dysarthrie (z.B. durch Lähmungen), verbale Entwicklungsdyspraxie und Sprechapraxie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SCHULUNGSANGEBOTE */}
      <section id="schulungen" className="bg-white py-24 px-4 border-t border-stone-200 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-[#ea580c]" />
            </div>
            <h2 className="text-4xl font-bold text-stone-800 mb-6">Schulungsangebote</h2>
            <p className="text-stone-500 text-xl leading-relaxed">Wir passen die Fortbildungsinhalte Ihren individuellen Bedürfnissen an – sprechen Sie uns an!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-stone-50 p-8 md:p-10 rounded-[2rem] border border-stone-100">
              <h4 className="font-bold text-xl mb-4 text-stone-800">Für Berufssprecher</h4>
              <p className="text-stone-600 leading-relaxed">
                Stimmbildung und Sprecherziehung für Berufssprecher wie z.B. Mitarbeiter im Call-Center, Lehrer oder Fitnesstrainer. Als Einzel- oder Gruppenschulungen.
              </p>
            </div>
            
            <div className="bg-stone-50 p-8 md:p-10 rounded-[2rem] border border-stone-100">
              <h4 className="font-bold text-xl mb-4 text-stone-800">Für Pflegepersonal</h4>
              <p className="text-stone-600 leading-relaxed">
                Schulungen zum Thema Schluckstörungen und Nahrungsaufnahme in Krankenhäusern, Altenheimen und Pflegediensten (z.B. bei Demenz oder ALS).
              </p>
            </div>

            <div className="bg-stone-50 p-8 md:p-10 rounded-[2rem] border border-stone-100">
              <h4 className="font-bold text-xl mb-4 text-stone-800">Für Eltern & Kitas</h4>
              <p className="text-stone-600 leading-relaxed">
                Elternabende zu den Bereichen Sprachentwicklung und Sprachförderung oder zu komplett individuell vereinbarten Themen.
              </p>
            </div>
          </div>

          {/* Fortbildungen Erzieherinnen */}
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-10 md:p-14 rounded-[2rem] border border-orange-100/50 flex flex-col md:flex-row gap-10 items-center shadow-sm">
            <div className="flex-1">
              <h4 className="text-2xl font-bold text-orange-900 mb-8">Spezielle Fortbildungen für Erzieherinnen</h4>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                {[
                  "Sprachentwicklung",
                  "Verbindung zw. allg. Entwicklung & Sprache",
                  "Sprachfördernde & hemmende Faktoren",
                  "Das Sprachvorbild",
                  "Mehrsprachigkeit",
                  "Risikofaktoren & mögliche Sprachstörungen"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-orange-800/90 font-medium text-lg">
                    <div className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Users className="w-32 h-32 text-orange-300/50 hidden md:block" />
          </div>
        </div>
      </section>

      {/* 5. AKTUELLES */}
      <section id="aktuelles" className="py-24 px-4 bg-stone-900 text-white scroll-mt-24 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-500 via-orange-400 via-yellow-400 via-green-400 via-blue-500 to-purple-500"></div>
         
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <Newspaper className="w-10 h-10 text-orange-400" />
          </div>
          <h2 className="text-4xl font-bold mb-12">Aktuelles</h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 flex flex-col sm:flex-row items-center gap-6 text-left hover:bg-white/10 transition">
              <div className="bg-green-500/20 p-5 rounded-full flex-shrink-0"><Users className="w-8 h-8 text-green-400" /></div>
              <div>
                <h4 className="font-bold text-xl mb-2 text-white">Verstärkung gesucht!</h4>
                <p className="text-stone-300 text-lg leading-relaxed">Wir suchen immer wieder neue Kolleginnen und Kollegen – fragen Sie einfach ganz unverbindlich bei uns nach.</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 flex flex-col sm:flex-row items-center gap-6 text-left hover:bg-white/10 transition">
              <div className="bg-blue-500/20 p-5 rounded-full flex-shrink-0"><AlertCircle className="w-8 h-8 text-blue-400" /></div>
              <div>
                <h4 className="font-bold text-xl mb-2 text-white">Hinweis zur Erreichbarkeit</h4>
                <p className="text-stone-300 text-lg leading-relaxed">Liebe Patienten, da sich immer wieder Mitarbeiterinnen in Elternzeit befinden, ist derzeit nicht jede Therapeutin zu kontaktieren. Wir bitten um Ihr Verständnis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-950 text-stone-500 py-10 text-center text-sm">
        <p>© {new Date().getFullYear()} Praxis für Logopädie Simone Brendel.</p>
      </footer>
      
    </div>
  );
}

function GlobeIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
      <path d="M2 12h20"/>
    </svg>
  );
}
