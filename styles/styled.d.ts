
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      title: string;
      // add other colors if needed
    };
    fontSizes: {
      xl: string;
      // add other sizes if needed
    };
  }
}
