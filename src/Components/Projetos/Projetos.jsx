import { useMemo, useState } from "react";
import styled, { keyframes } from "styled-components";

import a1 from "../img/a.png";
import a2 from "../img/zzz.png";
import a3 from "../img/B1.png";
import a4 from "../img/C1.png";
import a5 from "../img/d1.png";
import a6 from "../img/E1.png";
import a7 from "../img/F1.png";
import a8 from "../img/G1.png";
import a9 from "../img/G2.png";
import a10 from "../img/G3.png";

export default function Projetos() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("apps");
  const [subCategoriaAtiva, setSubCategoriaAtiva] = useState("fullstack");

  const categorias = [
    { id: "apps", label: "Apps" },
    { id: "eletronica", label: "Eletrônica" },
  ];

  const subCategorias = {
    apps: [
      { id: "fullstack", label: "Full Stack" },
      { id: "frontend", label: "Front End" },
      { id: "backend", label: "Back End" },
    ],
    eletronica: [
      { id: "microcontrolador", label: "Microcontrolador" },
      { id: "digital", label: "Digital" },
    ],
  };

  const projetos = useMemo(
    () => ({
      fullstack: [
        {
          title: "Aikkie Fiscal",
          tag: "Full Stack • Focus NFe • Automação Fiscal",
          desc: "Sistema inteligente para emissão de NFe e NFCe, organização de notas fiscais e automação comercial.",
          link: "https://fiscal-phi.vercel.app",
          bg: a1,
        },
        {
          title: "Loja com Mercado Pago",
          tag: "React • Node • Pagamentos",
          desc: "E-commerce com carrinho, fluxo de compra e integração com pagamento online.",
          link: "https://siteloja-pi.vercel.app/",
          bg: a2,
        },
        {
          title: "Sistema para Trancista",
          tag: "React • Node • Agendamento",
          desc: "Plataforma para trancistas com apresentação de serviços, orçamento, agendamento e fluxo profissional.",
          link: "https://trancista-front.vercel.app/",
          bg: a3,
        },
        {
          title: "Emissão de NFSe",
          tag: "React • Node • Fiscal",
          desc: "Sistema voltado para emissão automatizada de notas fiscais de serviço em ambiente de produção.",
          link: "https://notas-fiscal-neon.vercel.app/",
          bg: a4,
        },
        {
          title: "Cardápio Inteligente",
          tag: "React • Node • Delivery",
          desc: "Sistema para padarias e restaurantes com cardápio digital, pedidos e fluxo de entrega inteligente.",
          link: "https://notas-fiscal-neon.vercel.app/",
          bg: a5,
        },
      ],

      frontend: [
        {
          title: "Landing Page Semana Santa",
          tag: "React • UI • Responsivo",
          desc: "Lading Page Desenvolvida para semana Santa São Sebastião",
          link: "https://landing-page-semana-santa.vercel.app",
          bg: a7,
        },
        {
          title: "Lading Page Narcisita",
          tag: "React • Styled Components • UX",
          desc: "Landing page desenvolvida para retratar a dinamica de um relacionamento narcisista",
          link: "https://lading-page-narcisita.vercel.app",
          bg: a6,
        },
          {
          title: "Loja de Games",
          tag: "Css ",
          desc: "Interface de para retratar uma loja de games",
          link: "https://ebaclanding.vercel.app",
          bg: a8,
        },
          {
          title: "Primeiro Site",
          tag: "HTML ",
          desc: "Primeiro Site que criei rsrs",
          link: "https://ebac-primeiro-site.vercel.app",
          bg: a9,
        },
         {
          title: "Landing Page aniversario ",
          tag: "Boot strap ",
          desc: "Primeiro Site que criei rsrs",
          link: "https://parcel-phi-henna.vercel.app",
          bg: a10,
        },
      ],

      backend: [
        {
          title: "APIs Node.js",
          tag: "Express • MySQL • JWT",
          desc: "Backends com autenticação, banco de dados, regras de negócio, integração externa e organização em rotas.",
          link: "#",
        },
        {
          title: "Integrações Comerciais",
          tag: "Webhooks • Pagamentos • Fiscal",
          desc: "Estruturas de backend preparadas para receber eventos de pagamento, processar dados e acionar fluxos fiscais.",
          link: "#",
        },
      ],

      microcontrolador: [
        {
          title: "Projetos com Arduino/ESP",
          tag: "Sensores • Automação • Protótipos",
          desc: "Soluções físicas usando lógica embarcada, sensores, atuadores e controle eletrônico.",
          link: "#",
        },
      ],

      digital: [
        {
          title: "Eletrônica Digital",
          tag: "Lógica • Circuitos • Sistemas",
          desc: "Projetos envolvendo portas lógicas, sinais digitais, montagem técnica e raciocínio computacional.",
          link: "#",
        },
      ],
    }),
    []
  );

  function handleCategoria(id) {
    setCategoriaAtiva(id);

    if (id === "apps") {
      setSubCategoriaAtiva("fullstack");
    }

    if (id === "eletronica") {
      setSubCategoriaAtiva("microcontrolador");
    }
  }

  const listaProjetos = projetos[subCategoriaAtiva] || [];

  return (
    <Section id="projetos">
      <Overlay />
      <GlowOne />
      <GlowTwo />

      <Container>
        <HeaderArea>
          <Badge>Minha história em projetos</Badge>

          <Title>
            Projetos <span>Aikkie</span>
          </Title>

          <Text>
            Projetos que mostram minha evolução em programação, automação,
            sistemas comerciais, integrações e eletrônica.
          </Text>
        </HeaderArea>

        <Tabs>
          {categorias.map((cat) => (
            <Tab
              key={cat.id}
              type="button"
              $active={categoriaAtiva === cat.id}
              onClick={() => handleCategoria(cat.id)}
            >
              {cat.label}
            </Tab>
          ))}
        </Tabs>

        <SubTabs>
          {subCategorias[categoriaAtiva].map((sub) => (
            <SubTab
              key={sub.id}
              type="button"
              $active={subCategoriaAtiva === sub.id}
              onClick={() => setSubCategoriaAtiva(sub.id)}
            >
              {sub.label}
            </SubTab>
          ))}
        </SubTabs>

        <CardsGrid>
          {listaProjetos.map((projeto, index) => (
            <Card key={`${projeto.title}-${index}`} $bg={projeto.bg}>
              <CardOverlay />

              <CardContent>
                <CardTop>
                  <Number>{String(index + 1).padStart(2, "0")}</Number>
                  <CardTag>{projeto.tag}</CardTag>
                </CardTop>

                <CardTitle>{projeto.title}</CardTitle>
                <CardDesc>{projeto.desc}</CardDesc>

                <CardButton href={projeto.link} target="_blank" rel="noreferrer">
                  Ver projeto →
                </CardButton>
              </CardContent>
            </Card>
          ))}

          
        </CardsGrid>
      </Container>
    </Section>
  );
}

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 90px 24px;
  overflow: hidden;

  background: radial-gradient(
    circle at top,
    rgba(20, 20, 20, 0.55) 0%,
    rgba(8, 8, 8, 0.35) 45%,
    rgba(3, 3, 3, 0.2) 100%
  );

  @media (max-width: 768px) {
    padding: 70px 18px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      700px 420px at 12% 28%,
      rgba(255, 0, 90, 0.1),
      transparent 60%
    ),
    radial-gradient(
      560px 360px at 78% 40%,
      rgba(255, 0, 90, 0.06),
      transparent 55%
    );
  pointer-events: none;
