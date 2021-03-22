import { Item } from "./../../generated/graphql";
import { query } from "../../db";

// get all items
export const allItems = async () => {
  const queryResult = await query<Item>({
    text: `
    SELECT * FROM items;
    `,
  });
  return queryResult.rows;
};

// Get the item by Id
export const oneItemById = async (id: string) => {
  const queryResult = await query<Item>({
    text: `
      SELECT * FROM items
      WHERE id = $1
      `,
    values: [id],
  });

  return queryResult.rows[0];
};

// Get item(s) by name
export const getItemsByName = async (name: string) => {
  const queryResult = await query<Item>({
    text: `
            SELECT * FROM items
            WHERE name = $1;
        `,
    values: [name],
  });

  return queryResult.rows;
};
