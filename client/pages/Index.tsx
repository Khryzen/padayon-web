import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import {
  BookOpen,
  Brain,
  BarChart3,
  FileCheck,
  ArrowRight,
  CheckCircle,
  Globe,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Star,
  Award,
  Target,
  Lightbulb,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Completely Redesigned */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-2xl"></div>

        <div className="relative container max-w-screen-xl mx-auto px-4 py-20 lg:py-32">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            {/* Badge */}
            <div className="flex justify-center">
              <Badge
                variant="secondary"
                className="text-sm px-4 py-2 rounded-full border border-primary/20"
              >
                <Zap className="h-4 w-4 mr-2" />
                AI-Powered Education Platform
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                  Transform
                </span>
                <br />
                <span className="text-foreground">Philippine K–12</span>
                <br />
                <span className="text-muted-foreground">Education</span>
              </h1>

              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Empower your school with AI-driven insights, automated DepEd
                compliance, and comprehensive MATATAG Curriculum support.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full">
                <Link to="/curriculum" className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 rounded-full"
              >
                <a
                  href="https://github.com/Khryzen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Star className="mr-2 h-5 w-5" />
                  View on GitHub
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Schools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Compliance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">40%</div>
                <div className="text-sm text-muted-foreground">Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Modern Card Design */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="mb-4">
              Platform Features
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Everything Your School Needs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tools designed specifically for Philippine K–12
              schools to excel in the MATATAG Curriculum era.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* MATATAG Curriculum */}
            <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="p-4 bg-primary/20 rounded-2xl">
                      <BookOpen className="h-8 w-8 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Core
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">
                      MATATAG Curriculum
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Complete implementation toolkit with lesson plans,
                      assessments, and progress tracking aligned with DepEd
                      standards.
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    className="group-hover:bg-primary/10 transition-colors"
                    asChild
                  >
                    <Link to="/curriculum">
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* DepEd Compliance */}
            <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-accent/5 to-accent/10">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="p-4 bg-accent/20 rounded-2xl">
                      <FileCheck className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Automated
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">
                      DepEd Compliance
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Automated generation of SF1–SF10 forms and PHIL-IRI
                      assessments. Stay compliant with zero manual effort.
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    className="group-hover:bg-accent/10 transition-colors"
                    asChild
                  >
                    <Link to="/compliance">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* AI Analytics */}
            <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="p-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl">
                      <Brain className="h-8 w-8 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      AI-Powered
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Smart Analytics</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Advanced learning analytics to identify struggling
                      students and optimize teaching strategies for better
                      outcomes.
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    className="group-hover:bg-primary/10 transition-colors"
                    asChild
                  >
                    <Link to="/analytics">
                      Discover
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Offline-First */}
            <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-muted to-accent/5">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="p-4 bg-primary/20 rounded-2xl">
                      <Globe className="h-8 w-8 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Reliable
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Offline-First</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Works seamlessly without internet. Perfect for remote
                      schools across the Philippines.
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    className="group-hover:bg-primary/10 transition-colors"
                    asChild
                  >
                    <Link to="/analytics">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Performance Tracking */}
            <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-accent/5 to-primary/5">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="p-4 bg-accent/20 rounded-2xl">
                      <TrendingUp className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Data-Driven
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">
                      Performance Tracking
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Track and improve literacy and numeracy outcomes with
                      data-driven insights.
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    className="group-hover:bg-accent/10 transition-colors"
                    asChild
                  >
                    <Link to="/analytics">
                      View Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Security */}
            <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-primary/5 to-muted">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="p-4 bg-primary/20 rounded-2xl">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Enterprise
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">
                      Secure & Reliable
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Enterprise-grade security with Go, React, and MySQL for
                      your school's sensitive data.
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    className="group-hover:bg-primary/10 transition-colors"
                    asChild
                  >
                    <Link to="/analytics">
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Status */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-slate-900 dark:via-blue-950/50 dark:to-emerald-950/50">
        <div className="container max-w-screen-xl mx-auto px-4">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-white via-blue-50/50 to-emerald-50/50 backdrop-blur-sm dark:from-slate-800/90 dark:via-blue-900/30 dark:to-emerald-900/30 dark:backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-emerald-500 dark:from-blue-400 dark:to-emerald-400 rounded-2xl shadow-lg dark:shadow-blue-500/20">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                      🚀 Actively in Development
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                      Exciting new features are being built! This platform is
                      evolving rapidly with fresh updates and improvements.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 dark:from-blue-500 dark:to-emerald-500 dark:hover:from-blue-400 dark:hover:to-emerald-400 text-white shadow-lg dark:shadow-blue-500/25"
                    asChild
                  >
                    <a
                      href="https://github.com/Khryzen"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Source ✨
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700/50 dark:hover:text-slate-200"
                    asChild
                  >
                    <Link to="/analytics">Try Features</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to Transform Your School?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of Philippine schools already using Padayon to excel
              in the MATATAG Curriculum and improve student outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full">
                <Link to="/curriculum" className="flex items-center">
                  Explore Platform
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 rounded-full"
              >
                <a
                  href="https://github.com/Khryzen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container max-w-screen-xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                  <BookOpen className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-lg">Padayon</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering Philippine K–12 schools with AI-powered learning and
                compliance solutions.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Platform</h4>
              <div className="space-y-2 text-sm">
                <Link
                  to="/curriculum"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  MATATAG Curriculum
                </Link>
                <Link
                  to="/compliance"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  DepEd Compliance
                </Link>
                <Link
                  to="/analytics"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Learning Analytics
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Resources</h4>
              <div className="space-y-2 text-sm">
                <a
                  href="https://github.com/Khryzen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentation
                </a>
                <a
                  href="https://github.com/Khryzen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Source Code
                </a>
                <Link
                  to="/analytics"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <div className="space-y-2 text-sm">
                <a
                  href="https://github.com/Khryzen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Developer
                </a>
                <a
                  href="https://github.com/Khryzen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
                <Link
                  to="/analytics"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Platform Info
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground space-y-2">
            <p>
              &copy; 2024 Padayon Learning & Compliance Hub. All rights
              reserved.
            </p>
            <p className="text-xs">
              🇵🇭 Proudly made in the Philippines by a developer from Puerto
              Galera, Oriental Mindoro
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
