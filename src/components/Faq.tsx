import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are your fees?",
    answer: "Our fees are competitive and vary depending on the service. Please contact us for a detailed quote.",
  },
  {
    question: "Do you take insurance?",
    answer: "We are an out-of-network provider. We can provide you with a superbill to submit to your insurance for reimbursement.",
  },
  {
    question: "Do you provide online counseling?",
    answer: "Yes, we offer secure and confidential online counseling sessions. You can book an appointment through our website.",
  },
  {
    question: "What are your office hours?",
    answer: "Our office hours are Monday to Friday, from 9 AM to 6 PM. We are closed on weekends and public holidays.",
  },
  {
    question: "What geographic areas do you serve?",
    answer: "We serve clients from all over the world through our online platform. Our physical office is located in San Francisco.",
  },
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of services, including individual therapy, couples counseling, and family therapy.",
  },
];

export function Faq() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Common questions about therapy services and what to expect
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="bg-white rounded-2xl px-8 border-0 shadow-gentle">
              <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