`;

const GlowOne = styled.div`
  position: absolute;
  width: 320px;
  height: 320px;
  top: 10%;
  left: -80px;
  border-radius: 50%;
  background: rgba(255, 0, 90, 0.16);
  filter: blur(90px);
`;

const GlowTwo = styled.div`
  position: absolute;
  width: 280px;
  height: 280px;
  right: -50px;
  bottom: 10%;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.04);
  filter: blur(85px);
`;

const Container = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1180px;
  margin: 0 auto;
  animation: ${fadeUp} 0.7s ease both;
`;

const HeaderArea = styled.div`
  max-width: 760px;
  margin-bottom: 34px;
`;

const Badge = styled.div`
  display: inline-flex;
  padding: 9px 14px;
  border-radius: 999px;

  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.6px;

  color: rgba(255, 255, 255, 0.94);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 0, 90, 0.2);
  box-shadow: 0 0 24px rgba(255, 0, 90, 0.12);
`;

const Title = styled.h1`
  margin: 18px 0 12px;
  font-size: clamp(44px, 6vw, 78px);
  font-weight: 900;
  line-height: 1;
  color: #fff;
  letter-spacing: -2px;

  span {
    color: #ff005a;
    text-shadow: 0 0 22px rgba(255, 0, 90, 0.38);
  }
`;

