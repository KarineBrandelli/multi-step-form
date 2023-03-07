export const Step1 = () => {
  return (
    <>
      <form>
        <h4 className="font-bold text-4xl text-blue-marine mb-3">
          Personal info
        </h4>
        <p className="text-gray-cool text-lg mb-10">
          Please provide your name, email address, and phone number.
        </p>

        <div className="flex flex-col mb-6">
          <label htmlFor="name" className="text-lg">
            Name
          </label>

          <input
            className="p-4 mt-2 rounded-lg font-medium border-2 border-gray-light outline-none focus:outline-none focus:border-blue-marine transition focus:duration-500 ease-in-out"
            id="name"
            type="text"
            placeholder="Stephen Hawking" />
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="email" className="text-lg">Email Address</label>

          <input
            className="p-4 mt-2 rounded-lg font-medium border-2 border-gray-light outline-none focus:outline-none focus:border-blue-marine transition focus:duration-500 ease-in-out"
            id="email"
            type="text"
            placeholder="stephenhawking@email.com" />
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="phone" className="text-lg">Phone Number</label>

          <input
            className="p-4 mt-2 rounded-lg font-medium border-2 border-gray-light outline-none focus:outline-none focus:border-blue-marine transition focus:duration-500 ease-in-out"
            id="phone"
            type="text"
            placeholder="54 91234 5678" />
        </div>
      </form>
      <div className="flex justify-end">
        <button className="bg-blue-purplish text-gray-light rounded-lg w-40 py-3 font-bold hover:opacity-80 transition">
          Next Step
        </button>
      </div>
    </>
  );
};
