import { Router } from 'express';

const router: Router = Router();

router.get('/', (req, res) => {
   res.send('Pruebas Subidas');
});

export default router;
