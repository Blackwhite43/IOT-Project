const { default: axios } = require('axios');
const schedule = require("node-schedule");
const sampleModel = require('../model/dataModel'); //Import sampleModel from Model folder
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');
exports.delete_all_data = factory.deleteAll(sampleModel); // factory.(choose_function)(Model)
exports.receive_data = catchAsync(async (req, res, next) => {
    const data = req.body.data.split("\r\n");
    const data_length = data.length;
    if (data_length > 1) {
        await sampleModel.findByIdAndUpdate('654733c6bf8cbc59057e1761', {
            $set: {
                distance: data[0],
                direction: data[1],
                weight: data[2]
            }
        })
    }
    res.status(200).json({
        status: 'Success'
    });
})
exports.get_data = catchAsync(async (req, res, next) => {
    const data = await sampleModel.findById("654733c6bf8cbc59057e1761");
    axios.post(`https://thingsboard.cloud/api/v1/JCf7s9D9QiPuXFxZhWCD/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2`, {
        Degree: data.direction,
        Weight: data.weight
    })
    res.status(200).json({
        status: 'Success',
        data: data
    });
})

const get_data_auto = catchAsync(async (req, res, next) => {
    const data = await sampleModel.findById("654733c6bf8cbc59057e1761");
    axios.post(`https://thingsboard.cloud/api/v1/JCf7s9D9QiPuXFxZhWCD/attributes?clientKeys=attribute1,attribute2&sharedKeys=shared1,shared2`, {
        Degree: data.direction,
        Weight: data.weight,
        Distance: data.distance
    })
})

schedule.scheduleJob('*/1 * * * * *', get_data_auto);