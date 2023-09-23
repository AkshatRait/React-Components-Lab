import { useEffect, useState } from "react";
import "./index.css";

const Component3 = () => {
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");
  const [userBio, setUserBio] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <div>
        {submitted ? (
          <div>
            <h4>{userName}</h4>
            <img src={userImage} alt={userImage} />
            <p>{userBio}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="user-container"
        action="user-info"
      >
        <label htmlFor="username">User name</label>
        <input
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Your Name"
        />
        <label htmlFor="user-image">User Image URL</label>
        <input
          onChange={(e) => setUserImage(e.target.value)}
          type="text" // Use "text" instead of "img" for input type
          placeholder="Image URL"
        />
        <label htmlFor="user-bio">User Bio</label>
        <input
          onChange={(e) => setUserBio(e.target.value)}
          type="text"
          placeholder="Your Bio"
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Component3;
