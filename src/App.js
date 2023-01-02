import "./App.css";
import LikeImage from "./components/LikeImage";
import LikeImageCC from "./components/LikeImageCC";
import LikePost from "./components/LikePost";
import LikePostCC from "./components/LikePostCC";
import CounterCC from "./components/CounterCC";

function App() {
  return (
    <div>
      <h1>Some Blog</h1>
      <h4>HOC Method</h4>
      <div className="buttons">
        <LikePost />
        <LikeImage />
      </div>
      <h4>Render Props Method</h4>
      <div className="buttons">
        <CounterCC
          render={(count, increase) => (
            <LikeImageCC count={count} increase={increase} />
          )}
        />
        <CounterCC
          render={(count, increase) => (
            <LikePostCC count={count} increase={increase} />
          )}
        />
      </div>
    </div>
  );
}

export default App;
