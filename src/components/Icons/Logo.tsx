import React from "react";

const Logo = () => {
  return (
    <>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect
          stroke="#4deac3"
          stroke-width="2"
          id="svg_6"
          height="29.38462"
          width="25.07692"
          y="3.30769"
          x="5.46154"
          rx={5}
        />
      </svg>
      <span
        style={{ marginLeft: ".4em", fontWeight: 800 }}
        className={"font-sans not-italic"}>
        XinYun2020 Zettelkasten
      </span>
    </>
  );
};

export default Logo;
