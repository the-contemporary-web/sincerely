import { bindCSS, Main } from "@flexive/core";

import { Bubble } from "./Bubble";
import styles from "./home.page.module.scss";

const cx = bindCSS(styles);

export function HomePage() {
  return (
    <Main className={cx("HomePage")} f alignC alignM>
      <Bubble size={200} expandDelay={0} expandDuration={1.2}>
        Web Of Webs
      </Bubble>
    </Main>
  );
}
