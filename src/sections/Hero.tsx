// import { Link } from "react-scroll";

import { Element } from "react-scroll";
import {ImagesSliderDemo} from "@/components/Backgound.tsx";

export function Hero() {
  return (
    <Element name="hero">
      <section className="relative bg-background text-foreground min-h-screen py-24 flex items-center">
        <div className="container mx-auto px-4">
          <ImagesSliderDemo />

        </div>
      </section>
    </Element>
  );
}
