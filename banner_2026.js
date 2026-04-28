const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// base + accent colors depending on theme
const baseColor = isDark ? "#ffffff" : "#000000";
const accent = isDark ? "#C19A6B" : "#8B6B3F"; // slightly darker for light mode

console.log(
    "%c  ∧%c,,,%c∧\n" +
    "%c (• w •)             \n" +
    "%c|￣U U￣￣￣￣￣￣￣|\n" +
    "%c|EM, PHNAG, %c2026%c |\n" +
    "%c￣￣￣￣￣￣￣￣￣￣￣",
    `color:${accent}; font-weight:bold;`, // left ear
    "color:inherit;",
    `color:${accent}; font-weight:bold;`, // right ear
    `color:${baseColor};`,
    `color:${baseColor};`,
    `color:${baseColor};`, // "|EM, PHNAG, "
    `color:${accent}; font-weight:bold;`, // 2026
    `color:${baseColor};`, // trailing " |"
    `color:${baseColor};`
);