export const InputSMSWidget = () => {
  return (
    <form>
      <div className="flex flex-col gap-4">
        <label
          htmlFor="phone-input"
          className="sm:text-md md:text-md text-justify text-xl text-gray-400 xl:text-xl dark:text-gray-200"
        >
          Введите код из СМС
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 start-0 top-0 flex items-center ps-3.5">
            <svg
              className="h-6 w-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M3 5.983C3 4.888 3.895 4 5 4h14c1.105 0 2 .888 2 1.983v8.923a1.992 1.992 0 0 1-2 1.983h-6.6l-2.867 2.7c-.955.899-2.533.228-2.533-1.08v-1.62H5c-1.105 0-2-.888-2-1.983V5.983Zm5.706 3.809a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Zm2.585.002a1 1 0 1 1 .003 1.414 1 1 0 0 1-.003-1.414Zm5.415-.002a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            id="phone-input"
            aria-describedby="helper-text-explanation"
            className="block h-12 w-full border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            pattern="[0-9]{4}"
            placeholder="_ _ _ _"
            required
          />
        </div>
        <p className="text-center text-sky-400 underline decoration-sky-400 hover:text-sky-700 hover:decoration-sky-500">
          Не пришла СМС?
        </p>
        <button
          type="button"
          className="md:text-md text-md mb-4 me-2 h-14 rounded-md bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 lg:text-lg xl:text-xl dark:focus:ring-blue-800"
        >
          Войти
        </button>
      </div>
    </form>
  );
};
