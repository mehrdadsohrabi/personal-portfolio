"use client"

import { useState } from "react"
import { Mic } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Github,
  Linkedin,
  BookOpen,
  GraduationCap,
  Download,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronRight,
} from "lucide-react"
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";


export default function HomePage() {
  const [activeSection, setActiveSection] = useState("about")
  const [expandedProjects, setExpandedProjects] = useState<string[]>([])

  const toggleProject = (projectId: string) => {
    setExpandedProjects((prev) =>
      prev.includes(projectId) ? prev.filter((id) => id !== projectId) : [...prev, projectId],
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground"> Mehrdad Sohrabi</h1>
              <p className="text-lg text-muted-foreground">Student at the University of Waterloo</p>
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

      {activeSection === "about" && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">About Me</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I am a fourth year student at the University of Waterloo, majoring in Combinatorics & Optimization,
                    Computer Science, and Pure Mathematics.
                    <br />
                    <br />
                    In high school, I enjoyed participating in competitive programming contests.
                    <br />
                    <br />
                    Outside of academics, I spend a lot of time at the gym (chest day is my favorite). I also love
                    hiking—if you suggest a trail, I'll always be up for it. My current bench press PR is 265 lbs. I
                    enjoy almost every sport, with the exception of climbing, American football, and baseball.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Research Interests</h2>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-foreground">Combinatorial Optimization</h4>
                      <p className="text-sm text-muted-foreground"></p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Matroid theory</h4>
                      <p className="text-sm text-muted-foreground"></p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Semidefinite Programming</h4>
                      <p className="text-sm text-muted-foreground"></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Research Projects</h2>
                <div className="space-y-4">
                  <Card className="border border-border">
                    <CardHeader
                      className="cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => toggleProject("matroid-intersection")}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">Facial Dimension Signature of Spectrahedra </CardTitle>
                          <CardDescription>
                            This project was done under supervision of professor Levent Tuncel.
                          </CardDescription>
                        </div>
                        {expandedProjects.includes("matroid-intersection") ? (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                    </CardHeader>
                    {expandedProjects.includes("matroid-intersection") && (
                      <CardContent>
                        <div className="space-y-4">
                          <p className="text-muted-foreground">
                            Given a set of nonnegative of integers <InlineMath math="I" />, what is the smallest number of convex quadratic inequalities needed to construct a convex set for which the set of
                    dimensions of its faces coincides with <InlineMath math="I" />,.
                          </p>
                          <div className="space-y-2">
                            <h4 className="font-medium">Key Contributions:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              <li>We improved the Bounds (both lower and upper)</li>
                              <li>We provided simpler constructions for spectrahedra defined via finitely many convex quadratic inequalities</li>
                              <li>We provided asymptotically tight bounds for optimal LMI representations of spectrahedra for complete signatures</li>
                              <li>we prove decidability (in the Turing machine model) and NP-hardness of determiniing the Facial dimension signature of a spectrahedra</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    )}
                  </Card>

                  <Card className="border border-border">
                    <CardHeader
                      className="cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => toggleProject("sdp-relaxations")}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">Total Dual Integrality
                          via convex optimization</CardTitle>
                          <CardDescription>
                          This project was done under supervision of professor Levent Tuncel.
                          </CardDescription>
                        </div>
                        {expandedProjects.includes("sdp-relaxations") ? (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                    </CardHeader>
                    {expandedProjects.includes("sdp-relaxations") && (
                      <CardContent>
                        <div className="space-y-4">
                          <p className="text-muted-foreground">
                            In this project, we worked on the notion of total dual integrality first introduced by M. K. Carli Silva and L. Tuncel. We also worked with Lovasz theta function.
                            
                          </p>
                          
                          
                        </div>
                      </CardContent>
                    )}
                  </Card>

                  <Card className="border border-border">
                    <CardHeader
                      className="cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => toggleProject("network-flows")}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">Shortest path configuration</CardTitle>
                          <CardDescription>
                          This project was done under supervision of professor Naomi Nishimura and Amer E Mouawad.
                          </CardDescription>
                        </div>
                        {expandedProjects.includes("network-flows") ? (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                    </CardHeader>
                    {expandedProjects.includes("network-flows") && (
                      <CardContent>
                        <div className="space-y-4">
                          <p className="text-muted-foreground">
                          Let <InlineMath math="G" /> be a planar graph, and suppose we are given two shortest <InlineMath math="s\!-\!t" /> paths, <InlineMath math="P" /> and <InlineMath math="Q" />, in <InlineMath math="G" />. A configuration is obtained by replacing a vertex of <InlineMath math="P" /> (I am being a bit sloppy with the notation here) in such a way that the resulting path is still a shortest <InlineMath math="s\!-\!t" /> path. Our objective is to determine the minimum number of configurations required to transform <InlineMath math="P" /> into <InlineMath math="Q" />.
                          </p>
                          The decidablity of this problem, i.e, whether it is possible to obtain <InlineMath math="Q" /> by a sequence of configuration applied to  <InlineMath math="P" /> can be done in polynomial time <span className="italic">(see Bonsma, 2012)</span>.

                        </div>
                        <div className="space-y-4">
                          <p className="text-muted-foreground">
                            Our main contribution, was that we solved the optimization version of shortest path reconfiguration problem in the planar graphs, if there is no universal vertex.
                          </p>
                        </div>
                      </CardContent>
                    )}
                  </Card>

                  <Card className="border border-border">
                    <CardHeader
                      className="cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => toggleProject("shortest-path")}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">Hat guessing number of Cactus graphs</CardTitle>
                          <CardDescription>
                          .
                          </CardDescription>
                        </div>
                        {expandedProjects.includes("shortest-path") ? (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                    </CardHeader>
                    {expandedProjects.includes("shortest-path") && (
                      <CardContent>
                        <div className="space-y-4">
                          <p className="text-muted-foreground">
                          Suppose there are <InlineMath math="n" /> prisoners and <InlineMath math="m" /> possible hat colors. Each prisoner is given a hat, with the color chosen arbitrarily. Some prisoners may see the hats of others, but no one can see their own. All prisoners must simultaneously guess the color of their own hat. If every prisoner guesses incorrectly, they are executed; if at least one prisoner guesses correctly, they are all set free. The central question is whether the prisoners can come up with a strategy that guarantees survival for every possible assignment of hat colors.
                                
                                </p>
                                <p className="text-muted-foreground">
                          We can model this problem problem using graphs where vertices represents prisoners and edges correspond to the pairs that can see each other's hat color. The objective is to find the maximum number of hat colors which there exists a strategy for prisoners to survive, we denote this number by <InlineMath math="HG(G)" /> where <InlineMath math="G" /> is a graph representing the problem.
                        </p>
                        <p className="text-muted-foreground">
  We proved that for any cactus graph <InlineMath math="G" />, the hat guessing number falls into one of the following cases: <br />
  1. <InlineMath math="HG(G) = 4" /> if and only if <InlineMath math="G" /> contains at least two triangles. <br />
  2. <InlineMath math="HG(G) = 3" /> if and only if <InlineMath math="G" /> contains at least two cycles, or a cycle of length 4 or divisible by 3, and fewer than two triangles. <br />
  3. <InlineMath math="HG(G) = 2" /> if and only if <InlineMath math="G" /> is a pseudotree with at least one edge and no cycle of length 4 or divisible by 3. 
  You can take a look at our paper
  <a
            href="https://arxiv.org/pdf/2312.00928"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            The Hat Guessing Number of Cactus Graphs and Cycles (arXiv:2312.00928)
          </a>
</p>

                        </div>.
                        
                       
                      </CardContent>
                    )}
                  </Card>
                </div>
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
        
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Education */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
            <GraduationCap className="mr-2 h-5 w-5 text-primary" />
            Education
          </h3>
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">University of Waterloo</CardTitle>
                  <CardDescription>
                    Bachelor of Combinatorics & Optimization<br />
                    Bachelor of Computer Science<br />
                    Bachelor of Pure Mathematics
                  </CardDescription>
                </div>
                <Badge variant="secondary">2022–2026</Badge>
              </div>
            </CardHeader>
          </Card>
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
                    <CardTitle className="text-lg">Undergraduate Research Assistant</CardTitle>
                    <CardDescription>University of Waterloo, C&O Dept.</CardDescription>
                  </div>
                  <Badge variant="secondary">May 2025 – Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  <li>Worked on Facial Dimension signature of Spectrahedra under Prof. Levent Tuncel.</li>
                  <li>Provided asymptotically tight bounds for optimal LMI representations of spectrahedra for complete signatures.</li>
                  <li>Proved decidability and NP-hardness of the Facial Dimension Signature problem.</li>
                  <li>Gave simpler constructions for spectrahedra defined by finitely many convex quadratic inequalities.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">Undergraduate Research Assistant</CardTitle>
                    <CardDescription>University of Waterloo, C&O Dept.</CardDescription>
                  </div>
                  <Badge variant="secondary">May 2024 – Aug 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  <li>Worked on Total Dual Integrality for semidefinite programming under Prof. Levent Tuncel.</li>
                  <li>Characterized pointed closed convex sets with integral extreme points.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">Undergraduate Research Assistant</CardTitle>
                    <CardDescription>University of Waterloo, CS Dept.</CardDescription>
                  </div>
                  <Badge variant="secondary">Jan 2024 – Aug 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  <li>Worked on shortest path configuration in planar graphs under Prof. Naomi Nishimura.</li>
                  <li>Designed polynomial-time algorithm for the problem without universal vertices.</li>
                  <li>Provided a simpler polynomial-time algorithm for decidability of the problem in planar graphs.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">IOI National Team Instructor</CardTitle>
                    <CardDescription>Iran</CardDescription>
                  </div>
                  <Badge variant="secondary">2021 – 2023</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Taught algorithms, combinatorics, and graph theory to the national team.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">Mathematics Tutor</CardTitle>
                    <CardDescription>University of Waterloo</CardDescription>
                  </div>
                  <Badge variant="secondary">Sep 2023 – May 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Tutored Math 135, 136, 127, 128, 235, and 237.</p>
              </CardContent>
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
            <Card><CardHeader><CardTitle className="text-base">APIO Gold Medal</CardTitle><CardDescription>2021</CardDescription></CardHeader></Card>
            <Card><CardHeader><CardTitle className="text-base">Iran NOI Gold Medal</CardTitle><CardDescription>2020</CardDescription></CardHeader></Card>
            <Card><CardHeader><CardTitle className="text-base">Iran NOI Bronze Medal</CardTitle><CardDescription>2019</CardDescription></CardHeader></Card>
            <Card><CardHeader><CardTitle className="text-base">Waterloo ICPC Gold Team</CardTitle><CardDescription>2023</CardDescription></CardHeader></Card>
            <Card><CardHeader><CardTitle className="text-base">Math Undergraduate Research Award</CardTitle><CardDescription>2024, 2025</CardDescription></CardHeader></Card>
            <Card><CardHeader><CardTitle className="text-base">President’s Research Award</CardTitle><CardDescription>2024, 2025</CardDescription></CardHeader></Card>
            <Card><CardHeader><CardTitle className="text-base">International Grandmaster on Codeforces</CardTitle></CardHeader></Card>
          </div>
        </div>

        {/* Publications */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
            <BookOpen className="mr-2 h-5 w-5 text-primary" />
            Publication
          </h3>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">The Hat Guessing Number of Cactus Graphs and Cycles</CardTitle>
              <CardDescription>with Jeremy Chizewer et al., Discrete Mathematics</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Talks */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
            <Mic className="mr-2 h-5 w-5 text-primary" />
            Talks
          </h3>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Facial Dimension Signatures of Spectrahedra: Representations, Bounds and Complexity</CardTitle>
                <CardDescription>University of Waterloo, C&O Dept. (Aug 2025)</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">A Notion of Total Dual Integrality for Convex, Semidefinite and Extended Formulations</CardTitle>
                <CardDescription>University of Waterloo, C&O Dept. (Aug 2024)</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Hat Guessing Number of Cactus Graphs</CardTitle>
                <CardDescription>DRP Program, University of Waterloo (Sep 2023)</CardDescription>
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
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <p className="text-muted-foreground text-lg">
        Here is a subset of the courses that I have taken at UW. I have also added some personal opinions on the courses and professors.
        </p>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-1 gap-8 justify-items-center">

          {/* Course 1 */}
          <Card className="border border-border w-full">
            <CardHeader
              className="cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => toggleProject("CS7540")}
            >
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Semidefinite Programming</CardTitle>
                  <CardDescription>CO 471 • Spring 2024</CardDescription>
                </div>
                {expandedProjects.includes("CS7540") ? (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
            </CardHeader>
            {expandedProjects.includes("CS7540") && (
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground"><strong>Course Rating:</strong> 10/10</p>
                  <p className="text-muted-foreground"><strong>Instructor:</strong> Levent Tuncel</p>
                  <p className="text-muted-foreground"><strong>My Grade:</strong> 100</p>
                  <p className="text-muted-foreground">
                    <strong>Notes:</strong> By far, the best course I have ever taken at UW. This course was exactly the sweet spot that I want to do research, which is combinatorial optimization using algebraic tecniques. You get to use a lot of interesting results from convex optimization/linear algebra to solve some combinatorial problems (such as oloring perfect graphs!) 
                    The course covers quite a lot of contents, including Duality, Ellipsoid method, Interior point methods, Max cut SDP, Lovasz theta function and Lift and project methods, application to number theory, extention complexity, convex algebraic geometry (You will prove Nullstellensatz type theorems using SDP!!!) and SCRM. 

                    Levent is a phenomenal professor, the most knowledgable person I have ever seen in my life. The course has 5 super difficult assignment, but they are very interesting. Also he is an extremely fair marker and cares about your learning. The course is super fast paced and you will be another person after taking this course. 
                  </p>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Course 2 */}
          <Card className="border border-border w-full">
            <CardHeader
              className="cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => toggleProject("CS7520")}
            >
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Combinatorial Optimization</CardTitle>
                  <CardDescription>CO 450 • Fall 2024</CardDescription>
                </div>
                {expandedProjects.includes("CS7520") ? (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
            </CardHeader>
            {expandedProjects.includes("CS7520") && (
              <CardContent>
                <div className="space-y-4">
                  
                  <p className="text-muted-foreground"><strong>Course Rating:</strong> 10/10</p>
                  <p className="text-muted-foreground"><strong>Instructor:</strong> Chaitanya Swamy</p>
                  <p className="text-muted-foreground"><strong>My Grade:</strong> 100</p>
                  <p className="text-muted-foreground">
                    <strong>Notes:</strong> Another must take course in C&O department. I have a background in competitive programming so I thought I know matching and Network flows. But Levent suggested me to take this course and I am super glad that I listened to him. About half of the course is about matroids, which initially, I thought they are boring and just a formalization of greedy algorithms. But GOD I was wrong. 
                    Even if the only thing I took away from this course was matroid intersection, I would still rate it 10/10. You will Also see how polyhedral optimization plays a crucial role in combinatorial optimization. Swamy is an excellent instructor. Assignments tend to be so long, since it is hard to formally write down algorithms and graph related problems, you have to define thousands of sets and mapping between them :(, but there are always questions which challenges your mind. Also there are a lot of bonuses which you can work on (There was an entire bonus assignment too). Take this course when you have a lighter work load and work on every single bonus problem cause they worth every minute of your time.
                    The only part that I think it could have been better, was the proof of mimimum weight maximum mathcing algorithm. I think instead of the given primal dual algorithm (which is horrifying), it would have been better if we have proved that the matching polytope is integral, using T_joins and T-cuts (Amzing proof btw)!
                  </p>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Course 3 */}
          <Card className="border border-border w-full">
            <CardHeader
              className="cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => toggleProject("CS7530")}
            >
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Introduction to Optimization (Advance)</CardTitle>
                  <CardDescription>CO 255 • Fall 2023</CardDescription>
                </div>
                {expandedProjects.includes("CS7530") ? (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
            </CardHeader>
            {expandedProjects.includes("CS7530") && (
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground"><strong>Course Rating:</strong> 10/10</p>
                  <p className="text-muted-foreground"><strong>Instructor:</strong> Levent Tuncel</p>
                  <p className="text-muted-foreground"><strong>My Grade:</strong> 98</p>
                  <p className="text-muted-foreground">
                    <strong>Notes:</strong> A wise man once said, It's always a good idea to take Levent's courses. When Levent proved min cut/ max flow using duality and TU matrices. Another memorable part of this course was learning that we can solve the Linear programming relaxation of TSP with subtour elimination constraint (which are exponentionally many) using ellipsoid method and network flows in Polynomial time.
                    As I said in the comments of CO 471, Levent is the best instructor and the most knowledgable person I know. This course helped me to do a URA with him the summer after I took this course (and another one a year after).
                                      
                                      </p>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Course 4 */}
          <Card className="border border-border w-full">
            <CardHeader
              className="cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => toggleProject("PMATH348")}
            >
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Fields and Galois Theory</CardTitle>
                  <CardDescription>PMATH 348 • Winter 2025</CardDescription>
                </div>
                {expandedProjects.includes("PMATH348") ? (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
            </CardHeader>
            {expandedProjects.includes("PMATH348") && (
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground"><strong>Course Rating:</strong> 8.5/10</p>
                  <p className="text-muted-foreground"><strong>Instructor:</strong>  Yu-Ru Liu</p>
                  <p className="text-muted-foreground"><strong>My Grade:</strong> 100</p>
                  <p className="text-muted-foreground">
                    <strong>Notes:</strong>  An amazing course. After Pmath 347 (groups and rings), I thought algebra is not interesting. But this course, changed my mind. It's interesting that you start with a question which you can ask a fifth grader, and slowly build up your way to a super abstract field, and connecting the pieces and the end to solve the problem. It bothers me that he was already that smart around 20, while I’m nowhere near his level. The only reason I did not give a 10 to this course, is that Yu-Ru's courses are so easy that it stops you from learning. I took this course along side of 5 other pretty hard courses, thinking it's a super easy course, so I did have enough time to learn and appreciate the materials as much as I should.
                                                         </p>
                </div>
              </CardContent>
            )}
          </Card>
          

          {/* Course 4 */}
          <Card className="border border-border w-full">
            <CardHeader
              className="cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => toggleProject("CO442")}
            >
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Graph Theory</CardTitle>
                  <CardDescription>CO 442 • Fall 2023</CardDescription>
                </div>
                {expandedProjects.includes("CO442") ? (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
            </CardHeader>
            {expandedProjects.includes("CO442") && (
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground"><strong>Course Rating:</strong> 8/10</p>
                  <p className="text-muted-foreground"><strong>Instructor:</strong>  Peter Nelson</p>
                  <p className="text-muted-foreground"><strong>My Grade:</strong> 93</p>
                  <p className="text-muted-foreground">
                    <strong>Notes:</strong> A very interesting course. You will learn extremal graph theory, Ramsey theory and probabilistic methods. Coloring and NWZ flows. I think I was a bit young when I took this course (I was in 2A) so If I go back I will probably wait for at least another year, not because of background reasons, but because of my writing style problems. I also did not quite enjoy Peter's style, even though he is an excellent lecturer. My favorite parts of the course wer NWZ flows and probabilistic methods, it reminded me a lot of the simple and interesting tricks we use to do in competitive programmings (Although you need a lot more knowledge). Extremal graph theory was really nice and amazing, but since I care more on the complexity side, it's a bit far from my research interest.                                    
                                      </p>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Course 4 */}
          <Card className="border border-border w-full">
            <CardHeader
              className="cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => toggleProject("CS245")}
            >
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Logic and computation (Enriched)</CardTitle>
                  <CardDescription>CS 245E • Fall 2024</CardDescription>
                </div>
                {expandedProjects.includes("CS245") ? (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
            </CardHeader>
            {expandedProjects.includes("CS245") && (
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground"><strong>Course Rating:</strong> 7.5/10</p>
                  <p className="text-muted-foreground"><strong>Instructor:</strong>  Shai Ben David</p>
                  <p className="text-muted-foreground"><strong>My Grade:</strong> 100</p>
                  <p className="text-muted-foreground">
                    <strong>Notes:</strong>  I heard a lot of hate on CS 245 and CS 245E. But I really enjoyed the course and it changed my view (I think this happens to everyone after you learn about Godel's incompleteness). The course was pretty slow, but I really loved what I learnt in this class.
                                                          </p>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Course 4 */}
          <Card className="border border-border w-full">
            <CardHeader
              className="cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => toggleProject("CO463")}
            >
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Convex Optimization and analysis</CardTitle>
                  <CardDescription>CO 463 • Winter 2024</CardDescription>
                </div>
                {expandedProjects.includes("CO463") ? (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
            </CardHeader>
            {expandedProjects.includes("CO463") && (
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground"><strong>Course Rating:</strong> 7/10</p>
                  <p className="text-muted-foreground"><strong>Instructor:</strong>  Steve Vavasis</p>
                  <p className="text-muted-foreground"><strong>My Grade:</strong> 100</p>
                  <p className="text-muted-foreground">
                    <strong>Notes:</strong>  It was a solid intorudction to convex analysis, but I expected more from this course, having taken CO 255 and CO 442 before.
                    It helped me improve my analysis. Vavasis is a pretty good lecturer, but he proves every single detail which caused the course to move on pretty slow. I prefer Levent's method which he uses slides and also skip the easy parts and mention the important material.
                                                                              </p>
                </div>
              </CardContent>
            )}
          </Card>
            
          {/* Course 4 */}
          <Card className="border border-border w-full">
            <CardHeader
              className="cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => toggleProject("CS365")}
            >
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Computational Complexity (Advanced?)</CardTitle>
                  <CardDescription>CS 365 • Winter 2025</CardDescription>
                </div>
                {expandedProjects.includes("CS365") ? (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
            </CardHeader>
            {expandedProjects.includes("CS365") && (
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground"><strong>Course Rating:</strong> 7.5/10</p>
                  <p className="text-muted-foreground"><strong>Instructor:</strong>  Eric Blais</p>
                  <p className="text-muted-foreground"><strong>My Grade:</strong> 98</p>
                  <p className="text-muted-foreground">
                    <strong>Notes:</strong>  A solid introduction to complexity, definitely more breadth than depth. I like Eric Blais teaching style, which is asking a lot of questions in the lecture and make students to think in groups. But he does this SO MANY TIMES which makes the course to be slow. We touched a lot of things but we did not go in depth on any of the materials which is sad for an advance version. But I can't deny that I learnt so much in course.
                      You will learn about Turing machines, what they can do and what they can't. Then It will move on to time complexity classes Like P, NP, co-NP, EXP, Polynomial hierarchy etc. After that, we discussed Probabilistic methods and classes like BPP. Then we moved to circuit complexity which was super interesting. Honestly I am no expert in Complexity but I believe if humanity one day solves P vs NP, It will be using circuit complexity. At the end, we did space complexity as well.                                                                                                </p>
                </div>
              </CardContent>
            )}
          </Card>


          {/* Course 4 */}
          <Card className="border border-border w-full">
            <CardHeader
              className="cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => toggleProject("PMATH351")}
            >
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Real Analysis</CardTitle>
                  <CardDescription>PMATH 351 • Winter 2024</CardDescription>
                </div>
                {expandedProjects.includes("PMATH351") ? (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
            </CardHeader>
            {expandedProjects.includes("PMATH351") && (
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground"><strong>Course Rating:</strong> 7/10</p>
                  <p className="text-muted-foreground"><strong>Instructor:</strong>  Alexadru Nica</p>
                  <p className="text-muted-foreground"><strong>My Grade:</strong> 100</p>
                  <p className="text-muted-foreground">
                    <strong>Notes:</strong>  A nice course which I think it's neccessary if you want to do research in math (including TCS). Andu was pretty slow though, I don't want to brag but he mentioned a problem at the beginning of the lecture, which you can solve it in your head in couple of seconds. But he went over the proof for the whole lecture. Maybe this was due to the fact that we learnt a bit topology in 247 and the first half of the course, was reviewing. The assignments were pretty boring too. But the final was super interesting. I think the problems that I solved in the final made me giving this high score to the curse, otherwise it deserved less.
                                                                                                  </p>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Course 4 */}
          <Card className="border border-border w-full">
            <CardHeader
              className="cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => toggleProject("PMATH450")}
            >
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Measure Theory</CardTitle>
                  <CardDescription>PMATH 450 • Spring 2025</CardDescription>
                </div>
                {expandedProjects.includes("PMATH450") ? (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
            </CardHeader>
            {expandedProjects.includes("PMATH450") && (
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground"><strong>Course Rating:</strong> 6.5/10</p>
                  <p className="text-muted-foreground"><strong>Instructor:</strong>  Blake Madill</p>
                  <p className="text-muted-foreground"><strong>My Grade:</strong> 100</p>
                  <p className="text-muted-foreground">
                    <strong>Notes:</strong> 
                    It was a meh course, I did learn measure theory but I was not amazed by it. I expected a 4xx pure math course to be more interesting.                                                                                                  </p>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Course 4 */}
          <Card className="border border-border w-full">
            <CardHeader
              className="cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => toggleProject("CO444")}
            >
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Algebraic Graph theory</CardTitle>
                  <CardDescription>CO 444 • Winter 2025</CardDescription>
                </div>
                {expandedProjects.includes("CO444") ? (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
            </CardHeader>
            {expandedProjects.includes("CO444") && (
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground"><strong>Course Rating:</strong> 2/10</p>
                  <p className="text-muted-foreground"><strong>Instructor:</strong>  Jane Gao</p>
                  <p className="text-muted-foreground"><strong>My Grade:</strong> 99</p>
                  <p className="text-muted-foreground">
                    <strong>Notes:</strong> 
                   I wasted my money on this course. Me and my friend were super excited about this course, since we both loved graph theory and linear algebra. I don't think I learnt a single thing in this course that I did not know before. Assignments were super easy/not interesting and the grading scheme was in a way that everyone will get a high mark, without needing to do much. Projects were horrible. I did like Jane. She is a pretty kind person. But I did not enjoy her teaching Maybe I am biased cause I have taken Levent/Swamy courses before.
                                        </p>
                </div>
              </CardContent>
            )}
          </Card>


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
              I'm always interested in discussing research collaborations, speaking opportunities, or any other non-academic related topics!
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-4 w-4" />
                msohrabi@uwaterloo.ca
              </Button>
              
            </div>
            <div className="text-sm text-muted-foreground">
              <p>Department of Combinatorics and Optimization</p>
              <p>University of Waterloo</p>
              <p>Office: MC, Room 5121</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  )
}
