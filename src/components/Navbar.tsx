import { Layout, Menu, Row } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Navbar: FC = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleClick = () => navigate("/login");

  return (
    <Layout.Header>
      <Row justify="space-between">
        <div style={{ fontSize: "2rem", fontWeight: "bold", color: "coral" }}>
          CALENDARIUS
        </div>
        {isAuth ? (
          <>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <div style={{ color: "white" }}> UserName </div>
              <Menu.Item onClick={() => console.log("logout")} key={1}>
                Logout
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <div style={{ color: "coral" }}>Unauthorized user</div>
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
