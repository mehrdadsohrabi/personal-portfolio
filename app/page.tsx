"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Github, Linkedin, BookOpen, GraduationCap, Download, MapPin, Calendar } from "lucide-react"

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("about")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dr. Mehrdad Sohrabi</h1>
              <p className="text-lg text-muted-foreground">Researcher in Optimization at the University of Waterloo</p>
            </div>
            <nav className="flex gap-2">
              <Button
                variant={activeSection === "about" ? "default" : "ghost"}
                onClick={() => setActiveSection("about")}
              >
                About
              </Button>
              <Button variant={activeSection === "cv" ? "default" : "ghost"} onClick={() => setActiveSection("cv")}>
                CV
              </Button>
              <Button
                variant={activeSection === "courses" ? "default" : "ghost"}
                onClick={() => setActiveSection("courses")}
              >
                Courses
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Advancing the Frontiers of Computational Theory
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              I explore the fundamental limits of computation, focusing on complexity theory, algorithmic game theory,
              and quantum computing. My research bridges theoretical insights with practical applications in
              cryptography and optimization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => setActiveSection("about")}>
                <BookOpen className="mr-2 h-4 w-4" />
                Learn More
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {activeSection === "about" && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">About Me</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Background</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I am a theoretical computer scientist with a passion for understanding the fundamental limits of
                    computation. My research spans complexity theory, algorithmic game theory, and quantum computing,
                    with applications in cryptography and optimization.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I received my PhD from MIT in 2018 and have been a faculty member at University Research Institute
                    since 2020. I am particularly interested in bridging the gap between theoretical insights and
                    practical applications.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Research Interests</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-foreground">Complexity Theory</h4>
                      <p className="text-sm text-muted-foreground">Circuit complexity, proof complexity, P vs NP</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Algorithmic Game Theory</h4>
                      <p className="text-sm text-muted-foreground">
                        Mechanism design, auction theory, equilibrium computation
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Quantum Computing</h4>
                      <p className="text-sm text-muted-foreground">
                        Quantum algorithms, complexity classes, cryptography
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-primary">25+</CardTitle>
                    <CardDescription>Publications</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-primary">500+</CardTitle>
                    <CardDescription>Citations</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-primary">8</CardTitle>
                    <CardDescription>PhD Students</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === "cv" && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-foreground">Curriculum Vitae</h2>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {/* Education */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                  Education
                </h3>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">PhD in Computer Science</CardTitle>
                          <CardDescription>Massachusetts Institute of Technology</CardDescription>
                        </div>
                        <Badge variant="secondary">2014-2018</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Thesis: "Lower Bounds in Circuit Complexity via Communication Complexity"
                        <br />
                        Advisor: Prof. Ryan Williams
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">MS in Computer Science</CardTitle>
                          <CardDescription>Stanford University</CardDescription>
                        </div>
                        <Badge variant="secondary">2012-2014</Badge>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">BS in Mathematics & Computer Science</CardTitle>
                          <CardDescription>University of California, Berkeley</CardDescription>
                        </div>
                        <Badge variant="secondary">2008-2012</Badge>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-primary" />
                  Experience
                </h3>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">Associate Professor</CardTitle>
                          <CardDescription>University Research Institute</CardDescription>
                        </div>
                        <Badge variant="secondary">2023-Present</Badge>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">Assistant Professor</CardTitle>
                          <CardDescription>University Research Institute</CardDescription>
                        </div>
                        <Badge variant="secondary">2020-2023</Badge>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">Postdoctoral Researcher</CardTitle>
                          <CardDescription>Princeton University</CardDescription>
                        </div>
                        <Badge variant="secondary">2018-2020</Badge>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              </div>

              {/* Selected Publications */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-primary" />
                  Selected Publications
                </h3>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        Lower Bounds for Circuit Complexity via Communication Complexity
                      </CardTitle>
                      <CardDescription>Journal of the ACM, 2024</CardDescription>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        Quantum Advantage in Approximate Optimization Problems
                      </CardTitle>
                      <CardDescription>STOC 2024</CardDescription>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        Mechanism Design for Large-Scale Computational Markets
                      </CardTitle>
                      <CardDescription>FOCS 2023</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>

              {/* Awards */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-primary" />
                  Awards & Honors
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">NSF CAREER Award</CardTitle>
                      <CardDescription>2022</CardDescription>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Best Paper Award, STOC</CardTitle>
                      <CardDescription>2024</CardDescription>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Sloan Research Fellowship</CardTitle>
                      <CardDescription>2021</CardDescription>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Outstanding PhD Thesis Award</CardTitle>
                      <CardDescription>2018</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === "courses" && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Courses</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                    Graduate Courses
                  </h3>
                  <div className="space-y-4">
                    <Card className="bg-card">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">Advanced Complexity Theory</CardTitle>
                        <CardDescription>CS 7540 • Spring 2024</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">
                          Deep dive into computational complexity, covering advanced topics in circuit complexity, proof
                          complexity, and derandomization.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs">
                            Circuit Complexity
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Proof Complexity
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Derandomization
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">Quantum Algorithms</CardTitle>
                        <CardDescription>CS 7520 • Fall 2023</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">
                          Comprehensive study of quantum computing algorithms, from Shor's algorithm to recent
                          developments in quantum machine learning.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs">
                            Quantum Algorithms
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Quantum ML
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            NISQ
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">Algorithmic Game Theory</CardTitle>
                        <CardDescription>CS 7530 • Spring 2023</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">
                          Strategic behavior in computational environments, mechanism design, and equilibrium
                          computation.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs">
                            Mechanism Design
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Auctions
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Nash Equilibria
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <BookOpen className="mr-2 h-5 w-5 text-primary" />
                    Undergraduate Courses
                  </h3>
                  <div className="space-y-4">
                    <Card className="bg-secondary/50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">Introduction to Algorithms</CardTitle>
                        <CardDescription>CS 3410 • Fall 2024</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">
                          Fundamental algorithms and data structures, with emphasis on analysis techniques and
                          problem-solving strategies.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs">
                            Sorting
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Graph Algorithms
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Dynamic Programming
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-secondary/50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">Theory of Computation</CardTitle>
                        <CardDescription>CS 3800 • Spring 2024</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">
                          Introduction to formal models of computation, computability theory, and basic complexity
                          classes.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs">
                            Automata
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Turing Machines
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            P vs NP
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-secondary/50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">Discrete Mathematics</CardTitle>
                        <CardDescription>CS 2800 • Fall 2023</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">
                          Mathematical foundations for computer science including logic, proofs, combinatorics, and
                          graph theory.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs">
                            Logic
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Combinatorics
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Graph Theory
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section - Always visible */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Contact</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8">
              I'm always interested in discussing research collaborations, speaking opportunities, or potential PhD
              positions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-4 w-4" />
                alex.chen@university.edu
              </Button>
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline" size="lg">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>Department of Computer Science</p>
              <p>University Research Institute</p>
              <p>Office: CS Building, Room 314</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">© 2024 Dr. Alex Chen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
