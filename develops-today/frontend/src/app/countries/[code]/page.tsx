"use client";
import { useCountryInfo } from "@/hooks/useCountry";
import { useParams } from "next/navigation";
import { Container, CountryHeader, Flag, CountryName } from "../Country.styled";

import BorderCountriesComponent from "@/components/BorderCountriesComponent";
import PopulationChartComponent from "@/components/ChartComponenet";

const CountryInfoPage = () => {
  const { code } = useParams<{ code: string }>();
  const { data: countryData } = useCountryInfo(code as string);

  const populationData = countryData?.population || [];
  const borders = countryData?.borderCountries.borders || [];

  return (
    <Container>
        <CountryName>{countryData?.borderCountries?.officialName}</CountryName>
      <CountryHeader>
        {countryData?.flag && (
          <Flag
            src={countryData.flag}
            alt='country-flag'
          />
        )}
      </CountryHeader>
     { borders.length > 0 &&  <BorderCountriesComponent borders={borders} />}
      {populationData.length > 0 && (
        <PopulationChartComponent populationData={populationData} />
      )}
    </Container>
  );
};

export default CountryInfoPage;
