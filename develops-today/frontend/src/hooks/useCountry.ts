import { countryService } from "@/services/countries.service";
import { useQuery } from "@tanstack/react-query";

export function useCountry() {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["country"],
    queryFn: () => countryService.getAvailableCountries(),
  });

  return { data, isLoading, isSuccess };
}

export function useCountryInfo(code: string) {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["countryInfo", code],
    queryFn: () => countryService.getCountryInfo(code),
  });

  return { data, isLoading, isSuccess };
}
