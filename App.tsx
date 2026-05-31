import { MapPin, Coffee, Accessibility, Store, Baby, Trees, HelpCircle, Activity, BookOpen, Newspaper } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      
      {/* NAVIGATION */}
      <header className="bg-[#fcd34d] pt-6 pb-4 sticky top-0 z-50 shadow-sm">
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
      <section className="bg-white py-20 px-4 border-b border-stone-200 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-stone-800 mb-6 tracking-tight">
            Praxis für Logopädie <br className="hidden md:block" />
            <span className="text-[#ea580c]">Simone Brendel</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed">
            Wir freuen uns, Sie an unseren zwei Standorten in Cremlingen und Sickte in entspannter Atmosphäre begrüßen zu dürfen.
          </p>
        </div>
      </section>

      {/* 1. DIE PRAXIS */}
      <section id="praxis" className="py-20 px-4 max-w-7xl mx-auto scroll-mt-24">
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* STANDORT CREMLINGEN */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-stone-100 hover:shadow-lg transition">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold text-sm mb-8">
              <MapPin className="w-4 h-4" />
              Standort Cremlingen
            </div>
            
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Die Praxis für Logopädie Simone Brendel besteht seit 2003 und befindet sich direkt in Cremlingen am Übergang vom Neubaugebiet Steiferlingen zum alten Ortsteil.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-orange-50 p-3 rounded-xl text-[#ea580c] flex-shrink-0">
                  <Store className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">Zentrale Lage</h4>
                  <p className="text-stone-600 text-sm">Die Gemeindeverwaltung, diverse Einkaufsmöglichkeiten und Banken befinden sich nur wenige Gehminuten entfernt.</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="bg-orange-50 p-3 rounded-xl text-[#ea580c] flex-shrink-0">
                  <Baby className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">Für wartende Geschwister</h4>
                  <p className="text-stone-600 text-sm">Außer dem Wartezimmer gibt es die Möglichkeit einen Spielplatz zu besuchen, der gleich um die Ecke liegt.</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="bg-orange-50 p-3 rounded-xl text-[#ea580c] flex-shrink-0">
                  <Coffee className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">Entspannte Wartezeit</h4>
                  <p className="text-stone-600 text-sm">Gegenüber lädt ein Feldweg zu einem kurzen Spaziergang ein... oder Sie überbrücken die Zeit einfach mit einem warmen oder kalten Getränk und einer Zeitschrift in unserem Wartezimmer.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* STANDORT SICKTE */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-stone-100 hover:shadow-lg transition">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold text-sm mb-8">
              <MapPin className="w-4 h-4" />
              Standort Sickte
            </div>
            
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Die Praxis befindet sich in einem medizinischen Zentrum zusammen mit einer Hausarztpraxis für Allgemeinmedizin, einer Apotheke und einer Praxis für Ernährungsberatung.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-orange-50 p-3 rounded-xl text-[#ea580c] flex-shrink-0">
                  <Accessibility className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">Barrierefrei & Parken</h4>
                  <p className="text-stone-600 text-sm">Ein großer Parkplatz befindet sich direkt vor der Tür. Die Praxis ist barrierefrei über einen Fahrstuhl zu erreichen.</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="bg-orange-50 p-3 rounded-xl text-[#ea580c] flex-shrink-0">
                  <Store className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">Infrastruktur</h4>
                  <p className="text-stone-600 text-sm">Diverse Einkaufsmöglichkeiten und Banken befinden sich nur wenige Gehminuten entfernt.</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="bg-orange-50 p-3 rounded-xl text-[#ea580c] flex-shrink-0">
                  <Trees className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">Wartezeit angenehm gestalten</h4>
                  <p className="text-stone-600 text-sm">Gegenüber lädt ein Feldweg zum Spaziergang ein. Im Wartezimmer warten Getränke, Zeitschriften und vielfältige Spielmaterialien für wartende Geschwisterkinder.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 2. FRAGEN ZUR THERAPIE */}
      <section id="fragen" className="bg-white py-24 px-4 border-t border-stone-200 scroll-mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <HelpCircle className="w-12 h-12 text-[#ea580c] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-stone-800 mb-6">Fragen zur Therapie</h2>
          <div className="bg-stone-50 border-2 border-stone-200 rounded-2xl p-10 border-dashed">
            <p className="text-stone-500 text-lg">Platzhalter für "Fragen zur Therapie". Schick mir einfach die Infos, dann baue ich sie hier formatiert ein!</p>
          </div>
        </div>
      </section>

      {/* 3. STÖRUNGSBILDER */}
      <section id="stoerungen" className="py-24 px-4 scroll-mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <Activity className="w-12 h-12 text-[#ea580c] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-stone-800 mb-6">Störungsbilder</h2>
          <div className="bg-white border-2 border-stone-200 rounded-2xl p-10 border-dashed">
            <p className="text-stone-500 text-lg">Platzhalter für "Störungsbilder". Schick mir einfach die Infos, dann baue ich sie hier formatiert ein!</p>
          </div>
        </div>
      </section>

      {/* 4. SCHULUNGSANGEBOTE */}
      <section id="schulungen" className="bg-white py-24 px-4 border-t border-stone-200 scroll-mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <BookOpen className="w-12 h-12 text-[#ea580c] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-stone-800 mb-6">Schulungsangebote</h2>
          <div className="bg-stone-50 border-2 border-stone-200 rounded-2xl p-10 border-dashed">
            <p className="text-stone-500 text-lg">Platzhalter für "Schulungsangebote". Schick mir einfach die Infos, dann baue ich sie hier formatiert ein!</p>
          </div>
        </div>
      </section>

      {/* 5. AKTUELLES */}
      <section id="aktuelles" className="py-24 px-4 scroll-mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <Newspaper className="w-12 h-12 text-[#ea580c] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-stone-800 mb-6">Aktuelles</h2>
          <div className="bg-white border-2 border-stone-200 rounded-2xl p-10 border-dashed">
            <p className="text-stone-500 text-lg">Platzhalter für "Aktuelles". Schick mir einfach die Infos, dann baue ich sie hier formatiert ein!</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-900 text-stone-400 py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} Praxis für Logopädie Simone Brendel.</p>
      </footer>
      
    </div>
  );
}
