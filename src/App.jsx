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

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-12">
        <Card className="bg-gray-900 border border-gray-700">
          <CardContent className="p-6">
            <Users className="text-blue-400 w-8 h-8 mb-2" />
            <h3 className="text-xl font-semibold">Who We Are</h3>
            <p className="text-sm text-gray-400 mt-2">
              A youth-driven chess club focused on growth, mentorship, and national competitiveness, with certified coaches and community engagement.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gray-900 border border-gray-700">
          <CardContent className="p-6">
            <Trophy className="text-yellow-400 w-8 h-8 mb-2" />
            <h3 className="text-xl font-semibold">Tournaments</h3>
            <p className="text-sm text-gray-400 mt-2">
              Active participation in major events like the SA Open, JMCA, Botswana Series, and Cape Town Masters.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gray-900 border border-gray-700">
          <CardContent className="p-6">
            <BadgeCheck className="text-green-400 w-8 h-8 mb-2" />
            <h3 className="text-xl font-semibold">Mission</h3>
            <p className="text-sm text-gray-400 mt-2">
              To build a generation of strategic thinkers and resilient leaders through competitive and educational chess programs.
            </p>
          </CardContent>
        </Card>
      </section>

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

