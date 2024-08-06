import { Restaurant, IRestaurant } from "../models/restaurant";

export const createRestaurantService = async (data: IRestaurant) => {
  const restaurant = new Restaurant(data);
  return restaurant.save();
};

export const deleteRestaurantService = async (id: string) => {
  return Restaurant.deleteOne({ _id: id });
};

export const updateRestaurantService = async (
  id: string,
  data: Partial<IRestaurant>
) => {
  return Restaurant.findByIdAndUpdate(id, data, { new: true });
};

export const getRestaurantService = async (id: string) => {
  return Restaurant.findById(id).populate("user").exec();
};
