const healthCheck = async (req, res, next) => {
  try {
    res.status(200).json({ message: "Server is running" });
  } catch (error) {
    next(err);
  }
};
export default healthCheck
