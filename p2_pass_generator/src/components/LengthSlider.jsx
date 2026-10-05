function LengthSlider({ length, setLength }) {
  const min = 8
  const max = 20

  const percentage =
    ((length - min) / (max - min)) * 100

  return (
    <div>

      {/* Header */}

      <div className="mb-5 flex items-end justify-between">

        <div>

          <h2 className="text-lg font-semibold text-[#292725]">
            Password Length
          </h2>

          <p className="mt-1 text-sm text-[#91897F]">
            Choose between {min} and {max} characters
          </p>

        </div>


        {/* Current length */}

        <div className="flex h-12 min-w-12 items-center justify-center rounded-xl bg-[#403D3A] px-3 text-lg font-bold text-white">
          {length}
        </div>

      </div>


      {/* Slider */}

      <input
        type="range"
        min={min}
        max={max}
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
        style={{
          background: `linear-gradient(
            to right,
            #F15A24 ${percentage}%,
            #DED8CE ${percentage}%
          )`,
        }}
        className="h-2 w-full cursor-pointer rounded-full transition-all duration-150  accent-gray-800"
      />


      {/* Min / Max */}

      <div className="mt-3 flex justify-between text-xs font-medium text-[#9B9388]">

        <span>{min}</span>

        <span>{max}</span>

      </div>

    </div>
  )
}

export default LengthSlider