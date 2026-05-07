import styled from "styled-components";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contato() {
  return (
    <Footer id="contatos">
      <Inner>
        <Top>
          <Left>
            <Title>Vamos conversar?</Title>

            <Desc>
              Se você tem um projeto em mente, me
              chama. Que eu respondo.
            </Desc>

            <CTAGroup>
              <Primary href="mailto:ogserpacsm@outlook.com">
                Enviar email →
              </Primary>

              <Ghost
                href="https://wa.me/5535910038088"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp →
              </Ghost>
            </CTAGroup>
          </Left>

          <Right>
            <Socials>
              <Social
                href="https://github.com/Francisquinho01"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <IconBox>
                  <FaGithub />
                </IconBox>
                <span>GitHub</span>
              </Social>

              <Social
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <IconBox>
                  <FaLinkedin />
                </IconBox>
                <span>LinkedIn</span>
              </Social>

              <Social
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <IconBox>
                  <FaInstagram />
                </IconBox>
                <span>Instagram</span>
              </Social>
            </Socials>
          </Right>
        </Top>

        <Bottom>
          <Small>
            © {new Date().getFullYear()} Francisco Oliveira • Desenvolvido com
            React + Vite
          </Small>
        </Bottom>
      </Inner>
    </Footer>
  );
}

/* styles */

const Footer = styled.footer`
  margin-top: 80px;
  padding: 70px 60px 30px;

  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  border-top: 1px solid rgba(255, 0, 90, 0.18);
  box-shadow: 0 -10px 40px rgba(255, 0, 90, 0.08);

  @media (max-width: 720px) {
    padding: 60px 18px 24px;
  }
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  max-width: 520px;
`;

const Title = styled.h2`
  margin: 0 0 10px;
  font-size: 28px;
  color: #fff;
`;

const Desc = styled.p`
  margin: 0 0 20px;
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
`;

const CTAGroup = styled.div`
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

  transition: 0.25s ease;

  &:hover {
    background: #ffffff;
    transform: translateY(-2px);
  }
`;

const Ghost = styled.a`
  text-decoration: none;
  font-weight: 800;
  font-size: 14px;

  padding: 12px 14px;
  border-radius: 12px;

  color: rgba(255, 255, 255, 0.92);
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 0, 90, 0.22);

  transition: 0.25s ease;

  &:hover {
    color: #ff005a;
    transform: translateY(-2px);
    box-shadow: 0 0 18px rgba(255, 0, 90, 0.18);
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Socials = styled.div`
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
`;

const Social = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  text-decoration: none;
  color: rgba(255, 255, 255, 0.85);
  font-size: 13px;
  font-weight: 800;

  transition: 0.25s ease;

  &:hover {
    color: #ff005a;
  }
`;

const IconBox = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 0, 90, 0.22);
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 0 16px rgba(255, 0, 90, 0.12);

  transition: 0.25s ease;

  svg {
    font-size: 24px;
  }

  ${Social}:hover & {
    transform: translateY(-4px);
    color: #ff005a;
    box-shadow: 0 0 22px rgba(255, 0, 90, 0.2);
  }
`;

const Bottom = styled.div`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  text-align: center;
`;

const Small = styled.small`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
`;