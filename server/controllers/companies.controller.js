import { Company } from '../models';

const fetchCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll();
    res.json({
      success: true,
      result : companies,
    });
  } catch (err) {
    res.status(500)
      .json({
        success: false,
        err    : err.toString(),
      });
  }
};

export {
  fetchCompanies,
};
