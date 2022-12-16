import React from "react";
import { Col, Form, Input, Button, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../action/user";
import "./Resetpassword.css";
import {
  UserOutlined,
  HomeOutlined,
  PhoneOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Resetpassword = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const loginError = useSelector((state) => state.user.message);
  useEffect(() => {
    if (user.register == true) {
      alert("Đăng kí thành công tài khoản");
      window.location.reload(navigate("/"));
    }
  }, [user]);

  const onFinish = () => {
    dispatch(register(form.getFieldsValue()));
  };

  const showLoginForm = () => {
    navigate("/signin");
  };

  return (
    <div className="register">
      <h2>Lấy lại mật khẩu</h2>
      <div className="register-form">
        <Form
          name="basic"
          onFinish={onFinish}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          form={form}
        >
          <Form.Item
            style={{ display: "block" }}
            label="Email"
            name="username"
            rules={[
              { required: true, message: "Vui lòng nhập email" },
              { max: 191, message: "Vui lòng không nhập quá 191 ký tự" },
            ]}
          >
            <Input
              //  style={{ width: "60%", textAlign: "center" }}
              className="input"
              placeholder="Nhập Email"
              //   prefix={<UserOutlined />}
            />

            {/* <Input /> */}
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button className="buttonsubmit" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        {loginError && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {loginError.message}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resetpassword;
