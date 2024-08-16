import React from "react";
import styles from "./nav.module.css";
import { MdOutlineSettings, MdOutlineNotifications } from "react-icons/md";
import Image from "next/image";

function Navbar() {
  return (
    <div className={styles.main}>
      <Image
        src="/logoP.svg"
        alt="Ques.AI logo"
        className={styles.logo}
        height={54}
        width={268}
      />
      <div className={styles.icons}>
        <a>
          <MdOutlineSettings size={54} />
        </a>
        <a>
          <MdOutlineNotifications size={54} />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
