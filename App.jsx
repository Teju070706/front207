import React, { useState, useEffect } from 'react';

const StudentInfo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const student = {
    name: "John Doe",
    id: "S12345",
    course: "Computer Science",
    grade: "A",
    email: "john.doe@university.edu"
  };

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    },
    title: {
      textAlign: 'center',
      color: '#333',
      marginBottom: '30px'
    },
    desktopContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '20px',
      flexWrap: 'wrap'
    },
    mobileContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    },
    desktopItem: {
      flex: 1,
      minWidth: '180px',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      textAlign: 'center'
    },
    mobileItem: {
      padding: '15px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      borderLeft: '4px solid #007bff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    label: {
      fontWeight: 'bold',
      color: '#555',
      fontSize: '0.9rem'
    },
    value: {
      color: '#333',
      fontSize: '1rem'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Student Information</h2>
      <div style={isMobile ? styles.mobileContainer : styles.desktopContainer}>
        <div style={isMobile ? styles.mobileItem : styles.desktopItem}>
          <span style={styles.label}>Name:</span>
          <span style={styles.value}>{student.name}</span>
        </div>
        <div style={isMobile ? styles.mobileItem : styles.desktopItem}>
          <span style={styles.label}>Student ID:</span>
          <span style={styles.value}>{student.id}</span>
        </div>
        <div style={isMobile ? styles.mobileItem : styles.desktopItem}>
          <span style={styles.label}>Course:</span>
          <span style={styles.value}>{student.course}</span>
        </div>
        <div style={isMobile ? styles.mobileItem : styles.desktopItem}>
          <span style={styles.label}>Grade:</span>
          <span style={styles.value}>{student.grade}</span>
        </div>
        <div style={isMobile ? styles.mobileItem : styles.desktopItem}>
          <span style={styles.label}>Email:</span>
          <span style={styles.value}>{student.email}</span>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;