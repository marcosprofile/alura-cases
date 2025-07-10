import Link from "../src/components/Link";
import Title from "../src/components/Title";
import Paragraph from "../src/components/Paragraph";

export async function getStaticProps() {
  const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
  const faq = await fetch(FAQ_API_URL)
    .then((data) => {
      return data.json()
    })
    .then((res) => {
      return res
    })

  return {
    props: {
      faq
    }
  }
}

export default function FAQPage({ faq }) {
  console.log(faq)

  return (
    <div className="max-w-[1200px] m-auto py-12 px-6">
      <Link href="/">Ir para a Home</Link>
      <Title>Alura Cases - FAQ Page</Title>
      <ul className="flex flex-col gap-20 py-12 mt-10">
        {faq.map(({ answer, question }) => (
          <li key={question}>
            <article className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold">{question}</h2>
              <Paragraph>{ answer }</Paragraph>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}