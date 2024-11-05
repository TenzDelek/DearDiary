import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "Is my data secure on DearDiary?",
        answer: "Absolutely! Your entries are encrypted and accessible only to you. We prioritize your privacy, so you can journal freely knowing your data is protected."
    },
    {
        question: "Can I interact with other users on DearDiary?",
        answer: "Yes! DearDiary has a community support feature where you can connect with others, share insights, and find encouragement from like-minded individuals."
    },
    {
        question: "What tools are available to help with self-care?",
        answer: "DearDiary offers guided meditation, gratitude prompts, and other self-care resources to support your mental wellness alongside journaling."
    },
    {
        question: "How does the AI-powered insights feature work?",
        answer: "Our AI analysis tools help you explore themes and patterns in your entries, offering insights into your thoughts and emotions to support your self-discovery journey."
    },
    {
        question: "Can I track my mood over time?",
        answer: "Yes! The mood tracking feature allows you to visualize your emotional journey over time, making it easier to understand how your moods evolve."
    },
    {
        question: "How can I make sure I journal consistently?",
        answer: "With customizable reminders, DearDiary can prompt you to journal regularly at times that work best for you, helping you build a steady journaling habit."
    },
    {
        question: "Is it possible to set goals and track my journaling progress?",
        answer: "Definitely! DearDiary’s progress tracking feature lets you set personal goals and monitor your growth and achievements over time."
    },
];

export default function FAQs() {
    return (
        <div>
            <header className="text-center mb-10 mt-10">
                    <h1 className="text-6xl font-bold mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-2xl text-gray-300 max-w-2xl mx-auto">
                        Got any doubts! We are here to answer everything!
                    </p>
                </header>

            <div className="items-center mx-auto py-8 max-w-2xl">
                <Accordion type="single" collapsible>
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index + 1}`}>
                            <AccordionTrigger className="text-xl">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-lg">{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}
