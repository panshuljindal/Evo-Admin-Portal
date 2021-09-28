import "./style.css";

function Security() {
  return (
    <div className="security">
      <h3>Account Security</h3>
      <div className="box">
        <ul>
          <li>Enable Two Factor Authentication</li>
          <li>Reset Password</li>
          <li>Update E-Mail Address</li>
          <li className="red">Deactivate Account</li>
        </ul>
      </div>
    </div>
  );
}

export default Security;
