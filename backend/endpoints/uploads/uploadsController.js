const { S3 } = require("@aws-sdk/client-s3");
const multer = require("multer");
const multerS3 = require("multer-s3");

const ACCESS_KEY_ID = process.env.ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY;
const BUCKET_NAME = process.env.BUCKET_NAME;
const AWS_REGION = process.env.AWS_REGION;

// S3 config
const s3 = new S3({
  accessKeyId: ACCESS_KEY_ID,
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
  endpoint: endpointMap[AWS_REGION],
});

const storage = multerS3({
  s3: s3,
  bucket: BUCKET_NAME,
  acl: "public-read",
  metadata: function (req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key: function (req, file, cb) {
    cb(null, "users/images/" + Date.now().toString() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports.UploadImage = upload;