const Text = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.74);

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Tabs = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 18px;
`;

const Tab = styled.button`
  border: none;
  cursor: pointer;
  padding: 14px 18px;
  border-radius: 16px;

  font-size: 14px;
  font-weight: 900;

  color: ${({ $active }) => ($active ? "#0b0f19" : "rgba(255,255,255,0.88)")};
  background: ${({ $active }) =>
    $active
      ? "linear-gradient(135deg, #ffffff 0%, #ededed 100%)"
      : "rgba(255,255,255,0.045)"};

  border: 1px solid
    ${({ $active }) =>
      $active ? "rgba(255,255,255,0.2)" : "rgba(255,0,90,0.18)"};

  transition: 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 24px rgba(255, 0, 90, 0.16);
  }
`;

const SubTabs = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const SubTab = styled.button`
  border: none;
  cursor: pointer;

  padding: 10px 14px;
  border-radius: 999px;

  font-size: 12px;
  font-weight: 900;

  color: ${({ $active }) => ($active ? "#ff005a" : "rgba(255,255,255,0.68)")};
  background: rgba(0, 0, 0, 0.35);

  border: 1px solid
    ${({ $active }) =>
      $active ? "rgba(255,0,90,0.42)" : "rgba(255,255,255,0.08)"};

  box-shadow: ${({ $active }) =>
    $active ? "0 0 18px rgba(255,0,90,0.16)" : "none"};

  transition: 0.25s ease;

  &:hover {
    color: #ff005a;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  position: relative;
  overflow: hidden;

  min-height: 270px;
  padding: 22px;
  border-radius: 24px;

  display: flex;
  flex-direction: column;

  background: ${({ $bg }) =>
    $bg
      ? `linear-gradient(rgba(0, 0, 0, 0.58), rgba(0, 0, 0, 0.84)), url(${$bg})`
      : "rgba(255, 255, 255, 0.035)"};

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border: 1px solid rgba(255, 255, 255, 0.08);

  box-shadow:
    0 0 32px rgba(255, 0, 90, 0.08),
    0 18px 42px rgba(0, 0, 0, 0.24);

  backdrop-filter: blur(10px);
  transition: 0.28s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(255, 0, 90, 0.28);
    box-shadow:
      0 0 38px rgba(255, 0, 90, 0.14),
      0 24px 52px rgba(0, 0, 0, 0.3);
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      circle at top left,
      rgba(255, 0, 90, 0.2),
      transparent 45%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.28));
  pointer-events: none;
`;

const CardContent = styled.div`
  position: relative;
  z-index: 2;
  flex: 1;

  display: flex;
  flex-direction: column;
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 22px;
`;

const Number = styled.span`
  font-size: 32px;
  font-weight: 900;
  color: rgba(255, 0, 90, 0.42);
  text-shadow: 0 0 18px rgba(255, 0, 90, 0.28);
`;

const CardTag = styled.span`
  padding: 7px 10px;
  border-radius: 999px;

  font-size: 11px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.9);

  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 0, 90, 0.22);
  backdrop-filter: blur(8px);
`;

const CardTitle = styled.h3`
  margin: 0 0 12px;
  font-size: 21px;
  line-height: 1.3;
  font-weight: 900;
  color: #fff;
`;

const CardDesc = styled.p`
  margin: 0;
  flex: 1;

  font-size: 14px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.78);
`;

const CardButton = styled.a`
  margin-top: 22px;
  align-self: flex-start;

  text-decoration: none;
  font-size: 13px;
  font-weight: 900;

  padding: 12px 16px;
  border-radius: 12px;

  color: #0b0f19;
  background: linear-gradient(135deg, #ffffff 0%, #ececec 100%);

  transition: 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 26px rgba(255, 255, 255, 0.14);
  }
`;

const CardGhost = styled.div`
  min-height: 270px;
  padding: 22px;
  border-radius: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border: 1px dashed rgba(255, 0, 90, 0.28);
  background: rgba(255, 0, 90, 0.025);
`;

const GhostTitle = styled.h3`
  margin: 0 0 10px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 20px;
`;

const GhostText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.58);
`;