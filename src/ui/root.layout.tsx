import { Article, bindCSS } from "@flexive/core";
import type { PropsWithChildren } from "react";

import { Background } from "./Background";
import styles from "./root.layout.module.scss";

const cx = bindCSS(styles);

export function RootLayout({ children }: PropsWithChildren) {
  return (
    <Article className={cx("RootLayout")}>
      <Background />
      {children}
    </Article>
  );
}
