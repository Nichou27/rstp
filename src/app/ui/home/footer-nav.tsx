import NavLinks from "./nav-links"

export const FooterNav = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-10 mb-0">
      <nav className="flex items-center justify-around">
        <NavLinks />
      </nav>
    </footer>
  )
}

export default FooterNav;