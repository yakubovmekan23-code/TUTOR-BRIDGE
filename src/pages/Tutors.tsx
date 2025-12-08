import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, BookOpen, Clock, Search } from "lucide-react";
import { useState } from "react";

const tutors = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    subjects: ["Mathematics", "Physics"],
    experience: "10+ years",
    rating: 4.9,
    reviews: 156,
    price: 45,
    language: "English",
    bio: "PhD in Applied Mathematics with a passion for making complex concepts accessible to all students.",
  },
  {
    id: 2,
    name: "James Rodriguez",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    subjects: ["Programming", "Computer Science"],
    experience: "8 years",
    rating: 4.8,
    reviews: 203,
    price: 55,
    language: "English, Spanish",
    bio: "Senior software engineer teaching Python, JavaScript, and web development fundamentals.",
  },
  {
    id: 3,
    name: "Emily Chen",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    subjects: ["English", "Literature"],
    experience: "6 years",
    rating: 5.0,
    reviews: 89,
    price: 40,
    language: "English, Mandarin",
    bio: "Cambridge-certified English teacher specializing in academic writing and exam preparation.",
  },
  {
    id: 4,
    name: "Dr. Michael Brown",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    subjects: ["Chemistry", "Biology"],
    experience: "15 years",
    rating: 4.9,
    reviews: 312,
    price: 50,
    language: "English",
    bio: "Former university professor bringing advanced science concepts to life for high school and college students.",
  },
  {
    id: 5,
    name: "Lisa Park",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    subjects: ["Music", "Piano"],
    experience: "12 years",
    rating: 4.7,
    reviews: 145,
    price: 35,
    language: "English, Korean",
    bio: "Julliard-trained pianist offering lessons from beginner to advanced levels.",
  },
  {
    id: 6,
    name: "David Thompson",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    subjects: ["Economics", "Business"],
    experience: "7 years",
    rating: 4.8,
    reviews: 98,
    price: 48,
    language: "English",
    bio: "MBA holder with real-world business experience, making economics practical and engaging.",
  },
];

const subjects = ["All Subjects", "Mathematics", "Physics", "Programming", "English", "Chemistry", "Music", "Economics"];
const experienceLevels = ["Any Experience", "1-3 years", "4-7 years", "8+ years"];
const priceRanges = ["Any Price", "$20-35/hr", "$36-50/hr", "$51+/hr"];

export default function Tutors() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");

  const filteredTutors = tutors.filter((tutor) => {
    const matchesSearch = tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutor.subjects.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesSubject = selectedSubject === "All Subjects" || 
      tutor.subjects.includes(selectedSubject);
    return matchesSearch && matchesSubject;
  });

  return (
    <Layout>
      {/* Header */}
      <section className="bg-card border-b border-border">
        <div className="container py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Your Perfect Tutor</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Browse our network of verified tutors and find the right match for your learning goals.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or subject..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((subject) => (
                  <SelectItem key={subject} value={subject}>
                    {subject}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Experience" />
              </SelectTrigger>
              <SelectContent>
                {experienceLevels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Tutor Grid */}
      <section className="py-12">
        <div className="container">
          <p className="text-sm text-muted-foreground mb-6">
            Showing {filteredTutors.length} tutors
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTutors.map((tutor) => (
              <div
                key={tutor.id}
                className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={tutor.photo}
                    alt={tutor.name}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {tutor.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">{tutor.rating}</span>
                      <span className="text-sm text-muted-foreground">({tutor.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {tutor.bio}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {tutor.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary-light text-primary"
                    >
                      {subject}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {tutor.experience}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    {tutor.language}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-2xl font-bold text-primary">${tutor.price}</span>
                    <span className="text-sm text-muted-foreground">/hour</span>
                  </div>
                  <Button variant="accent">Book Lesson</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
