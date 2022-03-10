import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;

  width: 100%;
  height: 100%;

  background-color: #222;
`;

export const Button = styled.button`
  /* padding: 1rem;
  border-radius: 1rem;
  padding: 0.5rem 3rem;

  color: ${({ theme }) => theme.colors.black};
  font-weight: 400;
  border: none;
  font-size: 18px;

  transition: all 400ms ease; */

  background: ${({ theme }) => theme.colors.black};

  border: 2px solid currentColor;
  border-radius: 3rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  overflow: hidden;
  padding: 1rem 2rem;
  position: relative;
  text-decoration: none;
  transition: 0.2s transform ease-out;
  will-change: transform;
  z-index: 0;

  &::after {
    background: ${({ theme }) => theme.colors.pink};
    border-radius: 3rem;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-100%, 0) rotate(30deg);
    transform-origin: top left;
    transition: 400ms transform ease-out;
    will-change: transform;
    z-index: -1;
  }

  :not(:disabled) {
    &:hover::after {
      transform: translate(0, 0);
    }

    &:hover {
      border: 2px solid transparent;
      color: ${({ theme }) => theme.colors.white};
      transform: scale(1.1);
      will-change: transform;
    }
  }
`;
