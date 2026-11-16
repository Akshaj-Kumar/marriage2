const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

// 1. Mother of Pearl / Warm Cream 3D Wax Seal with Monogram "T & J"
const waxSealSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <defs>
    <radialGradient id="sealShading" cx="45%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="25%" stop-color="#FDFBF7" />
      <stop offset="60%" stop-color="#EFE9DC" />
      <stop offset="85%" stop-color="#D9CBB7" />
      <stop offset="100%" stop-color="#B39E82" />
    </radialGradient>
    <radialGradient id="goldRim" cx="50%" cy="50%" r="50%">
      <stop offset="70%" stop-color="#E5C378" stop-opacity="0" />
      <stop offset="90%" stop-color="#D4AF37" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#8C6D23" stop-opacity="0.9" />
    </radialGradient>
    <filter id="sealShadow" x="-20%" y="-20%" width="150%" height="150%">
      <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.6"/>
      <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
    </filter>
    <filter id="emboss">
      <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" result="blur"/>
      <feSpecularLighting in="blur" surfaceScale="2" specularConstant="1" specularExponent="15" result="specOut">
        <fePointLight x="-5000" y="-10000" z="20000"/>
      </feSpecularLighting>
      <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut"/>
      <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/>
    </filter>
  </defs>

  <!-- Organic Wax Drips Outer Contour -->
  <path d="M 100,10 
           C 125,8 145,15 160,30 
           C 178,48 190,70 192,95 
           C 194,120 182,148 165,168 
           C 148,188 122,194 98,192 
           C 72,190 48,180 32,162 
           C 14,142 8,118 10,92 
           C 12,68 24,42 42,26 
           C 60,12 78,11 100,10 Z" 
        fill="url(#sealShading)" 
        filter="url(#sealShadow)" />

  <!-- Outer Ring Inset with Gold Sparkle -->
  <circle cx="100" cy="100" r="76" fill="none" stroke="#D4AF37" stroke-width="2.5" opacity="0.65" stroke-dasharray="3 3"/>
  <circle cx="100" cy="100" r="72" fill="none" stroke="#B39E82" stroke-width="1.5" opacity="0.5"/>

  <!-- Inner Raised Medallion -->
  <circle cx="100" cy="100" r="68" fill="url(#sealShading)" />

  <!-- Monogram T & J Embossed -->
  <g filter="url(#emboss)">
    <!-- Laurel Wreath Around Monogram -->
    <path d="M 55,100 C 55,70 72,50 100,48" fill="none" stroke="#A88B57" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M 145,100 C 145,70 128,50 100,48" fill="none" stroke="#A88B57" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M 55,100 C 55,130 72,152 100,152" fill="none" stroke="#A88B57" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M 145,100 C 145,130 128,152 100,152" fill="none" stroke="#A88B57" stroke-width="1.8" stroke-linecap="round"/>

    <!-- Small Leaves -->
    <circle cx="70" cy="58" r="3" fill="#A88B57" opacity="0.8"/>
    <circle cx="130" cy="58" r="3" fill="#A88B57" opacity="0.8"/>
    <circle cx="60" cy="80" r="3" fill="#A88B57" opacity="0.8"/>
    <circle cx="140" cy="80" r="3" fill="#A88B57" opacity="0.8"/>
    <circle cx="60" cy="120" r="3" fill="#A88B57" opacity="0.8"/>
    <circle cx="140" cy="120" r="3" fill="#A88B57" opacity="0.8"/>
    <circle cx="70" cy="142" r="3" fill="#A88B57" opacity="0.8"/>
    <circle cx="130" cy="142" r="3" fill="#A88B57" opacity="0.8"/>

    <!-- Elegant T & J Letters -->
    <text x="75" y="112" font-family="'Great Vibes', cursive, 'Cinzel', serif" font-size="44" font-weight="bold" fill="#8C6D23" text-anchor="middle">T</text>
    <text x="100" y="104" font-family="'Cinzel', serif" font-size="20" font-weight="600" fill="#B3934B" text-anchor="middle">&amp;</text>
    <text x="125" y="116" font-family="'Great Vibes', cursive, 'Cinzel', serif" font-size="44" font-weight="bold" fill="#8C6D23" text-anchor="middle">J</text>
  </g>
