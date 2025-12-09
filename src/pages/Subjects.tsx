import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Calculator, 
  Atom, 
  Languages, 
  Code, 
  FlaskConical, 
  Music, 
  PiggyBank, 
  Palette,
  BookOpen,
  Brain,
  Globe,
  Dumbbell,
  ArrowRight
} from "lucide-react";
import SEO from "@/components/SEO";

const subjects = [
  {
    id: 1,
    name: "Mathematics",
    icon: Calculator,
    description: "From basic algebra to advanced calculus, master mathematical concepts with expert guidance.",
    tutors: 85,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    id: 2,
    name: "Physics",
    icon: Atom,
    description: "Understand the fundamental laws of nature through engaging experiments and problem-solving.",
    tutors: 62,
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    id: 3,
    name: "English",
    icon: Languages,
    description: "Improve your reading, writing, and communication skills for academic and professional success.",
    tutors: 94,
    color: "bg-green-500/10 text-green-600",
  },
  {
    id: 4,
    name: "Programming",
    icon: Code,
    description: "Learn coding from scratch or advance your skills in Python, JavaScript, Java, and more.",
    tutors: 78,
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    id: 5,
    name: "Chemistry",
    icon: FlaskConical,
    description: "Explore chemical reactions, molecular structures, and laboratory techniques.",
    tutors: 45,
    color: "bg-red-500/10 text-red-600",
  },
  {
    id: 6,
    name: "Music",
    icon: Music,
    description: "Learn instruments, music theory, and composition from professional musicians.",
    tutors: 56,
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    id: 7,
    name: "Economics",
    icon: PiggyBank,
    description: "Understand economic principles, market dynamics, and financial literacy.",
    tutors: 38,
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    id: 8,
    name: "Art & Design",
    icon: Palette,
    description: "Develop your creative skills in drawing, painting, digital art, and graphic design.",
    tutors: 42,
    color: "bg-yellow-500/10 text-yellow-600",
  },
  {
    id: 9,
    name: "Literature",
    icon: BookOpen,
    description: "Dive deep into classic and contemporary literature, analysis, and creative writing.",
    tutors: 35,
    color: "bg-indigo-500/10 text-indigo-600",
  },
  {
    id: 10,
    name: "Psychology",
    icon: Brain,
    description: "Explore human behavior, cognitive processes, and mental health foundations.",
    tutors: 29,
    color: "bg-cyan-500/10 text-cyan-600",
  },
  {
    id: 11,
    name: "Geography",
    icon: Globe,
    description: "Study physical and human geography, climate science, and global cultures.",
    tutors: 24,
    color: "bg-teal-500/10 text-teal-600",
  },
  {
    id: 12,
    name: "Physical Education",
    icon: Dumbbell,
    description: "Get personalized fitness training, sports coaching, and wellness guidance.",
    tutors: 31,
    color: "bg-rose-500/10 text-rose-600",
  },
];

export default function Subjects() {
  return (
    <>
      <SEO
        title="Explore Subjects - Online Tutors"
        description="Discover our wide range of subjects including Mathematics, Physics, English, Programming, and more. Find the perfect learning path for your goals."
      />
      <Layout>
        {/* Header */}
        <section className="bg-card border-b border-border">
          <div className="container py-12 md:py-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Subjects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover our wide range of subjects and find the perfect learning path for your goals.
            </p>
          </div>
        </section>

        {/* Subject Grid */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {subjects.map((subject) => (
                <Link
                  key={subject.id}
                  to="/tutors"
                  className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-xl ${subject.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <subject.icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {subject.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {subject.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">
                      {subject.tutors} tutors available
                    </span>
                    <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-card">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Can't Find Your Subject?
              </h2>
              <p className="text-muted-foreground mb-8">
                We're constantly expanding our tutor network. Let us know what you're looking for and we'll help you find the right match.
              </p>
              <Button variant="accent" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}