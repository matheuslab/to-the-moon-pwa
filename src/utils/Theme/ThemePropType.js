import PropTypes from 'prop-types';

const PalettePropType = PropTypes.shape({
  light: PropTypes.string,
  main: PropTypes.string,
  dark: PropTypes.string,
  contrastText: PropTypes.string,
  contrastDefaultColor: PropTypes.string,
});

const GreyPalettePropType = PropTypes.shape({
  highEmphasis: PropTypes.string,
  mediumEmphasis: PropTypes.string,
  disabled: PropTypes.string,
  lighter: PropTypes.string,
  background: PropTypes.string,
});

const CustomPalettePropType = PropTypes.shape({
  light: PropTypes.string,
  main: PropTypes.string,
  contrastText: PropTypes.string,
  contrastDefaultColor: PropTypes.string,
});

export const ThemePropType = PropTypes.shape({
  palette: PropTypes.shape({
    primary: PalettePropType,
    secondary: PalettePropType,
    error: CustomPalettePropType,
    success: CustomPalettePropType,
    attention: CustomPalettePropType,
    grey: GreyPalettePropType,
    special: PalettePropType,
    common: PropTypes.shape({
      white: PropTypes.string,
      black: PropTypes.string,
    }),
    contrastThreshold: PropTypes.number,
    shape: PropTypes.shape({
      borderRadius: PropTypes.number,
    }),
  }),
});
