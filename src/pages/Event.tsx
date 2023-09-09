import React, { useState } from "react";
import EventCalendar from "../components/EventCalendar";
import { Button, Layout, Modal, Row } from "antd";
import EventForm from "../components/EventForm";

const Event = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Layout>
      <EventCalendar events={[]} />
      <Row justify="center">
        <Button
          onClick={() => setModalVisible(true)}
          style={{ margin: "16px 0px" }}
        >
          Create new event
        </Button>
      </Row>
      <Modal
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        title="Creating event"
        footer={[]}
      >
        <EventForm />
      </Modal>
    </Layout>
  );
};

export default Event;
