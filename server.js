const realpathSync = require('fs').realpathSync;
const express = require('express');
const resolve = require('path').resolve;
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const favicon = require('express-favicon');

const appDirectory = realpathSync(process.cwd());
const resolveApp = (relativePath) => resolve(appDirectory, relativePath);
const PATHS = {
  build: resolveApp('build'),
  home: resolveApp('build/index.html'),
  favicon: resolveApp('build/favicon.ico'),
};

if (cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });
} else {
  const port = process.env.port | 5000;
  const app = express();
  app.use(favicon(PATHS.favicon));
  app.use(express.static(PATHS.build));
  app.get('*', (req, res) => {
    res.sendFile(PATHS.home);
  });
  app.get('/', (req, res) => {
    res.sendFile(PATHS.home);
  });
  app.listen(port, () => {
    console.log(`🚀 Server ready at ${port}`);
  });
}
