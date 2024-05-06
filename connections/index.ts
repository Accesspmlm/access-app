/* eslint-disable @typescript-eslint/no-explicit-any */

import { makeRequest } from "@/utils/request";

//Types
import { Company } from "@/types";

interface GetCompaniesResponse {
  data: Company[];
  ok: boolean;
}

export const getCompanies = async (): Promise<Company[]> => {
  const response = await makeRequest(
    `api/company/companiesByCityAndIndustry`,
    "POST",
    { city: "Huatulco", industry: "hotels" }
  );
  const res = response.data as GetCompaniesResponse;
  return res.data as Company[];
};
