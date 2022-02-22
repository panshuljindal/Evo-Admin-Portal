import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import Banner from "../components/Banner";
import { useHistory } from "react-router";

//Assets
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
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
	const history = useHistory();

	const handleSubmit = () => {
		axios
			.post("https://vit-events-app.herokuapp.com/club/login", {
				email: email,
				password: password,
			})
			.then((res) => {
				if (res.status === 200) {
					localStorage.setItem("token", res.data.token);
					localStorage.setItem("id", res.data.id);
					setBanner({
						data: res.data.message,
						value: true,
						isOk: true,
					});
					setInterval(() => {
						history.push("/dashboard");
					}, 1500);
				}
			})
			.catch((err) => {
				setBanner({
					data: err.response.data.message,
					value: true,
					isOk: false,
				});
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
						logo={
							<HiOutlineMail fontSize="1.5rem" color="#6E7191" />
						}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<InputBox
						type="password"
						place="Password"
						value={password}
						logo={
							<AiOutlineEye fontSize="1.5rem" color="#6E7191" />
						}
						onChange={(e) => {
							setPassword(e.target.value);
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
