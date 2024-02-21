export default function Method_Info () {
    const title ="This is my title.";
    const showTitle = true;
  
    if(showTitle) {
      return (
        <div>
          <h1>Jamie Mcintosh</h1>
          <h2>{showTitle ? title : "No Title"}</h2>
          <h2>{20+3}</h2>
          <p>Hello world</p>
        </div>
      );
    } else {
      return <p>empty</p>
    }
  }