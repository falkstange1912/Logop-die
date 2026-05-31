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
    <div className="min-h-screen bg-[#FDFDFB] text-stone-800 font-sans selection:bg-[#E6E4F4] selection:text-stone-900">
      
      {/* Subtle LGBTQ+ Inclusivity Bar in Muted Lavender */}
      <div className="fixed top-0 left-0 right-0 h-1.5 z-[100] bg-gradient-to-r from-[#D8D4EC] via-[#E6E4F4] to-[#C9C3E6]"></div>

      {/* FLOATING NAVIGATION */}
      <div className="fixed top-6 left-0 right-0 z-50 px-4 pointer-events-none">
        <header className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] pointer-events-auto transition-all duration-300">
          <div className="px-6 py-4 flex justify-between items-center">
            
            {/* Logo Area */}
            <div className="flex items-center gap-3">
              {/* Coral-Salmon Accent */}
              <div className="bg-[#F08080] text-white p-2.5 rounded-2xl shadow-sm">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-stone-800">Simone Brendel</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-stone-500">
              <a href="#praxis" className="hover:text-[#F08080] transition">Die Praxis</a>
              <a href="#fragen" className="hover:text-[#F08080] transition">Therapie</a>
              <a href="#stoerungen" className="hover:text-[#F08080] transition">Störungsbilder</a>
              <a href="#schulungen" className="hover:text-[#F08080] transition">Schulungsangebote</a>
              <a href="#aktuelles" className="hover:text-[#F08080] transition">Aktuelles</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-stone-600 p-2 hover:bg-stone-50 rounded-xl transition"
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
              <a href="#aktuelles" onClick={closeMenu} className="text-[#F08080] font-medium text-lg">Aktuelles</a>
            </div>
          )}
        </header>
      </div>

      {/* HERO SECTION - ORGANIC, FLUID, EMPATHETIC */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-32 px-4 overflow-hidden">
        {/* Organic Background Shapes */}
        <div className="absolute top-0 right-0 -translate-y-10 translate-x-1/4 w-[600px] h-[600px] bg-[#F08080]/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-[#9FB7A5]/15 rounded-full blur-[80px] -z-10"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 bg-[#FDFDFB] text-stone-600 px-5 py-2.5 rounded-full text-sm font-medium mb-8 shadow-sm border border-stone-100/50">
            <HeartHandshake className="w-4 h-4 text-[#D8D4EC]" />
            Ein sicherer Ort. Alle sind hier willkommen.
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-stone-800 tracking-tight leading-[1.1] mb-8">
            Die Praxis für Logopädie <br />
            <span className="text-[#9FB7A5]">Simone Brendel</span>
          </h1>
          
          <p className="text-lg md:text-xl text-stone-500 leading-relaxed font-light mb-12 max-w-2xl mx-auto">
            Wir freuen uns, Sie an unseren zwei Standorten in Cremlingen und Sickte in entspannter Atmosphäre begrüßen zu dürfen.
          </p>
          
        </div>
      </section>

      {/* 1. DIE PRAXIS (Boutique Medical Experience) */}
      <section id="praxis" className="py-24 px-4 scroll-mt-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          
          {/* STANDORT CREMLINGEN */}
          <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-sm border border-stone-100 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#F08080]/10 rounded-full blur-2xl"></div>
            
            <div className="inline-flex items-center gap-2 bg-[#F08080]/10 text-[#E06060] px-4 py-2 rounded-2xl font-bold text-sm mb-8">
              <MapPin className="w-4 h-4" />
              Cremlingen
            </div>
            
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              Die Praxis für Logopädie Simone Brendel besteht seit 2003 und befindet sich direkt in Cremlingen am Übergang vom Neubaugebiet Steiferlingen zum alten Ortsteil.
            </p>
            
            <ul className="space-y-8">
              <li className="flex items-start gap-5">
                <div className="bg-stone-50 p-4 rounded-3xl text-stone-400"><Store className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-stone-700 text-lg mb-2">Zentrale Lage</h4>
                  <p className="text-stone-500 leading-relaxed">Die Gemeindeverwaltung, diverse Einkaufsmöglichkeiten und Banken befinden sich nur wenige Gehminuten entfernt.</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="bg-stone-50 p-4 rounded-3xl text-stone-400"><Baby className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-stone-700 text-lg mb-2">Für wartende Geschwisterkinder</h4>
                  <p className="text-stone-500 leading-relaxed">Für wartende Geschwisterkinder gibt es außer dem Wartezimmer noch die Möglichkeit einen Spielplatz zu besuchen, der gleich um die Ecke liegt.</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="bg-stone-50 p-4 rounded-3xl text-stone-400"><Coffee className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-stone-700 text-lg mb-2">Entspannte Wartezeit</h4>
                  <p className="text-stone-500 leading-relaxed">Gegenüber der Praxis lädt ein Feldweg zu einem kurzen Spaziergang ein ... oder Sie überbrücken die Wartezeit während der Therapiestunde einfach mit einem warmen oder kalten Getränk und einer Zeitschrift in unserem Wartezimmer.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* STANDORT SICKTE */}
          <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-sm border border-stone-100 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#9FB7A5]/10 rounded-full blur-2xl"></div>
            
            <div className="inline-flex items-center gap-2 bg-[#9FB7A5]/10 text-[#74907C] px-4 py-2 rounded-2xl font-bold text-sm mb-8">
              <MapPin className="w-4 h-4" />
              Sickte
            </div>
            
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              Die Praxis befindet sich in einem medizinischen Zentrum zusammen mit einer Gemeinschaftspraxis für Allgemeinmedizin, einer Hausarztpraxis, einer Apotheke und einer Praxis für Ernährungsberatung. Ein großer Parkplatz befindet sich direkt vor der Tür.
            </p>
            
            <ul className="space-y-8">
              <li className="flex items-start gap-5">
                <div className="bg-stone-50 p-4 rounded-3xl text-stone-400"><Accessibility className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-stone-700 text-lg mb-2">Barrierefrei</h4>
                  <p className="text-stone-500 leading-relaxed">Die Praxis ist barrierefrei über einen Fahrstuhl zu erreichen.</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="bg-stone-50 p-4 rounded-3xl text-stone-400"><Store className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-stone-700 text-lg mb-2">Infrastruktur</h4>
                  <p className="text-stone-500 leading-relaxed">Diverse Einkaufsmöglichkeiten und Banken befinden sich zur wenige Gehminuten entfernt.</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="bg-stone-50 p-4 rounded-3xl text-stone-400"><Trees className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-stone-700 text-lg mb-2">Umgebung & Wartezimmer</h4>
                  <p className="text-stone-500 leading-relaxed">Gegenüber der Praxis lädt ein Feldweg zu einem kurzen Spaziergang ein…. ….oder Sie überbrücken die Wartezeit während der Therapie einfach mit einem Getränk und einer Zeitschrift im Wartezimmer, das auch vielfältige Spielmaterialien für wartende Geschwisterkinder bereit hält.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. FRAGEN ZUR THERAPIE */}
      <section id="fragen" className="py-24 px-4 bg-[#F8F9F7] scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-sm border border-stone-100/50">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-10 text-center">Fragen zur Therapie: Was ist Logopädie?</h2>
            
            <p className="text-xl md:text-2xl font-light mb-10 text-stone-500 leading-relaxed text-center">
              Der Begriff stammt aus dem griechischen und leitet sich von <span className="text-[#9FB7A5] font-medium">„logos“ = „das Wort“</span> und <span className="text-[#9FB7A5] font-medium">„pädeuein“ = „erziehen“</span> ab.
            </p>
            
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
              <p>
                Heute bezeichnet die Logopädie die noch junge medizinisch-therapeutische Fachdisziplin, die den durch eine Sprach-, Sprech-, Stimm-, Schluck- oder Hörbeeinträchtigung in seiner zwischenmenschlichen Kommunikationsfähigkeit eingeschränkten Menschen zum Gegenstand hat.
              </p>
              <p>
                Die Logopädie beschäftigt sich in Theorie und Praxis mit Prävention, Beratung, Diagnostik, Therapie und Rehabilitation, Lehre und Forschung auf den Gebieten der Stimme, Stimmstörungen und Stimmtherapie; des Sprechens, Sprechstörungen und Sprechtherapie; der Sprache, Sprachstörungen und Sprachtherapie; sowie des Schluckens, Schluckstörungen und Schlucktherapie. <span className="text-stone-400 text-sm">(Quelle: Wikipedia)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STÖRUNGSBILDER */}
      <section id="stoerungen" className="py-32 px-4 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Störungsbilder</h2>
            <div className="inline-flex items-center gap-2 bg-[#D8D4EC]/30 text-[#857BB3] px-6 py-3 rounded-full font-medium">
              <GlobeIcon className="w-5 h-5" />
              Wir behandeln Kinder und Erwachsene mit folgenden Störungsbildern in deutscher und polnischer Sprache.
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* SPRACHE */}
            <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-sm border border-stone-100">
              <div className="bg-[#F08080]/10 w-16 h-16 rounded-[2rem] flex items-center justify-center mb-10">
                <MessageCircle className="w-8 h-8 text-[#F08080]" />
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-8">Störungen der Sprache</h3>
              
              <blockquote className="border-l-2 border-[#F08080] pl-6 mb-8">
                <p className="italic text-stone-500 mb-2">„Wenn die Sprache nicht stimmt, so ist das, was gesagt wird, nicht das, was gemeint ist.“</p>
                <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Konfuzius</p>
              </blockquote>
              
              <p className="text-stone-600 leading-relaxed text-lg">
                Hierbei handelt es sich z.B. um Sprachentwicklungsstörungen, Störungen des Lautsystems (phonologische Störung), reduzierten Wortschatz, Störung der Grammatikentwicklung (Dysgrammatismus), Aphasie nach Schlaganfall, Hirnblutungen, Schädel- Hirn- Traumen, Tumore, Hirnoperationen, degenerative Erkrankungen (z.B. Demenz).
              </p>
            </div>

            {/* SPRECHEN */}
            <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-sm border border-stone-100">
              <div className="bg-[#9FB7A5]/10 w-16 h-16 rounded-[2rem] flex items-center justify-center mb-10">
                <Mic className="w-8 h-8 text-[#9FB7A5]" />
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-8">Störungen des Sprechens</h3>
              
              <blockquote className="border-l-2 border-[#9FB7A5] pl-6 mb-8">
                <p className="italic text-stone-500 mb-2">„Wer deutlich spricht, riskiert, verstanden zu werden.“</p>
                <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Norbert Stoffel</p>
              </blockquote>
              
              <p className="text-stone-600 leading-relaxed text-lg">
                Sprechstörungen im Kindesalter treten häufig im Rahmen von Entwicklungsstörungen und Behinderungen auf. Wie bei Erwachsenen handelt es sich um zentral oder peripher bedingte Störungen der Sprechorgane. Es finden sich Störungen der Aussprache (Lispeln), Dysarthrie (z.B. durch Lähmungen, Facialisparese), verbale Entwicklungsdyspraxie, Sprechapraxie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SCHULUNGEN */}
      <section id="schulungen" className="py-24 px-4 bg-white scroll-mt-24 rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-12 text-center">Schulungsangebote</h2>
          
          <div className="space-y-8 text-stone-600 text-lg leading-relaxed">
            <div className="bg-[#FDFDFB] p-8 rounded-[2rem] border border-stone-100">
              <p>Stimmbildung und Sprecherziehung für Berufsprecher wie z.B. Mitarbeiter im Call-Center, Lehrer oder Fitnesstrainer bieten wir als Einzel- oder Gruppenschulungen an.</p>
            </div>
            
            <div className="bg-[#FDFDFB] p-8 rounded-[2rem] border border-stone-100">
              <p>Elternabende in Kindergärten oder Kindergruppen zu den Bereichen Sprachentwicklung und Sprachförderung oder individuell vereinbarten Themen.</p>
            </div>
            
            <div className="bg-[#FDFDFB] p-8 rounded-[2rem] border border-stone-100">
              <p>Schulungen zum Thema Schluckstörungen und Nahrungsaufnahme für Pflegepersonen in Krankenhäusern, Altenheimen und ambulanten Pflegediensten. Hier bieten wir individuelle Seminare zu verschiedenen Störungsbildern wie z.B. Schluckstörungen im Alter, bei Demenz oder progredienten Erkrankungen wie z.B. Amyotropher Lateralsklerose (ALS) an.</p>
            </div>
            
            <div className="text-center font-medium text-[#F08080] py-6 text-xl">
              Wir passen die Fortbildungsinhalte Ihren individuellen Bedürfnissen an - sprechen Sie uns an!
            </div>
            
            <div className="bg-[#9FB7A5]/5 p-10 rounded-[3rem] border border-[#9FB7A5]/20">
              <h4 className="font-bold text-stone-800 text-xl mb-6">Fortbildungen für Erzieherinnen zu den Themen</h4>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "Sprachentwicklung",
                  "die Verbindung zwischen allgemeiner Entwicklung und Sprachentwicklung",
                  "sprachfördernde und sprachhemmende Faktoren der Sprachentwicklung",
                  "Sprachvorbild",
                  "Mehrsprachigkeit",
                  "Risikofaktoren",
                  "mögliche Sprachstörungen"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-600">
                    <div className="w-2 h-2 mt-2.5 rounded-full bg-[#9FB7A5] flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AKTUELLES */}
      <section id="aktuelles" className="py-24 px-4 bg-[#F8F9F7] scroll-mt-24 rounded-[4rem] mx-2 md:mx-6 mb-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-12">Aktuelles</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-stone-100 flex flex-col md:flex-row items-center gap-6 text-left">
              <div className="bg-[#9FB7A5]/20 p-5 rounded-[1.5rem] flex-shrink-0">
                <Users className="w-8 h-8 text-[#74907C]" />
              </div>
              <p className="text-stone-600 text-lg leading-relaxed">
                Wir suchen immer wieder neue Kolleginnen / Kollegen - fragen Sie einfach mal nach...
              </p>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-stone-100 flex flex-col md:flex-row items-center gap-6 text-left">
              <div className="bg-[#D8D4EC]/40 p-5 rounded-[1.5rem] flex-shrink-0">
                <AlertCircle className="w-8 h-8 text-[#857BB3]" />
              </div>
              <p className="text-stone-600 text-lg leading-relaxed">
                Liebe Patienten, da sich immer wieder Mitarbeiterinnen in Elternzeit befinden, ist nicht jede Therapeutin zu kontaktieren. Wir bitten um Ihr Verständnis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-stone-400 py-10 text-center text-sm font-medium">
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
