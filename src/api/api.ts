import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "https://localhost:7039"
    : process.env.API_URL;

export const submitSchoolForm = async (
  email: string,
  schoolName: string,
  schoolWebsiteUrl: string,
  schoolTimetableUrl: string
): Promise<number> => {
  const response = await axios.request({
    method: "POST",
    url: "/form/submit",
    baseURL: baseUrl,
    data: {
      email,
      schoolName,
      schoolWebsiteUrl,
      schoolTimetableUrl,
    },
  });

  return response.status;
};
