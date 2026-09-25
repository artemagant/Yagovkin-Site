function love_button() {
  alert("fucku");
}

export function App() {
  return (
    <div className="app">
      Яговкин my love
      <hr/>
      <button onClick={() => {alert("U in love with Яговкин")}}>
        Love
      </button>
    </div>
  );
}

export default App;
