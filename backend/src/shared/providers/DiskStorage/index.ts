import path from 'path';
import fs from 'fs';
import { createHash } from "crypto";
import { createWriteStream } from "fs";
import { promisify } from "util";
import { IUploadFile } from "../../../modules/Posts/domain/models/IUploadFile";
import AppError from '../../errors/AppError';

export default class DiskStorage {
    public save(file: IUploadFile): string {
        const filenameHash = `${createHash('sha256')}-${file.filename}`;

        const uploadFile = createWriteStream(`uploads/${filenameHash}`);

        uploadFile.write(file.buffer);

        return filenameHash;
    }

    public async remove(filename: string): Promise<void> {
        const statAsync = promisify(fs.stat);
        const unlinkAsync = promisify(fs.unlink);

        const pathFile = path.resolve('uploads', `${filename}`);

        const file = await statAsync(pathFile);

        if (!file) {
            throw new AppError('File not found');
        }

        await unlinkAsync(pathFile);
    }
}