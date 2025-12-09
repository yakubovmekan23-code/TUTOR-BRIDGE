import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Target, Shield, Award, Heart } from "lucide-react";
import SEO from "@/components/SEO";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We believe quality education should be accessible to everyone, regardless of location or background.",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "All tutors undergo rigorous verification and background checks to ensure a safe learning environment.",
  },
  {
    icon: Heart,
    title: "Student-Centered",
    description: "Every decision we make is guided by what's best for our students' learning outcomes.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Find Your Tutor",
    description: "Browse our verified tutors by subject, experience, price, and availability. Read reviews from other students.",
  },
  {
    step: "02",
    title: "Book a Lesson",
    description: "Choose a time that works for you. Our flexible scheduling works across all time zones.",
  },
  {
    step: "03",
    title: "Learn & Grow",
    description: "Join your lesson via video call. Get personalized instruction and track your progress over time.",
  },
];

const advantages = [
  "Flexible scheduling that fits your lifestyle",
  "Verified and experienced tutors",
  "Personalized one-on-one lessons",
  "Affordable pricing with no hidden fees",
  "Satisfaction guarantee on all lessons",
  "Progress tracking and reports",
  "24/7 customer support",
  "Secure video platform",
];

const team = [
  {
    name: "Alexandra Chen",
    role: "CEO & Co-founder",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Marcus Williams",
    role: "CTO & Co-founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Sophia Martinez",
    role: "Head of Education",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "David Park",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us - Online Tutors"
        description="Learn about our mission to make quality education accessible to every student, everywhere. We connect passionate learners with expert tutors."
      />
      <Layout>
        {/* Hero */}
        <section className="relative bg-card border-b border-border overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="container py-16 md:py-24 relative">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Empowering Students Through{" "}
                <span className="text-gradient">Personalized Learning</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                OnlineTutor was founded with a simple mission: to make quality education accessible to every student, everywhere. We connect passionate learners with expert tutors who can guide them toward their academic goals.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">How It Works</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Getting started with OnlineTutor is easy. Follow these simple steps to begin your learning journey.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {howItWorks.map((item, index) => (
                <div key={item.step} className="relative">
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-primary/30" />
                  )}
                  <div className="bg-background rounded-2xl p-8 border border-border relative">
                    <span className="text-5xl font-bold text-primary/20">{item.step}</span>
                    <h3 className="text-xl font-semibold mt-4 mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Students Choose OnlineTutor
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  We've built a platform that puts students first, with features designed to maximize learning outcomes and ensure a great experience.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {advantages.map((advantage) => (
                    <div key={advantage} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{advantage}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 gradient-hero rounded-3xl opacity-10" />
                <div className="relative bg-card rounded-3xl p-8 border border-border">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">10K+</div>
                      <div className="text-sm text-muted-foreground mt-1">Active Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">500+</div>
                      <div className="text-sm text-muted-foreground mt-1">Expert Tutors</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground mt-1">Subjects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">98%</div>
                      <div className="text-sm text-muted-foreground mt-1">Satisfaction Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Meet Our Team</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Dedicated professionals working to make online education better for everyone.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div key={member.name} className="text-center group">
                  <div className="relative mb-4 inline-block">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-2xl object-cover mx-auto group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-2 ring-primary/0 group-hover:ring-primary/50 transition-all duration-300" />
                  </div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Learning?
              </h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of students already learning with OnlineTutor. Find your perfect tutor today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/tutors">Find a Tutor</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}