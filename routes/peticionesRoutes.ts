import { Request, Response, Router } from "express";

const peticionesRoutes = Router();

peticionesRoutes.get('', async (req: Request, res: Response, next) => {

});

peticionesRoutes.post('/subirArchivo', async (req: Request, res: Response, next) => {

});

export default peticionesRoutes;
