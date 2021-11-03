module.exports = {
  // mode: "jit",
  // purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#005EEE",
        primaryLight: "#2676F1",
        yellowDeep: "#FFE301",
        yellowLight: "#FFEB4E",
        purpleDeep: "#9D45C0",
        purpleLight: "#AB60C9",
        pinkDeep: "#FF79C6",
        pinkLight: "#FF8DD0",
        redDeep: "#FF5550",
        redLight: "#FF6E69",
        pasteDeep: "#01D7C5",
        pasteLight: "#41E0D2",
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
      },
      backgroundImage: {
        "sky-bg": "url('../images/sky-bg.jpg')",
        sun: "url('../images/sun.png')",
        "brand-bg-1": "url('../images/brand-bg-1.webp')",
        "overlay-1": "url('../images/overlay-1.png')",
        "overlay-2": "url('../images/overlay-2.webp')",
        "card-bg": "url('../svg/card-bg.svg')",
        changesWeMade: "url('../svg/changes-we-made-bg.svg')",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      height: {
        450: "450px",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      scale: ["active"],
    },
  },
  plugins: [],
};
