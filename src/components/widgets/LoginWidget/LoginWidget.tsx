import Image from 'next/image';

export const LoginWidget = () => {
  return (
    <div>
      <Image
        className="justify-self-center"
        src={'/logo.png'}
        alt="Logo"
        width={300}
        height={300}
      />
      <div className="mt-4 flex flex-col gap-8">
        <p className="text-bold text-balance text-center text-2xl sm:text-2xl md:text-3xl xl:text-4xl">
          Вход в систему домофонии
        </p>
        <form>
          <div className="flex flex-col gap-4">
            <label
              htmlFor="phone-input"
              className="sm:text-md md:text-md text-justify text-xl text-gray-400 xl:text-xl dark:text-gray-200"
            >
              Введите номер телефона
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 start-0 top-0 flex items-center ps-3.5">
                <svg
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 19 18"
                >
                  <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                </svg>
              </div>
              <input
                type="text"
                id="phone-input"
                aria-describedby="helper-text-explanation"
                className="block h-12 w-full border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                pattern="\+7\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}"
                placeholder="+7 (___) ___-__-__"
                required
              />
            </div>
            <button
              type="button"
              className="md:text-md text-md mb-4 me-2 h-14 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 lg:text-lg xl:text-xl dark:focus:ring-blue-800"
            >
              Выслать код
            </button>
            <button
              type="button"
              className="md:text-md text-md me-2 h-14 bg-white px-5 py-2.5 text-center text-sky-500 hover:bg-gradient-to-br hover:text-sky-700 focus:outline-none focus:ring-4 focus:ring-blue-300 lg:text-lg xl:text-xl dark:focus:ring-blue-800"
            >
              Не пришла СМС
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
