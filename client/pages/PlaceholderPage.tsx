import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { ArrowLeft, Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 lg:py-32">
        <div className="container max-w-screen-xl">
          <div className="max-w-2xl mx-auto text-center">
            <Card>
              <CardContent className="p-12">
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Construction className="h-12 w-12 text-primary" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h1 className="text-3xl lg:text-4xl font-bold">{title}</h1>
                    <p className="text-lg text-muted-foreground">
                      {description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4">
                    <p className="text-sm text-muted-foreground">
                      This page is currently under development. We're working
                      hard to bring you comprehensive tools for Philippine K–12
                      education.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild>
                        <Link to="/">
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Back to Home
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to="/demo">Request Demo</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="pt-8 border-t">
                    <p className="text-sm text-muted-foreground">
                      Want to see this feature prioritized?{" "}
                      <Link
                        to="/contact"
                        className="text-primary hover:underline"
                      >
                        Contact our team
                      </Link>{" "}
                      to share your feedback.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
