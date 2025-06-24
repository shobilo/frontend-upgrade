function buildSvgLoader() {
  return {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };
}

module.exports = buildSvgLoader;
