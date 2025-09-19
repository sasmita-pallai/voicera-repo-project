
import Subscription from "./Subscription";


const Heading = () => {
  return (
    <div className="space-y-6 max-w-[615px] w-full px-2 sm:px-4">
      <h1 className="text-3xl sm:text-4xl md:text-[62px] font-bold leading-tight">
        NEXT LEVEL <span className="bg-gradient-to-r from-primaryC to-accent bg-clip-text text-transparent">COMMUNICATION</span> MADE SIMPLE
      </h1>
      <p className="text-sm text-contentTertiary sm:text-base">
        Lorem ipsum dolor sit ametuptate maxime. Ab officia doloremque dolores, nulla nisi odio
        perspiciatis eum qui laboriosam doloribus nemo dolor maxime repellendus. Tempora quidem
        ratione magni voluptate delectus aliquid. Consequuntur , molestiae voluptates ullam. Maiores, t.
      </p>
      <Subscription/>
    </div>
  );
};

export default Heading;
