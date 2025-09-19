import { InputField, InputSize, InputType } from "../../utils/InputField";
import { Button } from "../../utils/MainButton/Button";

const Subscription = () => {
  return (


      <div className="flex flex-col w-full gap-4 sm:flex-row">
        <InputField
          type={InputType.EMAIL}
          placeholder="Enter your email address"
          size={InputSize.LG}
          className="flex-1 bg-primaryB text-primaryA"
        />
        <Button variant="primary" size="xs" className="w-[176px] py-6">
          Sign Up
        </Button>
      </div>




  );
};

export default Subscription;
