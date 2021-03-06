const { I18n } = require("react-i18nify");

I18n.setTranslations({
  en: {
    application: {
      title: "Awesome app with i18n!",
      hello: "Hello, %{name}!"
    },
    date: {
      long: "MMMM Do, YYYY"
    },
    export: "Export %{count} items",
    export_0: "Nothing to export",
    export_1: "Export %{count} item",
    two_lines: "Line 1<br />Line 2"
  },
  fr: {
    application: {
      title: "Toffe app met i18n!",
      hello: "Hallo, %{name}!"
    },
    date: {
      long: "D MMMM YYYY"
    },
    export: "Exporteer %{count} dingen",
    export_0: "Niks te exporteren",
    export_1: "Exporteer %{count} ding",
    two_lines: "Regel 1<br />Regel 2"
  }
});

I18n.setLocale("fr");

export default I18n;
