import { Settings } from "./settings.js";

const settings = new Settings();

console.log(settings.get("theme"));

settings.set("theme", "dark");

console.log(settings.get("theme"));

settings.reset();

console.log(settings.get("theme"));