import { ThemeProvider } from "@/components/theme-provider"
import Header from "./sections/Header";
import { Hero } from "./sections/Hero";
import Services from "./sections/services";
import Footer from "./sections/Footer";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Hero />
      
      <Services />
      <Footer />
    </ThemeProvider>
  )
}

export default App
