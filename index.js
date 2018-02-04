(() => {
  'use-strict';

  const express = require('express');

  class Application {
    constructor() {
      this._number = Math.random().toString(36).substring(7);
      this._app = express();
      this._app.get('/', (req, res) => res.send(`Response: ${this._number}\n`));
      this._app.listen(3000, () => console.log('Example app listening on port 3000!'));
    }
  };

  module.export = new Application();
})();
