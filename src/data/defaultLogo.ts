// Default Mara Daher Logo as an SVG string and default brand colors
export const MARA_DAHER_LOGO_SVG = `
<svg viewBox="0 20 500 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" fill="none">
  <defs>
    <!-- Gradient Orange to Teal to Pink/Purple matching the original image -->
    <linearGradient id="mdLoopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E86F37" />
      <stop offset="45%" stop-color="#0F85A5" />
      <stop offset="85%" stop-color="#932966" />
      <stop offset="100%" stop-color="#E86F37" />
    </linearGradient>
  </defs>
  
  <!-- Continuous Loop MD Symbol -->
  <path d="M 100 210 V 70 Q 100 35 135 35 Q 170 35 190 85 L 240 180 Q 255 210 270 180 L 320 85 Q 340 35 375 35 Q 410 35 410 70 V 170 Q 410 245 320 245 C 210 245 180 135 180 135" 
        stroke="url(#mdLoopGradient)" 
        stroke-width="26" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        fill="none"/>

  <!-- Typography MARA DAHER -->
  <text x="250" y="325" text-anchor="middle" font-family="'Montserrat', 'Trebuchet MS', sans-serif" font-size="42" font-weight="400" letter-spacing="11" fill="#4A4543">
    MARA DAHER
  </text>
  
  <!-- Subtitle fonoaudiologia | linguagem e aprendizagem -->
  <text x="250" y="370" text-anchor="middle" font-family="'Open Sans', 'Segoe UI', sans-serif" font-size="21" font-weight="300" letter-spacing="1" fill="#605B58">
    fonoaudiologia | linguagem e aprendizagem
  </text>
</svg>
`;

export const BRAND_COLORS = {
  orange: '#E86F37',
  orangeHover: '#D45D27',
  teal: '#0F85A5',
  tealHover: '#0B6C87',
  pink: '#932966',
  pinkHover: '#7A1F54',
  darkText: '#2D3748',
  warmGray: '#F7FAFC',
  cardBg: '#FFFFFF',
};
