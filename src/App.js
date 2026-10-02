import "./app.css";
import "./style.css";

export default function App() {
  return (
    <div>
      {/** ------- Aufgabe 1 ----- */}
      <button>Button 1</button>
      <br />
      <br />
      <button style={{color:"green", fontSize:20, backgroundColor: "red"}}>Button 2</button>

      {/** ------- Aufgabe 2 ----- */}
      <div id="Elternelement" style={{display: "flex", flexDirection: "row", width: "500px", border: "2px dashed grey", justifyContent: "space-between"}}>
        <div id="Kinderelement" style={{backgroundColor:"red"}}>Kinder</div>
        <div id="Kinderelement" style={{backgroundColor:"blue"}}>Kinder</div>
        <div id="Kinderelement" style={{backgroundColor:"green"}}>Kinder</div>
        <span id="Kinderelement">Kinder</span>
      </div>
    </div>
  );
}

