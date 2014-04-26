/**
 * 
 */
define(["graphics", "displayCell"], function(graphics, displayCell) {

    /**
     * 
     * @type type
     */
    var flipFlap = {
        /**
         * 
         * @param {type} container
         * @returns {undefined}
         */
        create: function(container, options) {
            options = options || {};
            var width = options.width || 500,
                    height = options.height || 500,
                    graphics3D = null,
                    canvas = document.createElement("canvas"),
                    cell;
            
            canvas.width = width;
            canvas.height = height;
            container.append(canvas);
            graphics3D = graphics({canvas: canvas});
            cell = displayCell({graphics: graphics3D});
            graphics3D.run();
        }
    };

    return flipFlap;

});

