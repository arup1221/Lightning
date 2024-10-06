"use client"

import * as React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { getQuestionForItem, getContentForItem } from '../../../data/data';

export default function FAQAccordion() {
    const [openItem, setOpenItem] = useState<string | null>(null)

    const handleItemClick = (value: string) => {
        setOpenItem(openItem === value ? null : value)
    }

    return (
        <div className="w-full max-w-3xl mx-auto space-y-4 px-4 sm:px-6 md:px-8 lg:max-w-5xl xl:max-w-6xl">
            {['item-1', 'item-2', 'item-3', 'item-4', 'item-5'].map((item, index) => (
                <div
                    key={index}
                    className={`border rounded-lg overflow-hidden transition-colors duration-300 ${openItem === item ? 'border-2 border-[#3575F6]' : 'border-gray-200'
                        }`}
                >
                    <button
                        onClick={() => handleItemClick(item)}
                        className="flex justify-between items-center p-6 text-base sm:text-lg font-medium w-full text-left transition-colors duration-300 hover:bg-gray-50 group"
                    >
                        <span>{getQuestionForItem(item)}</span>
                        <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${openItem === item ? 'transform rotate-180' : ''
                                }`}
                        />
                    </button>
                    <div
                        className="overflow-hidden transition-all duration-700 ease-in-out"
                        style={{
                            maxHeight: openItem === item ? '1000px' : '0',
                            opacity: openItem === item ? 1 : 0,
                        }}
                    >
                        <div className="p-6 pt-0 text-sm sm:text-base text-gray-600">
                            {getContentForItem(item)}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

