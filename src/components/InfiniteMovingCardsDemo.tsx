import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote: "The team provided us with an exceptional full-stack solution that transformed our business operations. Their attention to detail and responsiveness were outstanding.",
    name: "Jane Doe",
    title: "CEO of Tech Innovations",
  },
  {
    quote: "Working with this agency was a game-changer for our AI chatbot project. Their expertise in developing custom solutions made all the difference.",
    name: "John Smith",
    title: "Product Manager at Smart Solutions",
  },
  {
    quote: "Thanks to their data analysis tools, we were able to derive actionable insights that propelled our marketing strategy forward. Highly recommend!",
    name: "Emily Johnson",
    title: "Marketing Director at Data Driven Inc.",
  },
  {
    quote: "Their personalized app development service was top-notch. They understood our needs perfectly and delivered a product that exceeded our expectations.",
    name: "Michael Brown",
    title: "Founder of Creative Apps",
  },
  {
    quote: "The custom AI solutions they created for us are truly remarkable. We've seen a significant improvement in efficiency since implementing their recommendations.",
    name: "Sarah Wilson",
    title: "CTO of Future Tech",
  },
];
