import { useEffect, useMemo, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

export default function Hero() {
  
  const slides = useMemo(
    () => [
      {
        title: "Projeto 01 — Landing Page",
        img: "https://placehold.co/520x360/png?text=Projeto+01",
      },
      {
        title: "Projeto 02 — Dashboard",
        img: "https://placehold.co/520x360/png?text=Projeto+02",
      },
      {
        title: "Projeto 03 — App React",
        img: "https://placehold.co/520x360/png?text=Projeto+03",
      },
    ],
    []
  );

  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const next = () => setIdx((v) => (v + 1) % slides.length);
  const prev = () => setIdx((v) => (v - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 3500);
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, slides.length]);

  return (
    <Section id="inicio">
      <Overlay />

      <Grid>
        <Left>
          <Badge>React • Vite • Styled Components</Badge>

          <Title>
            Francisco <Highlight>Oliveira</Highlight>
          </Title>

          <Subtitle>
            Portfólio Francisco Oliveira Silva com projetos reais, interfaces modernas e foco em performance.
            Veja os destaques ao lado.
          </Subtitle>

          <Buttons>
            <Primary href="#projetos">Ver Projetos</Primary>
            <Secondary
              href="https://github.com/Francisquinho01"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Secondary>
          </Buttons>

          <Meta>
            <Dot /> Disponível para oportunidades 
          </Meta>
        </Left>

        <Right>
          <Carousel
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            aria-label="Carrossel de projetos"
          >
            <Frame>
              <SlideTrack $idx={idx}>
                {slides.map((s, i) => (
                  <Slide key={s.title + i}>
                    <Shot src={s.img} alt={s.title} loading="lazy" />
                    <Caption>
                      <strong>{s.title}</strong>
                      <span>Projetos</span>
                    </Caption>
                  </Slide>
                ))}
              </SlideTrack>

              <Controls>
                <IconBtn type="button" onClick={prev} aria-label="Anterior">
                  ‹
                </IconBtn>
                <IconBtn type="button" onClick={next} aria-label="Próximo">
                  ›
                </IconBtn>
              </Controls>
            </Frame>

            <Dots>
              {slides.map((_, i) => (
                <DotBtn
                  key={i}
                  type="button"
                  onClick={() => setIdx(i)}
                  aria-label={`Ir para slide ${i + 1}`}
                  $active={i === idx}
                />
              ))}
            </Dots>
          </Carousel>
        </Right>
      </Grid>

      <ScrollHint href="#sobre" aria-label="Ir para seção Sobre">
        <Mouse />
        <span>Role</span>
      </ScrollHint>
    </Section>
  );
}

/* animations */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scrollPulse = keyframes`
  0%, 100% { transform: translateY(0); opacity: .75; }
  50% { transform: translateY(6px); opacity: 1; }
`;

/* layout */
const Section = styled.section`
  position: relative;
  min-height: calc(100vh - 84px);
  display: flex;
  align-items: center;
  padding: 60px 60px;

  @media (max-width: 720px) {
    padding: 42px 18px;
    min-height: calc(100vh - 72px);
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(700px 420px at 12% 28%, rgba(255, 0, 90, 0.20), transparent 60%),
    radial-gradient(560px 360px at 78% 40%, rgba(255, 0, 90, 0.14), transparent 55%),
    linear-gradient(180deg, rgba(0,0,0,0.65), rgba(0,0,0,0.55));
  pointer-events: none;
`;

const Grid = styled.div`
  position: relative;
  z-index: 1;

  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 36px;
  align-items: center;

  animation: ${fadeUp} 0.6s ease both;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 26px;
  }
`;

