import TubesCursor from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"

const app = TubesCursor(document.getElementById("canvas"), {
  tubes: {
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    lights: {
      intensity: 250,
      colors: ["#ff0000", "#00ff00", "#0000ff", "#ff00ff"]
    }
  }
})

// RAINBOW LOOP
let hue = 0
function rainbowLoop() {
  hue = (hue + 1) % 360

  const tubeColors = generateRainbowColors(10)
  const lightColors = generateRainbowColors(12)

  app.tubes.setColors(tubeColors)
  app.tubes.setLightsColors(lightColors)

  requestAnimationFrame(rainbowLoop)
}

rainbowLoop()

// Generate evenly spaced rainbow colors
function generateRainbowColors(count) {
  return Array.from({ length: count }, (_, i) => {
    const h = (hue + (i * (360 / count))) % 360
    return `hsl(${h}, 100%, 50%)`
  })
}