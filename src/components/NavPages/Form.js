import React from "react";
import { Button, Form, Input, message } from "antd";
import "../../index.css";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 10,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};

export default function ContactForm() {
  const [form] = Form.useForm();
  // console log the values entered by user and reset the values after sending data
  const onFinish = (values) => {
    console.log(values);
    form.resetFields();
  };
  // diplay a success message after sending form
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Contact form submitted",
    });
  };

  return (
    <div>
      <h2>Contact Me:</h2>
      <Form
        style={{ padding: "100px 0 100px 0" }}
        {...layout}
        form={form}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label={<spam style={{ fontSize: "25px" }}>Name</spam>}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label={<spam style={{ fontSize: "25px" }}>Email</spam>}
          rules={[
            {
              type: "email",
            },
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "message"]}
          label={<spam style={{ fontSize: "25px" }}>Message</spam>}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 12,
          }}
        >
          {contextHolder}
          <Button type="primary" htmlType="submit" onClick={success}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
