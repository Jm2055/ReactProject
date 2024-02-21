import React from "react";
class Class_Info extends React.Component {
  render() {
    const title = "He is the goat";
    const showTitle = true;
    if (showTitle) {
      return (
        <div>
          <h1>Fusion Alli</h1>
          <h2>{showTitle ? title : "No Title"}</h2>
          <h2>{20 + 6}</h2>
          <p>22/23 POTY Winner</p>
        </div>
      );
    } else {
      return <p>empty</p>;
    }
  }
}

export default Class_Info;
