/**
 * Created by Richie on 11/02/2018.
 */

if (_wpcf7 == null) { var _wpcf7 = wpcf7}; // wpcf7 4.8 fix

// ac_cf7_compose Name spaced to avoid conflicts
var ac_cf7_compose = _wpcf7.taggen.compose;

(function($) {

    _wpcf7.taggen.compose = function(tagType, $form)
    {

        // Return the original function
        var ret = ac_cf7_compose.apply(this, arguments);

        // if acrepeater, add the closing string to the output tag
        if (tagType== 'acrepeater') ret += "[/acrepeater]";

        // END

        return ret;
    };


})( jQuery );
