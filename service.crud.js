
const crudRepository = require('./repository.crud')
const getusers = async ()=>{
    return  await crudRepository.find();
}
module.exports = {getusers}