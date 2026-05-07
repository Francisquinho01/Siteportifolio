import { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaServer,
  FaGithub,
  FaMicrochip,
  FaBrain,
  FaUsers,
  FaExchangeAlt,
  FaChartLine,
  FaFire,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiStyledcomponents,
  SiVite,
  SiExpress,
  SiAxios,
} from "react-icons/si";

export default function Hero() {
  const [tipoSkill, setTipoSkill] = useState("tecnicas");

  const skillsTecnicas = [
    { icon: <FaReact />, label: "React" },
    { icon: <SiJavascript />, label: "JavaScript" },
    { icon: <FaNodeJs />, label: "Node.js" },
    { icon: <SiExpress />, label: "Express" },
    { icon: <SiMysql />, label: "MySQL" },
    { icon: <SiStyledcomponents />, label: "Styled" },
    { icon: <SiVite />, label: "Vite" },
    { icon: <SiAxios />, label: "Axios" },
    { icon: <FaDatabase />, label: "APIs" },
    { icon: <FaServer />, label: "Backend" },
    { icon: <FaCode />, label: "Front-end" },
    { icon: <FaMicrochip />, label: "Microcontrolador" },
  ];

  const skillsSociais = [
    { icon: <FaBrain />, label: "Analítico" },
    { icon: <FaUsers />, label: "Comunicação" },
    { icon: <FaExchangeAlt />, label: "Adaptável" },
    { icon: <FaChartLine />, label: "Visão estratégica" },
    { icon: <FaFire />, label: "Alta energia" },
    { icon: <FaCode />, label: "Criativo" },
  ];

  const skills = tipoSkill === "tecnicas" ? skillsTecnicas : skillsSociais;

  return (
    <Section id="inicio">
      <Overlay />
      <GlowOne />
      <GlowTwo />

      <HeaderHero>
        <HeroTitle>
          Port<span>fólio</span>
        </HeroTitle>
      </HeaderHero>

      <Container>
        <Left>
          <Badge>Sistemas reais • Automação • Performance</Badge>

          <Name>
            Francisco <Highlight>Oliveira Silva</Highlight>
          </Name>

          <Role>
            Desenvolvedor Full Stack focado em sistemas que geram resultado
          </Role>

          <Subtitle>
            Crio aplicações com pagamento, APIs, banco de dados e lógica de
            negócio para automatizar processos e transformar ideias em sistemas
            reais.
          </Subtitle>

          <Buttons>
            <Primary to="/projetos">Abrir Projetos →</Primary>

            <Secondary
              href="https://github.com/Francisquinho01"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </Secondary>
          </Buttons>

          <Meta>
            <StatusDot />
            Desenvolvedor Aikkie 
          </Meta>
        </Left>

        <Right>
          <SkillPanel>
            <SectionHeader>
              <SectionTitle>
                Minhas <span>Skills</span>
              </SectionTitle>

              <SectionText>
                {tipoSkill === "tecnicas"
                  ? "Tecnologias que uso para construir interfaces, APIs, integrações e sistemas completos."
                  : "Perfil criativo, comunicativo e adaptável, com visão analítica para resolver problemas reais."}
              </SectionText>
            </SectionHeader>

            <SkillTabs>
              <SkillTab
                $active={tipoSkill === "tecnicas"}
                onClick={() => setTipoSkill("tecnicas")}
              >
                Técnicas
              </SkillTab>

              <SkillTab
                $active={tipoSkill === "sociais"}
                onClick={() => setTipoSkill("sociais")}
              >
                Sociais
              </SkillTab>
            </SkillTabs>

            <SkillsGrid>
              {skills.map((skill, index) => (
                <SkillCard key={`${skill.label}-${index}`}>
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <SkillName>{skill.label}</SkillName>
                </SkillCard>
              ))}
            </SkillsGrid>
          </SkillPanel>
        </Right>
      </Container>

      <ScrollHint href="#sobre" aria-label="Ir para seção Sobre">
        <Mouse />
        <span>Role</span>
      </ScrollHint>
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

const scrollPulse = keyframes`
  0%, 100% {
    transform: translateX(-50%) translateY(0);
    opacity: 0.75;
  }

  50% {
    transform: translateX(-50%) translateY(6px);
    opacity: 1;
  }
`;

const Section = styled.section`
  position: relative;
  min-height: calc(100vh - 84px);
  padding: 56px 24px 90px;
  overflow: hidden;

  background: radial-gradient(
    circle at top,
    rgba(20, 20, 20, 0.55) 0%,
    rgba(8, 8, 8, 0.35) 45%,
    rgba(3, 3, 3, 0.2) 100%
  );

  @media (max-width: 768px) {
    min-height: calc(100vh - 72px);
    padding: 40px 18px 78px;
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
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0.14), rgba(0, 0, 0, 0.22));
  pointer-events: none;
`;

const GlowOne = styled.div`
  position: absolute;
  width: 320px;
  height: 320px;
  top: 8%;
  left: -80px;
  border-radius: 50%;
  background: rgba(255, 0, 90, 0.16);
  filter: blur(90px);
  pointer-events: none;
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
  pointer-events: none;
`;

const HeaderHero = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 42px;

  @media (max-width: 768px) {
    margin-bottom: 28px;
  }
`;

const HeroTitle = styled.h1`
  margin: 0;
  text-align: center;
  font-size: clamp(48px, 6vw, 80px);
  font-weight: 900;
  letter-spacing: -2px;
  color: #ffffff;
  line-height: 1;

  span {
    color: #ff005a;
    text-shadow: 0 0 20px rgba(255, 0, 90, 0.4);
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 56px;
  align-items: start;

  animation: ${fadeUp} 0.7s ease both;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 36px;
  }
`;

const Left = styled.div`
  max-width: 560px;
  padding-top: 28px;

  @media (max-width: 980px) {
    padding-top: 0;
    text-align: center;
    margin: 0 auto;
  }
`;

const Right = styled.div`
  width: 100%;
  max-width: 560px;
  justify-self: end;

  @media (max-width: 980px) {
    justify-self: center;
  }
`;

const SkillPanel = styled.div`
  width: 100%;
  padding: 28px;
  border-radius: 28px;

  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 0, 90, 0.12);
  box-shadow:
    0 0 38px rgba(255, 0, 90, 0.08),
    0 24px 60px rgba(0, 0, 0, 0.22);

  backdrop-filter: blur(12px);

  @media (max-width: 560px) {
    padding: 20px;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 9px 14px;
  border-radius: 999px;

  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.6px;

  color: rgba(255, 255, 255, 0.94);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 0, 90, 0.2);
  box-shadow: 0 0 24px rgba(255, 0, 90, 0.12);
  backdrop-filter: blur(10px);
`;

const Name = styled.h2`
  margin: 18px 0 12px;
  font-size: clamp(36px, 4vw, 56px);
  font-weight: 900;
  line-height: 1.08;
  color: #ffffff;
`;

const Highlight = styled.span`
  color: #ff005a;
  text-shadow: 0 0 22px rgba(255, 0, 90, 0.35);
`;

const Role = styled.h3`
  margin: 0 0 14px;
  max-width: 650px;
  font-size: clamp(20px, 2vw, 27px);
  line-height: 1.35;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.92);
