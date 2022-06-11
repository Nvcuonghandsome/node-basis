import express from 'express';
import homeController from '../controller/homeController'

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage)
    router.get('/detail/user/:id', homeController.getDetailPage)
    router.post('/create-new-user', homeController.createNewUser)
    router.get('/edit-user/:id', homeController.editUser)
    router.post('/update-user', homeController.updateUser)
    router.post('/delete-user', homeController.deleteUser)
    router.get('/about', (req, res) => {
        res.send(`I'm Cuong...`)
    })

    return app.use('/', router)
}

export default initWebRoute