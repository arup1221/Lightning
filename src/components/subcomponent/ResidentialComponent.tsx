// import { PricingCard, FeaturesCard, ContactCard } from "./PricingComponents";

// // Sample data (replace with actual data)
// const pricingPlansResidential = [
//     { duration: "1 Day", price: "$7.99", description: "Get full access to our Residential Proxies for 24 hours" },
//     { duration: "1 Week", price: "$39.99", description: "Get full access to our Residential Proxies for 7 days" },
//     { duration: "1 Month", price: "$109.99", description: "Get full access to our Residential Proxies for 30 days", bestValue: true },
// ];

// const featuresResidential = [
//     "1000 Residential Proxies",
//     "Unlimited Bandwidth",
//     "Fast speed",
//     "24/7 Support",
// ];

export default function ResidentialComponent() {
    return (
        <div className="flex justify-center items-center">
            {/* {pricingPlansResidential.map((plan, index) => (
                <PricingCard key={index} {...plan} />
            ))}
            <FeaturesCard features={featuresResidential} />
            <ContactCard /> */}
            <div className="text-3xl md:text-4xl font-bold">
                <h1>Coming soon</h1>
            </div>
        </div>
    );
}
