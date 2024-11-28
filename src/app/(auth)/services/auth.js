"use server";
import axios from "axios";
import { loginSchema } from "../schemas/loginSchema"; // Adjust path as needed
import { date } from "zod";
import { registerSchema } from "../schemas/registerSchema";

export const registerService = async (email, password, password_confirmation, name, phone, gender, country_code, lang, brand_ids, country_id, platform) => {
    // Validate input data
    const validation = registerSchema.safeParse({ email, password, password_confirmation, name, phone, gender, country_code, lang, brand_ids, country_id, platform});
    if (!validation.success) {
        const errorMessages = validation.error.errors.map((err) => err.message);
        throw new Error(errorMessages.join(", "));
    }
    try {
        const response = await axios.post(
            "https://dashboard.gooffer.net/api/register",
            { email, password, password_confirmation, name, phone, gender, country_code, lang, brand_ids, country_id, platform}, // Request body
            {
                headers: {
                    Platform: "website", // Replace with the desired Platform value
                },
            }
        );
        return response.data; // e.g., { token, user }
    } catch (error) {
        throw new Error(error.response?.data?.message || "Registration failed");
    }
}
export const loginService = async (email, password) => {
  // Validate input data
  const validation = loginSchema.safeParse({ email, password });
  if (!validation.success) {
    const errorMessages = validation.error.errors.map((err) => err.message);
    throw new Error(errorMessages.join(", "));
  }

  try {
    const response = await axios.post(
      "https://dashboard.gooffer.net/api/login",
      { email, password }, // Request body
      {
        headers: {
          Platform: "website", // Replace with the desired Platform value
        },
      }
    );
    console.log(response.data.data.token);
    localStorage.setItem("token", response.data.data.token);

    return response.data; // e.g., { token, user }
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

export const logoutService = async () => {
  try {
    const response = await axios.post(
      "https://dashboard.gooffer.net/api/logout",
      {},
      {
        headers: {
          Platform: "website", // Replace with the desired Platform value
        },
      }
    );
    localStorage.removeItem("token");
    return response.data; // e.g., { token, user }
  } catch (error) {
    throw new Error(error.response?.data?.message || "Logout failed");
  }
}