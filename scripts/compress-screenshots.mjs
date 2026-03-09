/**
 * Converte gli screenshot JPG/PNG pesanti in WebP ottimizzato.
 * Uso: node scripts/compress-screenshots.mjs
 */
import sharp from "sharp";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "../public");

const images = [
  // Screenshots carousel
  {
    input: "img/screen-playstore/photo_2025-11-14_15-13-54.jpg",
    output: "img/screen-playstore/photo_2025-11-14_15-13-54.webp",
    quality: 82,
  },
  {
    input: "img/screen-playstore/photo_2025-11-14_19-45-39.jpg",
    output: "img/screen-playstore/photo_2025-11-14_19-45-39.webp",
    quality: 82,
  },
  {
    input: "img/screen-playstore/Screenshot 2025-11-14 194943.png",
    output: "img/screen-playstore/screenshot-194943.webp",
    quality: 82,
  },
];

let saved = 0;

for (const { input, output, quality } of images) {
  const inputPath = path.join(publicDir, input);
  const outputPath = path.join(publicDir, output);

  if (!existsSync(inputPath)) {
    console.warn(`⚠ Non trovato: ${input}`);
    continue;
  }

  const meta = await sharp(inputPath).metadata();
  await sharp(inputPath).webp({ quality }).toFile(outputPath);

  const { size: inSize } = await import("fs").then((fs) =>
    fs.promises.stat(inputPath)
  );
  const { size: outSize } = await import("fs").then((fs) =>
    fs.promises.stat(outputPath)
  );
  const reduction = (((inSize - outSize) / inSize) * 100).toFixed(0);
  saved += inSize - outSize;

  console.log(
    `✓ ${path.basename(input)} → ${path.basename(output)}` +
      `  ${(inSize / 1024).toFixed(0)}KB → ${(outSize / 1024).toFixed(0)}KB  (-${reduction}%)`
  );
}

console.log(`\nRisparmio totale: ${(saved / 1024).toFixed(0)} KB`);
