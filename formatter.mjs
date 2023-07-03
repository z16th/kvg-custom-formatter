import { access, readdir, readFile, writeFile, mkdir } from "fs/promises";

const SVG_FOLDER_PATH = "./kanjivg/kanji";
const OUTPUT_FOLDER_PATH = "./kanjivg/formatted";

try {
  await access(SVG_FOLDER_PATH);
  console.log(`${SVG_FOLDER_PATH} folder found`);
} catch (err) {
  console.error("Try running clone-kvg first");
}

try {
  await mkdir(OUTPUT_FOLDER_PATH);
  console.log(`Created ${OUTPUT_FOLDER_PATH}`);
} catch (err) {
  console.error(err.message);
}

const fileNames = await readdir(SVG_FOLDER_PATH);

const kvg = /kvg:(?=\w+=")/gm;

for (const file of fileNames) {
  const oldsvg = await readFile(`${SVG_FOLDER_PATH}/${file}`, {
    encoding: "utf-8",
  });
  const newsvg = oldsvg.replace(kvg, "data-");
  const outputFile = `${OUTPUT_FOLDER_PATH}/${file}`;

  await writeFile(outputFile, newsvg, (err) => {
    if (err) throw err;
  });
}

console.log(`Finished - Check ${OUTPUT_FOLDER_PATH}`);
