const path = require('path');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

// const uploadProductImageLocal = async (req, res) => {
//   // check if user uploaded a file
//   if (!req.files) {
//     throw new CustomError.BadRequestError('No File Uploaded');
//   }

//   const productImage = req.files.image;

//   // check format
//   if (!productImage.mimetype.startsWith('image')) {
//     throw new CustomError.BadRequestError('Please Upload an Image');
//   }

//   // check size
//   const maxSize = 1024 * 1024;
//   if (productImage.size > maxSize) {
//     throw new CustomError.BadRequestError(
//       `Please upload image smaller than ${(maxSize / 1024 / 1024).toFixed(
//         2
//       )} MB`
//     );
//   }

//   const imagePath = path.join(
//     __dirname,
//     `../public/uploads/${productImage.name}`
//   );
//   await productImage.mv(imagePath);

//   return res
//     .status(StatusCodes.OK)
//     .json({ image: { src: `/uploads/${productImage.name}` } });
// };

const uploadProductImage = async (req, res) => {
  const uploadResponse = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    { use_filename: true, folder: 'hello-file-upload' }
  );

  fs.rm(req.files.image.tempFilePath, (err) => {
    if (err) console.log(err);
  });

  return res
    .status(StatusCodes.OK)
    .json({ image: { src: uploadResponse.secure_url } });
};

module.exports = {
  uploadProductImage,
};
