import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import foto from "./perfil/A1.jpeg";
import { Link } from "react-router-dom";

const pulse = keyframes`
  0% {
    box-shadow: 0 0 10px rgba(255, 0, 90, 0.28);
  }
  50% {
    box-shadow: 0 0 22px rgba(255, 0, 90, 0.58);
  }
  100% {
    box-shadow: 0 0 10px rgba(255, 0, 90, 0.28);
  }
`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    const onDown = (e) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) setOpen(false);
    };

    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Container>
      <Inner>
        <Brand href="/">
        #Meu<span>Mundo</span>
        </Brand>

        <Nav>
          <NavItem to="/">Inicio</NavItem>
          
        <NavItem to="/projetos">Projetos</NavItem>
        
        </Nav>

        <ProfileWrap ref={wrapRef}>
          <ProfileButton
            type="button"
            aria-haspopup="menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <ProfileImg src={foto} alt="Francisco Oliveira Silva" />
          </ProfileButton>

          <Dropdown $open={open} role="menu">
            <DropTitle>Conectar</DropTitle>

            <DropItem
              role="menuitem"
              href="https://github.com/Francisquinho01"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </DropItem>

            <DropItem
              role="menuitem"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </DropItem>

            <DropItem
              role="menuitem"
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </DropItem>

            <Divider />

            <DropItem role="menuitem" href="mailto:SEUEMAIL@EMAIL.COM">
              Email
            </DropItem>
          </Dropdown>
        </ProfileWrap>
      </Inner>
    </Container>
  );
}

const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  padding: 14px 24px;

  background: rgba(5, 5, 5, 0.45);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  border-bottom: 1px solid rgba(255, 0, 90, 0.14);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.18);

  @media (max-width: 720px) {
    padding: 12px 16px;
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
`;

const Brand = styled.a`
  text-decoration: none;
  color: #ffffff;
  font-size: 20px;
  font-weight: 900;
  letter-spacing: -0.5px;
  white-space: nowrap;

  span {
    color: #ff005a;
    text-shadow: 0 0 14px rgba(255, 0, 90, 0.28);
  }

  @media (max-width: 720px) {
    font-size: 17px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 34px;

  @media (max-width: 820px) {
    gap: 18px;
  }

  @media (max-width: 620px) {
    display: none;
  }
`;


const NavItem = styled(Link)`
  position: relative;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.3px;
  transition: color 0.25s ease;

  &:hover {
    color: #ff005a;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -7px;
    width: 0;
    height: 2px;
    border-radius: 999px;
    background: #ff005a;
    box-shadow: 0 0 10px rgba(255, 0, 90, 0.8);
    transition: width 0.25s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;
const ProfileWrap = styled.div`
  position: relative;
`;

const ProfileButton = styled.button`
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
  border-radius: 999px;
`;

const ProfileImg = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  object-fit: cover;
  display: block;

  border: 2px solid rgba(255, 0, 90, 0.5);
  animation: ${pulse} 2.8s infinite ease-in-out;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: scale(1.06);
    animation: none;
    box-shadow: 0 0 24px rgba(255, 0, 90, 0.72);
  }

  @media (max-width: 720px) {
    width: 42px;
    height: 42px;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  right: 0;
  top: 56px;
  min-width: 210px;
  padding: 10px;
  border-radius: 16px;

  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  border: 1px solid rgba(255, 0, 90, 0.18);
  box-shadow:
    0 12px 34px rgba(0, 0, 0, 0.28),
    0 0 24px rgba(255, 0, 90, 0.1);

  opacity: ${(p) => (p.$open ? 1 : 0)};
  transform: ${(p) => (p.$open ? "translateY(0)" : "translateY(-6px)")};
  pointer-events: ${(p) => (p.$open ? "auto" : "none")};

  transition: 0.18s ease;
`;

const DropTitle = styled.div`
  padding: 8px 10px 10px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 0.52);
  text-transform: uppercase;
`;

const DropItem = styled.a`
  display: block;
  padding: 10px 10px;
  border-radius: 10px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.92);
  font-weight: 700;
  font-size: 14px;
  transition: 0.2s ease;

  &:hover {
    background: rgba(255, 0, 90, 0.14);
    color: #ff005a;
  }
`;

const Divider = styled.div`
  height: 1px;
  margin: 8px 4px;
  background: rgba(255, 255, 255, 0.08);
`;