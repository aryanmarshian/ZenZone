import React from 'react';

const HighStage = () => {
  // Function to handle redirection
  const handleCardClick = (url) => {
    window.location.href = url;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>We are here to support you</h1>
      <p style={styles.subheading}>
        You’re not alone in this. Recovery is possible, and we have resources to help you through it.
      </p>
      <div style={styles.cardsContainer}>
        <div style={styles.card} onClick={() => handleCardClick('https://wellknox.com/')}>
          <h2 style={styles.cardTitle}>Rehabilitation Programs</h2>
          <p style={styles.cardText}>
            Comprehensive programs to guide you through recovery and help you regain control over your life.
          </p>
        </div>
        <div style={styles.card} onClick={() => handleCardClick('https://nmba.dosje.gov.in/toll-free')}>
          <h2 style={styles.cardTitle}>Medication-Assisted Treatment (MAT)</h2>
          <p style={styles.cardText}>
            MAT combines medications with counseling and therapy to help you overcome substance use disorders.
          </p>
        </div>
        <div style={styles.card} onClick={() => handleCardClick('https://americanaddictioncenters.org/rehab-guide/aftercare')}>
          <h2 style={styles.cardTitle}>Ongoing Support & Aftercare</h2>
          <p style={styles.cardText}>
            Aftercare planning provides continued support to help you stay on the path of recovery.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f5f8fc',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    color: '#4A90E2',
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  },
  subheading: {
    color: '#333',
    fontSize: '18px',
    marginBottom: '30px',
    textAlign: 'center',
    maxWidth: '600px',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '20px',
    width: '250px',
    textAlign: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer', // Add pointer cursor to indicate it's clickable
  },
  cardTitle: {
    fontSize: '22px',
    color: '#4A90E2',
    marginBottom: '10px',
  },
  cardText: {
    fontSize: '16px',
    color: '#666',
  },
};

export default HighStage;