`;

const Subtitle = styled.p`
  margin: 0;
  max-width: 620px;
  font-size: 17px;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.76);

  @media (max-width: 980px) {
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 28px;

  @media (max-width: 980px) {
    justify-content: center;
  }
`;


const Secondary = styled.a`
  text-decoration: none;
  font-size: 14px;
  font-weight: 800;
  padding: 14px 18px;
  border-radius: 14px;

  display: inline-flex;
  align-items: center;
  gap: 8px;

  color: rgba(255, 255, 255, 0.92);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 0, 90, 0.22);
  transition: 0.25s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-3px);
    color: #ff005a;
    box-shadow: 0 0 24px rgba(255, 0, 90, 0.18);
  }
`;

const Meta = styled.div`
  margin-top: 20px;

  display: inline-flex;
  align-items: center;
  gap: 10px;

  font-size: 13px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.74);
`;

const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ff005a;
  box-shadow: 0 0 14px rgba(255, 0, 90, 0.75);
`;

const SectionHeader = styled.div`
  margin-bottom: 18px;
`;

const SectionTitle = styled.h2`
  margin: 0 0 10px;
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 900;
  line-height: 1.1;
  color: #ffffff;
  letter-spacing: -1px;

  span {
    color: #ff005a;
    text-shadow: 0 0 18px rgba(255, 0, 90, 0.3);
  }

  @media (max-width: 980px) {
    text-align: center;
  }
`;

