import {Router} from "express"
const router = Router()

router.get('/', (req, res) => res.render('index',{title: 'Mi primera página en Node'}))
router.get('/about', (req, res) => res.render('about',{title: 'Sobre nosotros'}))
router.get('/contact', (req, res) => res.render('contact',{title: 'Contactanos'}))

export default router