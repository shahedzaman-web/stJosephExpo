import { extendTheme } from "native-base";

const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        fontFamily: "ProximaNova",
      },
    },
    Button: {
      baseStyle: {
        rounded: "md",
        
        size: "lg",
      },
      _text: {
        fontSize: "lg",
        fontFamily: "Helvetica",
      },
    },
  },
});

export default theme;
