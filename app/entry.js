const {createRequire} = require(`module`);

// 1. Load the PnP runtime, so that we can access dependencies
require(`../.pnp.js`).setup();

// 2. Retrieve ts-node from the root workspace
const rootManifest = require.resolve(`../package.json`);
const rootRequire = createRequire(rootManifest);
rootRequire(`ts-node/register`);

// 3. Finally, boot the real entry point
require(`./index.ts`);
