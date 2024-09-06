import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Learning() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Learning Resources</CardTitle>
        <CardDescription>
          Access educational content and courses
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {["Web Development", "Data Science", "Business Management"].map(
            (course, index) => (
              <Card key={index}>
                <CardContent className="p-4 flex justify-between">
                  <div>
                    <h3 className="font-semibold">{course}</h3>
                    <p className="text-sm text-gray-500">
                      Duration: {index + 1} months
                    </p>
                  </div>

                  <Button className="mt-2" variant="outline">
                    Enroll
                  </Button>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </CardContent>
    </Card>
  );
}
