// /backend/src/controllers/dnsController.js
const DnsRecord = require('../models/DnsRecord');

exports.getAllDnsRecords = async (req, res) => {
  try {
    const records = await DnsRecord.find();
    res.json(records);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getDnsRecordById = async (req, res) => {
  try {
    const record = await DnsRecord.findById(req.params.id);
    if (!record) return res.status(404).send('Record not found');
    res.json(record);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createDnsRecord = async (req, res) => {
  const { domain, recordType, value } = req.body;
  try {
    const newRecord = new DnsRecord({ domain, recordType, value });
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.updateDnsRecord = async (req, res) => {
  try {
    const updatedRecord = await DnsRecord.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRecord) return res.status(404).send('Record not found');
    res.json(updatedRecord);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.deleteDnsRecord = async (req, res) => {
  try {
    const deletedRecord = await DnsRecord.findByIdAndDelete(req.params.id);
    if (!deletedRecord) return res.status(404).send('Record not found');
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
