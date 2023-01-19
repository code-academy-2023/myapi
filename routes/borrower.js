const express = require('express');
const router = express.Router();
const borrower = require('../models/borrower_model');

router.get('/',
    function (request, response) {
        borrower.getAll(function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                console.log(dbResult);
                response.json(dbResult);
            }
        })
    });

router.get('/:id?',
    function (request, response) {
        borrower.getById(request.params.id, function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult[0]);
            }
        })
    });


router.post('/', 
function(request, response) {
  borrower.add(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(request.body);
    }
  });
});


router.delete('/:id', 
function(request, response) {
  borrower.delete(request.params.id, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});


router.put('/:id', 
function(request, response) {
  borrower.update(request.params.id, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
        console.log(dbResult["affectedRows"]);
        //response.json(dbResult);
        response.json(dbResult["affectedRows"]);
    }
  });
});

module.exports = router;