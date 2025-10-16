import ImageKit from '@imagekit/nodejs';

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,     // This is the default and can be omitted
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,   // This is the default and can be omitted
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT  // This is the default and can be omitted
});

export default imagekit;    // Exports the client object
