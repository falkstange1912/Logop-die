import { MapPin, Coffee, Accessibility, Store, Baby, Trees, HelpCircle, Activity, BookOpen, Newspaper, Heart, MessageCircle, Mic, Users, HeartHandshake, AlertCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      
      {/* LGBTQ+ Pride Border am oberen Rand */}
      <div className="h-2 w-full bg-gradient-to-r from-red-500 via-orange-400 via-yellow-400 via-green-400 via-blue-500 to-purple-500"></div>

      {/* NAVIGATION */}
      <header className="bg-[#fcd34d] pt-5 pb-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-[#ea580c] text-lg md:text-xl font-medium tracking-wide">
            <a href="#praxis" className="hover:text-orange-900 transition">Die Praxis</a>
            <a href="#fragen" className="hover:text-orange-900 transition">Fragen zur Therapie</a>
            <a href="#stoerungen" className="hover:text-orange-900 transition">Störungsbilder</a>
            <a href="#schulungen" className="hover:text-orange-900 transition">Schulungsangebote</a>
            <a href="#aktuelles" className="hover:text-orange-900 transition">Aktuelles</a>
          </nav>
          <div className="mt-3 w-full h-1.5 bg-white/90 rounded-full"></div>
        </div>
      </header>

      {/* HERO BEREICH */}
      <section className="bg-white py-20 px-4 border-b border-stone-200 text-center relative overflow-hidden">
        {/* Subtiler Hintergrund-Fleck für mehr Wärme */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-orange-50 rounded-full blur-3xl opacity-50 -z-10"></div>
        
        <div className="max-w-4xl mx-auto">
          {/* LGBTQ+ Safe Space Badge */}
          <div className="inline-flex items-center gap-2 bg-stone-100 text-stone-700 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-stone-200 shadow-sm">
            <HeartHandshake className="w-4 h-4 text-red-500" />
            Safe Space – Alle sind hier willkommen 🏳️‍🌈
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-stone-800 mb-6 tracking-tight">
            Praxis für Logopädie <br className="hidden md:block" />
            <span className="text-[#ea580c]">Simone Brendel</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed">
            Wir freuen uns, Sie an unseren zwei Standorten in Cremlingen und Sickte in entspannter, offener Atmosphäre begrüßen zu dürfen.
          </p>
        </div>
      </section>

      {/* 1. DIE PRAXIS */}
      <section id="praxis" className="py-20 px-4 max-w-7xl mx-auto scroll-mt-20">
        <div className="grid md:grid-cols-2 gap-10">
          {/* STANDORT CREMLINGEN */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100 relative">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold text-sm mb-8">
              <MapPin className="w-4 h-4" />
              Standort Cremlingen
            </div>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Die Praxis für Logopädie Simone Brendel besteht seit 2003 und befindet sich direkt in Cremlingen am Übergang vom Neubaugebiet Steiferlingen zum alten Ortsteil.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-orange-50 p-3 rounded-xl text-[#ea580c] flex-shrink-0"><Store className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">Zentrale Lage</h4>
                  <p className="text-stone-600 text-sm">Die Gemeindeverwaltung, diverse Einkaufsmöglichkeiten und Banken befinden sich nur wenige Gehminuten entfernt.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-orange-50 p-3 rounded-xl text-[#ea580c] flex-shrink-0"><Baby className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">Für wartende Geschwister</h4>
                  <p className="text-stone-600 text-sm">Außer dem Wartezimmer gibt es die Möglichkeit, einen Spielplatz zu besuchen, der gleich um die Ecke liegt.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-orange-50 p-3 rounded-xl text-[#ea580c] flex-shrink-0"><Coffee className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">Entspannte Wartezeit</h4>
                  <p className="text-stone-600 text-sm">Gegenüber lädt ein Feldweg zu einem kurzen Spaziergang ein... oder Sie überbrücken die Zeit einfach mit einem Getränk und einer Zeitschrift im Wartezimmer.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* STANDORT SICKTE */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold text-sm mb-8">
              <MapPin className="w-4 h-4" />
              Standort Sickte
            </div>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Die Praxis befindet sich in einem medizinischen Zentrum zusammen mit einer Hausarztpraxis für Allgemeinmedizin, einer Apotheke und einer Praxis für Ernährungsberatung.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-orange-50 p-3 rounded-xl text-[#ea580c] flex-shrink-0"><Accessibility className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">Barrierefrei & Parken</h4>
                  <p className="text-stone-600 text-sm">Ein großer Parkplatz befindet sich direkt vor der Tür. Die Praxis ist barrierefrei über einen Fahrstuhl zu erreichen.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-orange-50 p-3 rounded-xl text-[#ea580c] flex-shrink-0"><Store className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">Infrastruktur</h4>
                  <p className="text-stone-600 text-sm">Diverse Einkaufsmöglichkeiten und Banken befinden sich nur wenige Gehminuten entfernt.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-orange-50 p-3 rounded-xl text-[#ea580c] flex-shrink-0"><Trees className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">Wartezeit angenehm gestalten</h4>
                  <p className="text-stone-600 text-sm">Gegenüber lädt ein Feldweg zum Spaziergang ein. Im Wartezimmer warten Getränke, Zeitschriften und vielfältige Spielmaterialien für Geschwister.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. FRAGEN ZUR THERAPIE */}
      <section id="fragen" className="bg-white py-24 px-4 border-t border-stone-200 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-[#ea580c] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-stone-800 mb-4">Was ist Logopädie?</h2>
          </div>
          
          <div className="bg-stone-50 p-8 md:p-12 rounded-3xl border border-stone-100">
            <p className="text-xl text-stone-600 font-medium mb-6 italic border-l-4 border-yellow-400 pl-4">
              Der Begriff stammt aus dem Griechischen und leitet sich von „logos“ = „das Wort“ und „pädeuein“ = „erziehen“ ab.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              Heute bezeichnet die Logopädie die noch junge medizinisch-therapeutische Fachdisziplin, die den durch eine Sprach-, Sprech-, Stimm-, Schluck- oder Hörbeeinträchtigung in seiner zwischenmenschlichen Kommunikationsfähigkeit eingeschränkten Menschen zum Gegenstand hat.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              Die Logopädie beschäftigt sich in Theorie und Praxis mit Prävention, Beratung, Diagnostik, Therapie und Rehabilitation, Lehre und Forschung auf den Gebieten der <strong>Stimme</strong> (Stimmstörungen und Stimmtherapie), des <strong>Sprechens</strong> (Sprechstörungen und Sprechtherapie), der <strong>Sprache</strong> (Sprachstörungen und Sprachtherapie) sowie des <strong>Schluckens</strong> (Schluckstörungen und Schlucktherapie).
            </p>
          </div>
        </div>
      </section>

      {/* 3. STÖRUNGSBILDER */}
      <section id="stoerungen" className="py-24 px-4 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Activity className="w-12 h-12 text-[#ea580c] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-stone-800 mb-4">Störungsbilder</h2>
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full text-stone-600 shadow-sm border border-stone-200">
              <GlobeIcon className="w-5 h-5 text-blue-500" />
              <span>Wir behandeln Kinder und Erwachsene in <strong>deutscher und polnischer Sprache</strong>.</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* SPRACHE */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-100">
              <MessageCircle className="w-8 h-8 text-[#ea580c] mb-6" />
              <h3 className="text-2xl font-bold text-stone-800 mb-6">Störungen der Sprache</h3>
              <blockquote className="bg-orange-50 text-orange-900 p-4 rounded-xl mb-6 font-medium italic">
                „Wenn die Sprache nicht stimmt, so ist das, was gesagt wird, nicht das, was gemeint ist.“ <br/>
                <span className="text-sm text-orange-700 not-italic mt-2 block">— Konfuzius</span>
              </blockquote>
              <p className="text-stone-600 leading-relaxed">
                Hierbei handelt es sich z.B. um Sprachentwicklungsstörungen, Störungen des Lautsystems (phonologische Störung), reduzierten Wortschatz, Störung der Grammatikentwicklung (Dysgrammatismus), Aphasie nach Schlaganfall, Hirnblutungen, Schädel-Hirn-Traumen, Tumore, Hirnoperationen oder degenerative Erkrankungen (z.B. Demenz).
              </p>
            </div>

            {/* SPRECHEN */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-100">
              <Mic className="w-8 h-8 text-[#ea580c] mb-6" />
              <h3 className="text-2xl font-bold text-stone-800 mb-6">Störungen des Sprechens</h3>
              <blockquote className="bg-orange-50 text-orange-900 p-4 rounded-xl mb-6 font-medium italic">
                „Wer deutlich spricht, riskiert, verstanden zu werden.“ <br/>
                <span className="text-sm text-orange-700 not-italic mt-2 block">— Norbert Stoffel</span>
              </blockquote>
              <p className="text-stone-600 leading-relaxed">
                Sprechstörungen im Kindesalter treten häufig im Rahmen von Entwicklungsstörungen und Behinderungen auf. Wie bei Erwachsenen handelt es sich um zentral oder peripher bedingte Störungen der Sprechorgane. Es finden sich Störungen der Aussprache (Lispeln), Dysarthrie (z.B. durch Lähmungen, Facialisparese), verbale Entwicklungsdyspraxie und Sprechapraxie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SCHULUNGSANGEBOTE */}
      <section id="schulungen" className="bg-white py-24 px-4 border-t border-stone-200 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <BookOpen className="w-12 h-12 text-[#ea580c] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-stone-800 mb-4">Schulungsangebote</h2>
            <p className="text-stone-500 text-lg">Wir passen die Fortbildungsinhalte Ihren individuellen Bedürfnissen an – sprechen Sie uns an!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-stone-50 p-8 rounded-2xl">
              <h4 className="font-bold text-lg mb-3 text-stone-800">Für Berufssprecher</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                Stimmbildung und Sprecherziehung für Berufssprecher wie z.B. Mitarbeiter im Call-Center, Lehrer oder Fitnesstrainer. Angeboten als Einzel- oder Gruppenschulungen.
              </p>
            </div>
            
            <div className="bg-stone-50 p-8 rounded-2xl">
              <h4 className="font-bold text-lg mb-3 text-stone-800">Für Pflegepersonal</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                Schulungen zum Thema Schluckstörungen und Nahrungsaufnahme in Krankenhäusern, Altenheimen und Pflegediensten (z.B. bei Demenz oder ALS).
              </p>
            </div>

            <div className="bg-stone-50 p-8 rounded-2xl">
              <h4 className="font-bold text-lg mb-3 text-stone-800">Für Eltern & Kindergärten</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                Elternabende zu den Bereichen Sprachentwicklung und Sprachförderung oder zu individuell vereinbarten Themen.
              </p>
            </div>
          </div>

          {/* Fortbildungen Erzieherinnen */}
          <div className="mt-8 bg-orange-50 p-8 md:p-10 rounded-3xl border border-orange-100 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h4 className="text-xl font-bold text-orange-900 mb-4">Spezielle Fortbildungen für Erzieherinnen</h4>
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "Sprachentwicklung",
                  "Verbindung zw. allg. Entwicklung & Sprache",
                  "Sprachfördernde & hemmende Faktoren",
                  "Das Sprachvorbild",
                  "Mehrsprachigkeit",
                  "Risikofaktoren & mögliche Sprachstörungen"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-orange-800 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Users className="w-24 h-24 text-orange-200 hidden md:block" />
          </div>
        </div>
      </section>

      {/* 5. AKTUELLES */}
      <section id="aktuelles" className="py-24 px-4 bg-stone-900 text-white scroll-mt-20 relative">
         {/* Subtiler Regenbogen-Akzent auch hier unten */}
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 via-yellow-400 via-green-400 via-blue-500 to-purple-500"></div>
         
        <div className="max-w-4xl mx-auto text-center">
          <Newspaper className="w-12 h-12 text-[#ea580c] mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-10">Aktuelles</h2>
          
          <div className="space-y-6">
            <div className="bg-stone-800 p-6 rounded-2xl border border-stone-700 flex flex-col sm:flex-row items-center gap-4 text-left">
              <div className="bg-green-500/20 p-4 rounded-full"><Users className="w-6 h-6 text-green-400" /></div>
              <div>
                <h4 className="font-bold text-lg mb-1">Verstärkung gesucht!</h4>
                <p className="text-stone-300">Wir suchen immer wieder neue Kolleginnen / Kollegen – fragen Sie einfach mal nach.</p>
              </div>
            </div>

            <div className="bg-stone-800 p-6 rounded-2xl border border-stone-700 flex flex-col sm:flex-row items-center gap-4 text-left">
              <div className="bg-blue-500/20 p-4 rounded-full"><AlertCircle className="w-6 h-6 text-blue-400" /></div>
              <div>
                <h4 className="font-bold text-lg mb-1">Hinweis zur Erreichbarkeit</h4>
                <p className="text-stone-300">Liebe Patienten, da sich immer wieder Mitarbeiterinnen in Elternzeit befinden, ist nicht jede Therapeutin zu kontaktieren. Wir bitten um Ihr Verständnis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-950 text-stone-500 py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} Praxis für Logopädie Simone Brendel.</p>
      </footer>
      
    </div>
  );
}

// Kleines Hilfs-Icon für den Text
function GlobeIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
      <path d="M2 12h20"/>
    </svg>
  );
}
