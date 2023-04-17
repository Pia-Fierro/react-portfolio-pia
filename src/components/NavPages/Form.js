import React from "react";
import { Layout, Button, Form, Input } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
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
  return (
    <Layout>
      <div style={{}}>
        <Form
          {...layout}
          form={form}
          name="nest-messages"
          onFinish={onFinish}
          style={{
            marginLeft: 250,
            maxWidth: 800,
            paddingTop: 50,
            display: "flex",
            flexDirection: "column",
          }}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
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
            label="Email"
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
            label="Message"
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
              offset: 8,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginLeft: 220 }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
}
