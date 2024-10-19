import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `
Welcome to the Agency! 

this agency is dedicated to turning your ideas into reality. 
With a focus on personalized solutions, We combines technical expertise with a unique perspective to deliver impactful results. 
Whether you need a full-stack web application, custom AI chatbots, 


`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
