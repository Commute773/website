//update to test push
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// Serve wordfind-vr/build/* on /wordfind/*
app.use('/wordfind', express.static(path.join(__dirname, 'wordfind-vr', 'build')));

// Serve main/dist/* and danmaku3d-demo/build/* on /* (merging folders)
app.use(express.static(path.join(__dirname, 'main', 'dist')));
app.use(express.static(path.join(__dirname, 'danmaku3d-demo', 'build')));

// Fallback: serve danmaku3d-demo/build/index.html if file not found
app.use((req, res, next) => {
  const filePath = path.join(__dirname, 'danmaku3d-demo', 'build', 'index.html');
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      next();
    } else {
      res.sendFile(filePath);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});