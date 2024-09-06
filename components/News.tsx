import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function News() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>News & Updates</CardTitle>
        <CardDescription>
          Stay informed about university and alumni news
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[
            "New Research Grant",
            "Alumni Achievement Award",
            "Campus Expansion",
          ].map((news, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <h3 className="font-semibold">{news}</h3>
                <p className="text-sm text-gray-500">
                  Posted on: May {index + 1}, 2023
                </p>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
