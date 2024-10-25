import { HttpService } from '@nestjs/axios';
import {
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import {
  CountryInfo,
} from './country.types';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CountryService {
  private readonly dateNagerApi: string;
  private readonly countriesNowApi: string;

  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.dateNagerApi = this.configService.get<string>('DATE_NAGER_API');
    this.countriesNowApi = this.configService.get<string>('COUNTRIES_NOW_API');
  }

  async getAvailableCountries(): Promise<string[]> {
    try {
      const response = await lastValueFrom(
        this.httpService.get<string[]>(
          `${this.dateNagerApi}/AvailableCountries`,
        ),
      );
      return response.data;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error fetching available countries',
      );
    }
  }

  async getCountryInfo(code: string) {
    try {
      const borderResponse = await lastValueFrom(
        this.httpService.get<CountryInfo>(
          `${this.dateNagerApi}/CountryInfo/${code}`,
        ),
      );

      const flagResponse = await lastValueFrom(
        this.httpService.get(`${this.countriesNowApi}/countries/flag/images`),
      );
      const flagData = flagResponse.data.data.find(
        (country) => country.iso2 === code,
      );

      const populationResponse = await lastValueFrom(
        this.httpService.get(`${this.countriesNowApi}/countries/population`)
    );


    const populationData = populationResponse.data.data.find(
        (country) => console.log(country.code === "" )
    );
    
    
      return {
        borderCountries: borderResponse.data,
        flag: flagData.flag,
        population: populationData || []
      };
    } catch (error) {
      console.error('Error fetching country info:', error);
      throw new Error(`Failed to fetch country info for code: ${code}`);
    }
  }
}
