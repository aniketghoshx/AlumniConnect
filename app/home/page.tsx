"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Calendar,
  Briefcase,
  Users,
  BookOpen,
  Newspaper,
  DollarSign,
} from "lucide-react";
import Directory from "@/components/Directory";
import Jobs from "@/components/Jobs";
import Mentorship from "@/components/Mentorship";
import Events from "@/components/Events";
import Learning from "@/components/Learning";
import News from "@/components/News";
import Donate from "@/components/Donate";
import { useRouter } from "next/navigation";

export default function AlumniPlatform() {
  const [activeTab, setActiveTab] = useState("directory");
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">AlumniConnect</h1>
          <Button
            onClick={() => {
              router.push("/");
            }}
          >
            Log Out
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-4"
        >
          <TabsList className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 h-fit">
            <TabsTrigger value="directory" className="flex items-center">
              <Search className="mr-2 h-4 w-4" /> Directory
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" /> Events
            </TabsTrigger>
            <TabsTrigger value="jobs" className="flex items-center">
              <Briefcase className="mr-2 h-4 w-4" /> Jobs
            </TabsTrigger>
            <TabsTrigger value="mentorship" className="flex items-center">
              <Users className="mr-2 h-4 w-4" /> Mentorship
            </TabsTrigger>
            <TabsTrigger value="learning" className="flex items-center">
              <BookOpen className="mr-2 h-4 w-4" /> Learning
            </TabsTrigger>
            <TabsTrigger value="news" className="flex items-center">
              <Newspaper className="mr-2 h-4 w-4" /> News
            </TabsTrigger>
            <TabsTrigger value="donate" className="flex items-center">
              <DollarSign className="mr-2 h-4 w-4" /> Donate
            </TabsTrigger>
          </TabsList>

          <TabsContent value="directory">
            <Directory />
          </TabsContent>

          <TabsContent value="events">
            <Events />
          </TabsContent>

          <TabsContent value="jobs">
            <Jobs />
          </TabsContent>

          <TabsContent value="mentorship">
            <Mentorship />
          </TabsContent>

          <TabsContent value="learning">
            <Learning />
          </TabsContent>

          <TabsContent value="news">
            <News />
          </TabsContent>

          <TabsContent value="donate">
            <Donate />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
