import { build } from "jsr:@deno/dnt@0.41.1";
import { copy } from "jsr:@std/fs@0.221.0";

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
          version: "^3.0.0",
        },
        globalNames: [],
        typesPackage: {
          name: "@types/whatwg-mimetype",
          version: "^2.1.1",
        },
      },
    ],
  },
  package: {
    name: "parse-roblox-errors",
    description: "A Deno/NodeJS module to parse Roblox errors",
    version: "1.1.10",
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
