import styled from 'styled-components';

export const Container = styled.div`
  background-color: #000;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  max-width: 100%
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 24px;
  margin-bottom: 30px;
  display: flex;
justify-content: center;
`;

export const NeonText = styled.span`
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  text-shadow: 0 0 10px #00f, 0 0 20px #00f, 0 0 30px #00f, 0 0 40px #00f, 0 0 70px #00f,
    0 0 80px #00f, 0 0 100px #00f, 0 0 150px #00f;
`;
export const Logo = styled.img`
    width: 40px;
    height: 40px;
    padding-right: 10px;
`;