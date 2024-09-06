import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  Calendar,
  Briefcase,
  BookOpen,
  Newspaper,
  DollarSign,
} from "lucide-react";

import { ReactNode } from "react";
import { AuthButton } from "../components/AuthButton";

export default function LandingPage() {
 
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">AlumniConnect</h1>
            <div className="space-x-4">
              <AuthButton type={"signin"} />
              <AuthButton type={"signup"} />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Connect, Grow, and Give Back
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              Join our alumni network to stay connected, advance your career,
              and support your alma mater.
            </p>
            <div className="mt-8 flex justify-center">
              <Button size="lg" className="px-8 py-3 text-lg">
                Join Now
              </Button>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Platform Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="h-6 w-6 text-primary" />}
              title="Alumni Directory"
              description="Connect with fellow graduates and expand your professional network."
            />
            <FeatureCard
              icon={<Calendar className="h-6 w-6 text-primary" />}
              title="Events"
              description="Stay informed about reunions, webinars, and networking opportunities."
            />
            <FeatureCard
              icon={<Briefcase className="h-6 w-6 text-primary" />}
              title="Job Board"
              description="Explore career opportunities or post job openings for fellow alumni."
            />
            <FeatureCard
              icon={<BookOpen className="h-6 w-6 text-primary" />}
              title="Mentorship Program"
              description="Share your expertise or find a mentor to guide your career growth."
            />
            <FeatureCard
              icon={<Newspaper className="h-6 w-6 text-primary" />}
              title="News & Updates"
              description="Stay up-to-date with the latest news from your alma mater and fellow alumni."
            />
            <FeatureCard
              icon={<DollarSign className="h-6 w-6 text-primary" />}
              title="Donation Portal"
              description="Support your university and contribute to its continued success."
            />
          </div>
        </section>

        <section className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Join Our Thriving Community
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Connect with over 50,000 alumni from around the world. Your next
                opportunity awaits!
              </p>
              <Button size="lg" className="px-8 py-3 text-lg">
                Get Started
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold">AlumniConnect</h4>
              <p className="text-sm text-gray-400">
                Connecting graduates, empowering futures
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-sm hover:text-gray-300">
                Privacy Policy
              </a>
              <a href="#" className="text-sm hover:text-gray-300">
                Terms of Service
              </a>
              <a href="#" className="text-sm hover:text-gray-300">
                Contact Us
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">
            © 2024 AlumniConnect. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

interface FeatureCardProps {
    icon: ReactNode,
    title: string,
    description: string
}

function FeatureCard({ icon, title, description } : FeatureCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
