export type Weather = {
  temp_c: number;
  feelslike_c: number;
  humidity: number;
  is_day: boolean;
  last_updated: string;
  condition: {
    text: string;
    icon: string;
  };
};
