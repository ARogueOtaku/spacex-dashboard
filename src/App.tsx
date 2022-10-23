function App() {
  return (
    <div className="App">
      <pre>{JSON.stringify(import.meta.env, null, "\t")}</pre>
    </div>
  );
}

export default App;
