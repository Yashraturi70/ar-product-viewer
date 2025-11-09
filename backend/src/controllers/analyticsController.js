import Analytics from '../models/Analytics.js';

export const postAnalytics = async (req, res) => {
  try {
    const { productId, event, metadata } = req.body;
    const doc = await Analytics.create({
      productId,
      event,
      metadata,
      userAgent: req.headers['user-agent']
    });
    res.status(201).json({ ok: true, id: doc._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
