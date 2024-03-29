const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { fetchAllUsers, postUserDB, updateUserDB, deleteUserDB, fetchUserByEmail, fetchUserById} = require('../repository/userRepository');


const fetchAll = async (req, res) => {
    try {
        const result = await fetchAllUsers();
        if(result){
            console.log(result)
            res.status(200).json(result)
        }
    } catch (err){
        res.status(500).json({
            error: {
                message: err.message
            }
        })
    }
};

//login
const  loginUser = async (req,res) => {
    const payload = req.body;
    try {

        const user = await fetchUserByEmail(payload?.email);

        if(user){
            const dbPassword = user?.password;
            bcrypt.compare(payload?.password, dbPassword, (err, result) => {
                if(err){
                    return res.status(500).json({
                        error: {
                            message: err.message
                        }
                    })
                }

                if(result){
                    const token = jwt.sign(
                        {
                            userId: user?.id,
                            email: user?.email,
                            username: user?.username,
                            role: user?.role
                        },
                        process.env.JWT_KEY,
                        {
                            expiresIn: "1h"
                        }
                    );
                    return res.status(200).json({
                        message: 'Auth successful',
                        token: token,
                        user: user?.username,
                        email:user?.email,
                        firstName:user?.firstName,
                        lastName:user?.lastName,
                        licencePlate:user?.licencePlate,
                        userID:user?.id,
                    })
                }
                //incorrect password
                return res.status(401).json({
                    error: {
                        message: 'Incorrect password'
                    }
                })
            });
        } else {
            return res.status(401).json({
                error: {
                    message: 'Auth failed'
                }
            })
        }

    }catch (err){
        res.status(500).json({
            error: {
                message: err.message
            }
        })
    }
};

//sign up
const  postUser = async (req, res) => {
    let payload = {
        ...req.body
    };

    try {
        const user = await fetchUserByEmail(payload?.email);
        if(user){
            return res.status(409).json({
                message: "Email exists"
            });
        }
        bcrypt.hash(payload?.password, 10, async (err, hash) => {
            if(err){
                return res.status(500).json({
                    error: {
                        message: err.message
                    }
                })
            }
            payload.password = hash;
            payload.licencePlate = "";
            try{
                const result = await postUserDB(payload);
                if(result){
                    res.status(200).json(result)
                }
            }catch (err) {
                return res.status(500).json({
                    error: {
                        message: err.message
                    }
                })
            }
        });

    } catch (err){
        res.status(500).json({
            error: {
                message: err.message
            }
        })
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    try{
        if(payload.user){
            const user = await fetchUserByEmail(payload?.email);
            if(user){
                return res.status(409).json({
                    message: "Email exists"
                });
            }
        }

        const result = await updateUserDB(id, payload)
        console.log(result)
        if(result){
            return res.status(200).json({
                message: "User updated"
            });
        }

    } catch (err){
        res.status(500).json({
            message: 'Failed to update'
        })
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await deleteUserDB(id);
        if(result === 0){
            res.status(404).json({
                message: 'Not found'
            })
        }
        if(result === 1){
            res.status(200).json({
                message: "User deleted successfully"
            })
        }
    } catch (err){
        res.status(500).json({
            error: {
                message: err.message
            }
        })
    }
};

module.exports = { fetchAll, loginUser, postUser, deleteUser, updateUser }