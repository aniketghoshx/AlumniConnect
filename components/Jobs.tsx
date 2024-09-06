import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Jobs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Job Board</CardTitle>
        <CardDescription>Find and post job opportunities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {["Software Engineer", "Marketing Manager", "Data Analyst"].map(
            (job, index) => (
              <Card key={index}>
                <CardContent className="flex justify-between p-4">
                  <div>
                    <h3 className="font-semibold">{job}</h3>
                    <p className="text-sm text-gray-500">Company {index + 1}</p>
                  </div>

                  <Button className="mt-2" variant="outline">
                    Apply
                  </Button>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button size={"lg"}>Post Job</Button>
      </CardFooter>
    </Card>
  );
}
