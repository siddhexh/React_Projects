function Card({ name }) {
  return (
    <div className="w-80 rounded-2xl bg-white p-6 text-center shadow-2xl">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-600 text-2xl font-bold text-white">
        {name.charAt(0).toUpperCase()}
      </div>

      <h2 className="mt-4 text-2xl font-bold text-gray-800">
        {name}
      </h2>

      <p className="mt-2 text-gray-500">
        React Developer
      </p>

      <div className="mt-5 flex justify-center gap-3">
        <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700">
          React
        </span>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
          Tailwind
        </span>
      </div>

      <button className="mt-6 w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700">
        View Profile
      </button>
    </div>
  );
}

export default Card;