const find = async ()=>{
const users = [
    {
    id:1,
    name:"Deimer",
    email:"deimerhdz21@gmail.com"
    },
    {
        id:2,
        name:'test',
        email:"test@gmail.com"
    }
]

return {ok:true, users};


}

module.exports = {find}