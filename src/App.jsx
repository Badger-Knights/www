import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Users, Trophy, CalendarDays, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function BadgersKnightsSite() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6">
      <section className="text-center max-w-4xl mx-auto py-16">
        <motion.img
          src="/logo.png"
          alt="Badgers Knights Logo"
          className="mx-auto mb-6"
          width={160}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <h1 className="text-4xl font-bold mb-4">Badgers Knights Chess Team</h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto">
          Tactical. Resilient. Relentless. Shaping strategic leaders of tomorrow through the art of chess.
        </p>
      </section>

      {/* Team Carousel */}
      <section className="max-w-6xl mx-auto py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Meet the Knights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Chigozie Egeonu", title: "Board 1 - Tactician", img: "/players/Chigozie Egeonu.jpg" },
            { name: "Hadriel Khumalo", title: "Opening Specialist", img: "/players/Hadriel Babongile Khumalo.jpg" },
            { name: "Zakhele Kambule", title: "Midgame Strategist", img: "/players/Zakhele Kambule.jpg" },
            { name: "Ayomikun Joseph", title: "Endgame Closer", img: "/players/Ayomikun Joseph.jpg" },
            { name: "Chizitere Egeonu", title: "Youth Cadet", img: "/players/chizitere egeonu.jpg" },
            { name: "Emmanuel Okechukwu", title: "Coach & Mentor", img: "/players/Emmanuel Junior Okechukwu.jpg" }
          ].map((player) => (
            <motion.div whileHover={{ scale: 1.05 }} key={player.name} className="bg-gray-800 p-4 rounded-xl text-center shadow-md">
              <img src={player.img} alt={player.name} className="w-24 h-24 mx-auto rounded-full mb-3 object-cover" />
              <h3 className="text-lg font-semibold">{player.name}</h3>
              <p className="text-sm text-gray-400">{player.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">What People Say</h2>
        <div className="space-y-8">
          <blockquote className="italic text-gray-300">“My son’s confidence has soared thanks to Badgers Knights!” – Parent of Ayomikun</blockquote>
          <blockquote className="italic text-gray-300">“This club has taught me how to win with humility and lose with grace.” – Zakes</blockquote>
          <blockquote className="italic text-gray-300">“More than a chess club — it’s a mentorship community.” – Coach Emmanuel</blockquote>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Tournament Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <iframe className="w-full aspect-video rounded-lg" src="https://www.youtube.com/embed/Dtd40cHQQlk" title="Tournament Highlight" allowFullScreen></iframe>
          <iframe className="w-full aspect-video rounded-lg" src="https://www.youtube.com/embed/YLo6g58vUm0" title="Blitz Night" allowFullScreen></iframe>
          <iframe className="w-full aspect-video rounded-lg" src="https://www.youtube.com/embed/5q8YAUTYAyk" title="SA Open Recap" allowFullScreen></iframe>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-xl mx-auto py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <form action="https://formspree.io/f/xwkgeqna" method="POST" className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400" />
          <textarea name="message" rows="5" placeholder="Your Message" required className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400"></textarea>
          <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded font-semibold">Send Message</button>
        </form>
      </section>

      {/* Events Section */}
      <section className="text-center py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
        <p className="text-gray-400 mb-6">Track our journey and get involved in upcoming challenges and championships.</p>
        <ul className="text-sm space-y-3 text-left inline-block">
          <li><CalendarDays className="inline w-4 h-4 mr-2 text-gray-300" /> JMCA Open – 7 June 2025</li>
          <li><CalendarDays className="inline w-4 h-4 mr-2 text-gray-300" /> SA Chess Open – 28 June – 5 July 2025</li>
          <li><CalendarDays className="inline w-4 h-4 mr-2 text-gray-300" /> Botswana Cracking Series – 18–21 July 2025</li>
          <li><CalendarDays className="inline w-4 h-4 mr-2 text-gray-300" /> Cape Town Masters – Sept/Dec 2025</li>
        </ul>
      </section>

      {/* WhatsApp CTA */}
      <section className="text-center py-16">
        <h2 className="text-2xl font-bold mb-4">Support the Movement</h2>
        <p className="text-gray-400 mb-6">Partner with us in changing lives through chess. Sponsors, donors, and volunteers welcome.</p>
        <a href="https://wa.me/27686493591" target="_blank" rel="noopener noreferrer">
          <Button className="text-white bg-green-600 hover:bg-green-500 transition-all flex items-center gap-2">
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </Button>
        </a>
      </section>
    </main>
  );
}
