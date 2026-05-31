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
      
      {/* Pride Accent Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-red-500 via-orange-400 via-yellow-400 via-green-400 via-blue-500 to-purple-500"></div>

      {/* FLOATING NAVIGATION */}
      <div className="fixed top-6 left-0 right-0 z-50 px-4 pointer-events-none">
        <header className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] pointer-events-auto transition-all duration-300">
          <div className="px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-[#F08080] text-white p-2.5 rounded-2xl shadow-sm"><MessageCircle className="w-5 h-5" /></div>
              <span className="font-extrabold text-xl tracking-tight text-stone-800">Simone Brendel</span>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-stone-500">
              <a href="#praxis" className="hover:text-[#F08080] transition">Die Praxis</a>
              <a href="#fragen" className="hover:text-[#F08080] transition">Therapie</a>
              <a href="#stoerungen" className="hover:text-[#F08080] transition">Störungsbilder</a>
              <a href="#schulungen" className="hover:text-[#F08080] transition">Schulungsangebote</a>
              <a href="#aktuelles" className="hover:text-[#F08080] transition">Aktuelles</a>
            </nav>

            <button className="md:hidden text-stone-600 p-2 hover:bg-stone-50 rounded-xl transition" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </header>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-48 pb-24 px-4 overflow-hidden text-center">
        <div className="max-w-4xl mx-auto">
          {/* LGBTQ+ Pride Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FDFDFB] text-stone-700 px-5 py-2.5 rounded-full text-sm font-medium mb-8 shadow-sm border border-stone-100">
            <span className="text-lg">🏳️‍🌈</span>
            Safe Space – Alle sind hier willkommen.
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-stone-800 tracking-tight leading-[1.1] mb-8">
            Die Praxis für Logopädie <br />
            <span className="text-[#9FB7A5]">Simone Brendel</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-500 leading-relaxed font-light mb-12 max-w-2xl mx-auto">
            Wir freuen uns, Sie an unseren zwei Standorten in Cremlingen und Sickte in entspannter Atmosphäre begrüßen zu dürfen.
          </p>
        </div>
      </section>

      {/* 1. DIE PRAXIS */}
      <section id="praxis" className="py-24 px-4 scroll-mt-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-sm border border-stone-100">
            <div className="inline-flex items-center gap-2 bg-[#F08080]/10 text-[#E06060] px-4 py-2 rounded-2xl font-bold text-sm mb-8"><MapPin className="w-4 h-4" />Cremlingen</div>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">Die Praxis für Logopädie Simone Brendel besteht seit 2003 und befindet sich direkt in Cremlingen am Übergang vom Neubaugebiet Steiferlingen zum alten Ortsteil.</p>
            <ul className="space-y-8">
              <li className="flex items-start gap-5"><div className="bg-stone-50 p-4 rounded-3xl text-stone-400"><Store className="w-6 h-6" /></div><div><h4 className="font-bold text-stone-700 text-lg mb-2">Zentrale Lage</h4><p className="text-stone-500 leading-relaxed">Die Gemeindeverwaltung, diverse Einkaufsmöglichkeiten und Banken befinden sich nur wenige Gehminuten entfernt.</p></div></li>
              <li className="flex items-start gap-5"><div className="bg-stone-50 p-4 rounded-3xl text-stone-400"><Baby className="w-6 h-6" /></div><div><h4 className="font-bold text-stone-700 text-lg mb-2">Für wartende Geschwisterkinder</h4><p className="text-stone-500 leading-relaxed">Für wartende Geschwisterkinder gibt es außer dem Wartezimmer noch die Möglichkeit einen Spielplatz zu besuchen, der gleich um die Ecke liegt.</p></div></li>
              <li className="flex items-start gap-5"><div className="bg-stone-50 p-4 rounded-3xl text-stone-400"><Coffee className="w-6 h-6" /></div><div><h4 className="font-bold text-stone-700 text-lg mb-2">Entspannte Wartezeit</h4><p className="text-stone-500 leading-relaxed">Gegenüber der Praxis lädt ein Feldweg zu einem kurzen Spaziergang ein ... oder Sie überbrücken die Wartezeit während der Therapiestunde einfach mit einem warmen oder kalten Getränk und einer Zeitschrift in unserem Wartezimmer.</p></div></li>
            </ul>
          </div>

          <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-sm border border-stone-100">
            <div className="inline-flex items-center gap-2 bg-[#9FB7A5]/10 text-[#74907C] px-4 py-2 rounded-2xl font-bold text-sm mb-8"><MapPin className="w-4 h-4" />Sickte</div>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">Die Praxis befindet sich in einem medizinischen Zentrum zusammen mit einer Gemeinschaftspraxis für Allgemeinmedizin, einer Hausarztpraxis, einer Apotheke und einer Praxis für Ernährungsberatung. Ein großer Parkplatz befindet sich direkt vor der Tür.</p>
            <ul className="space-y-8">
              <li className="flex items-start gap-5"><div className="bg-stone-50 p-4 rounded-3xl text-stone-400"><Accessibility className="w-6 h-6" /></div><div><h4 className="font-bold text-stone-700 text-lg mb-2">Barrierefrei</h4><p className="text-stone-500 leading-relaxed">Die Praxis ist barrierefrei über einen Fahrstuhl zu erreichen.</p></div></li>
              <li className="flex items-start gap-5"><div className="bg-stone-50 p-4 rounded-3xl text-stone-400"><Store className="w-6 h-6" /></div><div><h4 className="font-bold text-stone-700 text-lg mb-2">Infrastruktur</h4><p className="text-stone-500 leading-relaxed">Diverse Einkaufsmöglichkeiten und Banken befinden sich zur wenige Gehminuten entfernt.</p></div></li>
              <li className="flex items-start gap-5"><div className="bg-stone-50 p-4 rounded-3xl text-stone-400"><Trees className="w-6 h-6" /></div><div><h4 className="font-bold text-stone-700 text-lg mb-2">Umgebung & Wartezimmer</h4><p className="text-stone-500 leading-relaxed">Gegenüber der Praxis lädt ein Feldweg zu einem kurzen Spaziergang ein…. ….oder Sie überbrücken die Wartezeit während der Therapie einfach mit einem Getränk und einer Zeitschrift im Wartezimmer, das auch vielfältige Spielmaterialien für wartende Geschwisterkinder bereit hält.</p></div></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. FRAGEN ZUR THERAPIE */}
      <section id="fragen" className="py-24 px-4 bg-[#F8F9F7] scroll-mt-24">
        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-10 md:p-16 shadow-sm border border-stone-100">
          <h2 className="text-3xl font-bold text-stone-800 mb-10 text-center">Fragen zur Therapie: Was ist Logopädie?</h2>
          <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
            <p>Der Begriff stammt aus dem griechischen und leitet sich von „logos“ = „das Wort“ und „pädeuein“ = „erziehen“ ab. Heute bezeichnet die Logopädie die noch junge medizinisch- therapeutische Fachdisziplin, die den durch eine Sprach-, Sprech-, Stimm-, Schluck- oder Hörbeeinträchtigung in seiner zwischenmenschlichen Kommunikationsfähigkeit eingeschränkten Menschen zum Gegenstand hat.</p>
            <p>Die Logopädie beschäftigt sich in Theorie und Praxis mit Prävention, Beratung, Diagnostik, Therapie und Rehabilitation, Lehre und Forschung auf den Gebieten der Stimme, Stimmstörungen und Stimmtherapie; des Sprechens, Sprechstörungen und Sprechtherapie; der Sprache, Sprachstörungen und Sprachtherapie; sowie des Schluckens, Schluckstörungen und Schlucktherapie.</p>
          </div>
        </div>
      </section>

      {/* 3. STÖRUNGSBILDER */}
      <section id="stoerungen" className="py-24 px-4 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-800 mb-12 text-center">Störungsbilder</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-stone-100">
              <h3 className="text-2xl font-bold text-stone-800 mb-6">Störungen der Sprache</h3>
              <p className="text-stone-600 leading-relaxed text-lg">Hierbei handelt es sich z.B. um Sprachentwicklungsstörungen, Störungen des Lautsystems (phonologische Störung), reduzierten Wortschatz, Störung der Grammatikentwicklung (Dysgrammatismus), Aphasie nach Schlaganfall, Hirnblutungen, Schädel- Hirn- Traumen, Tumore, Hirnoperationen, degenerative Erkrankungen (z.B. Demenz).</p>
            </div>
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-stone-100">
              <h3 className="text-2xl font-bold text-stone-800 mb-6">Störungen des Sprechens</h3>
              <p className="text-stone-600 leading-relaxed text-lg">Sprechstörungen im Kindesalter treten häufig im Rahmen von Entwicklungsstörungen und Behinderungen auf. Wie bei Erwachsenen handelt es sich um zentral oder peripher bedingte Störungen der Sprechorgane. Es finden sich Störungen der Aussprache (Lispeln), Dysarthrie (z.B. durch Lähmungen, Facialisparese), verbale Entwicklungsdyspraxie, Sprechapraxie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SCHULUNGEN & AKTUELLES (Zusammengefasst für sauberen Abschluss) */}
      <section id="schulungen" className="py-24 px-4 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl font-bold text-stone-800 text-center">Schulungsangebote</h2>
            <div className="bg-stone-50 p-8 rounded-[2rem] border border-stone-100 text-stone-600 leading-relaxed">
                <p className="mb-4">Stimmbildung und Sprecherziehung für Berufsprecher wie z.B. Mitarbeiter im Call-Center, Lehrer oder Fitnesstrainer bieten wir als Einzel- oder Gruppenschulungen an.</p>
                <p className="mb-4">Elternabende in Kindergärten oder Kindergruppen zu den Bereichen Sprachentwicklung und Sprachförderung oder individuell vereinbarten Themen.</p>
                <p className="mb-4">Schulungen zum Thema Schluckstörungen und Nahrungsaufnahme für Pflegepersonen in Krankenhäusern, Altenheimen und ambulanten Pflegediensten. Hier bieten wir individuelle Seminare zu verschiedenen Störungsbildern wie z.B. Schluckstörungen im Alter, bei Demenz oder progredienten Erkrankungen wie z.B. Amyotropher Lateralsklerose (ALS) an.</p>
                <p className="font-bold text-[#F08080]">Wir passen die Fortbildungsinhalte Ihren individuellen Bedürfnissen an - sprechen Sie uns an!</p>
            </div>
        </div>
      </section>

      <footer className="py-10 text-center text-stone-400 text-sm">© {new Date().getFullYear()} Praxis für Logopädie Simone Brendel.</footer>
    </div>
  );
}
