export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-10 mb-10 md:mb-0">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold">Risp</h2>
          <p className="text-sm mt-2 text-gray-400">Encontrá tu servicio.</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Risp. Todos los derechos reservados.
      </div>
    </footer>
  );
}
