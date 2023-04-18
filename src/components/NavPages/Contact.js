import React from "react";
// importing form.js to return it in contact function.
import ContanctForm from "./Form.js";
import Layout from "antd/es/layout/layout.js";

export default function Contact() {
  return (
  <Layout className="layout">
  <ContanctForm />
  </Layout>);
}
