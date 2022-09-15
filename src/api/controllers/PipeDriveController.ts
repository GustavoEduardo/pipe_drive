import {Request, Response} from "express"
import PipeDriveService from "../services/PipeDriveService"

export default {


    async addPerson(req: Request, res: Response){
        
        const response: any = await PipeDriveService.addPerson(req.body)
        return res.status(response.code).json(response)
    }

}