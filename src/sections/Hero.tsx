import { CarouselDemo } from "@/components/carouse"
import { TextGenerateEffectDemo } from "@/components/textDemo"
import { Element } from "react-scroll"
import { InfiniteMovingCardsDemo } from '@/components/InfiniteMovingCardsDemo'
export function Hero() {
  return (
    <Element name="hero">
      <section className="relative bg-background text-foreground min-h-screen py-24 flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 md:order-1 flex flex-col items-center md:items-start">
              <p className="text-xl mb-6 text-center md:text-left max-w-md text-muted-foreground">
                <TextGenerateEffectDemo />
              </p>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full transition-colors duration-300">
                Learn More
              </button>
            </div>

            {/* Carousel Section */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="w-full max-w-md md:max-w-full">
                <CarouselDemo />
              </div>
            </div>
            
          </div>
          <InfiniteMovingCardsDemo />
        </div>
      </section>
    </Element>
  )
}
