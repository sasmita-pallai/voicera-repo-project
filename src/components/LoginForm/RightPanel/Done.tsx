import { Button } from "../../utils/MainButton/Button";


type Props = {
  onLoginAgain: () => void;
};
const Done: React.FC<Props> = ({ onLoginAgain }) => {
  return (
    <div className="w-full max-w-[428px] border border-borderInverseOpaque px-6 py-2 rounded-xl bg-transparent h-[501px]">
      <div className="flex flex-col items-center space-y-5 gap-[50px]">
        <div className="flex items-center justify-center gap-4 h-[52px]">
          <img src="/images/logo/logo.png" alt="logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold text-primaryB">Voicera</h1>
        </div>
        <div className="p-4 w-[412px] flex flex-col items-center justify-center space-y-4">
          <div className="relative flex items-center justify-center gap-5 ">
            <img
              src="/images/LoginImages/star.svg"
              alt="Violet Bubble"
              className="flex items-center justify-center "
          />
          <img src="/images/LoginImages/check.svg" alt="emoji" className="absolute" />
          </div>
          <div className="text-center ">
            <h1 className="mb-4 text-xl">Password Updated</h1>
           <p>Your password has been updated successfully .Please log in to continue using Voicera </p>
          </div>
          <Button variant="primary" size="xs" className="w-[143px] px-1 py-3 rounded-xl font-semibold h-auto text-primaryA before:bg-primaryB" onClick={onLoginAgain}>Log In Now</Button>

        </div>
      </div>
    </div>
  );
};

export default Done;