</svg>`;

// 2. Gold Foil Embossed Rose Bouquet Ornament (Matches reel left/right side)
const goldRoseFiligree = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 600" width="300" height="600">
  <defs>
    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF2B2" />
      <stop offset="25%" stop-color="#E5C378" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="75%" stop-color="#A87932" />
      <stop offset="100%" stop-color="#F3E5AB" />
    </linearGradient>
    <filter id="goldShine" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="1" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.8"/>
    </filter>
  </defs>

  <g filter="url(#goldShine)" stroke="url(#goldGradient)" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <!-- Main Rose Blossom -->
    <g transform="translate(140, 220)">
      <!-- Rose Center Petals -->
      <path d="M 0,-15 C 10,-20 20,-10 15,5 C 10,20 -15,18 -18,0 C -20,-15 -5,-25 10,-22" stroke-width="2.5" fill="url(#goldGradient)" fill-opacity="0.2"/>
      <path d="M -8,-6 C -2,-12 8,-12 12,-4 C 15,4 8,12 0,10 C -8,8 -12,0 -8,-6 Z" stroke-width="2" fill="url(#goldGradient)" fill-opacity="0.3"/>
      <!-- Outer Petals Layer 1 -->
      <path d="M -25,-10 C -35,10 -20,35 5,38 C 30,40 45,15 35,-10" stroke-width="2.5"/>
      <path d="M 30,-12 C 45,-25 25,-45 0,-40 C -25,-35 -40,-15 -35,5" stroke-width="2.5"/>
      <!-- Outer Petals Layer 2 -->
      <path d="M -42,5 C -50,30 -25,58 10,55 C 45,52 60,25 50,-8" stroke-width="2"/>
      <path d="M 45,-15 C 60,-35 30,-60 -5,-55 C -40,-50 -60,-20 -48,15" stroke-width="2"/>
    </g>

    <!-- Second Rose Blossom (Smaller, Upper) -->
    <g transform="translate(180, 100) scale(0.7)">
      <path d="M 0,-15 C 10,-20 20,-10 15,5 C 10,20 -15,18 -18,0 C -20,-15 -5,-25 10,-22" stroke-width="2.5" fill="url(#goldGradient)" fill-opacity="0.2"/>
      <path d="M -25,-10 C -35,10 -20,35 5,38 C 30,40 45,15 35,-10" stroke-width="2.5"/>
      <path d="M 30,-12 C 45,-25 25,-45 0,-40 C -25,-35 -40,-15 -35,5" stroke-width="2.5"/>
    </g>

    <!-- Third Rose Blossom (Lower) -->
    <g transform="translate(190, 360) scale(0.8)">
      <path d="M 0,-15 C 10,-20 20,-10 15,5 C 10,20 -15,18 -18,0 C -20,-15 -5,-25 10,-22" stroke-width="2.5" fill="url(#goldGradient)" fill-opacity="0.2"/>
      <path d="M -25,-10 C -35,10 -20,35 5,38 C 30,40 45,15 35,-10" stroke-width="2.5"/>
      <path d="M 30,-12 C 45,-25 25,-45 0,-40 C -25,-35 -40,-15 -35,5" stroke-width="2.5"/>
    </g>

    <!-- Flowing Stems & Tendrils -->
    <path d="M 140,220 C 130,280 150,340 180,420 C 200,480 170,540 120,590" stroke-width="3"/>
    <path d="M 180,100 C 160,150 145,190 140,220" stroke-width="2.5"/>
    <path d="M 160,280 C 180,310 190,340 190,360" stroke-width="2"/>
    
    <!-- Delicate Leaves with Veins -->
    <!-- Leaf 1 -->
    <path d="M 120,170 C 80,150 60,180 80,210 C 100,240 130,210 120,170 Z" stroke-width="2" fill="url(#goldGradient)" fill-opacity="0.15"/>
    <path d="M 120,170 C 95,190 80,210 80,210" stroke-width="1.5"/>
    <!-- Leaf 2 -->
    <path d="M 180,250 C 220,230 240,260 220,290 C 200,320 170,290 180,250 Z" stroke-width="2" fill="url(#goldGradient)" fill-opacity="0.15"/>
    <!-- Leaf 3 (Bottom) -->
    <path d="M 160,440 C 120,430 110,470 130,490 C 150,510 180,480 160,440 Z" stroke-width="2" fill="url(#goldGradient)" fill-opacity="0.15"/>
    <!-- Leaf 4 (Top) -->
    <path d="M 160,60 C 140,20 170,10 190,30 C 210,50 190,80 160,60 Z" stroke-width="2" fill="url(#goldGradient)" fill-opacity="0.15"/>

    <!-- Small Golden Rosebuds -->
    <circle cx="100" cy="120" r="6" fill="url(#goldGradient)"/>
    <circle cx="130" cy="80" r="4" fill="url(#goldGradient)"/>
    <circle cx="210" cy="460" r="5" fill="url(#goldGradient)"/>
    <circle cx="170" cy="520" r="4" fill="url(#goldGradient)"/>
  </g>
</svg>`;

// Write generated assets
fs.writeFileSync(path.join(imgDir, 'wax-seal.svg'), waxSealSvg);
fs.writeFileSync(path.join(imgDir, 'gold-roses.svg'), goldRoseFiligree);

console.log('Successfully generated wax-seal.svg and gold-roses.svg!');
