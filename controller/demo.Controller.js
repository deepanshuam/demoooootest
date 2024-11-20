import Company from '../models/demo.js';

export async function addOrUpdateCompany(req, res) {
  const { name, pros, cons, rating } = req.body;

  if (!name || !rating) {
    return res.status(400).json({ error: 'Name and rating are required' });
  }

  try {
    let company = await Company.findOne({ name });
    if (company) {
      company.pros = pros;
      company.cons = cons;
      company.rating = rating;
      await company.save();
      return res.json({ message: 'Company updated successfully', company });
    }

    company = new Company({ name, pros, cons, rating });
    await company.save();
    res.json({ message: 'Company added successfully', company });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


export async function getCompanyByName(req, res) {
  const { name } = req.params;

  try {
    const company = await Company.findOne({ name });
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.json(company);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
