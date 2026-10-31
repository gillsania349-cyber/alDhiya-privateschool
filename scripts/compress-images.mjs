import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const publicDir = path.resolve("public");

function maxWidthFor(relPath) {
  const p = relPath.replaceAll("\\", "/").toLowerCase();
  if (
    p.includes("logo") ||
    p.includes("icon") ||
    p.includes("features/") ||
    p.includes("stats/") ||
    p.includes("apply-icon") ||
    p.includes("vision") ||
    p.includes("mission") ||
    p.includes("motto") ||
    p.includes("who") ||
    p.includes("30e89c") ||
    p.includes("8946c2") ||
    p.includes("eb3fdc") ||
    p.includes("cfd3ee") ||
    p.includes("da46e5") ||
    p.includes("f9f210") ||
    p.includes("930ff6") ||
    p.includes("b07e896") ||
    p.includes("262296") ||
    p.includes("cf6d0b") ||
    p.includes("691228") ||
    p.includes("7c90d0") ||
    p.includes("cb2437") ||
    p.includes("kg-grade")
  ) {
    return 512;
  }
  if (p.includes("hero") || p.includes("welcome") || p.includes("school-building") || p.includes("next-steps")) {
    return 1600;
  }
  return 1200;
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else if (/\.(png|jpe?g|webp)$/i.test(entry.name)) files.push(full);
  }
  return files;
}

const files = await walk(publicDir);
let before = 0;
let after = 0;

for (const file of files) {
  const rel = path.relative(publicDir, file);
  const input = await fs.readFile(file);
  before += input.length;

  const meta = await sharp(input).metadata();
  const hasAlpha = Boolean(meta.hasAlpha);
  const maxWidth = maxWidthFor(rel);

  let pipeline = sharp(input).rotate().resize({
    width: maxWidth,
    withoutEnlargement: true,
  });

  let outBuf;
  if (hasAlpha) {
    outBuf = await pipeline
      .webp({ quality: 78, alphaQuality: 80, effort: 5 })
      .toBuffer();
  } else {
    // Photos/UI without alpha compress smaller as jpeg-in-webp
    outBuf = await pipeline.webp({ quality: 76, effort: 5 }).toBuffer();
  }

  // Keep same filename/extension for fewer code changes; browsers sniff content.
  // Safer: write .webp and rename. We'll overwrite with webp bytes under .webp name.
  const webpPath = file.replace(/\.(png|jpe?g|webp)$/i, ".webp");
  await fs.writeFile(webpPath, outBuf);
  if (path.resolve(webpPath) !== path.resolve(file)) {
    await fs.unlink(file);
  }

  after += outBuf.length;
  const saved = ((1 - outBuf.length / input.length) * 100).toFixed(0);
  console.log(
    `${rel} -> ${path.basename(webpPath)}  ${(input.length / 1024).toFixed(0)}KB -> ${(outBuf.length / 1024).toFixed(0)}KB (-${saved}%)`,
  );
}

console.log(
  `\nTotal: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024 / 1024).toFixed(2)}MB`,
);
