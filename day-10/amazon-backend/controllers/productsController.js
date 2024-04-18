const productsModel = require("../models/productsModels");

const getAllProducts = async (req, res) => {
  try {
    const data = await productsModel.find();
    console.log(data);

    res.json({
      status: "success",
      result: 0,
      data: {
        product: data,
      },
    });
  } catch (error) {
    res.json({
      status: "failed",
      result: 0,
      data: {
        message: JSON.stringify(error),
      },
    });
  }
};

const postProducts = async (req, res) => {
  try {
    const { title, price } = req.body;
    const product = await productsModel.create({
      title: title,
      price: price,
    });

    if (product) {
      console.log("product registered");
      res.json({
        status: "success",
        result: 0,
        data: {
          product: product,
        },
      });
    }
  } catch (error) {
    res.json({
      status: "failed",
      result: 0,
      data: {
        message: JSON.stringify(error),
      },
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { title } = req.body;

    const product = await productsModel.deleteOne({
      title: title,
    });

    if (product) {
      console.log("product delete");
      res.json({
        status: "success",
        result: 0,
        data: {
          product: product,
        },
      });
    }
  } catch (error) {
    res.json({
      status: "failed",
      result: 0,
      data: {
        message: JSON.stringify(error),
      },
    });
  }
};

const deleteProductById = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);

    const product = await productsModel.findByIdAndDelete({
      _id: id,
    });

    if (product) {
      console.log("product delete by id");
      res.json({
        status: "success",
        result: 0,
        data: {
          product: product,
        },
      });
    } else {
      res.json({
        status: "success",
        result: 0,
        data: {
          product: product,
        },
      });
    }
  } catch (error) {
    res.json({
      status: "failed",
      result: 0,
      data: {
        message: error,
      },
    });
  }
};

const replaceProduct = async (req, res) => {
  try {
    const id = req.params.id;
    // merge id with the req.body
    const data = { ...req.body, id };
    console.log(data);
    // findOneAndReplace({filter},{data} )
    const product = await productsModel.findOneAndReplace(
      {
        _id: id,
      },
      data
    );

    if (product) {
      console.log("product was replaced");
      res.json({
        status: "success",
        result: 0,
        data: {
          product: product,
        },
      });
    } else {
    }
  } catch (error) {
    res.json({
      status: "failed",
      result: 0,
      data: {
        message: error,
      },
    });
  }
};

const patchProduct = async (req, res) => {
  try {
    const id = req.params.id;
    // merge id with the req.body
    const data = { ...req.body, id };
    console.log(data);
    // findOneAndReplace({filter},{data} )
    const product = await productsModel.findOneAndUpdate(
      {
        _id: id,
      },
      data
    );

    if (product) {
      console.log("product was replaced");
      res.json({
        status: "success",
        result: 0,
        data: {
          product: product,
        },
      });
    } else {
    }
  } catch (error) {
    res.json({
      status: "failed",
      result: 0,
      data: {
        message: error,
      },
    });
  }
};

module.exports = {
  getAllProducts,
  postProducts,
  deleteProduct,
  deleteProductById,
  replaceProduct,
  patchProduct,
};
