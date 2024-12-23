import type { Product } from "@/assets/interfaces";
import type { State } from ".";
// mutations: function where we change values of states
// can contain syncronous operations
// commit updates mutation

const SET_CONFIG = (state: State, config: []) => {
  state.config = config;
}

const TOGGLE_MENU = (state: State) => {
  state.isOpen = !state.isOpen;
}

const SAVE_USERNAME = (state: State, username: string) => {
  state.username = username;
}

const SAVE_USERID = (state: State, userid: string) => {
  state.userid = userid;
}

//////////////////////// AMOUNT 

const UPDATE_AMOUNT_TAMPONS = (state: State, amountTampons: number) => {
  state.usedProducts[0].amountInStock = amountTampons;
}

const UPDATE_AMOUNT_PADS = (state: State, amountPads: number) => {
  state.usedProducts[1].amountInStock = amountPads;
}

const UPDATE_AMOUNT_CUPS = (state: State, amountCups: number) => {
  state.usedProducts[2].amountInStock = amountCups;
}

const UPDATE_AMOUNT_WHIPES = (state: State, amountWhipes: number) => {
  state.usedProducts[3].amountInStock = amountWhipes;
}

//////////////////////// USAGE 

const UPDATE_USAGE_TAMPONS = (state: State, isUsed: boolean) => {
  state.usedProducts[0].isUsed = !isUsed;
}

const UPDATE_USAGE_PADS = (state: State, isUsed: boolean) => {
  state.usedProducts[1].isUsed = !isUsed;
}

const UPDATE_USAGE_CUPS = (state: State, isUsed: boolean) => {
  state.usedProducts[2].isUsed = !isUsed;
}

const UPDATE_USAGE_WHIPES = (state: State, isUsed: boolean) => {
  state.usedProducts[3].isUsed = !isUsed;
}

//////////////////////// WHOLE PRODUCT

const UPDATE_USED_PRODUCTS = (state: State, usedProducts: Product[]) => {
  state.usedProducts = usedProducts;
}

//////////////////////// EVENTS

const FIRE_HAS_CHANGES = (state: State, hasChanges: Boolean) => {
  state.fireHasChanges = hasChanges;
}

export default {
  SET_CONFIG,
  TOGGLE_MENU,
  SAVE_USERNAME,
  SAVE_USERID,
  UPDATE_AMOUNT_TAMPONS,
  UPDATE_AMOUNT_PADS,
  UPDATE_AMOUNT_CUPS,
  UPDATE_AMOUNT_WHIPES,
  UPDATE_USAGE_TAMPONS,
  UPDATE_USAGE_PADS,
  UPDATE_USAGE_CUPS,
  UPDATE_USAGE_WHIPES,
  UPDATE_USED_PRODUCTS,
  FIRE_HAS_CHANGES
};