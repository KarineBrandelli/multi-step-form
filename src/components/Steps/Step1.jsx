export const Step1 = () => {
  return (
    <>
      <form>
        <h4 className="font-bold text-2xl lg:text-4xl text-blue-marine mb-3">
          Personal info
        </h4>
        <p className="text-gray-cool lg:text-lg mb-5 lg:mb-10">
          Please provide your name, email address, and phone number.
        </p>

        <div className="flex flex-col mb-6">
          <label htmlFor="name" className="lg:text-lg">
            Name
          </label>

          <input
            className="p-2 lg:p-4 mt-2 text-sm lg:text-base rounded-lg border-2 border-gray-light outline-none focus:outline-none focus:border-blue-marine transition focus:duration-500 ease-in-out"
            id="name"
            type="text"
            placeholder="Stephen Hawking"
          />
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="email" className="lg:text-lg">
            Email Address
          </label>

          <input
            className="p-2 lg:p-4 mt-2 text-sm lg:text-base rounded-lg border-2 border-gray-light outline-none focus:outline-none focus:border-blue-marine transition focus:duration-500 ease-in-out"
            id="email"
            type="text"
            placeholder="stephenhawking@email.com"
          />
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="phone" className="lg:text-lg">
            Phone Number
          </label>

          <input
            className="p-2 lg:p-4 mt-2 text-sm lg:text-base rounded-lg border-2 border-gray-light outline-none focus:outline-none focus:border-blue-marine transition focus:duration-500 ease-in-out"
            id="phone"
            type="text"
            placeholder="54 91234 5678"
          />
        </div>
      </form>
      <div className="flex justify-end">
        <button className="bg-blue-purplish text-gray-light border-2 border-blue-purplish rounded-lg py-2 lg:py-4 w-24 lg:w-40 text-sm lg:text-base font-bold hover:opacity-80 transition">
          Next Step
        </button>
      </div>
    </>
  );
};
