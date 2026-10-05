import { useState } from "react"
import PasswordDisplay from "./components/PasswordDisplay"
import PasswordStrength from "./components/PasswordStrength"
import LengthSlider from "./components/LengthSlider"

function App() {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState("")

  const [isUpper, setIsUpper] = useState(false)
  const [isLower, setIsLower] = useState(false)
  const [isNum, setIsNum] = useState(false)
  const [isSpcl, setIsSpcl] = useState(false)

  // ================= GENERATE PASSWORD =================

  const generatePassword = (
    passwordLength = length,
    upper = isUpper,
    lower = isLower,
    num = isNum,
    special = isSpcl
  ) => {
    let characters = ""

    if (upper) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    if (lower) {
      characters += "abcdefghijklmnopqrstuvwxyz"
    }

    if (num) {
      characters += "0123456789"
    }

    if (special) {
      characters += "!@#$%^&*"
    }

    // Nothing selected
    if (characters.length === 0) {
      setPassword("")
      return
    }

    let newPassword = ""

    for (let i = 0; i < passwordLength; i++) {
      const index = Math.floor(
        Math.random() * characters.length
      )

      newPassword += characters[index]
    }

    setPassword(newPassword)
  }

  // ================= GENERATE BUTTON =================

  const handleGenerate = () => {
    generatePassword()
  }

  // ================= LENGTH =================

  const handleLengthChange = (newLength) => {
    setLength(newLength)

    if (password) {
      generatePassword(
        newLength,
        isUpper,
        isLower,
        isNum,
        isSpcl
      )
    }
  }

  // ================= UPPERCASE =================

  const handleUpperChange = (value) => {
    setIsUpper(value)

    generatePassword(
      length,
      value,
      isLower,
      isNum,
      isSpcl
    )
  }

  // ================= LOWERCASE =================

  const handleLowerChange = (value) => {
    setIsLower(value)

    generatePassword(
      length,
      isUpper,
      value,
      isNum,
      isSpcl
    )
  }

  // ================= NUMBERS =================

  const handleNumChange = (value) => {
    setIsNum(value)

    generatePassword(
      length,
      isUpper,
      isLower,
      value,
      isSpcl
    )
  }

  // ================= SPECIAL CHARACTERS =================

  const handleSpecialChange = (value) => {
    setIsSpcl(value)

    generatePassword(
      length,
      isUpper,
      isLower,
      isNum,
      value
    )
  }

  return (
    <main className="min-h-screen bg-[#F7F3EA] px-4 py-10 text-[#242321]">

      <div className="mx-auto w-full max-w-5xl">

        {/* ================= HEADER ================= */}

        <header className="mb-10 text-center">

          {/* Logo */}

          <div className="mb-5 flex justify-center">

            <div className="relative h-16 w-14">

              {/* Lock body */}

              <div className="absolute bottom-0 left-1/2 h-10 w-9 -translate-x-1/2 rounded-b-lg bg-[#242321]">

                {/* Orange part */}

                <div className="absolute bottom-0 left-0 h-5 w-full overflow-hidden rounded-br-lg">

                  <div className="absolute -bottom-3 -left-2 h-8 w-14 rotate-[-35deg] bg-[#F15A24]" />

                </div>

              </div>

              {/* Lock shackle */}

              <div className="absolute left-1/2 top-0 h-9 w-7 -translate-x-1/2 rounded-t-full border-[7px] border-b-0 border-[#242321]" />

              {/* Spark */}

              <span className="absolute right-0 top-3 text-2xl text-[#F15A24]">
                ✦
              </span>

            </div>

          </div>

          {/* Title */}

          <h1 className="font-['Space_Grotesk'] text-5xl font-bold tracking-tighter md:text-6xl">
            Password<span className="text-[#F15A24]">.</span>
          </h1>

          {/* Tagline */}

          <div className="mt-3 flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.35em] text-[#756F67]">

            <span>Secure</span>

            <span className="text-[#F15A24]">•</span>

            <span>Simple</span>

            <span className="text-[#F15A24]">•</span>

            <span>Yours</span>

          </div>

          <p className="mt-4 text-base text-[#756F67] md:text-lg">
            Create strong, customizable passwords in seconds.
          </p>

        </header>


        {/* ================= MAIN CARD ================= */}

        <section className="rounded-4xl border border-[#E4DDD1] bg-[#FFFDF8] p-5 shadow-[0_25px_70px_rgba(50,43,35,0.10)] md:p-8">

          {/* Password + options */}

          <PasswordDisplay
            password={password}
            onGenerate={handleGenerate}
            isUpper={isUpper}
            isLower={isLower}
            isNum={isNum}
            isSpcl={isSpcl}
            onUpperChange={handleUpperChange}
            onLowerChange={handleLowerChange}
            onNumChange={handleNumChange}
            onSpecialChange={handleSpecialChange}
          />

          {/* Strength */}

          <div className="mt-7">

            <PasswordStrength
              password={password}
              isUpper={isUpper}
              isLower={isLower}
              isNum={isNum}
              isSpcl={isSpcl}
            />

          </div>

          {/* Length */}

          <div className="mt-8 border-t border-[#E9E2D7] pt-7">

            <LengthSlider
              length={length}
              setLength={handleLengthChange}
            />

          </div>

        </section>


        {/* ================= FOOTER ================= */}

        <p className="mt-6 text-center text-xs tracking-wide text-[#9A9389]">
          Generate locally. Nothing is stored.
        </p>

      </div>

    </main>
  )
}

export default App