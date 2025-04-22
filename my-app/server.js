
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the dist directory (Vite builds into dist)
app.use(express.static(path.join(__dirname, 'dist')));

// Serve index.html for any route (for React Router support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Use port 3000 or environment port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
