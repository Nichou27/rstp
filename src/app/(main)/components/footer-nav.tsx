import NavLinks from "@/app/(main)/components/nav-links";

export const FooterNav = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-10">
      <nav className="flex items-center justify-around ">
        <NavLinks />
      </nav>
    </footer>
  );
};

export default FooterNav;
