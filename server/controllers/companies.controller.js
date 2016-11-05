import { Company } from '../models';

export const fetchCompanies = async (req, res) => {
  // GET /api/companies/?id,name
  // GET /api/companies
  const { id, name } = req.query;

  try {
    // if id or name is provided, fetch a single company
    if (id || name) {
      let company;
      if (id) {
        company = await Company.findById(id);
      } else {
        company = await Company.findOne({ where: { name } });
      }
      if (company) {
        // fetch reviews for that company
        const reviews = await company.getReviews();
        res.json({
          success: true,
          result : {
            company: company.toJSON(),
            reviews: reviews.map(review => review.toJSON()),
          },
        });
      } else {
        res.json({
          success: false,
          message: 'Company does not exist',
        });
      }
      return;
    }

    // otherwise fetch all companies
    const companies = await Company.findAll();
    res.json({
      success: true,
      result : companies,
    });
  } catch (err) {
    res.status(500)
      .json({
        success: false,
        message: err.toString(),
      });
  }
};

export const postCompany = async (req, res) => {
  // POST /api/company
  try {
    const { name, address } = req.body;
    // validate request body data
    if (!name || !address) {
      res.status(500)
        .json({
          success: false,
          message: 'Please provide both name and address of company',
        });
    }
    // if company exists
    if (await Company.findOne({ where: { name } }) !== null) {
      res.status(500)
        .json({
          success: false,
          message: 'That company already exists!',
        });
    // otherwise, make company
    } else {
      const { id } = await Company.create({ name, address });
      res.json({
        success: true,
        id,
      });
    }
  } catch (err) {
    res.status(500)
      .json({
        success: false,
        message: err.toString(),
      });
  }
};
