import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TableProduct from './Table';
import { products } from './data';


function NavBar() {
    const dienTu = products.filter((item) => item.category == "Điện tử")
    const thoitrang = products.filter((item) => item.category == "Thời trang");
    const giaoDuc = products.filter((item) => item.category == "Giáo dục")
    products.push({ name: "Sản phẩm 20", category: "Văn phòng phẩm", price: 90, year: 2022, imageUrl: "/images/event-3.jpg" })
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="All">
        <TableProduct data={products}></TableProduct>
      </Tab>
      <Tab eventKey="profile" title="Dien tu">
      <TableProduct data={dienTu}></TableProduct>
      </Tab>
      <Tab eventKey="longer-tab" title="Thoi trang">
      <TableProduct data={thoitrang}></TableProduct>
      </Tab>
      <Tab eventKey="contact" title="Giao duc" >
      <TableProduct data={giaoDuc}></TableProduct>
      </Tab>
    </Tabs>
  );
}

export default NavBar;