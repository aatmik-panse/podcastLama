import React from "react";
import styles from "./tile.module.css";

const Tile = ({ title, description, icon, color, onClick }) => {
  return (
    <div className={styles.tile} onClick={onClick}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.iconContainer} style={{ backgroundColor: color }}>
        {icon}
      </div>
    </div>
  );
};

export default Tile;
