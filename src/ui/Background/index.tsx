import { bindCSS, Div } from "@flexive/core";

import styles from "./index.module.scss";

const cx = bindCSS(styles);

export function Background() {
  return (
    <Div
      className={cx("Background")}
      absolute
      top
      left
      right
      bottom
      z={-1}
      hide
    >
      <Div className={cx("img")} f>
        <svg>
          <filter id="turbulence" x="0" y="0" width="100%" height="100%">
            <feTurbulence
              id="water-filter"
              numOctaves={3}
              seed={2}
              baseFrequency={0.03}
            />
            <feDisplacementMap in="SourceGraphic" scale={60} />
            <animate
              xlinkHref="#water-filter"
              attributeName="baseFrequency"
              dur="60s"
              keyTimes="0; 1"
              values="0.03; 0.06"
              repeatCount="indefinite"
            />
          </filter>
        </svg>
      </Div>
    </Div>
  );
}
