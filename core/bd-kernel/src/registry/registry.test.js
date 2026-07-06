import { ServiceRegistry } from "./registry.js";

const registry = new ServiceRegistry();

registry.register("repository", {});

console.log(registry.has("repository")); // true

console.log(registry.list()); // ["repository"]