const SectionText = styled.p`
  margin: 0;
  max-width: 620px;
  font-size: 15px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);

  @media (max-width: 980px) {
    text-align: center;
    margin: 0 auto;
  }
`;

const SkillTabs = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 18px;

  @media (max-width: 980px) {
    justify-content: center;
  }
`;

const SkillTab = styled.button`
  border: none;
  cursor: pointer;

  padding: 10px 15px;
  border-radius: 999px;

  font-size: 12px;
  font-weight: 900;

  color: ${({ $active }) => ($active ? "#0b0f19" : "rgba(255,255,255,0.74)")};

  background: ${({ $active }) =>
    $active
      ? "linear-gradient(135deg, #ffffff 0%, #f2f2f2 100%)"
      : "rgba(255,255,255,0.045)"};

  border: 1px solid
    ${({ $active }) =>
      $active ? "rgba(255,255,255,0.18)" : "rgba(255,0,90,0.18)"};

  transition: 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    color: ${({ $active }) => ($active ? "#0b0f19" : "#ff005a")};
    box-shadow: 0 0 18px rgba(255, 0, 90, 0.16);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 540px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const SkillCard = styled.div`
  min-height: 74px;
  padding: 14px 12px;
  border-radius: 18px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  color: rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 0, 90, 0.18);

  box-shadow: 0 0 18px rgba(255, 0, 90, 0.06);
  backdrop-filter: blur(10px);

  transition:
    transform 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    color: #ff005a;
    border-color: rgba(255, 0, 90, 0.34);
    box-shadow: 0 0 22px rgba(255, 0, 90, 0.18);
  }
`;

const SkillIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  line-height: 1;
`;

const SkillName = styled.span`
  font-size: 13px;
  font-weight: 900;
`;

const ScrollHint = styled.a`
  position: absolute;
  left: 50%;
  bottom: 24px;
  z-index: 2;

  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  text-decoration: none;
  color: rgba(255, 255, 255, 0.72);
  animation: ${scrollPulse} 1.8s ease-in-out infinite;

  span {
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.4px;
  }

  @media (max-width: 768px) {
    bottom: 16px;
  }
`;

const Mouse = styled.div`
  position: relative;
  width: 22px;
  height: 34px;
  border-radius: 999px;
  border: 2px solid rgba(255, 255, 255, 0.55);

  &::after {
    content: "";
    position: absolute;
    top: 7px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 6px;
    border-radius: 999px;
    background: rgba(255, 0, 90, 0.95);
    box-shadow: 0 0 10px rgba(255, 0, 90, 0.5);
  }
`;
const Primary = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  font-weight: 900;
  padding: 14px 18px;
  border-radius: 14px;

  color: #0b0f19;
  background: linear-gradient(135deg, #ffffff 0%, #f2f2f2 100%);

  transition: 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 30px rgba(255, 255, 255, 0.14);
  }
`;