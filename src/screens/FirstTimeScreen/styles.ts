import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  font-weight: 500;
  margin-top: 5rem;
  font-size: 3rem;
  text-align: center;
  max-width: 50%;
`;

export const DescriptionWrapper = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

export const Text = styled.p`
  line-height: 1.5rem;
  text-align: center;
  &:last-child {
    margin-top: 1rem;
  }
`;

export const InputWrapper = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.span`
  font-weight: 500;
`;

export const Input = styled.input`
  margin-top: 1rem;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  outline-color: ${({ theme }) => theme.colors.pink};
`;

export const ButtonWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 4rem;
`;

export const Button = styled.button`
  padding: 1rem;
  border-radius: 1rem;
  padding: 0.5rem 3rem;

  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 400;
  border: none;
  font-size: 18px;
`;
