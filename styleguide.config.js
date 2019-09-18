module.exports = {
  title: "Comradekit",
  components: "src/components/**/[A-Z]*.vue",
  defaultExample: true,
  sections: [
    {
      name: "Components",
      components: "src/components/**/[A-Z]*.vue"
    },
    {
      name: "Form",
      components: "src/components/Form/**/[A-Z]*.vue"
    }
  ]
  // webpackConfig: {
  //   // custom config goes here
  // }
};
