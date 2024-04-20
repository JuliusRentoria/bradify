import React, { useState } from 'react';


function AdditionForm() {

  const ScoreOption = () => {
    const scoreOption = [
      {label: "Excellent: 76% - 100% = P20,000"},
      {label: "Good: 51% - 75% = P10,000"},
      {label: "Fair: 26% - 50% = P5,000"},
      {label: "Poor: 0% - 25% = P1,000"},
    ];
    return scoreOption;
  }
    //  AGE
  const [age, setAge] = useState('');
  const ageOption = [
    {label: "", value: null},
    {label: "18-30", value: 10},
    {label: "31-50", value: 20},
    {label: "51 and above", value: 10},
  ]
  //  JOB STATUS
const [status,setStatus] = useState('');
const statusOption = [
    {label: "", value: null},
    {label: "Employed", value: 20},
    {label: "Self-employed", value: 20},
]
//  JOB TENURE
const [tenure,setTenure] = useState('');
const tenureOption = [
    {label: "", value: null},
    {label: "Less than 6 months", value: 6},
    {label: "7 months - 1 year", value: 12},
    {label: "2 years - 5 years", value: 18},
    {label: "6 years - 10 years", value: 24},
    {label: "10 years and above", value: 30},
]
  //    INCOME
  const [income, setIncome] = useState('');
  const incomeOption = [
    {label: "", value: null},
    {label: "Less than 1,000", value: 10,},
    {label: "1,001 - 5,000", value: 20},
    {label: "5,001 - 10,000", value: 30},
    {label: "10,001 - 15,000", value: 40},
    {label: "15,001 and above", value: 50},
]

  const [sum, setSum] = useState('');
  // ADD
  const handleSubmit = (event) => {
    event.preventDefault();
    const result = parseInt(age) + parseInt(income) + parseInt(status) + parseInt(tenure);
    setSum(result / 120 * 100);
  }
  //    DIVISION

  function handleSelectAge(event){
    setAge(event.target.value)
}
function handleSelectIncome(event){
    setIncome(event.target.value)
}
function handleSelectStatus(event){
    setStatus(event.target.value)
}
function handleSelectTenure(event){
    setTenure(event.target.value)
}
// Display Points
  return (
    <form onSubmit={handleSubmit}>

{/* Age */}
      <div className="content">
                <h4>Age</h4>
                <><select className='age-select' onChange={handleSelectAge}>
            {ageOption.map(option => (
                <option value={option.value}>{option.label}</option>
            ))}
        </select>
        <p>{age !== ""? age + ' Points': ''}</p></>
        </div>

      <br />
{/* Income */}
      <div className="content1">
                <h4>Income</h4>
                <><select className='income-select' onChange={handleSelectIncome}>
            {incomeOption.map(option => (
                <option value={option.value}>{option.label}</option>
            ))}
        </select>
        <p><p>{income !== ""? income + ' Points': ''}</p></p></>
        </div>
      
      <br />
{/* Job Status */}
      <div className="content1">
                <h4>Job Status</h4>
                <><select className='income-select' onChange={handleSelectStatus}>
            {statusOption.map(option => (
                <option value={option.value}>{option.label}</option>
            ))}
        </select>
        <p><p>{status !== ""? status + ' Points': ''}</p></p></>
        </div>

        <br />
{/* Job Tenure */}
      <div className="content1">
                <h4>Job Tenure</h4>
                <><select className='income-select' onChange={handleSelectTenure}>
            {tenureOption.map(option => (
                <option value={option.value}>{option.label}</option>
            ))}
        </select>
        <p><p>{tenure !== ""? tenure + ' Points': ''}</p></p></>
        </div>

        {/* SUBMIT */}

      <br />
      <button type="submit">Add</button>
      <br />
      {sum && <p>Your initial score is {Math.floor(sum)}%</p>}
      <ul>
      {ScoreOption().map((option, index) => (
        <li key={index}>{option.label}</li>
      ))}
    </ul>

    
    </form>
  );
}

export default AdditionForm;