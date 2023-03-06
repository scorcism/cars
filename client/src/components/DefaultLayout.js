import React from "react";
import { Menu, Dropdown, Button, Space, Row, Col } from "antd";
import { Link } from 'react-router-dom'

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem('user'))
  const currUser = user.username;
  // console.log(uname[2])
  const menu = (
    <Menu>
      <Menu.Item>
        <a

          href="/"
        >
          Home
        </a>
      </Menu.Item>
      <Menu.Item>
        <a

          href="/userbookings"
        >
          Bookings
        </a>
      </Menu.Item>
      <Menu.Item>
        <a style={{ display: currUser === 'admin' ? 'bock' : 'none' }} href="/admin" > Admin </a>
      </Menu.Item>
      <Menu.Item onClick={() => {
        localStorage.removeItem('user');
        window.location.href = '/login'
      }}>
        <li style={{ color: 'orangered' }}>Logout</li>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <div className="header bs1">
        <Row gutter={16} justify='center'>
          <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-between">
              <div className="d-flex h_own">
              <h4 ><b><Link to='/' style={{ color: 'orangered' }}>Prathamesh Cars</Link></b></h4>
              <p ><Link to='/faqs' style={{ color: 'orangered' }}>FAQs</Link></p>
              <p ><Link to='/aboutus' style={{ color: 'orangered' }}>About us</Link></p>
              <p ><Link to='/contactus' style={{ color: 'orangered' }}>Contact us</Link></p>
              <p ><Link to='/tandc' style={{ color: 'orangered' }}>T&C</Link></p>
              </div>

              <Dropdown overlay={menu} placement="bottomCenter">
                <Button>{user.username}</Button>
              </Dropdown>
            </div>
          </Col>
        </Row>

      </div>
      <div className="content">{props.children}</div>

      <div className="footer text-center">
        <hr />

        <p>Desinged and Developed By</p>



        <p className="developer_name">Prathamesh Cars</p>

      </div>
    </div>
  );
}

export default DefaultLayout;
