import React from "react";
import { Col, Form, Input, Button, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../action/user";
import "./csssignup.css";
import {
  UserOutlined,
  HomeOutlined,
  PhoneOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";
import { useNavigate } from "react-router";

// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 14 },
// };

const Register = (props) => {
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
  // useEffect(() => {
  //   if (user.tokenChecked == true) {
  //   window.location.reload();
  //   navigate("/thongtinnguoidung");
  //   }
  // }, []);
  //const loginError = useSelector(state => state.user.loginError);
  // const navigate = useNavigate();
  const onFinish = () => {
    dispatch(register(form.getFieldsValue()));
  };

  const showLoginForm = () => {
    navigate("/signin");
  };

  // const onFinish = (values) => {
  //   const { register } = props;
  //   register(values);
  // };

  return (
    // <div className="register_form">
    /* <div className="img-bg">
        <img
          src="https://btnmt.1cdn.vn/2022/04/27/vo-co-bau-chong-khong-duoc-trong-cay-1.png"
          alt="Hình Ảnh Minh Họa"
        />
      </div> */
    /* <h3>Đăng ký</h3> */
    <div className="register">
      <h2>Đăng ký</h2>
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
            label="Tên"
            name="username"
            rules={[
              { required: true, message: "Vui lòng nhập tên" },
              { max: 191, message: "Vui lòng không nhập quá 191 ký tự" },
            ]}
          >
            <Input
              //  style={{ width: "60%", textAlign: "center" }}
              className="input"
              placeholder="Nhập tên đăng nhập"
              prefix={<UserOutlined />}
            />

            {/* <Input /> */}
          </Form.Item>
          <Form.Item
            label="Họ Tên"
            name="fullname"
            rules={[
              { required: true, message: "Vui lòng nhập họ  tên" },
              { max: 191, message: "Vui lòng không nhập quá 191 ký tự" },
            ]}
          >
            <Input
              // style={{ width: "60%", textAlign: "center" }}
              className="input"
              placeholder="Nhập họ và tên"
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[
              { required: true, message: "Vui lòng nhập địa chỉ" },
              // { type: "email", message: "Vui lòng nhập đúng định dạng email" },
              { max: 191, message: "Vui lòng không nhập quá 191 ký tự" },
            ]}
          >
            <Input
              // style={{ width: "60%", textAlign: "center" }}
              className="input"
              placeholder="Nhập địa chỉ"
              prefix={<HomeOutlined />}
            />
          </Form.Item>
          <Form.Item
            label="Phonenumber"
            name="phonenumber"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập số điện thoại",
              },
              { max: 191, message: "Vui lòng không nhập quá 191 ký tự" },
            ]}
          >
            <Input
              // style={{ width: "60%", textAlign: "center" }}
              className="input"
              placeholder="Nhập số điện thoại"
              prefix={<PhoneOutlined />}
            />
          </Form.Item>
          <Form.Item
            className="input"
            label="Mật khẩu"
            name="password"
            rules={[
              { required: true, message: "Vui lòng nhập mật khẩu" },
              { max: 16, message: "Vui lòng không nhập quá 16 kí tự" },
              { min: 6, message: "Vui lòng không nhập dưới 6 kí tự" },
            ]}
          >
            <Input.Password
              // style={{ width: "60%", textAlign: "center" }}
              className="input"
              placeholder="Nhập mật khẩu đăng nhập"
              prefix={<EyeInvisibleOutlined />}
            />
          </Form.Item>
          <Form.Item
            className="input"
            label="Nhập lại mật khẩu"
            name="password_confirmation"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Vui lòng nhập đúng mật khẩu" },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Mật khẩu nhập lại không khớp");
                },
              }),
            ]}
          >
            <Input.Password
              // style={{ width: "60%", textAlign: "center" }}
              className="input"
              placeholder="Nhập lại mật khẩu đăng nhập"
              prefix={<EyeInvisibleOutlined />}
            />
          </Form.Item>
          <Form.Item
            label="Description"
            name="Description"
            rules={[
              { required: true, message: "Vui lòng nhập mô tả bản thân" },
              // { type: "email", message: "Vui lòng nhập đúng định dạng email" },
              { max: 191, message: "Vui lòng không nhập quá 191 ký tự" },
            ]}
          >
            <Input
              // style={{ width: "60%", textAlign: "center" }}
              className="input"
              placeholder="Nhập giới thiệu về bản thân"
              prefix={<HomeOutlined />}
            ></Input>
          </Form.Item>
          <Form.Item
            wrapperCol={{ offset: 6, span: 12 }}
            className="register-button"
          >
            <Button
              style={{ fontSize: 14, margin: 10 }}
              type="primary"
              htmlType="submit"
            >
              Đăng ký
            </Button>
            <Button
              style={{ fontSize: 14, margin: 10 }}
              className="register_form--wrap__register-btn"
              type="danger"
              action="/signin"
              onClick={showLoginForm}
            >
              Đăng nhập
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

export default Register;
