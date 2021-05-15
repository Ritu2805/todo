const mongoose = require( 'mongoose' );
const { Schema } = require( 'mongoose' );
const uniqueValidator = require( 'mongoose-unique-validator' );
const slugify = require( 'slugify' );

class Task {

    initSchema() {
        const schema = new Schema( {
            'title': {
                'type': String,
                'required': true,
            },
            'description': {
                'type': String,
                'required': false,
            },
            'media': {
                'type': String,
                'required': true,
            },
            'target_date': {
                'type': Date,
                'required': true
            },
            'status': {
                'type': String,
                'enum': [ 'Todo', 'In-progress', 'Done' ],
                'default': 'Todo'                
            }
        }, { 'timestamps': true } );

        schema.pre( 'save', function( next ) {
            const task = this;

            if ( !task.isModified( 'title' ) ) {
                return next();
            }
            console.log( 'task', task );
            return next();
        } );

        schema.plugin( uniqueValidator );
        try {
            mongoose.model( 'task', schema );
        } catch ( e ) {
            console.log("e", e);
        }

    }

    getInstance() {
        this.initSchema();
        return mongoose.model( 'task' );
    }
}

module.exports = { Task };
