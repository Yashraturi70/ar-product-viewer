import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { v4 as uuidv4 } from 'uuid';
import Product from '../models/Product.js';

const s3 = new S3Client({
  region: process.env.S3_REGION,
  credentials: {
    accessKeyId: process.env.S3_KEY,
    secretAccessKey: process.env.S3_SECRET
  }
});

export const getSignedUploadUrl = async (req, res) => {
  try {
    const { filename, contentType } = req.body;
    if (!filename || !contentType) return res.status(400).json({ error: 'filename+contentType required' });

    const key = `models/${uuidv4()}-${filename}`;
    const cmd = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key: key,
      ContentType: contentType,
      ACL: 'public-read' // optional: if you want public; otherwise use CloudFront signed URLs
    });

    const signedUrl = await getSignedUrl(s3, cmd, { expiresIn: 3600 });
    const assetUrl = `https://${process.env.S3_BUCKET}.s3.${process.env.S3_REGION}.amazonaws.com/${key}`;
    res.json({ signedUrl, assetUrl, key });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// metadata create endpoint
export const createProduct = async (req, res) => {
  try {
    const payload = req.body;
    // Expect payload: { name, description, sku, variants: [{ name, glb_url, dimensions }] }
    const p = await Product.create(payload);
    res.status(201).json(p);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
