import {css} from './index';

// https://responsivedesign.is/develop/browser-feature-support/media-queries-for-common-device-breakpoints/

export default {
  mobile: (...CSS: Parameters<typeof css>) => `
    @media only screen and (max-device-width : 480px) {
      ${css(...CSS)}
    }
  `,
  tablet: (...CSS: Parameters<typeof css>) => `
    @media only screen and (min-device-width : 481px) and (max-device-width : 768px) {
      ${css(...CSS)}
    }
  `,
  desktop: (...CSS: Parameters<typeof css>) => `
    @media only screen and (min-device-width : 769px) {
      ${css(...CSS)}
    }
  `,
};
