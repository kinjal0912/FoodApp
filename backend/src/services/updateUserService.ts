import User from "../models/user";

type UserRole = "admin" | "restaurant" | "buyer" | "delivery";

interface UpdateUserParams {
  userId: string;
  name?: string;
  addressLine1?: string;
  city?: string;
  country?: string;
  role?: UserRole;
}

const updateUserById = async ({
  userId,
  name,
  addressLine1,
  city,
  country,
  role,
}: UpdateUserParams) => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      return { user: null, updated: false };
    }

    if (name) user.name = name;
    if (addressLine1) user.addressLine1 = addressLine1;
    if (city) user.city = city;
    if (country) user.country = country;
    if (role) {
      if (["admin", "restaurant", "buyer", "delivery"].includes(role)) {
        user.role = role;
      } else {
        throw new Error("Invalid role");
      }
    }

    await user.save();

    return { user, updated: true };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error updating user: ${error.message}`);
    } else {
      throw new Error("An unknown error occurred while updating the user");
    }
  }
};

export default {
  updateUserById,
};
