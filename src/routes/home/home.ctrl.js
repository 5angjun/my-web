const { jsonp } = require("express/lib/response");

const output={
    index:(req,res)=>{
        res.render("home/index");
    },
    
    
    test:(req,res)=>{
        res.render("home/test");
    }
};
const process={
    analyze:(req,res)=>{
        console.log(req);
        const option1=req.body.option1, option2=req.body.option2, option3=req.body.option3;
        const response={
            "option1":option1,
            "option2":option2,
            "option3":option3
        }
        return res.json(response);
    }
}
module.exports={
    output,
    process
};