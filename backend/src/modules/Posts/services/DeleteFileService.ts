import DiskStorage from '../../../shared/providers/DiskStorage';

export default class UploadImageService {
    public async execute (filename: string): Promise<void> {
        const diskStorage = new DiskStorage();

        await diskStorage.remove(filename);
    }
}