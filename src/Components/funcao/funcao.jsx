import styled, { keyframes } from "styled-components";

export default function Funcao() {
  return (
    <Section id="sobre">
      <Inner>
        <Header>
          <Kicker>O que eu faço</Kicker>
          <Title>Ofereço Soluções Praticas e eficientes com desenvolvimento de Apps</Title>
          <Desc>
            Eu construo experiências completas: sistemas que funcionam, e projetos técnicos que saem do papel, e soluções focadas em performace.
          </Desc>
        </Header>

        <Grid>
          <Card>
            <Tag>Desenvolvimento Web</Tag>
            <CardTitle>Sistemas que funcionam</CardTitle>
            <CardDesc>
              Desenvolvimento de sites, landing pages e sistemas sob medida utilizando Visual Studio.
            </CardDesc>

            <Bullets>
              <li>Landing pages de alta conversão</li>
              <li>Sites com integrações, perfeitas para seu negócio </li>
              <li>Sistemas e telas da preferencia de cada cliente</li>
            </Bullets>

            <CardAction href="#contatos">Quero um orçamento →</CardAction>
          </Card>

         

          <Card>
            <Tag>Eletrônica Digital</Tag>
            <CardTitle>Projetos com Arduino</CardTitle>
            <CardDesc>
              Prototipagem, automação e circuitos inteligentes com Arduino e lógica digital.
            </CardDesc>

            <Bullets>
              <li>Automação e sensores</li>
              <li>Protótipos e validação rápida</li>
              <li>Lógica digital aplicada</li>
            </Bullets>

            <CardAction href="#contatos">Solicitar projeto técnico →</CardAction>
          </Card>
        </Grid>
      </Inner>
    </Section>
  );
}


const fade = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  position: relative;
  padding: 90px 60px;
  animation: ${fade} 0.5s ease both;

  @media (max-width: 720px) {
    padding: 70px 18px;
  }
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Header = styled.div`
  max-width: 760px;
`;

const Kicker = styled.div`
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 999px;

  font-weight: 800;
  font-size: 12px;
  letter-spacing: 0.6px;

  color: rgba(255, 255, 255, 0.92);
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 0, 90, 0.22);
  box-shadow: 0 0 18px rgba(255, 0, 90, 0.14);
`;

const Title = styled.h2`
  margin: 14px 0 10px;
  font-size: 34px;
  line-height: 1.1;
  color: #fff;

  @media (max-width: 720px) {
    font-size: 26px;
  }
`;

const Desc = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.82);
`;

const Grid = styled.div`
  margin-top: 28px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border-radius: 18px;
  padding: 18px;

  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 0, 90, 0.18);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  box-shadow: 0 0 26px rgba(255, 0, 90, 0.12);
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 34px rgba(255, 0, 90, 0.18);
    border-color: rgba(255, 0, 90, 0.26);
  }
`;

const Tag = styled.div`
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;

  font-weight: 900;
  font-size: 12px;
  letter-spacing: 0.4px;

  color: rgba(255, 255, 255, 0.9);
  background: rgba(255, 0, 90, 0.12);
  border: 1px solid rgba(255, 0, 90, 0.22);
`;

const CardTitle = styled.h3`
  margin: 12px 0 8px;
  font-size: 18px;
  color: #fff;
`;

const CardDesc = styled.p`
  margin: 0 0 12px;
  font-size: 14px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.8);
`;

const Bullets = styled.ul`
  margin: 0;
  padding-left: 18px;

  color: rgba(255, 255, 255, 0.76);
  font-size: 13px;
  line-height: 1.65;

  li {
    margin: 6px 0;
  }
`;

const CardAction = styled.a`
  display: inline-flex;
  margin-top: 14px;

  font-weight: 900;
  font-size: 13px;
  text-decoration: none;

  color: rgba(255, 255, 255, 0.92);

  &:hover {
    color: #ff005a;
    text-shadow: 0 0 16px rgba(255, 0, 90, 0.35);
  }
`;