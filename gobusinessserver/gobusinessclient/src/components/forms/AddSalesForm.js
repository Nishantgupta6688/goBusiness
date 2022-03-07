import { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import { useHistory } from 'react-router-dom';

const AddSalesForm = (props) => {
  let history = useHistory();
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [firm , setFirm] = useState(JSON.parse(localStorage.getItem("firm")))

  const submitHandler = (e) => {
    e.preventDefault();
    actions.submitSalesData({
      id: firm.id,
      date,
      amount,
    },history);
  };

  const handleDateInput = (e) => {
    setDate(e.target.value);
  };

  const handleAmountInput = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="screen ">
      <form onSubmit={submitHandler} className="container addSalesForm">
        <input
          type="date"
          placeholder="Select date"
          value={date}
          onChange={handleDateInput}
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="Enter total sales"
          value={amount}
          onChange={handleAmountInput}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default connect(null, actions)(AddSalesForm);
