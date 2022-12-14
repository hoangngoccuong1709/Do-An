import { Button, Input, Typography, Form, Checkbox, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../kAcctions/user";
import { useEffect } from "react";
import { useNavigate } from "react-router";
//import { checkToken } from "../../action/user";
import "./csslogin.css";
import { EyeInvisibleOutlined } from "@ant-design/icons";
import { UserOutlined, HomeOutlined, PhoneOutlined } from "@ant-design/icons";
import Card from "antd/lib/card/Card";
const AccountLogin = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const loginError = useSelector((state) => state.user.message);
  console.log(loginError, "loi");
  const navigate = useNavigate();
  useEffect(() => {
    console.log("account", user.tokenChecked);
    if (user.tokenChecked == true) {
      window.location.reload(navigate("/home"));
      // navigate("/home");
    }
  }, [user]);

  const onFinish = () => {
    dispatch(login(form.getFieldsValue()));
  };
  return (
    // <section className="login">
    //   {/* <div className="img-bg">
    //     <img
    //       src="https://btnmt.1cdn.vn/2022/04/27/vo-co-bau-chong-khong-duoc-trong-cay-1.png"
    //       alt="Hình Ảnh Minh Họa"
    //     />
    //   </div> */}
    //   <div className="noi-dung">
    // <div className="form">
    //  <h2>Trang Đăng Nhập</h2>
    // <Form
    //   name="basic"
    //   labelCol={{
    //     span: 8,
    //   }}
    //   wrapperCol={{
    //     span: 8,
    //   }}
    //   initialValues={{
    //     remember: true,
    //   }}
    //   onFinish={onFinish}
    //   // onFinishFailed={onFinishFailed}
    //   autoComplete="off"
    // >
    //   <Form.Item
    //     label="Username"
    //     name="username"
    //     rules={[
    //       {
    //         required: true,
    //         message: "Please input your username!",
    //       },
    //     ]}
    //   >
    //     <Input />
    //   </Form.Item>

    //   <Form.Item
    //     label="Password"
    //     name="password"
    //     rules={[
    //       {
    //         required: true,
    //         message: "Please input your password!",
    //       },
    //     ]}
    //   >
    //     <Input.Password />
    //   </Form.Item>

    //   <Form.Item
    //     name="remember"
    //     valuePropName="checked"
    //     wrapperCol={{
    //       offset: 8,
    //       span: 16,
    //     }}
    //   >
    //     <Checkbox>Remember me</Checkbox>
    //   </Form.Item>

    //   <Form.Item
    //     wrapperCol={{
    //       offset: 8,
    //       span: 16,
    //     }}
    //   >
    //     <Button type="primary" htmlType="submit">
    //       Submit
    //     </Button>
    //   </Form.Item>
    // </Form>
    // <section className="login">
    //   <div className="img-bg">
    //     <img
    //       src="https://btnmt.1cdn.vn/2022/04/27/vo-co-bau-chong-khong-duoc-trong-cay-1.png"
    //       alt="Hình Ảnh Minh Họa"
    //     />
    //   </div>
    //   <div className="noi-dung">
    //     <div className="form">
    <div className="login">
      <h2>Trang Đăng Nhập</h2>
      <div className="login-form">
        {/* <img
        src="https://btnmt.1cdn.vn/2022/04/27/vo-co-bau-chong-khong-duoc-trong-cay-1.png"
        alt="Hình Ảnh Minh Họa"
      /> */}

        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          form={form}
        >
          <Form.Item
            className="input-form"
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item
            className="input-form"
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password prefix={<EyeInvisibleOutlined />} />
          </Form.Item>

          {/* <div className="input-form">
            <p className="dangnhap-dangki">
              Bạn Chưa Có Tài Khoản? <a href="/dangki">Đăng Ký</a>
            </p>
          </div> */}

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button className="buttonsubmit" type="primary" htmlType="submit">
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

    // </section>
  );
};

export default AccountLogin;
