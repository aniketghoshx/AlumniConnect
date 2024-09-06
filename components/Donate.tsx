import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Donate() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Donation Portal</CardTitle>
        <CardDescription>Support your alma mater</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Donation Amount ($)
            </label>
            <Input id="amount" type="number" placeholder="Enter amount" />
          </div>
          <div>
            <label
              htmlFor="fund"
              className="block text-sm font-medium text-gray-700"
            >
              Select Fund
            </label>
            <select
              id="fund"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
            >
              <option>Scholarship Fund</option>
              <option>Research Fund</option>
              <option>General Fund</option>
            </select>
          </div>
          <div className="flex justify-center">
            <Button type="submit" size={"lg"}>
              Donate
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
