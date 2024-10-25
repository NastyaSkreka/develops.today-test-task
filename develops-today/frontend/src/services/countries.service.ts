import { axiosClassic } from "@/api/api";
import { CountryResponse } from "@/types/country.types";

class CountryService {
  private BASE_URL = "/countries";

  async getAvailableCountries() {
    const response = await axiosClassic.get(`${this.BASE_URL}`);
    return response;
  }

  async getCountryInfo(code: string): Promise<CountryResponse> {
    try {
      const response = await axiosClassic.get<CountryResponse>(
        `${this.BASE_URL}/${code}`
      );
      return response.data;
    
    } catch (error) {
      console.error("Error fetching country info:", error);
      throw error;
    }
  }
}

export const countryService = new CountryService();
