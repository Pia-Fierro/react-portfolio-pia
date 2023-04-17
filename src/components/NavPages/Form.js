import React from "react";
import { Layout, Button, Form, Input, message, Space } from "antd";

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
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Contact form submitted",
    });
  };
 
  return (
    <Layout>
      <div>
        <h2>Contact Me:</h2>
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
             {contextHolder}
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginLeft: 220 }}
              onClick={success}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
}
