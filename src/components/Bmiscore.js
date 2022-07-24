function Bmiscore({bmiNo,bmiName,ChangeWeight}) {
  //console.log(ChangeWeight);
  return (
    <div className="text-center shadow rounded p-4">
      <div>Your BMI Score</div>
      <div className="row justify-content-md-center">
        <div className="p-3 my-2 alert fs-1 alert-primary col-sm-4">{bmiNo}</div>

      </div>
      <div className="fs-3 fw-bold text-primary">{bmiName}</div>
      {ChangeWeight.type==="positive"&&(
        <div className="fs-4">"you need to lose <span className="fw-bold">{ChangeWeight.wight}kg"</span> </div>
      )} 
      {ChangeWeight.type==="negative"&&(
        <div className="fs-4">you need to gain <span className="fw-bold">{ChangeWeight.wight}kg"</span> </div>
      )}
      {ChangeWeight.type==="normal"&&(
        <div className="fs-4">"yeh you have a healthy weight,<span className="fw-bold">good for you"</span></div>
      )}
    </div>
  )
}

export default Bmiscore
