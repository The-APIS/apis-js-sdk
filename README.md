# The APIS SDK

The official [APIS Foundation](https://dapis.tech) JavaScript SDK.

## TL;DR

```bash
npm install --save @theapis/sdk
```


## Develop


### Install


```bash
npm i
```


### Run

```bash
npm run dev
```

## Test

```bash
npm run test:watch
```


## Build 

> TODO - the module is designed to be bundled with another application, or web application.

`npm run build` builds the library to `dist`, generating three files:

* `dist/index.cjs.js`
    A CommonJS bundle, suitable for use in Node.js, that `require`s the external dependency. This corresponds to the `"main"` field in package.json
* `dist/index.esm.js`
    an ES module bundle, suitable for use in other people's libraries and applications, that `import`s the external dependency. This corresponds to the `"module"` field in package.json
* `dist/index.umd.js`
    a UMD build, suitable for use in any environment (including the browser, as a `<script>` tag), that includes the external dependency. This corresponds to the `"browser"` field in package.json

`npm run dev` builds the library, then keeps rebuilding it whenever the source files change using [rollup-watch](https://github.com/rollup/rollup-watch).

`npm test` builds the library, then tests it.


## TODO

[] Update the package.json files to specify depencencies as dev, regular, or peer

## License

[MIT](LICENSE).
