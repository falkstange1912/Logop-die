import { useState } from 'react';
import { 
  MapPin, Coffee, Accessibility, Store, Baby, Trees, HelpCircle, Activity, 
  BookOpen, Newspaper, MessageCircle, Mic, Users, HeartHandshake, AlertCircle, 
  Menu, X, ArrowRight
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-[#fafaf9] text-stone-800 font-sans selection:bg-orange-200 selection:text-orange-900">
      
      {/* Fixed Pride Border at the very top */}
      <div className="fixed top-0 left-0 right-0 h-1.5 z-[100] bg-gradient-to-r from-red-500 via-orange-400 via-yellow-400 via-green-400 via-blue-500 to-purple-500"></div>

      {/* FLOATING NAVIGATION (Modern Glassmorphism) */}
      <div className="fixed top-6 left-0 right-0 z-50 px-4 pointer-events-none">
        <header className="max-w-5xl mx-auto bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl pointer-events-auto transition-all duration-300">
          <div className="px-6 py-4 flex justify-between items-center">
            
            {/* Logo Area */}
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 text-white p-2 rounded-xl shadow-sm">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-stone-900">Brendel</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-stone-600">
              <a href="#praxis" className="hover:text-orange-600 transition">Praxis</a>
              <a href="#fragen" className="hover:text-orange-600 transition">Therapie</a>
              <a href="#stoerungen" className="hover:text-orange-600 transition">Störungsbilder</a>
              <a href="#schulungen" className="hover:text-orange-600 transition">Schulungen</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-stone-800 p-1 hover:bg-stone-100 rounded-lg transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Nav Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4 border-t border-stone-100/50">
              <a href="#praxis" onClick={closeMenu} className="text-stone-600 font-medium text-lg">Die Praxis</a>
              <a href="#fragen" onClick={closeMenu} className="text-stone-600 font-medium text-lg">Fragen zur Therapie</a>
              <a href="#stoerungen" onClick={closeMenu} className="text-stone-600 font-medium text-lg">Störungsbilder</a>
              <a href="#schulungen" onClick={closeMenu} className="text-stone-600 font-medium text-lg">Schulungsangebote</a>
              <a href="#aktuelles" onClick={closeMenu} className="text-orange-600 font-medium text-lg">Aktuelles ansehen &rarr;</a>
            </div>
          )}
        </header>
      </div>

      {/* HERO SECTION - MODERN SPLIT LAYOUT */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[600px] bg-orange-100/50 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-yellow-100/40 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left: Typography */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-stone-200 text-stone-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
              <HeartHandshake className="w-4 h-4 text-red-500" />
              Safe Space 🏳️‍🌈
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-stone-900 tracking-tight leading-[1.05] mb-6">
              Stimme. <br />
              Sprache. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                Selbstvertrauen.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-stone-500 leading-relaxed font-light mb-10 max-w-lg">
              Wir freuen uns, Sie in unserer Praxis für Logopädie an den Standorten <strong>Cremlingen</strong> und <strong>Sickte</strong> in entspannter, offener Atmosphäre begrüßen zu dürfen.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a href="#praxis" className="bg-stone-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-stone-800 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Standorte entdecken
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right: Modern Image Reveal */}
          <div className="relative">
            {/* Decorative Element */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-orange-100 to-stone-50 rounded-[3rem] -z-10 transform rotate-3 scale-105 transition-transform duration-500"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Moderne Praxisumgebung" 
              className="rounded-[2.5rem] w-full h-[500px] lg:h-[650px] object-cover shadow-2xl"
            />
            
            {/* Floating Info Card */}
            <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-12 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white max-w-xs">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-stone-900">Seit 2003</p>
                  <p className="text-xs text-stone-500 font-medium">Erfahrung in der Therapie</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 1. DIE PRAXIS (Redesigned for modern look) */}
      <section id="praxis" className="py-24 px-4 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* STANDORT CREMLINGEN */}
            <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -z-10 group-hover:bg-orange-100 transition-colors duration-500"></div>
              
              <div className="inline-flex items-center gap-2 bg-stone-900 text-white px-4 py-2 rounded-full font-bold text-sm mb-8">
                <MapPin className="w-4 h-4" />
                Cremlingen
              </div>
              <p className="text-stone-600 text-lg leading-relaxed mb-10">
                Die Praxis für Logopädie Simone Brendel besteht seit 2003 und befindet sich direkt am Übergang vom Neubaugebiet Steiferlingen zum alten Ortsteil.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-stone-50 p-3 rounded-2xl text-stone-900"><Store className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-bold text-stone-900 mb-1">Zentrale Lage</h4>
                    <p className="text-stone-500 text-sm">Gemeindeverwaltung und Einkaufsmöglichkeiten in direkter Nähe.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-stone-50 p-3 rounded-2xl text-stone-900"><Baby className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-bold text-stone-900 mb-1">Für Geschwister</h4>
                    <p className="text-stone-500 text-sm">Ein Spielplatz liegt direkt um die Ecke.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* STANDORT SICKTE */}
            <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-50 rounded-full blur-3xl -z-10 group-hover:bg-yellow-100 transition-colors duration-500"></div>
              
              <div className="inline-flex items-center gap-2 bg-stone-900 text-white px-4 py-2 rounded-full font-bold text-sm mb-8">
                <MapPin className="w-4 h-4" />
                Sickte
              </div>
              <p className="text-stone-600 text-lg leading-relaxed mb-10">
                Die Praxis befindet sich in einem medizinischen Zentrum zusammen mit einer Hausarztpraxis, einer Apotheke und Ernährungsberatung.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-stone-50 p-3 rounded-2xl text-stone-900"><Accessibility className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-bold text-stone-900 mb-1">Barrierefrei & Parken</h4>
                    <p className="text-stone-500 text-sm">Großer Parkplatz vor der Tür und barrierefreier Zugang über Fahrstuhl.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-stone-50 p-3 rounded-2xl text-stone-900"><Coffee className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-bold text-stone-900 mb-1">Entspannte Wartezeit</h4>
                    <p className="text-stone-500 text-sm">Feldweg gegenüber oder Getränke & Zeitschriften im Wartezimmer.</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FRAGEN ZUR THERAPIE */}
      <section id="fragen" className="bg-stone-900 text-white py-32 px-4 scroll-mt-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">Was ist Logopädie?</h2>
          
          <div className="bg-stone-800/50 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] border border-stone-700">
            <p className="text-xl md:text-3xl font-light mb-12 text-stone-300 leading-snug">
              Der Begriff stammt aus dem Griechischen und leitet sich von <span className="text-orange-400 font-medium">„logos“</span> (das Wort) und <span className="text-orange-400 font-medium">„pädeuein“</span> (erziehen) ab.
            </p>
            <div className="text-stone-400 text-lg leading-relaxed max-w-2xl mx-auto space-y-6 text-left">
              <p>
                Heute bezeichnet die Logopädie die medizinisch-therapeutische Fachdisziplin, die den in seiner Kommunikationsfähigkeit eingeschränkten Menschen zum Gegenstand hat.
              </p>
              <p>
                Sie beschäftigt sich mit Prävention, Beratung, Diagnostik und Therapie auf den Gebieten der <strong>Stimme</strong>, des <strong>Sprechens</strong>, der <strong>Sprache</strong> sowie des <strong>Schluckens</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STÖRUNGSBILDER */}
      <section id="stoerungen" className="py-32 px-4 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 tracking-tight">Störungsbilder</h2>
              <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-900 px-6 py-3 rounded-2xl font-medium">
                <GlobeIcon className="w-5 h-5 text-blue-600" />
                Wir behandeln in deutscher und polnischer Sprache.
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* SPRACHE */}
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-stone-100">
              <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <MessageCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-stone-900 mb-6">Sprache</h3>
              <p className="text-stone-500 leading-relaxed text-lg mb-8">
                Sprachentwicklungsstörungen, phonologische Störungen, reduzierter Wortschatz, Dysgrammatismus, Aphasie nach Schlaganfall, Hirnblutungen, Tumore oder degenerative Erkrankungen.
              </p>
              <div className="border-l-2 border-stone-200 pl-6">
                <p className="italic text-stone-600 mb-2">„Wenn die Sprache nicht stimmt, so ist das, was gesagt wird, nicht das, was gemeint ist.“</p>
                <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Konfuzius</p>
              </div>
            </div>

            {/* SPRECHEN */}
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-stone-100">
              <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Mic className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-stone-900 mb-6">Sprechen</h3>
              <p className="text-stone-500 leading-relaxed text-lg mb-8">
                Störungen der Aussprache (Lispeln), Dysarthrie (z.B. durch Lähmungen), verbale Entwicklungsdyspraxie und Sprechapraxie. Häufig im Rahmen von Entwicklungsstörungen.
              </p>
              <div className="border-l-2 border-stone-200 pl-6">
                <p className="italic text-stone-600 mb-2">„Wer deutlich spricht, riskiert, verstanden zu werden.“</p>
                <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Norbert Stoffel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SCHULUNGEN & AKTUELLES */}
      <section id="schulungen" className="py-24 px-4 bg-stone-100 scroll-mt-24 rounded-t-[3rem]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl font-bold text-stone-900 mb-8">Schulungsangebote</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-stone-200/50">
                <h4 className="font-bold text-stone-900 mb-2">Für Berufssprecher</h4>
                <p className="text-stone-500 text-sm">Stimmbildung und Sprecherziehung (Call-Center, Lehrer, Trainer).</p>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-stone-200/50">
                <h4 className="font-bold text-stone-900 mb-2">Für Pflegepersonal</h4>
                <p className="text-stone-500 text-sm">Schluckstörungen und Nahrungsaufnahme (Demenz, ALS).</p>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-stone-200/50">
                <h4 className="font-bold text-stone-900 mb-2">Für Erzieherinnen</h4>
                <p className="text-stone-500 text-sm">Fortbildungen zu Sprachentwicklung, Mehrsprachigkeit und Risikofaktoren.</p>
              </div>
            </div>
          </div>

          <div id="aktuelles" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-stone-900 mb-8">Aktuelles</h2>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-10 rounded-[3rem] text-white shadow-xl">
              <Newspaper className="w-10 h-10 mb-6 text-orange-200" />
              <h4 className="font-bold text-2xl mb-4">Verstärkung gesucht!</h4>
              <p className="text-orange-100 text-lg leading-relaxed mb-8">Wir suchen immer wieder neue Kolleginnen und Kollegen – fragen Sie einfach unverbindlich bei uns nach.</p>
              
              <div className="bg-black/20 p-6 rounded-2xl backdrop-blur-sm">
                <p className="text-sm text-orange-50 font-medium">
                  <strong>Hinweis:</strong> Da sich Mitarbeiterinnen in Elternzeit befinden, ist derzeit nicht jede Therapeutin zu kontaktieren. Wir bitten um Verständnis.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="bg-stone-950 text-stone-500 py-10 text-center text-sm">
        <p>© {new Date().getFullYear()} Praxis für Logopädie Simone Brendel. Ein moderner Konzept-Entwurf.</p>
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
