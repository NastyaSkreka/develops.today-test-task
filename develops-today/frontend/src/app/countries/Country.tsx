"use client";

import { useCountry } from "@/hooks/useCountry";
import { CountryItem, CountryList } from "./Country.styled";
import Link from "next/link";

export function Country() {
  const { data: countries } = useCountry();

  return (
    <CountryList>
      {countries?.data.map((country: any) => (
        <Link
          href={`/countries/${country.countryCode}`}
          key={country.countryCode}
        >
          <CountryItem>{country.name}</CountryItem>
        </Link>
      ))}
    </CountryList>
  );
}
