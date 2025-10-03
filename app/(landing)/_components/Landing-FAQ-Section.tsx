import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FAQConstants from "@/constants/faq-constants";

const LandingFAQSection = () => {
  return (
    <section
      id="FAQ-section"
      className="flex flex-col md:flex-row h-full w-full items-center mx-auto p-10"
    >
      <div className="flex flex-col md:flex-row h-full w-full md:w-1/2 items-center justify-center">
        <div className="flex flex-col max-w-lg h-full gap-4 items-start justify-center">
          <div className="rounded-full bg-background px-4 py-1 border border-border w-fit text-sm text-primary font-medium">
            <p>Frequently Asked Questions</p>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold">
            Get All Your Questions Answered Here
          </h1>
          <p className="text-muted-foreground max-w-md">
            Have questions? Here are quick answers to some of the most common
            queries about Pocket Library and its process.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-full w-full md:w-1/2 items-center justify-center">
        <Accordion
          type="single"
          collapsible
          className="w-full md:w-2xl space-y-3 mt-20"
        >
          {FAQConstants.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="border border-border px-4 py-3 bg-accent/10 hover:bg-accent/30 rounded-lg transition-all">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="border border-border px-4 py-4 bg-accent/20 rounded-lg mt-2">
                <p>
                  <span className="text-primary font-semibold">Answer: </span>
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default LandingFAQSection;
