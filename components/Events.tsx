import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Events() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
        <CardDescription>Stay connected with alumni events</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {["Annual Reunion", "Career Fair", "Homecoming"].map(
            (event, index) => (
              <Card key={index}>
                <CardContent className="flex justify-between p-4">
                  <div>
                    <h3 className="font-semibold">{event}</h3>
                    <p className="text-sm text-gray-500">
                      Date: June {index + 1}, 2023
                    </p>
                  </div>

                  <Button className="mt-2" variant="outline">
                    RSVP
                  </Button>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button size={"lg"} >Create Event</Button>
      </CardFooter>
    </Card>
  );
}
