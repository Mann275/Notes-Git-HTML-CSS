import React, { useId } from "react";

function Inputbox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();
  return (
    <div
      className={`bg-white/20 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/30 hover:border-yellow-400 transition-all duration-300 hover:scale-105 ${className}`}
    >
      <div className="space-y-4">
        <div>
          <label
            htmlFor={amountInputId}
            className="text-white font-bold text-lg mb-3 inline-block"
          >
            {label}
          </label>
          <input
            id={amountInputId}
            className="outline-none w-full bg-white/20 backdrop-blur-sm py-4 px-4 rounded-xl text-white text-xl font-semibold placeholder-white/70 border-2 border-white/30 focus:border-yellow-400 transition-all"
            type="number"
            placeholder="Enter amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>
        <div>
          <p className="text-white font-bold text-lg mb-3">Currency Type</p>
          <select
            className="w-full rounded-xl px-4 py-4 bg-white/20 backdrop-blur-sm cursor-pointer outline-none text-white text-lg font-semibold border-2 border-white/30 hover:border-cyan-400 transition-all"
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisable}
          >
            {currencyOptions.map((currency) => (
              <option
                key={currency}
                value={currency}
                className="bg-gray-800 text-white"
              >
                {currency.toUpperCase()} 💱
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export { Inputbox };
