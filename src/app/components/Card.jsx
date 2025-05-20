import React from 'react';
    import styles from './Card.module.css'; // Import CSS module

    const Card = ({ title, content }) => {
      return (
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <p className={styles.cardContent}>{content}</p>
        </div>
      );
    };

    export default Card;