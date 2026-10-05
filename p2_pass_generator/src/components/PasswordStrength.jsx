function PasswordStrength({
  password,
  isUpper,
  isLower,
  isNum,
  isSpcl,
}) {
  let score = 0

  // Length
  if (password.length >= 8) {
    score++
  }

  if (password.length >= 12) {
    score++
  }

  if (password.length >= 16) {
    score++
  }

  // Actual password contents
  if (/[A-Z]/.test(password)) {
    score++
  }

  if (/[a-z]/.test(password)) {
    score++
  }

  if (/[0-9]/.test(password)) {
    score++
  }

  if (/[^A-Za-z0-9]/.test(password)) {
    score++
  }


  let strength = "Not generated"
  let description = "Generate a password to check its strength"

  if (password) {
    if (score <= 2) {
      strength = "Weak"
      description = "Try increasing the length and variety"
    } else if (score <= 4) {
      strength = "Medium"
      description = "A little more variety would help"
    } else if (score <= 6) {
      strength = "Strong"
      description = "Good password combination"
    } else {
      strength = "Very Strong"
      description = "Excellent password combination"
    }
  }


  let strengthColor = "text-[#9A9389]"

  if (password && score <= 2) {
    strengthColor = "text-red-500"
  } else if (password && score <= 4) {
    strengthColor = "text-[#F15A24]"
  } else if (password) {
    strengthColor = "text-green-600"
  }


  return (
    <div className="rounded-2xl border border-[#E4DDD1] bg-[#F8F4EC] p-5">

      {/* Header */}

      <div className="flex items-start justify-between gap-4">

        <div>

          <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#8D867C]">
            Password Strength
          </p>

          <p className="mt-1 text-sm text-[#9A9389]">
            {description}
          </p>

        </div>

        <p className={`whitespace-nowrap font-semibold ${strengthColor}`}>
          {strength}
        </p>

      </div>


      {/* Strength bar */}

      <div className="mt-5 flex gap-1.5">

        {[1, 2, 3, 4, 5, 6, 7].map((item) => {

          const active =
            password && item <= score

          let barColor = "bg-[#DED7CC]"

          if (active) {
            if (score <= 2) {
              barColor = "bg-red-500"
            } else if (score <= 4) {
              barColor = "bg-[#F15A24]"
            } else {
              barColor = "bg-green-600"
            }
          }

          return (
            <div
              key={item}
              className={`h-2 flex-1 rounded-full transition-all duration-300 ${barColor}`}
            />
          )
        })}

      </div>


      {/* Details */}

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">

        {/* Length */}

        <div className="rounded-xl bg-[#FFFDF9] p-3">

          <p className="font-mono text-lg font-bold text-[#292725]">
            {password.length}
          </p>

          <p className="text-xs text-[#91897F]">
            Characters
          </p>

        </div>


        {/* Uppercase */}

        <div
          className={`rounded-xl p-3 ${
            isUpper
              ? "bg-[#FFF0E8]"
              : "bg-[#FFFDF9]"
          }`}
        >

          <p className="text-lg font-bold text-[#292725]">
            Aa
          </p>

          <p className="text-xs text-[#91897F]">
            Uppercase
          </p>

        </div>


        {/* Numbers */}

        <div
          className={`rounded-xl p-3 ${
            isNum
              ? "bg-[#FFF0E8]"
              : "bg-[#FFFDF9]"
          }`}
        >

          <p className="text-lg font-bold text-[#292725]">
            123
          </p>

          <p className="text-xs text-[#91897F]">
            Numbers
          </p>

        </div>


        {/* Symbols */}

        <div
          className={`rounded-xl p-3 ${
            isSpcl
              ? "bg-[#FFF0E8]"
              : "bg-[#FFFDF9]"
          }`}
        >

          <p className="text-lg font-bold text-[#292725]">
            !#
          </p>

          <p className="text-xs text-[#91897F]">
            Symbols
          </p>

        </div>

      </div>

    </div>
  )
}

export default PasswordStrength