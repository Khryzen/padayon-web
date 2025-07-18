import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Menu, X, Code2, Github } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      {/* Development Status Banner */}
      <div className="bg-accent text-accent-foreground py-2 text-center text-sm">
        <div className="container max-w-screen-xl mx-auto px-4 flex items-center justify-center gap-2">
          <Code2 className="h-4 w-4" />
          <span className="font-medium">Under Development</span>
          <span className="hidden sm:inline">
            • Made in Philippines 🇵🇭 by a developer from Puerto Galera
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-xl items-center justify-between">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
              <BookOpen className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg leading-none">Padayon</span>
                <Badge variant="secondary" className="text-xs px-1.5 py-0.5">
                  BETA
                </Badge>
              </div>
              <span className="text-sm text-muted-foreground leading-none">
                Learning Hub
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/curriculum"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              MATATAG Curriculum
            </Link>
            <Link
              to="/compliance"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              DepEd Compliance
            </Link>
            <Link
              to="/analytics"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Learning Analytics
            </Link>
            <Link
              to="/resources"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Resources
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://github.com/Khryzen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button size="sm" asChild>
              <Link to="/analytics">Explore Platform</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="container py-4 space-y-4">
              <Link
                to="/curriculum"
                className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                MATATAG Curriculum
              </Link>
              <Link
                to="/compliance"
                className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                DepEd Compliance
              </Link>
              <Link
                to="/analytics"
                className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Learning Analytics
              </Link>
              <Link
                to="/resources"
                className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <div className="pt-4 space-y-2 border-t">
                <div className="text-sm text-muted-foreground mb-2">
                  🇵🇭 Made in Philippines by a developer from Puerto Galera
                </div>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                >
                  <a
                    href="https://github.com/Khryzen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub Profile
                  </a>
                </Button>
                <Button className="w-full" asChild>
                  <Link
                    to="/analytics"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Explore Platform
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
