import { Link as LinkScroll } from "react-scroll"
import { useEffect, useState } from "react"
import clsx from "clsx"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"

// Define the type for NavLink props
interface NavLinkProps {
  title: string
}

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Define NavLink component with type annotations
  const NavLink: React.FC<NavLinkProps> = ({ title }) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      to={title}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      className="base-bold uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5 text-foreground dark:text-foreground"
    >
      {title}
    </LinkScroll>
  )

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
        hasScrolled && "py-2 bg-background dark:bg-background backdrop-blur-[8px]",
        "text-foreground dark:text-foreground"
      )}
    >
      <div className="container flex h-14 items-center justify-between max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <h1 className="h5 text-foreground dark:text-foreground">
            The Agency
            <span className="text-accent">.</span>
          </h1>
        </a>
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-background dark:max-lg:bg-background max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none",
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex items-center space-x-6 max-lg:block max-lg:px-12">
              <li className="nav-li">
                  <div className="dot" />
                  
                </li>
                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transition-transform duration-500 cursor-pointer",
                    )}
                  >
                    <h1 className="h5 text-foreground dark:text-foreground">
                      The Agency
                      <span className="text-accent">.</span>
                    </h1>
                  </LinkScroll>
                </li>
               
                <li className="nav-li">
                <div className="dot" />
                  <NavLink title="services" />
                  <div className="dot" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="hidden lg:block ml-auto">
          <ModeToggle />
        </div>
        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center text-foreground dark:text-foreground"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          {isOpen ? (
            <X className="size-1/2 object-contain" />
          ) : (
            <Menu className="size-1/2 object-contain" />
          )}
        </button>
      </div>
    </header>
  )
}

export default Header