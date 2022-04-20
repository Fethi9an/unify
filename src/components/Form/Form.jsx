import { useState } from "react";
import './Form.css'

const Form = () => {
  const [title, setTitle] = useState(''); //input rutan är tom från början
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = { title, body, category };

    console.log(event);
}

  return (
    <div className="create">
      <h2>Skapa event</h2>
      <form onSubmit={handleSubmit}>
        <label>Evenemangets namn</label>
        <input 
          type="text" 
          required 
          value={title}
          placeholder="Skapa evenemang"
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Kategori</label>
        <select
          value={category}
          required
          onChange={(e) => setCategory(e.target.value)}
        >
          <option label="Välj kategori"></option>
          <option value="konsert">Konsert</option>
          <option value="quiz">Quiz</option>
          <option value="mat&dryck">Mat & Dryck</option>
          <option value="kultur&livsstil">Kultur & Livsstil</option>
          <option value="guider">Guider</option>
          <option value="sport&fritid">Sport & Fritid</option>
          <option value="konst&hantverk">Konst & hantverk</option>
          <option value="hälsa&skönhet">Hälsa & Skönhet</option>
        </select>

        <label for="appt">Tid:</label>
        <input type="time" id="appt" name="appt"></input>

        <label for="date">Datum:</label>
        <input type="date" id="date" name="date"></input>

        <label>Beskrivning:</label>
        <textarea
          required
          value={body}
          placeholder="Beskrivning"
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
               
        <button>Skapa event</button>
      </form>
    </div>
  );
}
 
export default Form;