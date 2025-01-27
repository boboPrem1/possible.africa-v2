const ApiKey = require("./apiKeysModel.js");
const CustomUtils = require("../../utils/index.js");

// @Get all opportunity types
// @Route: /api/v1/opportunity_targets
// @Access: Public
exports.getAllApiKeys = async (req, res, next) => {
  const { limit, page, sort, fields } = req.query;
  const queryObj = CustomUtils.advancedQuery(req.query);
  try {
    const ApiKeys = await ApiKey.find(queryObj)
      .limit(limit * 1)
      .sort({
        createdAt: -1,
        ...sort,
      })
      .select(fields);
    res.status(200).json(ApiKeys);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// @Get opportunity type by id
// @Route: /api/v1/opportunity_targets/:id
// @Access: Public
exports.getApiKeyById = async (req, res) => {
  try {
    // get opportunity type by id
    const apiKey = await ApiKey.findById(req.params.id);
    if (!apiKey)
      return res.status(404).json({
        message: CustomUtils.consts.NOT_FOUND,
      });
    res.status(200).json(apiKey);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @Create new opportunity type
// @Route: /api/v1/opportunity_targets
// @Access: Private
exports.createApiKey = async (req, res) => {
  const CustomBody = { ...req.body };
  const slug = CustomUtils.slugify(CustomBody.name);
  try {
    CustomBody.slug = slug;
    // create new opportunity type
    const apiKey = await ApiKey.create(CustomBody);
    res.status(201).json(apiKey);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @Update opportunity type by id
// @Route: /api/v1/opportunity_targets/:id
// @Access: Private
exports.updateApiKey = async (req, res) => {
  try {
    const apiKey = await ApiKey.findById(req.params.id);
    if (!apiKey) {
      return res.status(404).json({ message: "apiKey not found !" });
    }

    const updated = await ApiKey.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @Delete opportunity type by id
// @Route: /api/v1/opportunity_targets/:id
// @Access: Private
exports.deleteApiKey = async (req, res, next) => {
  try {
    const apiKey = await ApiKey.findById(req.params.id);
    if (!apiKey)
      return res.status(404).json({ message: `apiKey not found !` });
    await ApiKey.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ message: "apiKey deleted successfully !" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
