import { useState, useEffect } from 'react'
import './App.css';

const App = () => {
  const chords = ["1", "2", "3", "4", "5", "6", "7",
                 "1/3", "2/4", "3/5", "4/6", "5/7", "6/1", "7/2",
                 "1/5", "2/6", "3/7", "4/1", "5/2", "6/3", "7/4"];
  const [num, setNum] = useState(0);

  // add side effect to component
  useEffect(() => {
    // create interval
    const interval = setInterval(
      // set number every 5s
      () => setNum(Math.floor(Math.random() * chords.length+ 1)),
      3000
    );

    // clean up interval on unmount
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="App">
      <h1>{chords[num-1]}</h1>
    </div>
  );
}

export default App;
