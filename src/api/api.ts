import axios from "axios";

const baseUrl = "https://localhost:7039";

export const sendSchoolForm = async (
  email: string,
  schoolName: string,
  schoolWebsiteUrl: string,
  schoolTimetableUrl: string
): Promise<number> => {
  const response = await axios.request({
    method: "POST",
    url: "/form/SubmitSchoolForm",
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
