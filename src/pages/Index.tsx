import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Users, Clock, Award, ArrowRight, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/hero-education.png";
import { useState, useEffect } from "react";
import SEO from "@/components/SEO";

const stats = [
  { value: "10,000+", label: "Active Students" },
  { value: "500+", label: "Expert Tutors" },
  { value: "50+", label: "Subjects" },
  { value: "4.9/5", label: "Average Rating" },
];

const features = [
  {
    icon: Users,
    title: "Expert Tutors",
    description: "Learn from verified professionals with proven teaching experience and subject expertise.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book lessons at times that work for you, from anywhere in the world.",
  },
  {
    icon: Award,
    title: "Personalized Learning",
    description: "Get customized lesson plans tailored to your learning goals and pace.",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "High School Student",
    content: "My math grades improved from C to A+ in just 3 months. The tutors here really know how to explain complex concepts!",
    rating: 5,
  },
  {
    name: "Michael Torres",
    role: "University Student",
    content: "Finding a physics tutor who matched my schedule was so easy. The platform is intuitive and the lessons are top-notch.",
    rating: 5,
  },
  {
    name: "Emily Johnson",
    role: "Parent",
    content: "Both my kids use OnlineTutor for different subjects. The progress tracking feature helps me stay involved in their learning.",
    rating: 5,
  },
];

const popularSubjects = [
  { name: "Mathematics", students: "2,500+" },
  { name: "Physics", students: "1,800+" },
  { name: "English", students: "2,200+" },
  { name: "Programming", students: "1,500+" },
];

const heroBackgrounds = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80",
  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&q=80",
];

const Index = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroBackgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SEO
        title="Online Tutors - Learn Anytime, Anywhere"
        description="Connect with expert tutors in any subject, schedule lessons that fit your life, and achieve your academic goals from the comfort of home."
      />
      <Layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background">
          {/* Background Slideshow */}
          {heroBackgrounds.map((bg, index) => (
            <div
              key={bg}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: currentBg === index ? 0.12 : 0,
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
          
          {/* Subtle decorative elements */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="container relative py-16 md:py-24 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text Content */}
              <div className="space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-up" style={{ animationDelay: '0ms' }}>
                  <Star className="h-4 w-4 fill-primary" />
                  Trusted by 10,000+ students worldwide
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-up" style={{ animationDelay: '100ms' }}>
                  Learn Anytime with{" "}
                  <span className="text-primary">Professional Online Tutors</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '200ms' }}>
                  Connect with expert tutors in any subject, schedule lessons that fit your life, and achieve your academic goals from the comfort of home.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '300ms' }}>
                  <Button variant="accent" size="xl" asChild>
                    <Link to="/tutors">
                      Find a Tutor <ArrowRight className="h-5 w-5 ml-1" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="xl" asChild>
                    <Link to="/subjects">Browse Subjects</Link>
                  </Button>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative animate-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={heroImage} 
                    alt="Students learning online with professional tutors" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              </div>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-fade-up" style={{ animationDelay: '400ms' }}>
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-6 rounded-2xl bg-card shadow-card border border-border/50 hover-lift">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose OnlineTutor?
              </h2>
              <p className="text-muted-foreground text-lg">
                We make online learning effective, accessible, and enjoyable for students of all ages.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Subjects */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Popular Subjects</h2>
                <p className="text-muted-foreground">Explore our most in-demand learning areas</p>
              </div>
              <Button variant="outline" asChild>
                <Link to="/subjects">View All Subjects <ArrowRight className="h-4 w-4 ml-1" /></Link>
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularSubjects.map((subject) => (
                <Link
                  key={subject.name}
                  to="/subjects"
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-card-hover transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {subject.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{subject.students} students</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Students Say
              </h2>
              <p className="text-muted-foreground text-lg">
                Join thousands of satisfied learners who've transformed their education with us.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className="p-8 rounded-2xl bg-background border border-border hover-lift"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="relative rounded-3xl gradient-hero p-10 md:p-16 text-center overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
              
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  Ready to Start Learning?
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-8">
                  Join our community of learners and find your perfect tutor today. Your first lesson is backed by our satisfaction guarantee.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="accent" size="lg" asChild>
                    <Link to="/tutors">Find Your Tutor</Link>
                  </Button>
                  <Button
                    size="lg"
                    className="bg-primary-foreground/10 text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/20"
                    asChild
                  >
                    <Link to="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;