import React from 'react';
import { useFrame } from 'react-three-fiber';
import { useSpring } from '@react-spring/three';

type cameraAnimationProps = {
  roomClicked: boolean;
  mypageClicked: boolean;
  optionClicked: boolean;
  boxClicked: string | undefined;
};

function CameraAnimation({
  roomClicked,
  mypageClicked,
  optionClicked,
  boxClicked,
}: cameraAnimationProps) {
  const { postionX, postionY } = useSpring({
    postionX: optionClicked ? [-12] : [roomClicked ? 12 : 0],
    postionY: mypageClicked ? [-5] : [boxClicked ? 12 : 0],
    config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 },
  });
  useFrame((state) => {
    const [x] = postionX.get();
    const [y] = postionY.get();

    state.camera.position.x = x + -5;
    state.camera.position.y = y + 3;
  });

  return <></>;
}

export default CameraAnimation;
