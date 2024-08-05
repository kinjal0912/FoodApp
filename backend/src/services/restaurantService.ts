import { Restaurant } from "../models/restaurant"; 
import { IRestaurant } from "../models/restaurant";

const createRestaurant = async (data: IRestaurant) => {
  const restaurant = new Restaurant(data);
  return restaurant.save();
};

const deleteRestaurant = async (id: string) => {
  return Restaurant.deleteOne({ _id: id });
};

const updateRestaurant = async (id: string, data: Partial<IRestaurant>) => {
  return Restaurant.findByIdAndUpdate(id, data, { new: true });
};

const getRestaurant = async (id: string) => {
  return Restaurant.findById(id).populate("user").exec();
};

export default {
  createRestaurant,
  deleteRestaurant,
  updateRestaurant,
  getRestaurant,
};
