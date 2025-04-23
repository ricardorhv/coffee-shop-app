
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'sora-extra-bold': 'Sora_ExtraBold',
        'sora-bold': 'Sora_Bold',
        'sora-semibold': 'Sora_SemiBold',
        'sora-medium': 'Sora_Medium',
        'sora-regular': 'Sora_Regular',
        'sora-light': 'Sora_Light',
        'sora-extra-light': 'Sora_ExtraLight',
        'sora-thin': 'Sora_Thin',
      },
      colors: {
        gray: {
          100: "#F9F2ED",
          200: "#EDEDED",
          300: "#E3E3E3",
          400: "#A2A2A2",
          700: "#313131",
        },
        product: {
          primary: "#C67C4E",
          secondary: "#EDD6C8"
        }
      }
    },
  },
  plugins: [],
}

