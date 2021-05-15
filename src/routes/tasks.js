'use strict';
const TaskController = require( '../controllers/TaskController' );
const express = require( 'express' ),
    router = express.Router();
const AuthController = require( '../controllers/AuthController' );

router.get( '/', AuthController.checkLogin, TaskController.getAll );
router.get( '/:id', TaskController.get );
router.post( '/', TaskController.insert );
router.put( '/:id', TaskController.update );
router.delete( '/:id', TaskController.delete );


module.exports = router;
