import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({setIssueRequest, displayItems, issueRequest}) {
  return (
    <main>
      <NewPlantForm issueRequest={issueRequest} setIssueRequest={setIssueRequest} />
      <Search />
      <PlantList displayItems={displayItems} />
    </main>
  );
}

export default PlantPage;
