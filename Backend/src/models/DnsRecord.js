const mongoose = require('mongoose');

const dnsRecordSchema = new mongoose.Schema({
  domain: String,
  recordType: String,
  value: String,
}, { timestamps: true });

module.exports = mongoose.model('DnsRecord', dnsRecordSchema);
