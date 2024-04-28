// /backend/src/routes/dnsRoutes.js
const express = require('express');
const {
  getAllDnsRecords,
  getDnsRecordById,
  createDnsRecord,
  updateDnsRecord,
  deleteDnsRecord,
} = require('../controllers/dnsController');

const router = express.Router();

router.get('/', getAllDnsRecords);
router.get('/:id', getDnsRecordById);
router.post('/', createDnsRecord);
router.put('/:id', updateDnsRecord);
router.delete('/:id', deleteDnsRecord);

module.exports = router;
