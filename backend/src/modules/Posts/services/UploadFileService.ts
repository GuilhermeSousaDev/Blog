import DiskStorage from '../../../shared/providers/DiskStorage';
import { IUploadFile } from "../domain/models/IUploadFile";

export default class UploadImageService {
    public async execute (file: IUploadFile) {
        const diskStorage = new DiskStorage();

        const filename = diskStorage.save(file);

        return filename;
    }
}