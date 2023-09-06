import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { rules } from "../utils/rules";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";
import { Dispatch } from "redux";
import { useTypedSelector } from "../hooks/useTypedSelector";

const LoginForm: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { error, isLoading } = useTypedSelector((state) => state.auth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    dispatch(AuthActionCreators.login(username, password));
  };

  return (
    <Form onFinish={submit} autoComplete="off">
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required("Please input your username!")]}
      >
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required("Please input your password!")]}
      >
        <Input.Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>

      {error && (
        <div style={{ color: "red", margin: "16px 0px", textAlign: "center" }}>
          {error}
        </div>
      )}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
