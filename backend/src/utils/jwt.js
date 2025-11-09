import jwt from 'jsonwebtoken';
export const signJWT = (payload, expiresIn = '8h') => jwt.sign(payload,
process.env.JWT_SECRET, { expiresIn });