const Left = styled.div``;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 900px) {
    justify-content: flex-start;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
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

const Title = styled.h1`
  margin-top: 18px;
  margin-bottom: 10px;

  font-size: 64px;
  line-height: 1.02;
  letter-spacing: -0.8px;

  color: #fff;

  @media (max-width: 720px) {
    font-size: 42px;
  }
`;

const Highlight = styled.span`
  color: #ff005a;
  text-shadow: 0 0 18px rgba(255, 0, 90, 0.35);
`;

const Subtitle = styled.p`
  max-width: 680px;
  margin: 0;

  font-size: 18px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.86);

  @media (max-width: 720px) {
    font-size: 16px;
  }
`;

const Buttons = styled.div`
  margin-top: 22px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const Primary = styled.a`
  text-decoration: none;
  font-weight: 900;
  font-size: 14px;

  padding: 12px 14px;
  border-radius: 12px;

  color: #0b0f19;
  background: rgba(255, 255, 255, 0.92);

  &:hover {
    background: #ffffff;
  }
`;

const Secondary = styled.a`
  text-decoration: none;
  font-weight: 800;
  font-size: 14px;

  padding: 12px 14px;
  border-radius: 12px;

  color: rgba(255, 255, 255, 0.92);
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 0, 90, 0.22);

  &:hover {
    color: #ff005a;
    box-shadow: 0 0 22px rgba(255, 0, 90, 0.18);
  }
`;

const Meta = styled.div`
  margin-top: 18px;
  display: inline-flex;
  align-items: center;
  gap: 10px;

  font-weight: 800;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.72);
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ff005a;
  box-shadow: 0 0 14px rgba(255, 0, 90, 0.75);
`;

/* carousel */
const Carousel = styled.div`
  width: 420px;

  @media (max-width: 900px) {
    width: min(520px, 100%);
  }
`;

const Frame = styled.div`
  position: relative;
  border-radius: 22px;
  overflow: hidden;

  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 0, 90, 0.22);
  box-shadow: 0 0 28px rgba(255, 0, 90, 0.18);
`;

const SlideTrack = styled.div`
  display: flex;
  width: 100%;
  transform: translateX(${(p) => `-${p.$idx * 100}%`});
  transition: transform 420ms ease;
`;

const Slide = styled.div`
  min-width: 100%;
  position: relative;
`;

const Shot = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;

  @media (max-width: 900px) {
    height: 280px;
  }
`;

const Caption = styled.div`
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 14px;

  padding: 12px 12px;
  border-radius: 14px;

  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  border: 1px solid rgba(255, 255, 255, 0.08);

  strong {
    display: block;
    color: rgba(255, 255, 255, 0.95);
    font-size: 14px;
    font-weight: 900;
  }

  span {
    display: block;
    margin-top: 2px;
    color: rgba(255, 255, 255, 0.75);
    font-size: 12px;
    font-weight: 700;
  }
`;

const Controls = styled.div`
  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 10px;
  pointer-events: none;
`;

const IconBtn = styled.button`
  pointer-events: auto;

  width: 38px;
  height: 38px;
  border-radius: 12px;

  border: 1px solid rgba(255, 0, 90, 0.22);
  background: rgba(0, 0, 0, 0.45);
  color: rgba(255, 255, 255, 0.92);

  font-size: 22px;
  font-weight: 900;
  cursor: pointer;

  &:hover {
    color: #ff005a;
    box-shadow: 0 0 18px rgba(255, 0, 90, 0.18);
  }
`;

const Dots = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 12px;
`;

const DotBtn = styled.button`
  width: ${(p) => (p.$active ? "18px" : "10px")};
  height: 10px;
  border-radius: 999px;
  border: 0;
  cursor: pointer;

  background: ${(p) =>
    p.$active ? "rgba(255, 0, 90, 0.95)" : "rgba(255, 255, 255, 0.22)"};

  box-shadow: ${(p) =>
    p.$active ? "0 0 14px rgba(255, 0, 90, 0.45)" : "none"};

  transition: 220ms ease;
`;

/* scroll hint */
const ScrollHint = styled.a`
  position: absolute;
  left: 50%;
  bottom: 26px;
  transform: translateX(-50%);
  z-index: 1;

  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);

  span {
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.4px;
  }

  animation: ${scrollPulse} 1.8s ease-in-out infinite;

  @media (max-width: 720px) {
    bottom: 18px;
  }
`;

const Mouse = styled.div`
  width: 22px;
  height: 34px;
  border-radius: 999px;
  border: 2px solid rgba(255, 255, 255, 0.55);
  position: relative;

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