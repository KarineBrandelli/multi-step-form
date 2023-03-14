import { useForm } from "react-hook-form";

export const Step1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => {};

  console.log(errors);

  const registerValidation = {
    name: {
      required: "Input cannot be empty.",
      pattern: {
        value: /[a-zA-Z\s]+$/,
        message: "Numbers and special characters are not allowed.",
      },
    },
    email: {
      required: "Input cannot be empty.",
      pattern: {
        value: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        message: "Only user@domain.com emails are allowed.",
      },
    },
    phone: {
      required: "Input cannot be empty.",
      pattern: {
        value: /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/,
        message: "Only 00 00000-0000 phone numbers are allowed.",
      },
    },
  };

  return (
    <>
      <form>
        <div>
          <h4 className="font-bold text-2xl lg:text-4xl text-blue-marine mb-3">
            Personal info
          </h4>
          <p className="text-gray-cool lg:text-lg mb-5 lg:mb-10">
            Please provide your name, email address, and phone number.
          </p>

          <div className="flex flex-col mb-6">
            <label
              htmlFor="name"
              className="lg:text-lg flex justify-between items-center" >
              Name
              {errors.name && (
                <p
                  className="text-red-strawberry text-sm font-medium"
                  role="alert" >
                  {errors.name?.message}
                </p>
              )}
            </label>

            <input
              className={`border ${
                errors.name
                  ? "border-red-strawberry"
                  : "border-gray-light focus:border-blue-marine "
              } p-2 lg:p-4 mt-2 text-sm lg:text-base rounded-lg border-2  outline-none focus:outline-none transition focus:duration-500 ease-in-out`}
              id="name"
              type="text"
              placeholder="Stephen Hawking"
              {...register("name", registerValidation.name)}
              aria-invalid={errors.name ? "true" : "false"} />
          </div>

          <div className="flex flex-col mb-5">
            <label
              htmlFor="email"
              className="lg:text-lg flex justify-between items-center" >
              Email
              {errors.email && (
                <p
                  className="text-red-strawberry text-sm font-medium"
                  role="alert" >
                  {errors.email?.message}
                </p>
              )}
            </label>

            <input
              className={`border ${
                errors.email
                  ? "border-red-strawberry"
                  : "border-gray-light focus:border-blue-marine "
              } p-2 lg:p-4 mt-2 text-sm lg:text-base rounded-lg border-2  outline-none focus:outline-none transition focus:duration-500 ease-in-out`}
              id="email"
              type="text"
              placeholder="stephenhawking@domain.com"
              {...register("email", registerValidation.email)}
              aria-invalid={errors.email ? "true" : "false"} />
          </div>

          <div className="flex flex-col mb-5">
            <label
              htmlFor="phone"
              className="lg:text-lg flex justify-between items-center" >
              Phone Number
              {errors.phone && (
                <p
                  className="text-red-strawberry text-sm font-medium"
                  role="alert" >
                  {errors.phone?.message}
                </p>
              )}
            </label>

            <input
              className={`border ${
                errors.name
                  ? "border-red-strawberry"
                  : "border-gray-light focus:border-blue-marine "
              } p-2 lg:p-4 mt-2 text-sm lg:text-base rounded-lg border-2  outline-none focus:outline-none transition focus:duration-500 ease-in-out`}
              id="phone"
              type="text"
              placeholder="00 00000-0000"
              {...register("phone", registerValidation.phone)}
              aria-invalid={errors.phone ? "true" : "false"} />
          </div>
        </div>
      </form>

      <div className="flex justify-end">
        <NextStepButton handleClick={handleSubmit(handleRegistration)} />
      </div>
    </>
  );
};
