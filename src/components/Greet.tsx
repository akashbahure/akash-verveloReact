import React, { useState } from "react";

interface GreetProps {
  name: string;
  surname: string;
  children?: React.ReactNode;
}

const Greet = ({ name, surname, children }: GreetProps) => {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <h2>
        Hello {name} a.k.a {surname}
      </h2>
      {children}
      <p>Likes: {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>Like</button>
    </div>
  );
};

export default Greet;
