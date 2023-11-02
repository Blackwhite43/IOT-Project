const sampleModel = require('../model/dataModel'); //Import sampleModel from Model folder
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.function_name = factory.getAll(sampleModel); // factory.(choose_function)(Model)
exports.receive_data = catchAsync(async (req, res, next) => {
    const data = req.body.distance.split("\r\n");
    const data_length = data.length;
    // console.log(data[data_length-2]);
    await sampleModel.findByIdAndUpdate('6543100ef4a1d14a4e203813', {
        $set: {
            distance: data[data_length-2]
        }
    })
    res.status(200).json({
        status: 'Success'
    });
})
exports.get_data = catchAsync(async (req, res, next) => {
    const data = await sampleModel.findById("6543100ef4a1d14a4e203813");
    console.log(data);
    res.status(200).json({
        status: 'Success',
        data: data
    });
})