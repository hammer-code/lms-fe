'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { FAQ } from '@/constants/faq';
import React, { FC } from 'react';

const AccordionFAQ: FC = () => {
  return (
    <div className="flex justify-center">
      <Card className="w-full md:w-4/5 max-w-screen-lg rounded-3xl shadow-xl px-2 pt-2">
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {FAQ.map((faq, index) => (
              <AccordionItem key={index} value={faq.id}>
                <AccordionTrigger className="text-3xl text-[#0F3665] font-bold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#828282]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccordionFAQ;
