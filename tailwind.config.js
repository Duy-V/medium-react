// eslint-disable-next-line
const withMT = require("@material-tailwind/react/utils/withMT");
const {nextui} = require("@nextui-org/react");

// eslint-disable-next-line
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
});
