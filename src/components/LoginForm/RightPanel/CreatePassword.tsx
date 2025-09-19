import { useState } from 'react';
import { InputField, IconStatus, InputSize, InputType } from '../../utils/InputField';
import { Button } from '../../utils/MainButton/Button';
import { resetUserPassword } from '../../../api/auth';

type Props = {
  onCreate: () => void;
};

const CreatePassword: React.FC<Props> = ({ onCreate }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !otp || !newPassword) {
      setError('All fields are required');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await resetUserPassword(email, otp, newPassword);
      alert(res?.message || 'Password reset successfully!');
      onCreate();
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[428px] border border-borderInverseOpaque h-[530px] px-6 py-2 rounded-xl bg-backgroundInverseSecodnary/75">
      <div className="flex flex-col gap-6">
        {/* Logo + Title */}
        <div className="flex items-center justify-center gap-4 h-[52px]">
          <img src="/images/logo/logo.png" alt="logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold text-primaryB">Voicera</h1>
        </div>

        <h2 className="text-xl font-bold">Forgot Password</h2>
        <p className="text-sm text-primaryB">Please enter OTP and create your New Password</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <InputField
            label="Email"
            type={InputType.EMAIL}
            size={InputSize.MD}
            placeholder="Your email"
            iconStatus={email ? IconStatus.COMPLETE : undefined}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            label="OTP"
            type={InputType.TEXT}
            size={InputSize.MD}
            placeholder="Enter OTP"
            iconStatus={otp ? IconStatus.COMPLETE : undefined}
            onChange={(e) => setOtp(e.target.value)}
          />

          <InputField
            label="Create New Password"
            type={InputType.PASSWORD}
            size={InputSize.MD}
            placeholder="Your Password"
            iconStatus={newPassword ? IconStatus.COMPLETE : undefined}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button variant="primary" size="md" className="w-[380px] mt-6" processing={loading}>
            Create Password
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreatePassword;
