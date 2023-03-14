export const NextStepButton = ({ handleClick }) => {
  return (
    <button
      type="submit"
      onClick={handleClick}
      className="bg-blue-purplish text-gray-light border-2 border-blue-purplish rounded-lg py-2 lg:py-4 w-24 lg:w-40 text-sm lg:text-base font-bold hover:opacity-80 transition" >
      Next Step
    </button>
  );
};
