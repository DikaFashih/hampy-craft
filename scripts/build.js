import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const rootDir = process.cwd();
const devHtmlContent = `<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hampy Craft, Indonesian Handcrafted Lighting: Hampy Lumina B2B Export</title>
    <link rel="icon" type="image/png" href="images/favicon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
    <meta name="description" content="Katalog ekspor dan spesifikasi teknis kap lampu bambu artisanal Hampy Lumina (PRK-01) asal Sleman, Yogyakarta menuju Pelabuhan Rotterdam." />
  </head>
  <body class="antialiased">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`;

// 1. Ensure dev index.html is ready for Vite compiler
fs.writeFileSync(path.join(rootDir, 'index.html'), devHtmlContent, 'utf8');

// 2. Run Vite build
console.log('Running Vite build...');
execSync('npx vite build', { stdio: 'inherit' });

// 3. Copy dist outputs to root for GitHub Pages
console.log('Deploying dist artifacts to root for GitHub Pages compatibility...');
const distIndex = fs.readFileSync(path.join(rootDir, 'dist', 'index.html'), 'utf8');
fs.writeFileSync(path.join(rootDir, 'index.html'), distIndex, 'utf8');

// Copy assets folder
const distAssetsDir = path.join(rootDir, 'dist', 'assets');
const rootAssetsDir = path.join(rootDir, 'assets');
if (!fs.existsSync(rootAssetsDir)) {
  fs.mkdirSync(rootAssetsDir, { recursive: true });
}
const assetFiles = fs.readdirSync(distAssetsDir);
for (const file of assetFiles) {
  fs.copyFileSync(path.join(distAssetsDir, file), path.join(rootAssetsDir, file));
}

console.log('Build & GitHub Pages synchronization complete!');
