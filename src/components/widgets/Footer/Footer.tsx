export const Footer = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-bold text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl">
        Ищете провайдера?
      </p>
      <p className="text-md md:text-md lg:text-md text-wrap sm:text-sm xl:text-lg">
        С радостью обеспечим вас Интернетом, Телевидением, Видеонаблюдением и
        многим другим.
      </p>
      <div className="flex gap-6">
        <button
          type="button"
          className="text-md mb-4 h-14 rounded-md bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 text-center font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 md:text-sm lg:text-lg xl:text-xl dark:focus:ring-blue-800"
        >
          Подать заявку
        </button>
        <button
          type="button"
          className="text-md h-14 rounded-md bg-white px-5 text-center text-sky-500 hover:bg-gradient-to-br hover:text-sky-700 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:text-sm md:text-sm lg:text-lg xl:text-xl dark:focus:ring-blue-800"
        >
          Подробнее
        </button>
      </div>
    </div>
  );
};
