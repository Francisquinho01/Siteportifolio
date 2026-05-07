import styled, { keyframes } from "styled-components";

export default function Ticket() {
  const texto = `
🐙 GitHub • 🧠 React • 💻 VS Code • 🟢 Node.js • 🗄 MySQL • 🧾 MySQL Workbench • ⚙️ JavaScript • 🌐 HTML5 • 🎨 CSS3 • 🔧 Git • 🪄 Styled Components • 📦 npm • 🎬 Adobe Premiere • 💡 Vite • 🔌 API REST • 💳 Mercado Pago • 🧾 Focus NFE • 🚀 Deploy • 📱 Responsividade • 🎯 UX/UI • 🏗️ Full Stack • 🔄 Integrações • 🛠️ Desenvolvimento Web • 📈 Performance • 🧠 Lógica de Sistema • 💼 Portfólio Profissional • 
`;

  return (
    <Wrapper>
      <FadeLeft />
      <FadeRight />

      <Track>
        <Content>
          <span>{texto}</span>
          <span>{texto}</span>
        </Content>
      </Track>
    </Wrapper>
  );
}

const marquee = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(90deg, #050505 0%, #0d0d0d 50%, #050505 100%);
  border-top: 1px solid rgba(255, 0, 90, 0.4);
  border-bottom: 1px solid rgba(255, 0, 90, 0.4);
  box-shadow:
    0 -2px 12px rgba(255, 0, 90, 0.15),
    0 2px 12px rgba(255, 0, 90, 0.15);
  padding: 14px 0;
`;

const Track = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

const Content = styled.div`
  display: inline-flex;
  min-width: max-content;
  animation: ${marquee} 78s linear infinite;

  span {
    display: inline-block;
    padding-right: 56px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.4px;
    color: rgba(255, 255, 255, 0.9);
    text-transform: uppercase;
  }

  ${Wrapper}:hover & {
    animation-play-state: paused;
  }

  @media (max-width: 768px) {
    span {
      font-size: 11px;
      padding-right: 40px;
    }
  }
`;

const FadeLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 100%;
  z-index: 2;
  pointer-events: none;
  background: linear-gradient(90deg, #070707 0%, rgba(7, 7, 7, 0) 100%);
`;

const FadeRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: 100%;
  z-index: 2;
  pointer-events: none;
  background: linear-gradient(270deg, #070707 0%, rgba(7, 7, 7, 0) 100%);
`;