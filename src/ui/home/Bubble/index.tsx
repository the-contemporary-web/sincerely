import { bindCSS, type PropsOf } from "@flexive/core";
import { Div } from "@flexive/core";
import { type CSSProperties, useMemo } from "react";

import styles from "./index.module.scss";

const cx = bindCSS(styles);

interface BubbleProps extends PropsOf<"div"> {
  size: number;
  expandDelay: number;
  expandDuration: number;
}

export function Bubble({
  children,
  size,
  sizeC,
  sizeM,
  expandDelay,
  expandDuration,
  ...props
}: BubbleProps) {
  const bubbleStyle: CSSProperties = useMemo(() => {
    return {
      animationDelay: `${expandDelay.toFixed(2)}s`,
      animationDuration: `${expandDuration.toFixed(2)}s`,
    };
  }, [expandDelay, expandDuration]);

  const contentStyle: CSSProperties = useMemo(() => {
    return {
      animationDelay: `${(expandDelay + expandDuration).toFixed(2)}s`,
      animationDuration: `1s`,
    };
  }, [expandDelay, expandDuration]);

  return (
    <Div
      className={cx("Bubble")}
      style={bubbleStyle}
      sizeC={sizeC ?? size}
      sizeM={sizeM ?? size}
      rad="50%"
      {...props}
    >
      <Div className={cx("content")} style={contentStyle} f alignC alignM>
        {children}
      </Div>
    </Div>
  );
}
