
interface IBorderColors {
  default: string;
  focus: string;
}

export interface ITheme {
  primary: string;
  primaryDark: string;
  secondary: string;
  secondaryLight: string;
  secondaryDark: string;
  background: string;
  backgroundActive: string;
  backgroundDarker: string;
  border: IBorderColors;
  shadow: string;
  shadowStrong: string;
  submit: string;
  submitLight: string;
  submitDark: string;
  text: string;
  textDisabled: string;
  invertedText: string;
  error: string;
  errorLight: string;
  errorDark: string;
  info: string;
  inactive: string;
}

export const Theme: ITheme = {
  primary: '#744050',
  primaryDark: '#744050',
  secondary: '#edff3a',
  secondaryLight: 'rgba(242, 255, 111, 0.75)',
  secondaryDark: '#d2d21c',
  background: '#fefefe',
  backgroundActive: 'rgba(116, 116, 116, 0.1)',
  backgroundDarker: '#f4f4f4',
  border: {
    default: '#e6e6e6',
    focus: '#bababa',
  },
  invertedText: '#fefefe',
  shadow: 'rgba(160,160,160,0.35)',
  shadowStrong: 'rgba(50,50,50,0.5)',
  submit: '#744050',
  submitLight: '#58d52c',
  submitDark: '#0b9100',
  text: '#333',
  textDisabled: 'rgba(160,160,160)',
  error: '#dc3f37',
  errorLight: '#e3332a',
  errorDark: '#dc3f37',
  info: '#5994df',
  inactive: 'rgba(200,200,200,0.70)',
};

export default Theme;
