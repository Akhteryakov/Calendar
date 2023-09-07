import { Layout, Menu, Row } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";
import { useActions } from "../hooks/useActions";

const Navbar: FC = () => {
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();

  return (
    <Layout.Header>
      <Row justify="space-between">
        <div style={{ fontSize: "2rem", fontWeight: "bold", color: "coral" }}>
          CALENDARIUS
        </div>
        {isAuth ? (
          <>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <div style={{ color: "white" }}> {user.username} </div>
              <Menu.Item onClick={() => logout()} key={1}>
                Logout
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <div style={{ color: "coral" }}>Unauthorized user</div>
            <Menu.Item key={1}>Login</Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
