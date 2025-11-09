import mongoose from 'mongoose';

const AnalyticsSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  event: String, // session_start, placed, dwell, screenshot
  metadata: mongoose.Schema.Types.Mixed,
  userAgent: String,
  ts: { type: Date, default: Date.now }
});

export default mongoose.model('Analytics', AnalyticsSchema);
