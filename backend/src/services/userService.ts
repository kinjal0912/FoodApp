import User from "../models/user";

interface CreateUserParams {
  userId: string;
  role?: string;
}

export const createUserService = async ({ userId, role }: CreateUserParams) => {
  try {
    const existingUser = await User.findOne({ userId });

    if (existingUser) {
      return { user: existingUser, created: false };
    }

    const newUser = new User({
      userId,
      role: role || "buyer",
    });
    await newUser.save();

    return { user: newUser, created: true };
  } catch (error) {
    throw new Error("Error creating user");
  }
};

export const getUserById = async (userId: string) => {
  try {
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return { user: null, found: false };
    }
    return { user, found: true };
  } catch (error) {
    throw new Error("Error fetching user");
  }
};

export default {
  getUserById,
};

type UserRole = "admin" | "restaurant" | "buyer" | "delivery";

interface UpdateUserParams {
  userId: string;
  name?: string;
  addressLine1?: string;
  city?: string;
  country?: string;
  role?: UserRole;
}

export const updateUserById = async ({
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
