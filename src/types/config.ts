export interface AppConfig {
  i18next: {
    debug: boolean;
    fallbackLng: string;
  };
}

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
