interface HeaderProps {
  children?: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <header className="grid grid-cols-4 grid-rows-2 gap-4 px-5 grow max-w-7xl mx-auto md:grid-cols-6">
      {children}
    </header>
  )
}

export default Header;