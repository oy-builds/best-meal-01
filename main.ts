import { mkdirSync, writeFileSync } from "node:fs";

// The Best Meal You Ever Had — one sentence, at most 200 characters.
//
// Revised after the first run: sharpen the smoke from a flat "in my
// eyes" to "stinging my eyes" — the sting is the detail you remember —
// and tighten "over the rice" to "on the rice" to stay inside 200 chars.
// The meal stays one scene: midnight, plastic stool, grandmother, wok.
function composeMeal(): string {
  const place = "Past midnight on a plastic stool in Yogyakarta,";
  const dish = " my grandmother slid me nasi goreng crackling from the wok,";
  const detail = " yolk gold on the rice, chilli smoke stinging my eyes,";
  const ending = " and hunger ended like a breath let go.";
  return place + dish + detail + ending;
}

const entry = composeMeal();

// Self-check against the competition gate: 1-200 chars, not only whitespace.
if (entry.length < 1 || entry.length > 200 || !entry.trim()) {
  throw new Error(`entry fails gate: ${entry.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars: ${entry}`);
