import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants"

const Faqs = () => {
    return (
        <section id="faqs" className="section-mx section-my section-px">
            <div className="flex flex-col items-center ">
                <h2 className=" text-brand text-center ">Frequently Asked Questions</h2>

                <Accordion type="single" collapsible className="max-w-4xl w-full bg-base sm:mt-12 mt-6 mb-4 ">
                    {
                        faqs.map((faq, index) => (
                            <AccordionItem key={index} value={index.toString()} className="mb-6 shadow-md rounded-lg px-4 ">
                                <AccordionTrigger className="text-base font-semibold font-montserrat">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-sm font-poppins">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))
                    }
                </Accordion>

            </div>

        </section>
    )
}

export default Faqs