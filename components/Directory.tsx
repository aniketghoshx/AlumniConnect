import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Directory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Alumni Directory</CardTitle>
        <CardDescription>Connect with fellow alumni</CardDescription>
      </CardHeader>
      <CardContent>
        <Input placeholder="Search alumni..." className="mb-4" />
        <div className="space-y-4">
          {["John Doe", "Jane Smith", "Bob Johnson"].map((name, index) => (
            <Card key={index}>
              <CardContent className="flex justify-between items-center p-4">
                <div>
                  <h3 className="font-semibold">{name}</h3>
                  <p className="text-sm text-gray-500">
                    Class of 20{20 + index}
                  </p>
                </div>
                <Button variant="outline">Connect</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
