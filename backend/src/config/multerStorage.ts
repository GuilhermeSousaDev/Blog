import { createHash } from 'crypto';
import multer from 'multer';

const storage = multer.diskStorage({
    filename: function(req, file, cb) {
        const hash = createHash('sha256');

        cb(null, `${hash}-${file.filename}`);
    }
});

export default storage;
