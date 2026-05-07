import styled from "styled-components";

export default function Historia() {
  return (
    <Section id="sobre">
      <Container>
        <Header>
          <MainTitle>
            Pq <span>TI</span>
          </MainTitle>
        </Header>

        <Card>
          <Badge>Minha História</Badge>

          <Text>
            Quando eu era mais novo, eu tinha o hábito de desmontar e montar
            computadores, e adorava desenvolver poketibia.
          </Text>

          <Text>
            Se algo quebrava ou dava problema, eu sempre pesquisava até encontrar a solução.
          </Text>

          <Text>
            Errar faz parte e não é necessário saber de tudo. O
            mais importante é ter uma mente criativa e correr atrás das
            respostas.
          </Text>

          <Text>
            A área de TI me dá exatamente isso: a liberdade de não me limitar.
          </Text>

          <Text>
            E é por isso que, pra mim, é uma área mágica.
          </Text>
        </Card>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  padding: 100px 24px;

  /* 🔥 SEM BACKGROUND → deixa o global aparecer */

  @media (max-width: 768px) {
    padding: 80px 18px;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const MainTitle = styled.h2`
  margin: 0;
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 900;
  letter-spacing: -1px;
  color: #ffffff;
  text-align: center;

  span {
    color: #ff005a;
    text-shadow: 0 0 18px rgba(255, 0, 90, 0.35);
  }
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  padding: 38px 34px;
  border-radius: 28px;

  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 0, 90, 0.16);

  box-shadow:
    0 0 34px rgba(255, 0, 90, 0.08),
    0 18px 42px rgba(0, 0, 0, 0.28);

  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 28px 20px;
    border-radius: 22px;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 8px 14px;
  margin-bottom: 18px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 0.94);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 0, 90, 0.2);
  box-shadow: 0 0 18px rgba(255, 0, 90, 0.1);
`;

const Text = styled.p`
  margin: 0 0 16px;
  max-width: 850px;
  font-size: 18px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.82);

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1.75;
  }
`;