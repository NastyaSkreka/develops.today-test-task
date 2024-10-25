import styled from "styled-components";

export const CountryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

export const CountryItem = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  background-color: #f9f9f9;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e6f7ff;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

export const CountryHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

export const Flag = styled.img`
  width: 300px;
  height: auto;
  border: 1px solid #ddd;
`;

export const CountryName = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;


export const BorderCountriesSection = styled.div`
  margin-top: 20px;
`;

export const BorderCountryList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const BorderCountryItem = styled.li`
  margin: 10px 0;
`;

export const PopulationChartContainer = styled.div`
    margin-top: 40px;
    width: 100%;
    height: 300px;

    h2 {
        text-align: center;
    }
`