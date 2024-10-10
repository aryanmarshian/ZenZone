import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const LowStage = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const sendMessageToGemini = async (message) => {
    const apiKey = 'AIzaSyB0n5PzyWzJIwWZLt8VXWzE5fDyD44v09g'; // Replace with your actual API key
    const apiEndpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}';

    try {
      const response = await axios.post(apiEndpoint, {
        prompt: {
          text: message, // Adjusted to match the API's expected format
        },
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.data?.prompt?.text || "I couldn't process your request. Please try again later.";
    } catch (error) {
      console.error('Error sending message to Gemini API:', error.response ? error.response.data : error.message);
      return "Sorry, we're facing some technical difficulties. Please try again later.";
    }
  };


  const handleSendMessage = async () => {
    if (userMessage.trim()) {
      setChatHistory([...chatHistory, { sender: 'user', text: userMessage }]);
      const response = await sendMessageToGemini(userMessage);
      setChatHistory((prev) => [...prev, { sender: 'gemini', text: response }]);
      setUserMessage('');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatAndResourcesContainer}>
        <div style={styles.chatContainer}>
          <h2 style={styles.header}>Support Chat</h2>

          <div style={styles.reassuranceMessage}>
            <p>It's okay, you're on the path to recovery.</p>
            <p>You're not at high risk. You can chat with us and resolve your queries.</p>
          </div>

          <div style={styles.chatHistory} ref={chatContainerRef}>
            {chatHistory.map((msg, index) => (
              <div key={index} style={msg.sender === 'user' ? styles.userMessage : styles.botMessage}>
                <strong>{msg.sender === 'user' ? 'You' : 'Gemini'}:</strong> {msg.text}
              </div>
            ))}
          </div>

          <div style={styles.inputContainer}>
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              style={styles.input}
              placeholder="Type a message..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button onClick={handleSendMessage} style={styles.sendButton}>
              Send
            </button>
          </div>
        </div>

        <div style={styles.resourcesContainer}>
          <h3 style={styles.resourcesHeader}>Helpful Resources</h3>
          <div style={styles.cardsContainer}>
            <a href="https://www.youtube.com/watch?v=3iUf73v92lI&pp=ygUhbWVkaXRhdGlvbiBleGVyY2lzZSBmb3Igc3R1ZGVudHMg" style={styles.card}>
              <img src="https://media.cnn.com/api/v1/images/stellar/prod/220531190304-woman-meditation-stock.jpg?q=w_1110,c_fill" alt="Meditation Exercises" style={styles.cardImage} />
              <p>Meditation Exercises</p>
            </a>
            <a href="https://www.healthline.com/nutrition/29-healthy-snacks-for-weight-loss#TOC_TITLE_HDR_2" style={styles.card}>
              <img src="https://assets.sweat.com/html_body_blocks/images/000/013/890/original/EasyHealthySnacks_en65ab5213130c9862172ac11435f055d9_en38b28edc7b2830a46f6e00bfeceeb1b6.jpg?1596090039" alt="Healthy Snacks" style={styles.cardImage} />
              <p>Healthy Snacks</p>
            </a>
            <a href="https://www.youtube.com/watch?v=AzV3EA-1-yM" style={styles.card}>
              <img src="https://static.toiimg.com/photo/92102052.cms" alt="Exercise Routines" style={styles.cardImage} />
              <p>Exercise Routines</p>
            </a>
            <a href="https://kidshealth.org/en/teens/addictions.html" style={styles.card}>
              <img src="https://www.shutterstock.com/image-photo/serious-young-doctor-woman-writing-600nw-2389637613.jpg" alt="Learn more about addiction" style={styles.cardImage} />
              <p>Learn More About Addiction</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f4f8',
    padding: '20px',
  },
  chatAndResourcesContainer: {
    display: 'flex',
    justifyContent: 'space-between', // This makes the chatbot and resources sit side by side
    width: '100%',
    maxWidth: '1200px', // Container width
  },
  chatContainer: {
    width: '45%', // Adjusting width to make room for resources
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
  header: {
    backgroundColor: '#6AD4DC',
    color: '#ffffff',
    padding: '15px',
    margin: 0,
    textAlign: 'center',
  },
  reassuranceMessage: {
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#d4edda',
    color: '#155724',
    fontSize: '14px',
  },
  chatHistory: {
    height: '300px',
    overflowY: 'auto',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#e3f2fd',
    borderRadius: '15px 15px 0 15px',
    padding: '8px 12px',
    marginBottom: '8px',
    maxWidth: '70%',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f1f0f0',
    borderRadius: '15px 15px 15px 0',
    padding: '8px 12px',
    marginBottom: '8px',
    maxWidth: '70%',
  },
  inputContainer: {
    display: 'flex',
    padding: '10px',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '20px',
    marginRight: '10px',
  },
  sendButton: {
    padding: '10px 20px',
    backgroundColor: '#6AD4DC',
    color: '#ffffff',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  resourcesContainer: {
    width: '45%', // Adjusted to make it sit next to the chat container
  },
  resourcesHeader: {
    color: '#333',
    marginBottom: '10px',
    textAlign: 'center',
  },
  cardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // 2x2 layout
    gap: '10px',
  },
  card: {
    display: 'block',
    textAlign: 'center',
    textDecoration: 'none',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    color: '#333',
  },
  cardImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
};

export default LowStage;