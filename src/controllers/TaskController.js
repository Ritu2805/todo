const { Controller } = require( '../../system/controllers/Controller' );
const { TaskService } = require( '../services/TaskService' );
const { Task } = require( '../models/Task' );
const autoBind = require( 'auto-bind' ),
    taskService = new TaskService(
        new Task().getInstance()
    );

class TaskController extends Controller {

    constructor( service ) {
        super( service );
        autoBind( this );
    }

}

module.exports = new TaskController( taskService );
