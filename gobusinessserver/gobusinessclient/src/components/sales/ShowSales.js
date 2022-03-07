import { useEffect, useState } from "react";
import {previewSalesData} from '../../redux/actions';
import {connect} from 'react-redux';

const ShowSales = (props) => {
    let annualSales = 0;
    const [firm , setFirm] = useState(JSON.parse(localStorage.getItem("firm")))

    useEffect(() => {
        props.previewSalesData(firm.id)
    },[])

    const totalAnnualSale = () => {
        props.firmSalesData.map(item => {
            annualSales += item.amount
        })
    }

  return (
    <div className="screen">
        {console.log(props.firmSalesData)}
        {totalAnnualSale()}
        <div>
        <p>Total Sales: {annualSales}</p></div>
      <p>showSales</p>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
        firmSalesData: state.salesData
    }
}

export default connect(mapStateToProps,{previewSalesData})(ShowSales);
