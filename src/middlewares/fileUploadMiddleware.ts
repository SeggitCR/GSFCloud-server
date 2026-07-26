import multer from 'multer';
import path from 'path';

const UPLOAD_PATH = path.normalize(path.join('/home/sebascr/uploads/'));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_PATH);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});

const upload = multer({ 
    storage: storage
});

export { upload };