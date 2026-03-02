import { useEffect, useRef, useState } from "react";

import foto from "./perfil/A1.jpeg";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    box-shadow: 0 0 10px rgba(255, 0, 90, 0.4);
  }
  50% {
    box-shadow: 0 0 25px rgba(255, 0, 90, 0.9);
  }
  100% {
    box-shadow: 0 0 10px rgba(255, 0, 90, 0.4);
  }
`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  // fecha ao clicar fora
  useEffect(() => {
    const onDown = (e) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  // ESC fecha
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Container>
      <Nav>
        <NavItem href="#inicio">Início</NavItem>
        <NavItem href="#sobre">Sobre</NavItem>
        <NavItem href="#projetos">Projetos</NavItem>
        <NavItem href="#contatos">Contatos</NavItem>
      </Nav>

      <ProfileWrap ref={wrapRef}>
        <ProfileButton
          type="button"
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <ProfileImg src={foto} alt="Francisco" />
        </ProfileButton>

        <Dropdown $open={open} role="menu">
          <DropItem role="menuitem" href="https://github.com/Francisquinho01" target="_blank" rel="noreferrer">
            GitHub
          </DropItem>
          <DropItem role="menuitem" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </DropItem>
          <DropItem role="menuitem" href="https://www.instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </DropItem>
          <Divider />
          <DropItem role="menuitem" href="mailto:SEUEMAIL@EMAIL.COM">
            Email
          </DropItem>
        </Dropdown>
      </ProfileWrap>
    </Container>
  );
}

/* HEADER */

const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 60px;

  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  border-bottom: 1px solid rgba(255, 0, 90, 0.2);
  box-shadow: 0 0 20px rgba(255, 0, 90, 0.2);

  @media (max-width: 720px) {
    padding: 16px 18px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 40px;

  @media (max-width: 720px) {
    gap: 16px;
  }

  @media (max-width: 520px) {
    display: none;
  }
`;

const NavItem = styled.a`
  position: relative;
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: 0.3s ease;

  &:hover {
    color: #ff005a;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0%;
    height: 2px;
    background: #ff005a;
    box-shadow: 0 0 8px #ff005a;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

/* PROFILE + DROPDOWN */

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
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;

  border: 2px solid rgba(255, 0, 90, 0.6);

  animation: ${pulse} 2.5s infinite ease-in-out;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.08);
    animation: none;
    box-shadow: 0 0 30px rgba(255, 0, 90, 1);
  }
`;

/* Dropdown colado na foto e levemente acima */
const Dropdown = styled.div`
  position: absolute;
  right: 0;
  top: 48px; /* ajusta a “altura” */
  
  min-width: 190px;
  padding: 10px;
  border-radius: 12px;

  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  border: 1px solid rgba(255, 0, 90, 0.22);
  box-shadow: 0 0 26px rgba(255, 0, 90, 0.18);

  opacity: ${(p) => (p.$open ? 1 : 0)};
  transform: ${(p) => (p.$open ? "translateY(0)" : "translateY(-6px)")};
  pointer-events: ${(p) => (p.$open ? "auto" : "none")};

  transition: 0.18s ease;
`;

const DropItem = styled.a`
  display: block;
  padding: 10px 10px;
  border-radius: 10px;

  color: rgba(255, 255, 255, 0.92);
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;

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