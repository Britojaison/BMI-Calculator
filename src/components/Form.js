import { useState } from "react";


function Form({ getData }) {
  const [weight, setweight] = useState("");
  const [height, setheight] = useState("");
  const [alert, setalert] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (isNaN(weight) || isNaN(height)) {
      setalert(true);
      console.log("input is not valid");
    }
    else {
      getData(weight, height)
      setalert(false);
      setweight("")
      setheight("")
    }

  };
  let alertMessage
  if (alert) {
    alertMessage = <div className="alert alert-warning" role="alert">data you given are incorrect</div>
  }
  else {
    alertMessage = ""
  }

  return (

    <div className="col-sm-4 shadow rounded px-5">
      <h1 className="text-center pt-3 text-secondary h2">BMI Calculator</h1>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-sm-6">
            <div className="my-3">
              <label >weight(kg)</label>
              <input type="text"
                value={weight}
                onChange={(e) => setweight(e.target.value)} className="form-control"
                required
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="my-3">
              <label >Heigth(m)</label>
              <input type="text"
                value={height}
                onChange={(e) => setheight(e.target.value)} className="form-control"
                required
              />
            </div>
          </div>
        </div>

        <input type="submit" className="btn btn-primary" value="Get BMI" />

      </form>
      {alertMessage}
    </div>

  )
}

export default Form
