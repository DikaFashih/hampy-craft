import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';

const rootDir = process.cwd();
const devHtmlContent = `<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hampy Craft | Indonesian Handcrafted Lighting — Hampy Lumina B2B Export</title>
    <link rel="icon" type="image/png" href="images/favicon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
    <meta name="description" content="Katalog ekspor & spesifikasi teknis kap lampu bambu artisanal Hampy Lumina (PRK-01) asal Sleman, Yogyakarta menuju Pelabuhan Rotterdam." />
  </head>
  <body class="bg-[#FAF8F5] text-[#242423] antialiased selection:bg-[#D97706]/20 selection:text-[#1E3F2B]">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`;

// Ensure dev index.html exists
fs.writeFileSync(path.join(rootDir, 'index.html'), devHtmlContent, 'utf8');

// Spawn vite dev server
const vite = spawn('npx', ['vite'], { stdio: 'inherit', shell: true });

process.on('SIGINT', () => {
  vite.kill('SIGINT');
  process.exit();
});
