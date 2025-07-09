import Link from "../src/components/Link";
import Title from "../src/components/Title";

export default function Page404() {
  return (
    <div className="flex flex-col items-center justify-center gap-16 h-[var(--height)] max-w-[1200px] m-auto text-center px-6">
      <Title>Você se perdeu e caiu na página 404</Title>
      <Link href="/">Ir para a Home</Link>
    </div>
  )
}