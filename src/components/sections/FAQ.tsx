'use client'

import React from 'react'
import { Accordion, Content, Tab, Trigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQ = () => {
  // FAQ Questions
  const questions = [
    {
      question: "What is the current market value of my property?",
      answer: "Homeowners and sellers often ask this to understand how much their property is worth in the current market. Real estate agents typically provide a comparative market analysis (CMA) to estimate the value based on recent sales of similar properties in the area."
    },
    {
      question: 'What are the costs involved in buying or selling a property?',
      answer: 'Buyers and sellers want to know about expenses such as agent commissions, closing costs, taxes, inspection fees, and other associated costs. Agents help break down these expenses to provide clarity.'
    },
    {
      question: 'How long will it take to sell or buy a property?',
      answer: 'The timeline for selling or buying a property depends on market conditions, pricing, property location, and demand. Agents provide insights based on current trends and their experience in the local market.'
    }
  ];

  return (
    <section id='faq'>
      <h3 className="mt-5 text-4xl font-semibold text-center text-slate-900">Frequently Asked Questions</h3>

      <div className="flex items-center justify-center h-full overflow-x-hidden" id="faq">
        <div className="container flex items-start justify-center w-full">
          <div className="w-full">
            <Accordion className="py-28">
              {questions.map((e, i) => {
                return (
                  <Tab key={i}>
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.5
                      }}
                    >
                      <Trigger className="hover:translate-x-1.5 duration-200 focus:translate-x-0">{e.question}</Trigger>
                      <Content>{e.answer}</Content>
                    </motion.div>
                  </Tab>
                )
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