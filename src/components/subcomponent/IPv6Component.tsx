import { PricingCard, FeaturesCard, ContactCard } from "./PricingComponents";

const pricingPlansIPv6 = [
  { duration: "1 Day", price: "$6.99", description: "Get full access to our IPv6 Proxies for 24 hours" },
  { duration: "1 Week", price: "$34.99", description: "Get full access to our IPv6 Proxies for 7 days" },
  { duration: "1 Month", price: "$99.99", description: "Get full access to our IPv6 Proxies for 30 days", bestValue: true },
];

const featuresIPv6 = [
  "4000 IPv6 Proxies",
  "Individual /48 subnet and server",
  "Whitelist up to 2 IPs",
  "Unlimited Bandwidth",
  "HTTP/s Protocol Support",
  "Unlimited Concurrent Connections",
];
const heading = "IPv6";
const description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, magnam consectetur accusantium minus error voluptatum eos eligendi dolor exercitationem in ipsum laboriosam neque autem repudiandae illo mollitia blanditiis facere aspernatur?"
export default function IPv6Component() {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center gap-6">
      <div className="1/3 gap-y-4">
        <FeaturesCard features={featuresIPv6} heading={heading} description={description}/>
        <div className="mt-4"><ContactCard /></div>
        
      </div>
      <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
        {pricingPlansIPv6.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>

    </div>
  );
}
