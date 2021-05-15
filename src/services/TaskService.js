'use strict';
const { Service } = require( '../../system/services/Service' );

class TaskService extends Service {
    constructor( model ) {
        super( model );
    }

}

module.exports = { TaskService };
