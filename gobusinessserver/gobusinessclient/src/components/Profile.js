import {
  faWarehouse,
  faCloud
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="screen flex-row profilePage">
      <ul className="flex-coloumn">
        <li>
          <Link to="/addSalesData"><FontAwesomeIcon className="FontAwesomeIcon" icon={faWarehouse} /></Link><br/>
          <label>Add Sales</label>
        </li>
      </ul>
      <ul className="flex-coloumn">
        <li>
          <Link to="previewSalesData"><FontAwesomeIcon className="FontAwesomeIcon" icon={faCloud} /></Link><br/>
          <label>Preview sales</label>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
