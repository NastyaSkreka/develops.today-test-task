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

export interface Borders {
    commonName: string;
    countryCode: string;
    officialName: string;
    region: string;
}

export interface BorderCountry {
    commonName: string;
    countryCode: string;
    officialName: string;
    region: string;
    borders: Borders[];
  }

export interface CountryResponse {
  borderCountries: BorderCountry;
  population: Array<{
    year: number;
    value: number;
  }>;
  flag: string | null;
}
