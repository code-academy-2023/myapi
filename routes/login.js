const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const user = require('../models/user_model');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

router.post('/',
    function (request, response) {
        if (request.body.username && request.body.password) {
            const username = request.body.username;
            const clear_password = request.body.password;
            user.checkPassword(username, function (dbError, dbResult) {
                if (dbError) {
                    response.json(dbError);
                }
                else {
                    if (dbResult.length > 0) {
                        let hashed_password = dbResult[0].password;
                        bcrypt.compare(clear_password, hashed_password, function (err, compareResult) {
                            if (compareResult) {
                                console.log("succes");
                                const token = generateAccessToken({ username: user });
                                response.send(token);
                            }
                            else {
                                console.log("wrong password");
                                response.send(false);
                            }
                        }
                        );
                    }
                    else {
                        console.log("user does not exists");
                        response.send(false);
                    }
                }
            }
            );
        }
        else {
            console.log("username or password missing");
            response.send(false);
        }
    }
);

function generateAccessToken(username) {
    dotenv.config();
    return jwt.sign(username, process.env.MY_TOKEN, { expiresIn: '1800s' });
  }
module.exports = router;