import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import Banner from "../components/Banner";

//Assets
import Logo from "../assets/brand/logo.svg";
import FilledBtn from "../components/FilledButton";
import InputBox from "../components/InputBox";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [banner, setBanner] = useState({
		data: "",
		value: false,
		isOk: false,
	});

	const handleSubmit = () => {
		axios
			.post("{{BASE_URL}}/club/login", {
				email: email,
				password: password,
			})
			.then((res) => {
				if (res.status === 200) {
					localStorage.setItem("token", res.data.token);
					setBanner({
						data: res.data.message,
						value: true,
						isOk: true,
					});
				}
			})
			.catch((err) => {
				setBanner({ data: err.message, value: true, isOk: false });
			});
	};
	return (
		<div className="main">
			<Banner
				open={banner.value}
				setOpen={(value) => {
					setBanner((prev) => {
						return {
							...prev,
							value: value,
						};
					});
				}}
				text={banner.data}
				isOk={banner.isOk}
			/>
			<div className="left-login">
				<img src={Logo} className="logo-login" alt="Evo Logo"></img>
				<p className="logo-login-text">EVO</p>
				<p className="sub1">Welcome Back</p>
				<p className="sub2">Login to Continue</p>
			</div>
			<div className="right-login">
				<div className="input-box">
					<h1 className="box-head">Login</h1>
					<InputBox
						type="email"
						place="Email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<InputBox
						type="password"
						place="Password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.password);
						}}
					/>
					<br />
					<FilledBtn text="Login" onClick={handleSubmit}></FilledBtn>
				</div>
				<Link to="/register" exact>
					<p className="link-reg">
						New Here? <span>Register Your Club to Continue</span>
					</p>
				</Link>
			</div>
		</div>
	);
}

export default Login;
