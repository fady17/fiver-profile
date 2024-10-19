// components/CarouselDemo.tsx
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import logo from "@/assets/logo.png"

export function CarouselDemo() {
  const images = [
    ""
  ]

  return (
    <Carousel className="w-full max-w-xl">
      <CarouselContent>
        {images.map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="p-0">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={logo}
                      alt={`Slide ${index + 1}`}
                      className="h-full w-full rounded-md object-cover"
                    />
                  </AspectRatio>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      
    </Carousel>
  )
}