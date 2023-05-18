import "./App.css";
import Article from "./components/article";
import ListOfArticles from "./components/listOfArticles";
import MainContainer from "./containers/mainContainer";

function App() {
  return (
    <div className="App">
      <h1> hello from the app</h1>
      <MainContainer />
      <ListOfArticles />
      <Article />
    </div>
  );
}

export default App;
