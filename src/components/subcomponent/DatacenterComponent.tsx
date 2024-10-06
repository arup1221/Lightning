// import { PricingCard, FeaturesCard } from "./PricingComponents";

// const pricingPlansIPv6 = [
//     { duration: "1 Day", price: "$6.99", description: "Get full access to our IPv6 Proxies for 24 hours" },
//     { duration: "1 Week", price: "$34.99", description: "Get full access to our IPv6 Proxies for 7 days" },
//     { duration: "1 Month", price: "$99.99", description: "Get full access to our IPv6 Proxies for 30 days", bestValue: true },
// ];

// const featuresIPv6 = [
//     "4000 IPv6 Proxies",
//     "Individual /48 subnet and server",
//     "Whitelist up to 2 IPs",
//     "Unlimited Bandwidth",
//     "HTTP/s Protocol Support",
//     "Unlimited Concurrent Connections",
// ];

export default function IPv6Component() {
    return (
        <div className="flex justify-center items-center">
            {/* {pricingPlansIPv6.map((plan, index) => (
                <PricingCard key={index} {...plan} />
            ))}
            <FeaturesCard features={featuresIPv6} /> */}
            <div className="text-3xl md:text-4xl font-bold">
                <h1>Coming soon</h1>
            </div>
        </div>
    );
}
