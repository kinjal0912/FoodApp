import MenuItem, { IMenuItem } from "../models/menuItems";

export const createMenuItem = async (menuItemData: IMenuItem) => {
  const menuItem = new MenuItem(menuItemData);
  await menuItem.save();
  return menuItem;
};

export const getMenuItems = async () => {
  return await MenuItem.find();
};

export const getMenuItemById = async (id: string) => {
  return await MenuItem.findById(id);
};

export const updateMenuItem = async (
  id: string,
  updates: Partial<IMenuItem>
) => {
  return await MenuItem.findByIdAndUpdate(id, updates, { new: true });
};

export const deleteMenuItem = async (id: string) => {
  return await MenuItem.findByIdAndDelete(id);
};
