import styled from 'styled-components';

// 배경 색 : #A6586D, #394873, #F27272
// 글자 색 : #F2A663, #F28B66

export const StudioPage = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;

  overflow: hidden;
`;

export const WaitingBnt = styled.div`
  position: absolute;

  bottom: 7vh;
  left: 4vw;

  border-radius: 12px;

  width: 400px;
  height: 120px;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;

  background-color: #394873;

  color: #000;
  font-size: 40px;
  font-weight: bold;

  cursor: pointer;

  transition: all 1s;

  user-select: none;

  &.down {
    opacity: 0;

    bottom: calc(-120px - 7vh);
  }

  &.left {
    color: rgba(0, 0, 0, 0);
    background-color: rgba(0, 0, 0, 0);
    left: calc(-400px + 30px);

    & > .on {
      opacity: 1;
    }
  }
`;

export const OptionBtn = styled.div`
  position: absolute;

  right: -50px;

  display: flex;

  z-index: 1;

  color: #000;
  font-size: 40px;
  font-weight: bold;

  cursor: pointer;

  transition: transform 0.5s;
  transition-timing-function: cubic-bezier(0.24, 0.05, 0.445, 1.65);

  user-select: none;

  & > div {
    opacity: 0;
    pointer-events: none;
  }

  &.on {
    transform: scale(1.3);

    & > div {
      opacity: 1;
      pointer-events: all;
    }
  }
`;

export const OptionLabel = styled.div`
  position: absolute;

  left: 50px;

  width: 175px;

  color: #000;
  font-size: 40px;
  font-weight: bold;

  transition: all 0.5s;

  user-select: none;
`;

export const UserInfoBox = styled.div`
  opacity: 0;

  position: absolute;

  top: 7vh;
  left: 4vw;

  border-radius: 12px;

  padding-left: 30px;

  width: 400px;
  height: calc(100vh - 21vh - 120px);

  display: flex;
  flex-direction: column;
  justify-content: center;

  z-index: 1;

  background-color: rgba(0, 0, 0, 0.5);

  color: #fff;
  font-size: 30px;
  font-weight: bold;

  transition: all 1s;

  pointer-events: none;

  user-select: none;

  &.on {
    opacity: 100;

    height: calc(100vh - 14vh);
  }
`;

export const AccountMenuBox = styled.div`
  position: absolute;
  top: 2.5vh;
  right: 0.8vw;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  width: 400px;
  height: 60px;

  z-index: 1;

  &.mypage {
    & > div {
      transform: scale(0);
    }
    & > #divider {
      margin-right: -25px;

      width: 3px;

      transform: scale(1);
    }
    & > #mypage {
      margin-right: -80px;

      font-size: 35px;

      transform: scale(1);
      &:hover {
        color: #000;
      }
    }
  }
`;
export const AccountMenuImage = styled.div`
  border-radius: 100px;

  width: 50px;
  height: 50px;

  background-color: #8429f0;

  transition: all 0.5s;

  cursor: pointer;
`;
export const AccountMenuDivider = styled.div`
  margin: 0px 15px;

  width: 1px;
  height: 70%;

  background-color: black;

  transition: all 0.5s;
`;
export const AccountMenuItem = styled.div`
  margin-left: 10px;

  color: #000;
  font-size: 19px;
  font-weight: bold;

  transition: all 0.5s;

  cursor: pointer;

  &:hover {
    color: #611eb3;
  }
`;
