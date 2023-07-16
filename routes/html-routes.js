// required modules
const router = require(`express`).Router();
const path = require(`path`);
const appDir = path.dirname(require.main.filename);

// route for index.html
router.get(`/`, (req, res) => {
    res.sendFile(path.join(appDir, `./Develop/public/index.html`));
});

// route for notes.html
router.get(`/notes`, (req, res) => {
    res.sendFile(path.join(appDir, `./Develop/public/notes.html`));
});

module.exports = router;