import "./LoginBlock.css";
import InputField from "./InputField/InputField";

const LoginBlock = ({
  email,
  password,
  setEmail,
  setPassword,
  signIn,
  createAccount,
}) => (
  <div className="Login-Block">
    <InputField
      type="text"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <InputField
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button onClick={signIn}>Sign In</button>
    <button onClick={createAccount}>Create Account</button>
  </div>
);

export default LoginBlock;
