import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, type CounterState } from './counterSlice';

function App() {
  const count = useSelector((state: CounterState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>count: {count}</h1>
      <button onClick={() => dispatch(increment())}>増やす</button>
      <button onClick={() => dispatch(decrement())}>減らす</button>
    </div>
  );
}

export default App;
