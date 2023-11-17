import { useState } from "react";

function IndexPopup() {
  // State variables to manage user input and response
  const [command, setCommand] = useState('');
  const [response, setResponse] = useState('You will see your translation to English here 💞');

  // Function to handle generating a response
  async function handleGenerateResponse() {
    try {
      if (command.trim() === '') {
        setResponse("String cann't be empty 😟");
        return;
      }

      // Make an API request to the backend to generate a response
      const response = await fetch('http://localhost:3000/api/generateResponse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ command }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status} 😣`);
      }

      // Parse the API response and update the UI with the generated text
      const data = await response.json();
      setResponse(data[0].translation_text);
    } catch (error) {
      console.error(error);
      setResponse('An error occurred while translating the response. 😣');
    }
  }

  return (
    <div style={{ width: 500, height: 500, padding: 16 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: 70, fontSize: 17, textAlign: "justify", textJustify: "inter-word" }}>
      <img src={require('./2.png')} style={{ width: "130px", height: "135px", borderRadius: "50%", border: "3px solid", marginTop: "14px" }} />
        <p>{response}</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "180px" }}>
        <input
          type="text"
          placeholder="Write here 🎈🎈🎈"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          style={{ width: "350px", height: "28px" ,marginBottom: "10px", color: "white", backgroundColor: "#A6E3E9", border: "2px solid #A6E3E9", borderRadius: "4px", fontSize: "1.2rem",  }}
        />
        <button style={buttonStyle} onClick={handleGenerateResponse}>
          Translate 🚀
        </button>
      </div>

    </div>
  );
}

// Style for the "Generate" button
const buttonStyle = {
  backgroundColor: "#71C9CE",
  padding: "8px",
  borderRadius: "4px",
  border: "1px solid #7fc76f",
  width: "22.5rem",
  color: "white",
  fontSize: "1.2rem",
  fontFamily: "sans-serif Helvetica Neue Helvetica",
};

export default IndexPopup;
