const crudRepository = require('./repository.crud.js')
const {getusers}= require('./service.crud')
jest.mock('./repository.crud.js')

beforeEach(()=>{
    crudRepository.find.mockClear()
})
test("should return empty array users", async()=>{
    // console.log(crudRepository.find);
    crudRepository.find.mockReturnValueOnce({ok:false,users:[]})
    const user = await getusers()

    expect(user.users).toBeInstanceOf(Array);
    expect(user.ok).toBe(false);
    expect(user.users.length).toEqual(0)
})