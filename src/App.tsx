import { ThemeProvider } from "@/components/theme-provider"
import Header from "./sections/Header";
import { Hero } from "./sections/Hero";
import Services from "./sections/services";
import Footer from "./sections/Footer";
import { SectionWithTimeline } from "./sections/timeline-calender";
import HeroCalendar from "./components/calender"
import { InfiniteMovingCardsDemo } from "./components/InfiniteMovingCardsDemo";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Hero />
      
      <Services />
      <SectionWithTimeline />
      <HeroCalendar />
      <InfiniteMovingCardsDemo />
      <Footer />
    </ThemeProvider>
  )
}

export default App
