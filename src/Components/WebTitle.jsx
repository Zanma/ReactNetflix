import { useState } from "react";

function WebTitle({ titleProp, description }) {
  const [title, setTitle] = useState(titleProp);

  function changeTitle() {
    setTitle("Netflix 2.0");
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={changeTitle}>Ganti Judul</button>
    </div>
  );
}

export default WebTitle;
