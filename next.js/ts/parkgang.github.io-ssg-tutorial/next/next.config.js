/** @type {import('next').NextConfig} */
module.exports = {
  trailingSlash: true,
  images: {
    // [next export시 Image Optimization 에러가 발생하여 타사 로더 사용](https://nextjs.org/docs/messages/export-image-api)
    loader: "imgix",
    path: "",
  },
};
