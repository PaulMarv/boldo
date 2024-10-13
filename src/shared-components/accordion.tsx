'use client';
import { useState } from 'react';
import {CaretDown} from "@phosphor-icons/react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full lg:max-w-[500px]">
            {faqs.map((faq, index) => (
                <div key={index} className="mb-2 border-b-[1px] border-b-[#C4C4C4]">
                    {/* Accordion Header (Question) */}
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full text-left py-3 flex justify-between items-center gap-8"
                    >
                        <h3 className="text-[20px]">{faq.question}</h3>
                        <span className='bg-primary text-white flex items-center justify-center rounded-full h-[28px] w-[28px]'>
                        <CaretDown size={22} weight="bold" />
                        </span>
                    </button>

                    {/* Accordion Content (Answer) */}
                    <div
                        className={`overflow-hidden transition-[max-height] duration-300 ease-in ${activeIndex === index ? 'max-h-96' : 'max-h-0'
                            }`}
                    >
                        <p className="p-4 text-primary">{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
