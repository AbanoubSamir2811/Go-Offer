// Import the named exports instead of using a default import
import { loginService, registerService, logoutService } from "../../services/authservice";

// Example usage
export const loginUser = async ({email, password}) => {
  try {
    const response = await loginService({email, password});
    return response;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (email, password, password_confirmation, name, phone, gender, country_code, lang, brand_ids, country_id, platform) => {
  try {
    const response = await registerService(email, password, password_confirmation, name, phone, gender, country_code, lang, brand_ids, country_id, platform);
    return response;
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    const response = await logoutService();
    return response;
  } catch (error) {
    throw error;
  }
};
