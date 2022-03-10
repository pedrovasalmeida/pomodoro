import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const TitleContainer = styled.div`
  width: 100%;
  max-width: 70%;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 3rem;
  text-align: center;
`;

export const NameTitle = styled.h1`
  font-weight: 500;
  font-size: 3rem;
  text-align: center;
`;

export const DescriptionWrapper = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  line-height: 1.5rem;
  text-align: center;

  &:last-child {
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.span`
  font-weight: 500;
`;

export const Input = styled.input`
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  outline-color: ${({ theme }) => theme.colors.pink};
`;

export const ButtonWrapper = styled.div``;
