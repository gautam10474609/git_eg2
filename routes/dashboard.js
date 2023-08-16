import express from 'express';
const router = express.Router();

//rendering partials: https://waelyasmina.medium.com/a-guide-into-using-handlebars-with-your-express-js-application-22b944443b65
//we want transaction summary, calculations, dashboard to be on home (landing) page.

router
    .route('/')
    .get(async (req, res) => {
        //TODO: check if user is logged in using browser session data
        //if not, load a diff summary bar and other stuff on page.
        //put a register button in middle or smt

        //if logged in, load the data accordingly
        console.log("hello user"+JSON.stringify(req.session.user));
        res.render('dashboard', { title: 'Dashboarddd' });
    });

export default router;
