import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import React from "react";
import { rules } from "../utils/rules";

const EventForm: React.FC = () => {
  return (
    <Form>
      <Form.Item
        label="Event description"
        name="description"
        rules={[rules.required()]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Date of the event"
        name="data"
        rules={[rules.required()]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={(value: string) => console.log(` selected ${value}`)}
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
            { value: "disabled", label: "Disabled", disabled: true },
          ]}
        />
      </Form.Item>

      <Row justify="end">
        <Button type="primary" htmlType="submit">
          {" "}
          Create event
        </Button>
      </Row>
    </Form>
  );
};

export default EventForm;
