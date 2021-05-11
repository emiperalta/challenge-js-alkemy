const { Router } = require('express');

const pool = require('../database');

const router = Router();

router.get('/', async (req, res) => {
  let db = null;
  try {
    db = await pool();
    const result = await db.query('SELECT * FROM balances');
    res.status(200).json(result[0]);
  } catch (error) {
    console.log(error);
  } finally {
    await db.end();
  }
});

module.exports = router;
