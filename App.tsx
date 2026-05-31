import { useState } from 'react';
import { 
  MapPin, Coffee, Accessibility, Store, Baby, Trees, HelpCircle, Activity, 
  BookOpen, Newspaper, MessageCircle, Mic, Users, HeartHandshake, AlertCircle, 
  Menu, X 
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-[#FFFBF7] text-stone-800 font-sans selection:bg-[#FDBA74] selection:text-stone-900 overflow-hidden">
      
      {/* FLOATING NAVIGATION (Glassmorphism) */}
      <div className="fixed top-4 left-0 right-0 z-50 px-4 pointer-events-none">
        <header className="max-w-6xl mx-auto bg-white/60 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[2rem] pointer-events-auto transition-all duration-300">
          <div className="px-6 py-4 flex justify-between items-center">
            
            <div className="flex items-center gap-3">
              <div className="bg-[#0EA5E9] text-white p-2.5 rounded-2xl shadow-sm transform -rotate-3">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-[#0EA5E9]">Brendel</span>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-base font-bold text-stone-600">
              <a href="#praxis" className="hover:text-[#D946EF] transition">Die Praxis</a>
              <a href="#fragen" className="hover:text-[#D946EF] transition">Therapie</a>
              <a href="#stoerungen" className="hover:text-[#D946EF] transition">Störungsbilder</a>
              <a href="#schulungen" className="hover:text-[#D946EF] transition">Schulungsangebote</a>
              <a href="#aktuelles" className="hover:text-[#D946EF] transition">Aktuelles</a>
            </nav>

            <button 
              className="md:hidden text-stone-600 p-2 hover:bg-stone-100 rounded-2xl transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4 border-t border-white/50">
              <a href="#praxis" onClick={closeMenu} className="text-stone-700 font-bold text-lg">Die Praxis</a>
              <a href="#fragen" onClick={closeMenu} className="text-stone-700 font-bold text-lg">Fragen zur Therapie</a>
              <a href="#stoerungen" onClick={closeMenu} className="text-stone-700 font-bold text-lg">Störungsbilder</a>
              <a href="#schulungen" onClick={closeMenu} className="text-stone-700 font-bold text-lg">Schulungsangebote</a>
              <a href="#aktuelles" onClick={closeMenu} className="text-[#D946EF] font-bold text-lg">Aktuelles</a>
            </div>
          )}
        </header>
      </div>

      {/* HERO SECTION - ORGANIC & PLAYFUL */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-32 px-4">
        {/* Organic Blobs */}
        <div className="absolute top-0 right-0 -translate-y-10 translate-x-1/4 w-[600px] h-[600px] bg-[#FDBA74]/30 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute top-40 left-0 -translate-x-1/4 w-[500px] h-[500px] bg-[#0EA5E9]/20 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#D946EF]/15 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md text-[#D946EF] px-5 py-2.5 rounded-full text-sm font-bold mb-8 shadow-sm border border-white/50">
              <HeartHandshake className="w-5 h-5" />
              Safe Space 🏳️‍🌈 Alle willkommen
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-stone-800 tracking-tight leading-[1.1] mb-8">
              Stimme. <br />
              Sprache. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#D946EF]">
                Selbstvertrauen.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-medium mb-12 max-w-lg">
              Die Praxis für Logopädie Simone Brendel. Ein Ort zum Wohlfühlen für Kinder, Jugendliche und Erwachsene in Cremlingen und Sickte.
            </p>
          </div>

          {/* Immersive Visual Storytelling Placeholder */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FDBA74] to-[#D946EF] rounded-[4rem] transform rotate-3 scale-105 opacity-20 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Lachende Jugendliche" 
              className="rounded-[4rem] rounded-tl-[10rem] rounded-br-[10rem] w-full h-[500px] object-cover shadow-2xl border-4 border-white"
            />
            {/* Glassmorphism Floating Element */}
            <div className="absolute -bottom-8 -left-8 bg-white/60 backdrop-blur-xl p-6 rounded-[2rem] shadow-xl border border-white/50 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="bg-[#0EA5E9] p-3 rounded-2xl text-white">
                  <Activity className="w-6 h-6" />
                </div>
                <p className="font-bold text-stone-800 text-lg">Seit 2003 für euch da!</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 1. DIE PRAXIS */}
      <section id="praxis" className="py-24 px-4 scroll-mt-24 relative">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          
          {/* STANDORT CREMLINGEN */}
          <div className="bg-white/80 backdrop-blur-lg rounded-[3rem] p-10 md:p-14 shadow-xl border border-white relative overflow-hidden group">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FDBA74]/20 rounded-full blur-3xl transition-transform group-hover:scale-150"></div>
            
            <div className="inline-flex items-center gap-2 bg-[#FDBA74] text-stone-900 px-5 py-2.5 rounded-full font-black text-sm mb-8 transform -rotate-2">
              <MapPin className="w-5 h-5" /> Cremlingen
            </div>
            
            <p className="text-stone-700 text-lg leading-relaxed mb-10 font-medium">
              Die Praxis für Logopädie Simone Brendel besteht seit 2003 und befindet sich direkt in Cremlingen am Übergang vom Neubaugebiet Steiferlingen zum alten Ortsteil.
            </p>
            
            <ul className="space-y-8 relative z-10">
              <li className="flex items-start gap-5">
                <div className="bg-[#FFFBF7] p-4 rounded-3xl text-[#0EA5E9] shadow-sm"><Store className="w-7 h-7" /></div>
                <div>
                  <h4 className="font-black text-stone-800 text-xl mb-2">Zentrale Lage</h4>
                  <p className="text-stone-600 font-medium leading-relaxed">Die Gemeindeverwaltung, diverse Einkaufsmöglichkeiten und Banken befinden sich nur wenige Gehminuten entfernt.</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="bg-[#FFFBF7] p-4 rounded-3xl text-[#D946EF] shadow-sm"><Baby className="w-7 h-7" /></div>
                <div>
                  <h4 className="font-black text-stone-800 text-xl mb-2">Für wartende Geschwisterkinder</h4>
                  <p className="text-stone-600 font-medium leading-relaxed">Für wartende Geschwisterkinder gibt es außer dem Wartezimmer noch die Möglichkeit einen Spielplatz zu besuchen, der gleich um die Ecke liegt.</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="bg-[#FFFBF7] p-4 rounded-3xl text-[#FDBA74] shadow-sm"><Coffee className="w-7 h-7" /></div>
                <div>
                  <h4 className="font-black text-stone-800 text-xl mb-2">Entspannte Wartezeit</h4>
                  <p className="text-stone-600 font-medium leading-relaxed">Gegenüber der Praxis lädt ein Feldweg zu einem kurzen Spaziergang ein ... oder Sie überbrücken die Wartezeit während der Therapiestunde einfach mit einem warmen oder kalten Getränk und einer Zeitschrift in unserem Wartezimmer.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* STANDORT SICKTE */}
          <div className="bg-white/80 backdrop-blur-lg rounded-[3rem] p-10 md:p-14 shadow-xl border border-white relative overflow-hidden group">
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#0EA5E9]/10 rounded-full blur-3xl transition-transform group-hover:scale-150"></div>
            
            <div className="inline-flex items-center gap-2 bg-[#0EA5E9] text-white px-5 py-2.5 rounded-full font-black text-sm mb-8 transform rotate-2">
              <MapPin className="w-5 h-5" /> Sickte
            </div>
            
            <p className="text-stone-700 text-lg leading-relaxed mb-10 font-medium">
              Die Praxis befindet sich in einem medizinischen Zentrum zusammen mit einer Gemeinschaftspraxis für Allgemeinmedizin, einer Hausarztpraxis, einer Apotheke und einer Praxis für Ernährungsberatung. Ein großer Parkplatz befindet sich direkt vor der Tür.
            </p>
            
            <ul className="space-y-8 relative z-10">
              <li className="flex items-start gap-5">
                <div className="bg-[#FFFBF7] p-4 rounded-3xl text-[#0EA5E9] shadow-sm"><Accessibility className="w-7 h-7" /></div>
                <div>
                  <h4 className="font-black text-stone-800 text-xl mb-2">Barrierefrei</h4>
                  <p className="text-stone-600 font-medium leading-relaxed">Die Praxis ist barrierefrei über einen Fahrstuhl zu erreichen.</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="bg-[#FFFBF7] p-4 rounded-3xl text-[#D946EF] shadow-sm"><Store className="w-7 h-7" /></div>
                <div>
                  <h4 className="font-black text-stone-800 text-xl mb-2">Infrastruktur</h4>
                  <p className="text-stone-600 font-medium leading-relaxed">Diverse Einkaufsmöglichkeiten und Banken befinden sich zur wenige Gehminuten entfernt.</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="bg-[#FFFBF7] p-4 rounded-3xl text-[#FDBA74] shadow-sm"><Trees className="w-7 h-7" /></div>
                <div>
                  <h4 className="font-black text-stone-800 text-xl mb-2">Umgebung & Wartezimmer</h4>
                  <p className="text-stone-600 font-medium leading-relaxed">Gegenüber der Praxis lädt ein Feldweg zu einem kurzen Spaziergang ein…. ….oder Sie überbrücken die Wartezeit während der Therapie einfach mit einem Getränk und einer Zeitschrift im Wartezimmer, das auch vielfältige Spielmaterialien für wartende Geschwisterkinder bereit hält.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. FRAGEN ZUR THERAPIE */}
      <section id="fragen" className="py-24 px-4 scroll-mt-24">
        <div className="max-w-4xl mx-auto bg-[#0EA5E9]/5 rounded-[4rem] p-10 md:p-16 border border-[#0EA5E9]/10 relative overflow-hidden">
          <div className="absolute top-10 right-10 text-[#0EA5E9]/20">
            <HelpCircle className="w-32 h-32" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-[#0EA5E9] mb-10 relative z-10">Fragen zur Therapie: Was ist Logopädie?</h2>
          
          <div className="space-y-6 text-stone-700 text-xl leading-relaxed font-medium relative z-10">
            <p className="bg-white/60 p-6 rounded-3xl backdrop-blur-sm">Der Begriff stammt aus dem griechischen und leitet sich von „logos“ = „das Wort“ und „pädeuein“ = „erziehen“ ab. Heute bezeichnet die Logopädie die noch junge medizinisch- therapeutische Fachdisziplin, die den durch eine Sprach-, Sprech-, Stimm-, Schluck- oder Hörbeeinträchtigung in seiner zwischenmenschlichen Kommunikationsfähigkeit eingeschränkten Menschen zum Gegenstand hat.</p>
            <p className="bg-white/60 p-6 rounded-3xl backdrop-blur-sm">Die Logopädie beschäftigt sich in Theorie und Praxis mit Prävention, Beratung, Diagnostik, Therapie und Rehabilitation, Lehre und Forschung auf den Gebieten der Stimme, Stimmstörungen und Stimmtherapie; des Sprechens, Sprechstörungen und Sprechtherapie; der Sprache, Sprachstörungen und Sprachtherapie; sowie des Schluckens, Schluckstörungen und Schlucktherapie.</p>
          </div>
        </div>
      </section>

      {/* 3. STÖRUNGSBILDER */}
      <section id="stoerungen" className="py-24 px-4 scroll-mt-24 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#D946EF]/10 rounded-full blur-[80px] -z-10"></div>
        
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-stone-800 mb-8">Störungsbilder</h2>
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md text-[#D946EF] px-8 py-4 rounded-full font-bold shadow-sm border border-white">
              <GlobeIcon className="w-6 h-6" />
              Wir behandeln Kinder und Erwachsene mit folgenden Störungsbildern in deutscher und polnischer Sprache.
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white/80 backdrop-blur-lg p-10 md:p-12 rounded-[3rem] shadow-xl border border-white">
              <div className="bg-[#D946EF] w-20 h-20 rounded-[2rem] flex items-center justify-center mb-8 transform -rotate-3 shadow-lg">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-black text-stone-800 mb-6">Störungen der Sprache</h3>
              <p className="text-stone-600 leading-relaxed text-lg font-medium">Hierbei handelt es sich z.B. um Sprachentwicklungsstörungen, Störungen des Lautsystems (phonologische Störung), reduzierten Wortschatz, Störung der Grammatikentwicklung (Dysgrammatismus), Aphasie nach Schlaganfall, Hirnblutungen, Schädel- Hirn- Traumen, Tumore, Hirnoperationen, degenerative Erkrankungen (z.B. Demenz).</p>
            </div>

            <div className="bg-white/80 backdrop-blur-lg p-10 md:p-12 rounded-[3rem] shadow-xl border border-white">
              <div className="bg-[#FDBA74] w-20 h-20 rounded-[2rem] flex items-center justify-center mb-8 transform rotate-3 shadow-lg">
                <Mic className="w-10 h-10 text-stone-900" />
              </div>
              <h3 className="text-3xl font-black text-stone-800 mb-6">Störungen des Sprechens</h3>
              <p className="text-stone-600 leading-relaxed text-lg font-medium">Sprechstörungen im Kindesalter treten häufig im Rahmen von Entwicklungsstörungen und Behinderungen auf. Wie bei Erwachsenen handelt es sich um zentral oder peripher bedingte Störungen der Sprechorgane. Es finden sich Störungen der Aussprache (Lispeln), Dysarthrie (z.B. durch Lähmungen, Facialisparese), verbale Entwicklungsdyspraxie, Sprechapraxie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SCHULUNGEN */}
      <section id="schulungen" className="py-24 px-4 bg-white/50 backdrop-blur-3xl scroll-mt-24 rounded-[4rem] mx-2 md:mx-6 shadow-sm border border-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-[#FDBA74] mb-12 text-center drop-shadow-sm">Schulungsangebote</h2>
          
          <div className="space-y-6 text-stone-700 text-lg leading-relaxed font-medium">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm">
              <p>Stimmbildung und Sprecherziehung für Berufsprecher wie z.B. Mitarbeiter im Call-Center, Lehrer oder Fitnesstrainer bieten wir als Einzel- oder Gruppenschulungen an.</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm">
              <p>Elternabende in Kindergärten oder Kindergruppen zu den Bereichen Sprachentwicklung und Sprachförderung oder individuell vereinbarten Themen.</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm">
              <p>Schulungen zum Thema Schluckstörungen und Nahrungsaufnahme für Pflegepersonen in Krankenhäusern, Altenheimen und ambulanten Pflegediensten. Hier bieten wir individuelle Seminare zu verschiedenen Störungsbildern wie z.B. Schluckstörungen im Alter, bei Demenz oder progredienten Erkrankungen wie z.B. Amyotropher Lateralsklerose (ALS) an.</p>
            </div>
            
            <div className="bg-[#D946EF] text-white p-8 rounded-[2rem] text-center font-bold text-xl shadow-lg transform rotate-1">
              Wir passen die Fortbildungsinhalte Ihren individuellen Bedürfnissen an - sprechen Sie uns an!
            </div>

            <div className="bg-[#0EA5E9]/10 p-10 rounded-[3rem] border border-[#0EA5E9]/20 mt-12">
              <h4 className="font-black text-[#0EA5E9] text-2xl mb-8">Fortbildungen für Erzieherinnen zu den Themen</h4>
              <ul className="grid sm:grid-cols-2 gap-6">
                {[
                  "Sprachentwicklung",
                  "die Verbindung zwischen allgemeiner Entwicklung und Sprachentwicklung",
                  "sprachfördernde und sprachhemmende Faktoren der Sprachentwicklung",
                  "Sprachvorbild",
                  "Mehrsprachigkeit",
                  "Risikofaktoren",
                  "mögliche Sprachstörungen"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 bg-white/60 p-4 rounded-2xl">
                    <div className="bg-[#0EA5E9] w-3 h-3 mt-2 rounded-full flex-shrink-0"></div>
                    <span className="font-bold text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AKTUELLES */}
      <section id="aktuelles" className="py-24 px-4 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-stone-800 mb-12 text-center">Aktuelles</h2>
          
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-lg p-8 md:p-10 rounded-[3rem] shadow-xl border border-white flex flex-col md:flex-row items-center gap-8 transform hover:-translate-y-1 transition-transform">
              <div className="bg-[#0EA5E9] p-6 rounded-[2rem] shadow-md transform -rotate-3">
                <Users className="w-10 h-10 text-white" />
              </div>
              <p className="text-stone-700 text-xl font-bold leading-relaxed">
                Wir suchen immer wieder neue Kolleginnen / Kollegen - fragen Sie einfach mal nach...
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-lg p-8 md:p-10 rounded-[3rem] shadow-xl border border-white flex flex-col md:flex-row items-center gap-8 transform hover:-translate-y-1 transition-transform">
              <div className="bg-[#FDBA74] p-6 rounded-[2rem] shadow-md transform rotate-3">
                <AlertCircle className="w-10 h-10 text-stone-900" />
              </div>
              <p className="text-stone-700 text-xl font-bold leading-relaxed">
                Liebe Patienten, da sich immer wieder Mitarbeiterinnen in Elternzeit befinden, ist nicht jede Therapeutin zu kontaktieren. Wir bitten um Ihr Verständnis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-stone-500 font-bold">
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
