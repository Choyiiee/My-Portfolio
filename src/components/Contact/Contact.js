import React from "react";
import { Form, Input, Button } from "antd";
import { SendOutlined, MailOutlined, LinkedinOutlined, GithubOutlined } from "@ant-design/icons";
import useScrollReveal from "../../utils/useScrollReveal";
import "./Contact.css";

const { TextArea } = Input;

function Contact({ formStatus, handleSubmit, formRef }) {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="connect-section reveal" ref={ref}>
      <div className="section-header-row">
        <span className="section-index">05 / CONNECT</span>
        <h2 className="section-main-title">
          Let's build something{" "}
          <span className="italicized-serif">together.</span>
        </h2>
      </div>

      <div className="connect-split-layout">
        <div className="connect-form-panel">
          <Form
            ref={formRef}
            onFinish={handleSubmit}
            layout="vertical"
            className="minimal-form"
          >
            <div className="input-group-row">
              <Form.Item
                name="name"
                label="NAME"
                rules={[{ required: true, message: "Please enter your name" }]}
                className="input-block"
              >
                <Input placeholder="Juan Dela Cruz" />
              </Form.Item>
              <Form.Item
                name="email"
                label="EMAIL ADDRESS"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
                className="input-block"
              >
                <Input placeholder="juan@example.com" />
              </Form.Item>
            </div>
            <Form.Item
              name="subject"
              label="SUBJECT MATTER"
              rules={[{ required: true, message: "Please enter a subject" }]}
              className="input-block"
            >
              <Input placeholder="Project Inquiry / Collaboration" />
            </Form.Item>
            <Form.Item
              name="message"
              label="MESSAGE TEXT"
              rules={[{ required: true, message: "Please enter your message" }]}
              className="input-block"
            >
              <TextArea placeholder="Describe your concept or structural goals..." rows={4} />
            </Form.Item>
            <div className="form-action-footer">
              <Button
                type="primary"
                htmlType="submit"
                icon={<SendOutlined />}
                className="form-submit-btn"
              >
                {formStatus}
              </Button>
              <span className="form-notice">
                TYPICAL RESPONSE TIME // 24 HOURS
              </span>
            </div>
          </Form>
        </div>

        <div className="connect-cards-panel">
          <div className="editorial-contact-links">
            <a
              href="mailto:johnavilawork@gmail.com"
              className="row-link-item"
            >
              <span className="link-tag"><MailOutlined /> EMAIL</span>
              <span className="link-text">johnavilawork@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="row-link-item"
            >
              <span className="link-tag"><LinkedinOutlined /> LINKEDIN</span>
              <span className="link-text">John Botchoy B. Avila</span>
            </a>
            <a
              href="https://github.com/Choyiiee"
              target="_blank"
              rel="noreferrer"
              className="row-link-item"
            >
              <span className="link-tag"><GithubOutlined /> GITHUB</span>
              <span className="link-text">github.com/Choyiiee</span>
            </a>
          </div>
          <div className="location-stamp">
            <h5>OPERATIONAL BASE</h5>
            <p>San Fernando, Pampanga, Philippines</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
