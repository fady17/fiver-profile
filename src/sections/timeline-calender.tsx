import { TimelineDemo } from "@/components/Timeline";
import { Element } from "react-scroll";

export function SectionWithTimeline() {
  return (
    <Element name="timeline-section">
      <section className="relative min-h-screen py-24 flex items-center transition-colors duration-300 bg-background text-foreground">
        <div className="container mx-auto px-4">
          {/* <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Project Timeline</h2>
          </div> */}

          {/* Timeline Demo Component */}
          <TimelineDemo />
        </div>
      </section>
    </Element>
  );
}
