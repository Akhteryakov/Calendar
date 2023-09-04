import { Layout, Menu, Row } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Navbar: FC = () => {
  const auth = true;
  const navigate = useNavigate();
  const handleClick = () => navigate("/login");
  return (
    <Layout.Header>
      <Row justify="end">
        {auth ? (
          <>
            <div style={{ color: "white" }}> UserName </div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={() => console.log("logout")} key={1}>
                Logout
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item onClick={handleClick} key={1}>
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
