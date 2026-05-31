import React from 'react';
import { ArrowRight, Phone, Mail, MapPin, Star } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 font-sans selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <nav className="border-b-2 border-neutral-900 px-6 py-4 flex justify-between items-center bg-white sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border-2 border-neutral-900 bg-orange-500 flex items-center justify-center">
            <div className="w-3 h-3 bg-neutral-900 rounded-full" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight uppercase leading-none mt-1">
            Logopädie<br/>
            <span className="text-sm font-medium tracking-widest text-neutral-500">Praxisteam</span>
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-bold tracking-widest uppercase">
          <a href="#ansatz" className="hover:text-orange-500 transition-colors">Unser Ansatz</a>
          <a href="#team" className="hover:text-orange-500 transition-colors">Team</a>
          <a href="#leistungen" className="hover:text-orange-500 transition-colors">Leistungen</a>
        </div>
        <a href="#kontakt" className="bg-orange-500 text-neutral-900 border-2 border-neutral-900 px-6 py-3 font-bold uppercase tracking-widest text-sm hover:bg-neutral-900 hover:text-white transition-colors hidden sm:block">
          Termin sichern
        </a>
      </nav>

      <main>
        {/* 1. Hook (Hero section) */}
        <section className="border-b-2 border-neutral-900 relative bg-white">
           <div className="grid md:grid-cols-2">
             <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center border-b-2 md:border-b-0 md:border-r-2 border-neutral-900">
               <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-6 block font-display">Gemeinsam zur starken Kommunikation</span>
               <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] mb-8 uppercase">
                 Ihre Stimme.<br />
                 Unser Fokus.
               </h1>
               <p className="text-lg md:text-xl text-neutral-600 font-medium mb-12 max-w-md leading-relaxed">
                 Spezialisierte logopädische Diagnostik und Therapie für Kinder und Erwachsene in einer modernen Wohlfühlatmosphäre.
               </p>
               <div className="flex flex-wrap gap-4">
                 <a href="#kontakt" className="bg-neutral-900 text-white px-8 py-4 font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-orange-500 hover:text-neutral-900 transition-colors">
                   Jetzt starten <ArrowRight className="w-5 h-5" />
                 </a>
               </div>
             </div>
             
             {/* Hero Image inspired by the "Daylight" full-page split */}
             <div className="relative min-h-[400px] md:min-h-full bg-neutral-100 overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80" 
                 alt="Logopädin arbeitet mit Patient" 
                 className="w-full h-full object-cover grayscale opacity-90 scale-105"
               />
               <div className="absolute inset-0 bg-neutral-900/10 mix-blend-multiply"></div>
               {/* Decorative Orange Element from daylight reference */}
               <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-48 h-64 bg-orange-500 border-2 border-neutral-900 hidden md:block"></div>
               
               {/* Small floating stat box */}
               <div className="absolute bottom-8 right-8 bg-white border-2 border-neutral-900 p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                 <p className="font-display font-bold text-3xl uppercase">100%</p>
                 <p className="text-xs uppercase tracking-widest font-bold text-neutral-500">Kassen-<br/>zulassung</p>
               </div>
             </div>
           </div>
        </section>

        {/* 2. Promise of Value */}
        <section id="ansatz" className="px-8 md:px-16 lg:px-24 py-24 border-b-2 border-neutral-900 bg-neutral-950 text-white">
          <div className="max-w-4xl">
            <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-6 block font-display">Unser Wertversprechen</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
              Wir befähigen Sie, sich selbstbewusst und klar auszudrücken. Modernste Therapiemethoden, individuell angepasst an Ihre persönlichen Ziele.
            </h2>
          </div>
        </section>

        {/* 3. Details & Team Overview */}
        <section id="team" className="border-b-2 border-neutral-900 bg-white">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-16 lg:p-24 flex flex-col border-b-2 lg:border-b-0 lg:border-r-2 border-neutral-900">
               <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block font-display">Leistungen & Kompetenz</span>
               <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-12 uppercase">Unser<br/>Fachbereich</h2>
               
               <p className="text-lg text-neutral-600 mb-12 leading-relaxed">
                 Unser Team vereint Expertinnen aus den wichtigsten Bereichen der Logopädie, um Ihnen eine optimale, evidenzbasierte Behandlung zu garantieren.
               </p>
               
               {/* 3 Concrete Points */}
               <ul className="space-y-8 mt-auto">
                 <li className="flex items-start gap-4">
                   <div className="w-8 h-8 rounded-full border-2 border-neutral-900 flex items-center justify-center shrink-0 mt-1">
                     <div className="w-2 h-2 bg-orange-500 rounded-full" />
                   </div>
                   <div>
                     <strong className="font-display uppercase text-neutral-900 block text-xl mb-2">Kinderlogopädie</strong>
                     <p className="text-neutral-600">Spielerische Förderung bei Artikulations-, Sprach-, Sprech- und Schluckstörungen.</p>
                   </div>
                 </li>
                 <li className="flex items-start gap-4">
                   <div className="w-8 h-8 rounded-full border-2 border-neutral-900 flex items-center justify-center shrink-0 mt-1">
                     <div className="w-2 h-2 bg-orange-500 rounded-full" />
                   </div>
                   <div>
                     <strong className="font-display uppercase text-neutral-900 block text-xl mb-2">Neurologische Reha</strong>
                     <p className="text-neutral-600">Gezielte Erwachsenentherapie bei Aphasie, Dysarthrie oder Facialisparesen nach Schlaganfall.</p>
                   </div>
                 </li>
                 <li className="flex items-start gap-4">
                   <div className="w-8 h-8 rounded-full border-2 border-neutral-900 flex items-center justify-center shrink-0 mt-1">
                     <div className="w-2 h-2 bg-orange-500 rounded-full" />
                   </div>
                   <div>
                     <strong className="font-display uppercase text-neutral-900 block text-xl mb-2">Stimmtherapie</strong>
                     <p className="text-neutral-600">Prävention und Behandlung von organischen und funktionellen Stimmstörungen für Sprechberufe.</p>
                   </div>
                 </li>
               </ul>
            </div>
            
            {/* Team Grid explicitly answering the "direkten Überblick über das Team" prompt */}
            <div className="grid grid-cols-2 grid-rows-2">
              <div className="border-r-2 border-b-2 border-neutral-900 relative group bg-neutral-100 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80" alt="Anna, Kinderlogopädie" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"/>
                <div className="absolute bottom-0 left-0 bg-white border-t-2 border-r-2 border-neutral-900 p-4 min-w-[60%]">
                  <span className="font-display font-bold uppercase text-lg block">Anna</span>
                  <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">Leitung / Kinder</span>
                </div>
              </div>
              <div className="border-b-2 border-neutral-900 relative group bg-neutral-100 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1594824436998-058b831b4026?auto=format&fit=crop&w=600&q=80" alt="Petra, Neurologie" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"/>
                <div className="absolute bottom-0 left-0 bg-white border-t-2 border-r-2 border-neutral-900 p-4 min-w-[60%]">
                  <span className="font-display font-bold uppercase text-lg block">Petra</span>
                  <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">Neurologie</span>
                </div>
              </div>
              <div className="border-r-2 border-neutral-900 relative group bg-neutral-100 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" alt="Sarah, Stimme" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"/>
                <div className="absolute bottom-0 left-0 bg-white border-t-2 border-r-2 border-neutral-900 p-4 min-w-[60%]">
                  <span className="font-display font-bold uppercase text-lg block">Sarah</span>
                  <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">Stimme</span>
                </div>
              </div>
              {/* Stat block in team grid */}
              <div className="relative bg-orange-500 flex flex-col items-center justify-center text-center p-8 text-neutral-900 border-neutral-900 transition-colors">
                <div className="border-2 border-neutral-900 w-full h-full flex flex-col items-center justify-center bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default">
                  <span className="font-display text-5xl lg:text-6xl font-bold mb-2">3.5k</span>
                  <span className="uppercase tracking-widest text-xs font-bold text-neutral-500">Erfolgreiche<br/>Therapien</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Proof (Process + Logos/References styled like "Handwerk24" dark section) */}
        <section className="bg-neutral-950 text-white border-b-2 border-neutral-900 flex flex-col lg:flex-row">
          <div className="flex-1 px-8 md:px-16 py-16 flex flex-col md:flex-row gap-12 lg:gap-16 items-start md:items-center">
            
            <div className="space-y-4 flex-1">
              <div className="w-12 h-1 bg-orange-500"></div>
              <div className="flex flex-col gap-2">
                <span className="font-display text-6xl md:text-7xl font-bold text-neutral-800 tracking-tighter">01.</span>
                <h3 className="font-display text-xl uppercase tracking-wider">Unverbindlich<br/>Kontaktieren</h3>
              </div>
            </div>
            
            <div className="space-y-4 flex-1">
              <div className="w-12 h-1 bg-orange-500"></div>
              <div className="flex flex-col gap-2">
                <span className="font-display text-6xl md:text-7xl font-bold text-neutral-800 tracking-tighter">02.</span>
                <h3 className="font-display text-xl uppercase tracking-wider">Ausführliche<br/>Diagnostik</h3>
              </div>
            </div>

            <div className="space-y-4 flex-1">
              <div className="w-12 h-1 bg-orange-500"></div>
              <div className="flex flex-col gap-2">
                <span className="font-display text-6xl md:text-7xl font-bold text-neutral-800 tracking-tighter">03.</span>
                <h3 className="font-display text-xl uppercase tracking-wider">Start der<br/>Therapie</h3>
              </div>
            </div>

          </div>
          
          <div className="bg-orange-500 text-neutral-950 p-12 md:p-20 flex flex-col justify-center items-center text-center shrink-0 w-full lg:w-[400px] border-t-2 lg:border-t-0 lg:border-l-2 border-neutral-900">
            <span className="font-display text-7xl md:text-8xl font-bold tracking-tighter mb-4">15+</span>
            <span className="uppercase tracking-widest font-bold">Jahre Erfahrung</span>
          </div>
        </section>

        {/* 4b. Social Proof / Patient Reviews */}
        <section className="py-24 px-8 md:px-16 lg:px-24 border-b-2 border-neutral-900 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl font-bold uppercase mb-16 text-center">Was unsere Patienten sagen</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Familie Müller", role: "Kinderlogopädie", quote: "Das Team begegnet Kindern auf Augenhöhe. Die spielerische Herangehensweise hat unserem Sohn sehr geholfen, seine Aussprache zu verbessern." },
                { name: "Thomas K.", role: "Stimmtherapie", quote: "Als Lehrer ist meine Stimme mein wichtigstes Werkzeug. Die gezielte Stimmtherapie hat mich vor einer dauerhaften Überlastung bewahrt." },
                { name: "Marion S.", role: "Neurologische Reha", quote: "Nach meinem Schlaganfall fühlte ich mich hier sofort verstanden. Die strukturierte Therapieplanung gab mir Sicherheit und schnelle Fortschritte." }
              ].map((review, i) => (
                <div key={i} className="flex flex-col gap-6 p-8 border-2 border-neutral-900 bg-[#fafafa] relative hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex gap-1 text-orange-500">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <p className="text-neutral-700 italic flex-grow">"{review.quote}"</p>
                  <div className="flex items-center gap-4 mt-4 pt-6 border-t-2 border-neutral-200">
                    <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center text-white font-display font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <strong className="block font-display uppercase tracking-wider">{review.name}</strong>
                      <span className="text-xs text-orange-500 font-bold uppercase tracking-widest">{review.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Call-to-Action */}
        <section id="kontakt" className="px-8 md:px-16 lg:px-24 py-32 bg-orange-500 text-neutral-900 flex flex-col items-center text-center">
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 max-w-4xl leading-none">
            Bereit für den<br/>ersten Schritt?
          </h2>
          <p className="text-xl font-medium mb-12 max-w-2xl text-neutral-800">
            Termine nach Vereinbarung. Rufen Sie uns an oder schreiben Sie uns eine E-Mail, wir kümmern uns zeitnah um Ihr Anliegen.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <a href="tel:+4912345678" className="bg-neutral-900 text-white border-2 border-neutral-900 px-10 py-5 font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white hover:text-neutral-900 transition-colors w-full sm:w-auto">
              <Phone className="w-5 h-5" /> 0123 / 456 78 90
            </a>
            <a href="mailto:info@logopaedie.de" className="bg-white text-neutral-900 border-2 border-neutral-900 px-10 py-5 font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-neutral-900 hover:text-white transition-colors shadow-[8px_8px_0px_0px_rgba(23,23,23,1)] hover:shadow-[0px_0px_0px_0px_rgba(23,23,23,1)] hover:translate-x-2 hover:translate-y-2 w-full sm:w-auto">
              <Mail className="w-5 h-5" /> Nachricht senden
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-neutral-950 text-neutral-400 py-16 px-8 md:px-16 lg:px-24 border-t-8 border-neutral-900">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <span className="font-display font-bold text-white text-2xl tracking-tight uppercase mb-6 block">Logopädie<br/>Praxis Team</span>
            <p className="text-sm leading-relaxed max-w-xs">
              Die Praxis für moderne Logopädie, Sprachtherapie und erfolgreiche Kommunikation.
            </p>
          </div>
          <div>
            <strong className="text-white font-display uppercase tracking-widest text-sm mb-6 block">Standort & Kontakt</strong>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-4 hover:text-orange-500 transition-colors cursor-pointer">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span>Gesundheitsallee 12<br/>12345 Musterstadt</span>
              </li>
              <li className="flex items-center gap-4 hover:text-orange-500 transition-colors cursor-pointer">
                <Phone className="w-5 h-5 shrink-0" />
                <span>0123 / 456 78 90</span>
              </li>
              <li className="flex items-center gap-4 hover:text-orange-500 transition-colors cursor-pointer">
                <Mail className="w-5 h-5 shrink-0" />
                <span>info@logopaedie.de</span>
              </li>
            </ul>
          </div>
          <div>
            <strong className="text-white font-display uppercase tracking-widest text-sm mb-6 block">Sprechzeiten</strong>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-neutral-800 pb-3">
                <span className="uppercase tracking-wider">Mo - Do</span> 
                <span className="text-white font-bold">08:00 - 18:00</span>
              </li>
              <li className="flex justify-between border-b border-neutral-800 pb-3 pt-1">
                <span className="uppercase tracking-wider">Freitag</span> 
                <span className="text-white font-bold">08:00 - 14:00</span>
              </li>
              <li className="flex justify-between pt-1">
                <span className="uppercase tracking-wider">Termine</span> 
                <span className="text-orange-500 font-bold uppercase text-xs">nach Vereinbarung</span>
              </li>
            </ul>
          </div>
          <div>
            <strong className="text-white font-display uppercase tracking-widest text-sm mb-6 block">Rechtliches</strong>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-wider">
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2">Impressum <ArrowRight className="w-4 h-4"/></a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2">Datenschutz <ArrowRight className="w-4 h-4"/></a></li>
            </ul>
          </div>
        </div>
        <div className="font-display font-medium uppercase tracking-widest text-xs flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-neutral-800 text-neutral-600">
          <span>&copy; {new Date().getFullYear()} Logopädie Praxis Team.</span>
          <span>Gestaltet für bessere Kommunikation.</span>
        </div>
      </footer>
    </div>
  );
}
