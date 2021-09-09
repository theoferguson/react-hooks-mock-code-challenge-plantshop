import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [displayItems, setDisplayItems] = useState([])
  const [issueRequest, setIssueRequest] = useState(false)

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(json => {
      setDisplayItems(json)
    })
  }, [issueRequest])

  return (
    <div className="app">
      <Header />
      <PlantPage displayItems={displayItems} issueRequest={issueRequest} setIssueRequest={setIssueRequest} />
    </div>
  );
}

export default App;
