import { useState } from 'react';
import { InputField, InputSize, IconStatus, InputType } from '../../utils/InputField';
import { Button } from '../../utils/MainButton/Button';
import { forgotPassword } from '../../../api/auth.ts';

type Props = {
  onNext: () => void;
  onBackToLogin: () => void;
};

const ResetPassword: React.FC<Props> = ({ onNext, onBackToLogin }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert('Please enter your email');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await forgotPassword(email);
      alert(res?.message || 'OTP sent to your email');
      onNext();
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[428px] border border-borderInverseOpaque px-6 py-2 rounded-xl bg-backgroundInverseSecodnary/75">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-center gap-4 h-[52px]">
          <img src="/images/logo/logo.png" alt="logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold text-primaryB">Voicera</h1>
        </div>

        <h2 className="text-xl font-bold">Reset your password</h2>
        <p className="text-sm text-primaryB">
          We'll send reset instructions to your registered email.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <InputField
            label="Your Email ID here"
            type={InputType.EMAIL}
            size={InputSize.MD}
            iconStatus={email ? IconStatus.COMPLETE : undefined}
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button variant="primary" size="md" className="w-[380px] mt-6" processing={loading}>
            Next
          </Button>

          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>

        <div
          className="text-center text-blue-500 underline cursor-pointer"
          onClick={onBackToLogin}
        >
          Return to Log in
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
