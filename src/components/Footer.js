export default function Footer() {
  return (
    <footer className="flex items-center justify-center px-4 py-8 w-screen min-h-21 bg-zinc-800 text-white text-sm">
      © {new Date().getFullYear()} Desenvolvido por Marcos. Todos os direitos reservados.
    </footer>
  )
}