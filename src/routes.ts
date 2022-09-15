import { Router } from "express"

import PipeDriveController from "./api/controllers/PipeDriveController"

const routes = Router()
routes.get('/', (res: Request)=> res.json())


routes.post('/pipe_drive/addperson', PipeDriveController.addPerson)

export default routes