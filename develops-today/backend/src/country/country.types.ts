export interface CountryInfo {
  borders: string[];
}

export interface PopulationData {
  country: string;
  populationCounts: Array<{
    year: number;
    value: number;
  }>;
}

export interface FlagData {
  country: string;
  flag: string;
}

export interface CountryResponse {
  borderCountries: string[];
  population: Array<{
    year: number;
    value: number;
  }>;
  flagUrl: string | null;
}
