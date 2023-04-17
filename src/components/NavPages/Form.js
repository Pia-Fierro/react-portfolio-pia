import React from "react";
import { Layout, Button, Form, Input, message } from "antd";

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
        style={{width:"100"}}
          {...layout}
          form={form}
          name="nest-messages"
          onFinish={onFinish}
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
              offset: 12,
            }}
          >
             {contextHolder}
            <Button
              type="primary"
              htmlType="submit"
              onClick={success}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
}
