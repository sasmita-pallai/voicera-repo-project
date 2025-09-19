import {
  InputField,
  IconStatus,
  InputSize,
  InputType,
} from '../../utils/InputField';
import { Button } from '../../utils/MainButton/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../api/auth';

type Props = {
  onForgot: () => void;
  onLoginSuccess: () => void;
};

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const LoginForm: React.FC<Props> = ({ onForgot, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await loginUser(email, password);

      const token = response.data.access_token;

      if (token) {
        localStorage.setItem("authToken", token); // ✅ Save token to localStorage
        onLoginSuccess();
        navigate('/main');
      } else {
        alert("Login failed: No token found.");
      }
    } catch (err: any) {
      alert(err?.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[428px] border border-borderInverseOpaque px-6 py-2 rounded-xl bg-backgroundInverseSecondary/60">
      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-center gap-4 h-[52px]">
          <img src="/images/logo/logo.png" alt="logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold text-primaryB">Voicera</h1>
        </div>

        <div>
          <h2 className="text-xl font-bold">Welcome Back</h2>
          <p className="text-sm text-primaryB">Please enter your password</p>
        </div>

        <form
          className="space-y-4 text-lg"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <InputField
            label="Your Work Email"
            type={InputType.EMAIL}
            size={InputSize.MD}
            placeholder="example@email.com"
            counter={{ max: 30 }}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent"
            iconStatus={isValidEmail(email) ? IconStatus.COMPLETE : undefined}
          />

          <InputField
            label="Password"
            type={InputType.PASSWORD}
            size={InputSize.MD}
            placeholder="Enter your password"
            counter={{ max: 20 }}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-transparent"
            iconStatus={password.length > 0 ? IconStatus.CLOSE : undefined}
          />

          <Button
            variant="primary"
            size="md"
            onClick={handleLogin}
            className="w-[380px] mt-5"
            processing={loading}
          >
            Log In
          </Button>
        </form>

        <div
          className="text-sm text-right cursor-pointer text-primaryB hover:text-accent"
          onClick={onForgot}
        >
          Forgot password?
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
