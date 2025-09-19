const Spinner = () => {
      return (
        <div className="flex items-center justify-center">
          <div className="relative w-5 h-5">
            <div className="text-white absolute w-full h-full rounded-full border-3 border-t-[#662dff] animate-spin"></div>
          </div>
        </div>
      );
    };

export default Spinner;