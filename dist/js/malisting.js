require.config({paths:{jquery:"jquery.min",com:"com",temo:"temo",listing:"listing"}}),require(["jquery"],function(e){require(["template","com"],function(e,o){require(["temo"],function(o){require(["listing"],function(o){console.log(top),console.log(e),console.log(o)})})})});