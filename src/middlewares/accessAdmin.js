let admins = ['Greta', 'Ada', 'Vim', 'Tim']

const access = (req,res,next) => {
    if(admins.includes(req.query.user)){
        next()
    }else{
        res.render('noentry',{
            title: 'Estas afueraaa'
        })
}}

module.exports = access;