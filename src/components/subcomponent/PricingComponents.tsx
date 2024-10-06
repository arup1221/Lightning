import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";

import { FaArrowRight } from "react-icons/fa";

interface prices {
  duration: string;
  price: string | number;
  description: string;
  bestValue?: boolean;
  key: number;
}

// PricingCard Component
export function PricingCard({ duration, price, description, bestValue }: prices) {
  return (
    <Card className={`h-[15rem] max-w-full  flex flex-col ${bestValue ? 'border-yellow-400 bg-orange-100 border-2 relative' : ''}`}>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{duration}</span>
          <span className="text-2xl font-bold">{price}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button className="w-full bg-blue-500 hover:bg-blue-600">Buy Now</Button>
      </CardFooter>
      {bestValue && (
        <div className="absolute -top-3 left-3 bg-yellow-400 text-white px-3 py-1 rounded-full text-xs">
          Best Value
        </div>
      )}
    </Card>
  );
}

interface Feature {
  features: string[],
  heading: string,
  description: string,
}
// FeaturesCard Component
export function FeaturesCard({ features, heading, description }: Feature) {
  return (
    <Card className="h-[28rem] w-[25rem] bg-blue-200 border-[2px] border-blue-500">
      <CardHeader>
        <CardTitle>{heading}</CardTitle>
        <p className="text-sm">{description}</p>

      </CardHeader>
      <h1 className="ml-6 mb-2">All Plans Include</h1>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckIcon className="mr-2 text-blue-500" /> {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

// ContactCard Component
export function ContactCard() {
  return (
    <div className="bg-gray-100 md:flex gap-x-3 h-[5rem] p-10 items-center rounded-lg hidden ">

      <p>For any custom plans</p>
      <div className="flex">
        <button className="flex items-center justify-between bg-blue-100 w-32 p-2 rounded-xl text-blue-600 ">
          <span>Contact Us</span>
          <FaArrowRight className="ml-2" />
        </button>
      </div>

    </div>
  );
}
