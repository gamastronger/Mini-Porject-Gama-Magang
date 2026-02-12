import { useState } from "react";
import './fromPosts.css'

function FormPosts({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      id: Date.now(),
      title: title,
      body: body
    };

    console.log(newPost);

    onAddPost(newPost);

    setTitle("");
    setBody("");
  };


  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tambah Post</h2>

      <input
        type="text"
        placeholder="Judul"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <textarea
        placeholder="Isi Post"
        value={body}
        onChange={(event) => setBody(event.target.value)}
      />

      <button>Tambah</button>
    </form>
  );
}

export default FormPosts;
