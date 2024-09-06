import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Mentorship() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mentorship Program</CardTitle>
        <CardDescription>Connect with mentors or become one</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {["Career Guidance", "Industry Insights", "Skill Development"].map(
            (program, index) => (
              <Card key={index}>
                <CardContent className="p-4 flex justify-between">
                  <div>
                    <h3 className="font-semibold">{program}</h3>
                    <p className="text-sm text-gray-500">
                      Mentor: Alumni {index + 1}
                    </p>
                  </div>

                  <Button className="mt-2" variant="outline">
                    Request Mentorship
                  </Button>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button size={"lg"}>Become a Mentor</Button>
      </CardFooter>
    </Card>
  );
}
