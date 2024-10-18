import { Element } from 'react-scroll';
import { MeteorsDemo } from '@/components/MeteorsDemo';

const Services = () => {
  return (
    <Element name="services">
      <section className="relative z-2 bg-background text-foreground py-24 md:py-28 lg:py-32 -mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            <MeteorsDemo 
              title="AI Applications and Chatbots"
              description="Harness the power of AI to create intelligent applications and chatbots that enhance user engagement and streamline customer service. Our tailored solutions can revolutionize how your business interacts with clients."
              buttonText="Explore"
              number={20}
            />
            <MeteorsDemo 
              title="Full-stack Web Applications"
              description="Develop robust full-stack web applications with our expert team. We utilize modern technologies to create scalable, user-friendly applications tailored to your business needs, ensuring a seamless experience for your users."
              buttonText="Learn More"
              number={15}
            />
            <MeteorsDemo 
              title="Data Analysis Tools"
              description="Leverage cutting-edge data analysis tools to uncover insights and drive decision-making. Our solutions empower businesses to transform raw data into actionable strategies, enhancing performance and competitiveness."
              buttonText="Learn More"
              number={15}
            />
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Services;
