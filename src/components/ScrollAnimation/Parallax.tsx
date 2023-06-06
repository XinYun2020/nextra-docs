/* 
    pnpm i @react-spring/parallax
*/

import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const ParallaxComponent = () => {
  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(https://yt3.ggpht.com/yti/AHyvSCAdicuzmHUuHiUHIebnJvhSegscBvE--6FGiyP5Rg=s88-c-k-c0x00ffffff-no-rj-mo)`,
            backgroundSize: "cover",
          }}>
          <h2>welcome to my website</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.5}
          factor={4}
          style={{
            backgroundImage: `url(https://yt3.ggpht.com/yti/AHyvSCAdicuzmHUuHiUHIebnJvhSegscBvE--6FGiyP5Rg=s88-c-k-c0x00ffffff-no-rj-mo)`,
            backgroundSize: "cover",
          }}>
          <h2>web development is fun!</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(https://yt3.ggpht.com/yti/AHyvSCAdicuzmHUuHiUHIebnJvhSegscBvE--6FGiyP5Rg=s88-c-k-c0x00ffffff-no-rj-mo)`,
            backgroundSize: "cover",
          }}>
          <h2>welcome to my website</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={0.2} speed={0.05}>
          <h2>web development is fun!</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ParallaxComponent;
