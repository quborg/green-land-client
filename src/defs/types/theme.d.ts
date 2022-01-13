declare namespace TYPES {
  type ThemeProps = Theme;

  type LoaderProps = ClassesProps & { loading: boolean };

  type ThemeData = {
    theme: Theme;
    toggleTheme: () => void;
  };

  type ThemePreferenceObject = { prefersDarkMode: boolean };
}
