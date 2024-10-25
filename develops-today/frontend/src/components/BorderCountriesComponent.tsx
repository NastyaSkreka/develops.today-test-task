import {
  BorderCountriesSection,
  BorderCountryItem,
  BorderCountryList,
} from "@/app/countries/Country.styled";
import { Borders } from "@/types/country.types";
import Link from "next/link";

interface BorderCountriesProps {
  borders: Borders[];
}

const BorderCountriesComponent = ({ borders }: BorderCountriesProps) => {
  return (
    <BorderCountriesSection>
      <h2>Bordering Countries</h2>
      {borders.length > 0 &&  (
        <BorderCountryList>
          {borders.map((border) => (
             <Link href={`/countries/${border.countryCode}`}
             key={border.countryCode}
             >
            <BorderCountryItem >
                {border.commonName}
            </BorderCountryItem>
            </Link>
          ))}
        </BorderCountryList>
      )}
    </BorderCountriesSection>
  );
};

export default BorderCountriesComponent;
