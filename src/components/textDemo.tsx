import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `
Welcome to Fady's Agency! 

Driven by passion and creativity, this agency is dedicated to turning your ideas into reality. 
With a focus on personalized solutions, Fady combines technical expertise with a unique perspective to deliver impactful results. 
Whether you need a full-stack web application, custom AI chatbots, or data analysis tools, every project is approached with attention to detail and a commitment to excellence. 

Let’s embark on this journey together and bring your vision to life!
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
