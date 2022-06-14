import { Request, Response } from "express";
import UploadFileService from '../../../services/UploadFileService';
import DeleteFileService from '../../../services/DeleteFileService';

export default class FileController {
    public async index(req: Request, res: Response): Promise<Response> {
        const { filename, buffer } = req.file;

        const uploadFile = new UploadFileService();

        const file = uploadFile.execute({
            filename,
            buffer,
        });

        return res.json(file);
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { filename } = req.body;

        const deleteFile = new DeleteFileService();

        deleteFile.execute(filename);

        return res.json([]);
    }
}