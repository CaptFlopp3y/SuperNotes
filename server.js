const express = require(`express`);
const apiRoutes = require(`./routes/api-routes`);
const htmlRoutes = require(`./routes/html-routes`);
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path')

// middleware for parsing form data
app.use(express.static(path.join(__dirname, 'Develop/public')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(`Develop/public/`));
app.use('/Develop', express.static('public'))

// set up for the express app routes
app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
    console.log(`app listening on http://localhost:${PORT}`);
});