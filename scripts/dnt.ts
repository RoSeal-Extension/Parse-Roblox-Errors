import { build } from "@deno/dnt@0.42.3";
import { copy } from "@std/fs@1.0.19";

await build({
  entryPoints: [
    "./mod.ts",
    ...["", "esm/", "script/"].map((prefix) => ({
      name: `./${prefix}challenge`,
      path: `./challenge.ts`,
    })),
  ],
  outDir: "./npm",
  compilerOptions: {
    lib: ["ES2021", "DOM"],
  },
  skipSourceOutput: true,
  shims: {
    deno: true,
    customDev: [
      {
        package: {
          name: "whatwg-mimetype",
          version: "^4.0.0",
        },
        globalNames: [],
        typesPackage: {
          name: "@types/whatwg-mimetype",
          version: "^3.0.2",
        },
      },
    ],
  },
  configFile: import.meta.resolve("../deno.jsonc"),
  package: {
    name: "parse-roblox-errors",
    description: "A Deno/NodeJS module to parse Roblox errors",
    version: "1.1.11",
    homepage: "https://github.com/RoSeal-Extension/Parse-Roblox-Errors",
    author: "juliaoverflow",
    bugs: {
      url: "https://github.com/RoSeal-Extension/Parse-Roblox-Errors/issues",
    },
    repository: {
      type: "git",
      url: "git@github.com:RoSeal-Extension/Parse-Roblox-Errors.git",
    },
    keywords: [
      "roblox",
      "api",
    ],
    license: "MIT",
  },
  typeCheck: false,
});

await copy("./README.md", "./npm/README.md");
await copy("./LICENSE", "./npm/LICENSE");
