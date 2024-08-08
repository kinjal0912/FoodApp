import Restaurant, { IRestaurant } from "../models/restaurant";

export const createRestaurant = async (restaurantData: IRestaurant) => {
  const restaurant = new Restaurant(restaurantData);
  await restaurant.save();
  return restaurant;
};

export const getRestaurants = async () => {
  return await Restaurant.find().populate("menuItems");
};

export const getRestaurantById = async (_id: string) => {
  return await Restaurant.findById(_id).populate("menuItems");
};

export const updateRestaurant = async (
  _id: string,
  updates: Partial<IRestaurant>
) => {
  return await Restaurant.findByIdAndUpdate(_id, updates, {
    new: true,
  }).populate("menuItems");
};

export const deleteRestaurant = async (id: string) => {
  return await Restaurant.findByIdAndDelete(id);
};
