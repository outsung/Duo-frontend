import styled, { keyframes } from 'styled-components';

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  border-radius: 4px;

  width: 400px;
  height: 130px;

  background-color: rgba(0, 0, 0, 0.3);
`;

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 130px;
`;
export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #8429f0;

  border-radius: 150px;

  width: 100px;
  height: 100px;

  overflow: hidden;
`;

export const BoxDivider = styled.div`
  width: 1px;
  height: 80%;

  background-color: #fffafa;
`;

export const FieldBox = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`;
export const Field = styled.div`
  font-size: 16px;
  color: #fffafa;
`;
export const FieldA = styled.a`
  font-size: 18px;
  color: #fffafa;
`;
export const FieldLink = styled.div`
  font-size: 16px;
  color: #fffafa;

  cursor: pointer;
`;

const refreshing = keyframes`
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
`;
export const Btn = styled.div<{ isCheck?: boolean }>`
  position: absolute;
  top: 2px;
  right: 5px;

  font-size: 25px;

  color: ${(props) => (props.isCheck ? '#FEB82E' : '#000')};
  opacity: 0.5;

  cursor: pointer;

  &.refreshing {
    animation: ${refreshing} 2s infinite;
  }
`;
