
import { useState } from 'react';
import BmiList from './components/BmiList';
import Bmiscore from './components/Bmiscore';
import Form from './components/Form'

function App() {
  const [bmi, setbmi] = useState("00")
  const [bmiType, setbmiType] = useState("not calculated")
  const [bmiRange, setBmiRang] = useState({
    underWeight: { low: "" },
    normal: { low: "", high: "" },
    overWeight: { low: "", high: "" },
    obesityOne: { low: "", high: "" },
    obesityTwo: { low: "", high: "" },
    obesityThree: { high: "" },
  });

  const onFormSub = (w, h) => {
    let b = calbmi(w, h);
    setbmi(b);
    let type = weightType(b);
    console.log(b)
    setbmiType(type);
    const range = {
      underWeight: { low: callweigth(18.5, h) },
      normal: { low: callweigth(18.5, h), high: callweigth(24.9, h) },
      overWeight: { low: callweigth(25, h), high: callweigth(29.9, h) },
      obesityOne: { low: callweigth(30, h), high: callweigth(34.9, h) },
      obesityTwo: { low: callweigth(35, h), high: callweigth(39.9, h) },
      obesityThree: { high: callweigth(40, h) }
    }
    setBmiRang(range);
  }
  const callweigth = (b, h) => (b * h * h).toFixed(2);

  const calbmi = (w, h) => {
    return (w / (h * h)).toFixed(2);
  };
  const weightType = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (18.5 < bmi && bmi < 24.9) {
      return "Normal";
    } else if (24.9 < bmi && bmi < 29.9) {
      return "Over Weight";
    } else if (29.9 < bmi && bmi < 34.9) {
      return "Obesity Class I";
    } else if (34.9 < bmi && bmi < 39.9) {
      return "Obesity Class II";
    } else if (bmi > 39.9) {
      return "Obesity Class III";
    }
  };


  return (
    <>
      <div className='container'>
        <div className='row justify-content-center mt-5 mx-2'>
          <Form getData={onFormSub} />
        </div>
        <div className='row justify-content-center mt-5 mx-2'>
          <div className='col-12 col-sm-6 mb-5'>
            <Bmiscore bmiNo={bmi} bmiName={bmiType} />
          </div>
          <div className='col-12 col-sm-6'>
            <BmiList Range={bmiRange} />
          </div>
        </div>


      </div>
    </>
  );
}

export default App;
