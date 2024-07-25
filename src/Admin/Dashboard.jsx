import { Container, Tabs, Tab } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {ProductData} from '../context/ProductContext'
import Home from "./Pages/Home";
import AdminOrders from "./Pages/AdminOrders";
import AllData from "./Pages/AllData";
const Dashboard = ({ user }) => {
  const navigate = useNavigate();
  if (user.role !== "admin") return navigate("/");

  const {adminProducts} = ProductData()
  return (
    <Container>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey={"home"} title={"Dashboard"}>
          <Home products={adminProducts}/>
        </Tab>
        <Tab eventKey={"data"} title={"All Data"}>
          <AllData products={adminProducts}/>
        </Tab>
        <Tab eventKey={"orders"} title={"Orders"}>
          <AdminOrders/>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Dashboard;
