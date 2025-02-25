import StyleDictionary from "style-dictionary";

const sd = new StyleDictionary("./figma-tokens/config/config.json");
const CONFIG = {
  BASE_FONT_SIZE: 16,
  CONVERTIBLE_TYPES: ["fontSizes", "spacing", "sizing"],
  PATH_SEPARATOR: "-",
};

// Utility functions
const utils = {
  pxToRem: (value) => {
    if (typeof value !== "string" || !value.includes("px")) return value;
    const number = parseFloat(value);
    return `${number / CONFIG.BASE_FONT_SIZE}rem`;
  },

  extractReference: (value) => {
    const stringValue = JSON.stringify(value);
    const refValue = stringValue.match(/"value":"([^"]+)"/)?.[1];
    if (!refValue) return null;

    const match = refValue.match(/\{([^.]+)\.([^}]+)\}/);
    return match
      ? { category: match[1], name: match[2] }
      : { directValue: refValue };
  },

  cleanPath: (path) => path.join(CONFIG.PATH_SEPARATOR),
};

// Token value resolver
class TokenResolver {
  constructor(dictionary) {
    this.dictionary = dictionary;
  }

  resolve(token) {
    if (!token?.$value) return "";

    if (
      token.$value.failedToResolve &&
      typeof token.$value.value === "object"
    ) {
      const reference = utils.extractReference(token.$value.value);

      if (!reference) return "";
      if (reference.directValue) return reference.directValue;

      const refToken =
        this.dictionary.tokens[reference.category]?.[reference.name];
      return refToken?.$value?.value || "";
    }

    return token.$value.value;
  }

  transformValue(value, type) {
    return CONFIG.CONVERTIBLE_TYPES.includes(type)
      ? utils.pxToRem(value)
      : value;
  }
}

// Token formatters
const formatters = {
  fontFamilies: (name, value) => `$font-family-${name}: '${value}';`,
  lineHeights: (name, value) =>
    `$lineheight-${name.replace(/%/g, "")}: ${value};`,
  color: (path, value) => `$color-${utils.cleanPath(path.slice(1))}: ${value};`,
  fontSizes: (path, value) => `$fontsize-${utils.cleanPath(path)}: ${value};`,
  spacing: (name, value) => `$spacing-${name}: ${value};`,
  sizing: (name, value) => `$sizing-${name}: ${value};`,
  default: (path, value) => `$${utils.cleanPath(path)}: ${value};`,
};

// Register custom format
StyleDictionary.registerFormat({
  name: "scss/custom-variables",
  format: function ({ dictionary }) {
    const resolver = new TokenResolver(dictionary);
    const header = [
      "/**",
      " * Do not edit directly",
      " * Generated on " + new Date().toLocaleString(),
      " */",
      '@forward "../variables";\n\n',
    ].join("\n");

    return (
      header +
      dictionary.allTokens
        .map((token) => {
          const value = resolver.resolve(token);
          const transformedValue = resolver.transformValue(
            value,
            token.$type?.value,
          );
          const formatter =
            formatters[token.$type?.value] || formatters.default;

          switch (token.$type?.value) {
            case "fontFamilies":
              return formatter(
                token.path[token.path.length - 1],
                transformedValue,
              );
            case "lineHeights":
              return formatter(
                token.path[token.path.length - 1],
                transformedValue,
              );
            case "color":
              return formatter(token.path, transformedValue);
            case "fontSizes":
              const sizePath =
                token.path[0] === "fontsize" ? token.path.slice(1) : token.path;
              return formatter(sizePath, transformedValue);
            case "spacing":
            case "sizing":
              return formatter(
                token.path[token.path.length - 1],
                transformedValue,
              );
            default:
              return formatter(token.path, transformedValue);
          }
        })
        .join("\n")
    );
  },
});

await sd.buildAllPlatforms();
