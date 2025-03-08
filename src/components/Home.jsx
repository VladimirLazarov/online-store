import { useState } from "react";
import NavBar from "../routes/NavBar";
/*
 Home Component
  This component represents the home page of the application.
 It includes a login/logout feature where users can enter their name to log in
 and see a personalized welcome message. If the user is logged out, they are
  prompted to enter their name to log in.
 */

export default function Home() {
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 /**
    handleLogin Function
    This function is called when the user clicks the "Login" button.
   It checks if the user has entered a name (ignoring whitespace),
   and if so, sets the isLoggedIn state to true.
   */
  const handleLogin = () => {
    if (userName.trim()) {
      setIsLoggedIn(true);
    }
  };
/*
    handleLogout Function
    This function is called when the user clicks the "Logout" button.
    It sets the isLoggedIn state to false and clears the userName state.
   */
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
  };

  return (
    <div>
      <NavBar />
      <h1>Welcome to the Online Store</h1>
      {!isLoggedIn ? (
        <div>
          {/* Input field for the user to enter their name */}
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        // If the user is logged in, show a welcome message and a logout button
        <div>
          <h2>Welcome, {userName}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}