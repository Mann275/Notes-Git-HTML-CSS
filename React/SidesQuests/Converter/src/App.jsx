import { useState } from "react";
import { Inputbox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyinfo";

function App() {
  // Currency Converter State
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [convertedAmount, setconvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  // Active Converter State
  const [activeConverter, setActiveConverter] = useState("currency");

  // Length Converter State
  const [lengthFrom, setLengthFrom] = useState("meter");
  const [lengthTo, setLengthTo] = useState("feet");
  const [lengthAmount, setLengthAmount] = useState(0);
  const [convertedLength, setConvertedLength] = useState(0);

  // Weight Converter State
  const [weightFrom, setWeightFrom] = useState("kg");
  const [weightTo, setWeightTo] = useState("lbs");
  const [weightAmount, setWeightAmount] = useState(0);
  const [convertedWeight, setConvertedWeight] = useState(0);

  // Temperature Converter State
  const [tempFrom, setTempFrom] = useState("celsius");
  const [tempTo, setTempTo] = useState("fahrenheit");
  const [tempAmount, setTempAmount] = useState(0);
  const [convertedTemp, setConvertedTemp] = useState(0);

  // Length conversions (to meters)
  const lengthConversions = {
    meter: 1,
    feet: 0.3048,
    inch: 0.0254,
    cm: 0.01,
    km: 1000,
    yard: 0.9144,
    mile: 1609.34,
  };

  // Weight conversions (to kg)
  const weightConversions = {
    kg: 1,
    lbs: 0.453592,
    gram: 0.001,
    ounce: 0.0283495,
    ton: 1000,
    stone: 6.35029,
  };

  // Temperature conversions
  const convertTemperature = (value, fromUnit, toUnit) => {
    let celsius = value;
    if (fromUnit === "fahrenheit") celsius = ((value - 32) * 5) / 9;
    if (fromUnit === "kelvin") celsius = value - 273.15;

    if (toUnit === "fahrenheit") return (celsius * 9) / 5 + 32;
    if (toUnit === "kelvin") return celsius + 273.15;
    return celsius;
  };

  // Currency functions
  const swap = () => {
    setFrom(to);
    setto(from);
    setconvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setconvertedAmount(amount * currencyInfo[to]);
  };

  // Length conversion
  const convertLength = () => {
    const baseValue = lengthAmount * lengthConversions[lengthFrom];
    setConvertedLength(baseValue / lengthConversions[lengthTo]);
  };

  // Weight conversion
  const convertWeight = () => {
    const baseValue = weightAmount * weightConversions[weightFrom];
    setConvertedWeight(baseValue / weightConversions[weightTo]);
  };

  // Temperature conversion
  const convertTemp = () => {
    setConvertedTemp(convertTemperature(tempAmount, tempFrom, tempTo));
  };

  const converterTypes = [
    {
      id: "currency",
      name: "💰 Currency",
      icon: "💱",
      gradient: "from-green-400 via-blue-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=400",
    },
    {
      id: "length",
      name: "📏 Length",
      icon: "📐",
      gradient: "from-pink-400 via-red-500 to-yellow-500",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400",
    },
    {
      id: "weight",
      name: "⚖️ Weight",
      icon: "🏋️",
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
    },
    {
      id: "temperature",
      name: "🌡️ Temperature",
      icon: "❄️",
      gradient: "from-orange-400 via-red-500 to-pink-600",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400",
    },
  ];

  const getActiveConverter = () => {
    return converterTypes.find((conv) => conv.id === activeConverter);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-10 animate-spin"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center pt-8 pb-6">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 mb-4 animate-pulse">
          🚀 MEGA CONVERTER 🚀
        </h1>
        <p className="text-xl text-white/80 font-semibold tracking-wider">
          Convert Anything, Anywhere, Anytime! ✨
        </p>
      </div>

      {/* Converter Type Selector */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 mb-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {converterTypes.map((converter) => (
            <button
              key={converter.id}
              onClick={() => setActiveConverter(converter.id)}
              className={`group relative p-6 rounded-2xl transform transition-all duration-300 hover:scale-110 hover:rotate-2 ${
                activeConverter === converter.id
                  ? `bg-gradient-to-br ${converter.gradient} shadow-2xl shadow-purple-500/50 scale-105`
                  : "bg-white/10 backdrop-blur-sm hover:bg-white/20"
              }`}
              style={{
                backgroundImage:
                  activeConverter === converter.id
                    ? `url(${converter.image})`
                    : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "overlay",
              }}
            >
              <div
                className={`${activeConverter === converter.id ? "bg-black/30" : "bg-transparent"} rounded-xl p-4 transition-all duration-300`}
              >
                <div className="text-4xl mb-2 group-hover:animate-bounce">
                  {converter.icon}
                </div>
                <h3 className="text-white font-bold text-lg group-hover:text-yellow-300 transition-colors">
                  {converter.name}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Converter Interface */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 pb-12">
        <div
          className={`bg-gradient-to-br ${getActiveConverter().gradient} p-1 rounded-3xl shadow-2xl`}
        >
          <div className="bg-black/20 backdrop-blur-xl rounded-3xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-3">
                <span className="text-4xl animate-spin">
                  {getActiveConverter().icon}
                </span>
                {getActiveConverter().name} Converter
                <span className="text-4xl animate-spin">
                  {getActiveConverter().icon}
                </span>
              </h2>
            </div>

            {/* Currency Converter */}
            {activeConverter === "currency" && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  convert();
                }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div className="space-y-4">
                    <Inputbox
                      label="From 💸"
                      amount={amount}
                      currencyOptions={options}
                      onCurrencyChange={(currency) => setFrom(currency)}
                      selectCurrency={from}
                      onAmountChange={(amount) => setAmount(amount)}
                    />
                  </div>

                  <div className="flex items-center justify-center">
                    <button
                      type="button"
                      className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full text-xl font-bold transform transition-all duration-300 hover:scale-110 hover:rotate-180 shadow-lg"
                      onClick={swap}
                    >
                      🔄 SWAP
                    </button>
                  </div>

                  <div className="space-y-4">
                    <Inputbox
                      label="To 💰"
                      amount={convertedAmount}
                      currencyOptions={options}
                      onCurrencyChange={(currency) => setto(currency)}
                      selectCurrency={to}
                      amountDisable
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-4 px-12 rounded-full text-xl transform transition-all duration-300 hover:scale-110 shadow-2xl animate-pulse"
                  >
                    💫 CONVERT MAGIC 💫
                  </button>
                </div>
              </form>
            )}

            {/* Length Converter */}
            {activeConverter === "length" && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      From 📏
                    </label>
                    <input
                      type="number"
                      value={lengthAmount}
                      onChange={(e) => setLengthAmount(Number(e.target.value))}
                      className="w-full p-4 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border-2 border-white/30 focus:border-yellow-400 transition-all"
                      placeholder="Enter length"
                    />
                    <select
                      value={lengthFrom}
                      onChange={(e) => setLengthFrom(e.target.value)}
                      className="w-full mt-2 p-3 rounded-xl bg-white/20 text-white border-2 border-white/30"
                    >
                      {Object.keys(lengthConversions).map((unit) => (
                        <option key={unit} value={unit} className="bg-gray-800">
                          {unit}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="text-center">
                    <button
                      onClick={convertLength}
                      className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-6 py-3 rounded-full text-lg font-bold transform transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg"
                    >
                      📐 CONVERT
                    </button>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      To 📐
                    </label>
                    <input
                      type="number"
                      value={convertedLength}
                      readOnly
                      className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-sm text-white border-2 border-white/30"
                    />
                    <select
                      value={lengthTo}
                      onChange={(e) => setLengthTo(e.target.value)}
                      className="w-full mt-2 p-3 rounded-xl bg-white/20 text-white border-2 border-white/30"
                    >
                      {Object.keys(lengthConversions).map((unit) => (
                        <option key={unit} value={unit} className="bg-gray-800">
                          {unit}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Weight Converter */}
            {activeConverter === "weight" && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      From ⚖️
                    </label>
                    <input
                      type="number"
                      value={weightAmount}
                      onChange={(e) => setWeightAmount(Number(e.target.value))}
                      className="w-full p-4 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border-2 border-white/30 focus:border-cyan-400 transition-all"
                      placeholder="Enter weight"
                    />
                    <select
                      value={weightFrom}
                      onChange={(e) => setWeightFrom(e.target.value)}
                      className="w-full mt-2 p-3 rounded-xl bg-white/20 text-white border-2 border-white/30"
                    >
                      {Object.keys(weightConversions).map((unit) => (
                        <option key={unit} value={unit} className="bg-gray-800">
                          {unit}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="text-center">
                    <button
                      onClick={convertWeight}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-bold transform transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg"
                    >
                      🏋️ CONVERT
                    </button>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      To 🏋️
                    </label>
                    <input
                      type="number"
                      value={convertedWeight}
                      readOnly
                      className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-sm text-white border-2 border-white/30"
                    />
                    <select
                      value={weightTo}
                      onChange={(e) => setWeightTo(e.target.value)}
                      className="w-full mt-2 p-3 rounded-xl bg-white/20 text-white border-2 border-white/30"
                    >
                      {Object.keys(weightConversions).map((unit) => (
                        <option key={unit} value={unit} className="bg-gray-800">
                          {unit}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Temperature Converter */}
            {activeConverter === "temperature" && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      From 🌡️
                    </label>
                    <input
                      type="number"
                      value={tempAmount}
                      onChange={(e) => setTempAmount(Number(e.target.value))}
                      className="w-full p-4 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border-2 border-white/30 focus:border-orange-400 transition-all"
                      placeholder="Enter temperature"
                    />
                    <select
                      value={tempFrom}
                      onChange={(e) => setTempFrom(e.target.value)}
                      className="w-full mt-2 p-3 rounded-xl bg-white/20 text-white border-2 border-white/30"
                    >
                      <option value="celsius" className="bg-gray-800">
                        Celsius (°C)
                      </option>
                      <option value="fahrenheit" className="bg-gray-800">
                        Fahrenheit (°F)
                      </option>
                      <option value="kelvin" className="bg-gray-800">
                        Kelvin (K)
                      </option>
                    </select>
                  </div>

                  <div className="text-center">
                    <button
                      onClick={convertTemp}
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full text-lg font-bold transform transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg"
                    >
                      🌡️ CONVERT
                    </button>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      To ❄️
                    </label>
                    <input
                      type="number"
                      value={convertedTemp}
                      readOnly
                      className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-sm text-white border-2 border-white/30"
                    />
                    <select
                      value={tempTo}
                      onChange={(e) => setTempTo(e.target.value)}
                      className="w-full mt-2 p-3 rounded-xl bg-white/20 text-white border-2 border-white/30"
                    >
                      <option value="celsius" className="bg-gray-800">
                        Celsius (°C)
                      </option>
                      <option value="fahrenheit" className="bg-gray-800">
                        Fahrenheit (°F)
                      </option>
                      <option value="kelvin" className="bg-gray-800">
                        Kelvin (K)
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Fun Facts Section */}
            <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                🎉 Fun Facts & Tips 🎉
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-white/80">
                {activeConverter === "currency" && (
                  <>
                    <p>💡 Currency rates update in real-time!</p>
                    <p>🌍 170+ currencies supported worldwide!</p>
                  </>
                )}
                {activeConverter === "length" && (
                  <>
                    <p>📏 1 meter = 3.28084 feet exactly!</p>
                    <p>🗼 Eiffel Tower is 324 meters tall!</p>
                  </>
                )}
                {activeConverter === "weight" && (
                  <>
                    <p>⚖️ 1 kilogram = 2.20462 pounds!</p>
                    <p>🐘 African elephant weighs ~6000 kg!</p>
                  </>
                )}
                {activeConverter === "temperature" && (
                  <>
                    <p>🌡️ Water freezes at 0°C (32°F)!</p>
                    <p>☀️ Sun's core: ~15 million °C!</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center py-8">
        <p className="text-white/60 text-lg">
          Made with ❤️ and lots of ☕ | Converting the world, one unit at a
          time! 🚀
        </p>
      </div>
    </div>
  );
}

export default App;
