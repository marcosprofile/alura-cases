import Title from '../src/components/Title'
import Paragraph from '../src/components/Paragraph'
import Button from '../src/components/Button'
import Input from '../src/components/Input'
import Chip from '../src/components/Chip'
import Image from 'next/image'


export default function HomeScreen() {
  return (
    <div className="flex items-center h-full max-w-[1200px]">
      <div className="grid grid-cols-2 gap-24">
        {/* LEFT CONTAINER */}
        <div className="flex flex-col items-start gap-20">
          <Image width={80} height={24} src='/alura-logo.svg' />
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-1">
              <Chip href="/faq" >O que tem de novo?</Chip>
              <Chip href="/faq" noBg>Confira as principais dúvidas</Chip>
            </div>
            <Title>Alura Cases</Title>
            <Paragraph>Aqui você vai ter acesso a discussões avançadas: as principais decisões sobre arquitetura e design de sistemas. Aprenda através das descobertas que as principais empresas de tecnologia enfrentam!</Paragraph>
            <Paragraph>Quer testar antes de todo mundo?</Paragraph>
            <div className="flex items-center gap-2 mt-6">
              <Input placeholder="Coloque seu email aqui" />
              <Button>Cadastrar</Button>
            </div>
          </div>
        </div>
        
        {/* RIGHT CONTAINER */}
        <div className="flex items-center relative w-full h-full">
          <Image width={1420} height={800} className="absolute min-w-[1420px] rounded-3xl shadow-[var(--shadow)]" src='/alura-cases.png' alt="Plataforma Alura" />
        </div>
      </div>
    </div>
  )
}