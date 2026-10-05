import { useEffect, useState } from "react"

function PasswordDisplay({
  password,
  onGenerate,

  isUpper,
  isLower,
  isNum,
  isSpcl,

  onUpperChange,
  onLowerChange,
  onNumChange,
  onSpecialChange,
}) {
  const [copied, setCopied] = useState(false)

  // Reset copied state whenever password changes
  useEffect(() => {
    setCopied(false)
  }, [password])

  const copyPassword = async () => {
    if (!password) {
      return
    }

    try {
      await navigator.clipboard.writeText(password)

      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)

    } catch (error) {
      console.error("Failed to copy password:", error)
    }
  }

  return (
    <div className="space-y-6">

      {/* ================= PASSWORD ================= */}

      <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto_auto]">

        {/* Password field */}

        <div className="flex min-h-16 min-w-0 overflow-hidden rounded-2xl border border-[#E2DBCF] bg-[#F3EFE7]">

          <input
            type="text"
            value={password}
            readOnly
            placeholder="Select an option to generate"
            className="min-w-0 flex-1 bg-transparent px-5 font-mono text-base tracking-wide text-[#292725] outline-none placeholder:text-[#AAA298] md:text-lg"
          />

        </div>


        {/* Copy */}

        <button
          type="button"
          onClick={copyPassword}
          disabled={!password}
          className="flex min-h-16 items-center justify-center gap-2 rounded-2xl border border-[#E2DBCF] bg-[#F3EFE7] px-7 font-medium text-[#403D3A] transition hover:bg-[#E9E3D9] disabled:cursor-not-allowed disabled:opacity-40"
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <rect
              width="10"
              height="10"
              x="9"
              y="9"
              rx="2"
            />

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
            />
          </svg>

          {copied ? "Copied" : "Copy"}

        </button>


        {/* Generate */}

        <button
          type="button"
          onClick={onGenerate}
          className="flex min-h-16 items-center justify-center gap-2 rounded-2xl bg-[#F15A24] px-8 font-semibold text-white shadow-[0_8px_20px_rgba(241,90,36,0.18)] transition hover:-translate-y-0.5 hover:bg-[#D94D1D] hover:shadow-[0_12px_25px_rgba(241,90,36,0.25)]"
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12a7.5 7.5 0 0 1 12.2-5.8L19.5 9"
            />

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 4.5V9h-4.5"
            />

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12a7.5 7.5 0 0 1-12.2 5.8L4.5 15"
            />

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5V15H9"
            />
          </svg>

          Generate

        </button>

      </div>


      {/* ================= OPTIONS ================= */}

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">


        {/* Uppercase */}

        <label
          className={`cursor-pointer rounded-2xl border p-4 transition ${
            isUpper
              ? "border-[#F15A24] bg-[#FFF3EB]"
              : "border-[#E2DBCF] bg-[#FFFDF9] hover:border-[#F15A24]"
          }`}
        >

          <input
            type="checkbox"
            checked={isUpper}
            onChange={(e) => onUpperChange(e.target.checked)}
            className="mb-3 h-4 w-4 accent-[#F15A24]"
          />

          <p className="text-xl font-bold text-[#292725]">
            Aa
          </p>

          <p className="mt-1 text-sm text-[#817A71]">
            Uppercase
          </p>

        </label>


        {/* Lowercase */}

        <label
          className={`cursor-pointer rounded-2xl border p-4 transition ${
            isLower
              ? "border-[#F15A24] bg-[#FFF3EB]"
              : "border-[#E2DBCF] bg-[#FFFDF9] hover:border-[#F15A24]"
          }`}
        >

          <input
            type="checkbox"
            checked={isLower}
            onChange={(e) => onLowerChange(e.target.checked)}
            className="mb-3 h-4 w-4 accent-[#F15A24]"
          />

          <p className="text-xl font-bold text-[#292725]">
            aa
          </p>

          <p className="mt-1 text-sm text-[#817A71]">
            Lowercase
          </p>

        </label>


        {/* Numbers */}

        <label
          className={`cursor-pointer rounded-2xl border p-4 transition ${
            isNum
              ? "border-[#F15A24] bg-[#FFF3EB]"
              : "border-[#E2DBCF] bg-[#FFFDF9] hover:border-[#F15A24]"
          }`}
        >

          <input
            type="checkbox"
            checked={isNum}
            onChange={(e) => onNumChange(e.target.checked)}
            className="mb-3 h-4 w-4 accent-[#F15A24]"
          />

          <p className="text-xl font-bold text-[#292725]">
            123
          </p>

          <p className="mt-1 text-sm text-[#817A71]">
            Numbers
          </p>

        </label>


        {/* Special */}

        <label
          className={`cursor-pointer rounded-2xl border p-4 transition ${
            isSpcl
              ? "border-[#F15A24] bg-[#FFF3EB]"
              : "border-[#E2DBCF] bg-[#FFFDF9] hover:border-[#F15A24]"
          }`}
        >

          <input
            type="checkbox"
            checked={isSpcl}
            onChange={(e) => onSpecialChange(e.target.checked)}
            className="mb-3 h-4 w-4 accent-[#F15A24]"
          />

          <p className="text-xl font-bold text-[#292725]">
            !#
          </p>

          <p className="mt-1 text-sm text-[#817A71]">
            Special
          </p>

        </label>

      </div>

    </div>
  )
}

export default PasswordDisplay