import React from "react";
class Class_Info extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
  render() {
    const title = this.props.title;
    const showTitle = true;

    if (showTitle) {
      return (
        <div>
          <h1>Fusion Alli</h1>
          <h2>{title}</h2>
          <h2>{20 + 6}</h2>
          <p>22/23 POTY Winner</p>
        </div>
      );
    } else {
      return <p>empty</p>;
    }
  }
}

Class_Info.defaultProps = {
    title: "default"
}

export default Class_Info;
