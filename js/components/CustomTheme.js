var Material = require('material-ui');
//var Spacing = Material.Styles.Spacing;
var Colors = Material.Styles.Colors;

module.exports = {
  getPalette: function() {
    return {
      primary1Color: Colors.teal500,
      primary2Color: Colors.teal700,
      primary3Color: Colors.teal100,
      accent1Color: Colors.blueGrey500,
      accent2Color: Colors.blueGrey300,
      accent3Color: Colors.blueGrey100
    };
  },

  getComponentThemes: function(palette, spacing) {
    //spacing = spacing || Spacing;
    return {
      toolbar: {
        backgroundColor: palette.primary1Color
      }
    };
  }
};