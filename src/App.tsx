import "./styles.css";
import GiftList from "./components/list";
export default function App() {
  return (
    <div className="App">
      <div className="gift-box">
        <h1>Regalos</h1>
        <GiftList />
      </div>
    </div>
  );
}
