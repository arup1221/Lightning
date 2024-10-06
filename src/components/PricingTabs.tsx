"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import IPv6Component from "./subcomponent/IPv6Component";
import DatacenterComponent from "./subcomponent/DatacenterComponent";
import ResidentialComponent from "./subcomponent/ResidentialComponent";
import ATTComponent from "./subcomponent/ATTComponent";


const tabData = [
  { id: "ipv6", label: "IPv6", discount: "10% OFF" },
  { id: "datacenter", label: "Datacenter" },
  { id: "residential", label: "Residential" },
  { id: "att", label: "AT&T ISP" },
];

export default function PricingTabs() {
  const [activeTab, setActiveTab] = useState("ipv6");

  const getComponent = () => {
    switch (activeTab) {
      case "datacenter":
        return <DatacenterComponent />;
      case "residential":
        return <ResidentialComponent />;
      case "att":
        return <ATTComponent />;
      case "ipv6":
      default:
        return <IPv6Component />;
    }
  };

  return (
    <div id="pricing" className="w-full max-w-6xl mx-auto px-2 md:px-4 py-8 mt-10 mb-16">
      <div className="flex flex-col justify-center items-center gap-y-2">
        <p className="text-sm font-bold text-blue-500">PRICING</p>
        <h1 className="mb-6 font-bold text-2xl md:text-3xl text-center">
          Select the plan that suits you best
        </h1>
      </div>
      <div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-full flex flex-col justify-center items-center">
          {/* Adjust the width for responsiveness */}
          <TabsList className={`flex w-full md:w-[38rem] h-16 justify-center gap-2 md:gap-4 mb-8 shadow-xl font-bold py-2 bg-blue-100 text-blue-600 p-4 rounded-lg`}>
            {tabData.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex justify-center items-center text-center px-3 md:px-8 py-1 md:py-2 font-semibold rounded-lg border 
        ${activeTab === tab.id
                    ? "bg-blue-500 text-blue-300 shadow-2xl font-bold"
                    : "bg-white text-gray-500 border-gray-500"} 
          max-w-[140px] md:max-w-[160px]`}
              >
                {tab.label}
                {tab.discount && (
                  <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    {tab.discount}
                  </span>
                )}
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                    layoutId="activeTab"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value={activeTab} className="mt-6">
                {getComponent()}
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </div>
    </div>

  );
}
