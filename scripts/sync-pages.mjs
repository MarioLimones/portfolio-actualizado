import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const rootDir = process.cwd();
const distDir = join(rootDir, "dist");
const distAssetsDir = join(distDir, "assets");
const rootAssetsDir = join(rootDir, "assets");

if (!existsSync(distDir)) {
  throw new Error("dist no existe. Ejecuta vite build antes de sincronizar.");
}

rmSync(join(rootDir, "index.html"), { force: true });
cpSync(join(distDir, "index.html"), join(rootDir, "index.html"));

rmSync(rootAssetsDir, { recursive: true, force: true });
mkdirSync(rootAssetsDir, { recursive: true });

if (existsSync(distAssetsDir)) {
  cpSync(distAssetsDir, rootAssetsDir, { recursive: true });
}
