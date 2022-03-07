const mongoose = require("mongoose");

const bcrpyt = require("bcryptjs");

const firm = mongoose.model("firm");

exports.signup = (req, res) => {
    const { firmName, firmOwner, firmEmailAddress, firmContactNumber} = req.body;
        
        const firmData  = new firm({
            firmName,
            firmOwner,
            firmEmailAddress,
            firmContactNumber,
            password : bcrpyt.hashSync(req.body.password, 10)
        })

        try{
            firmData.save()
            .then(res.send("saved"));
            console.log(firmData);
        }catch(err){
            res.status(422).send(err)
        }
}

exports.login = (req, res) => {
    const {firmEmailAddress, password} = req.body;

    firm.findOne({
        firmEmailAddress: firmEmailAddress
    })
    .exec((err, user) => {
        if(err){
            res.status(500).send({message: "error"});
            return;
        }

        if(!user){
            return res.status(404).send({message: "User not found"})
        }

        var passwordIsValid = bcrpyt.compareSync(
            password,
            user.password
        );

        if(!passwordIsValid){
            return res.status(401).send({message: "Invalid Password"})
        }

        const currentUser = {
            id: user._id,
            firmName: user.firmName,
            firmOwner: user.firmOwner,
            firmEmailAddress: user.firmEmailAddress,
            firmContactNumber: user.firmContactNumber
        }

        res.status(200).send(currentUser)
    })

}