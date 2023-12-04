import { createContext } from "react";

const Context = createContext({
  allProduct: [],
  bestProduct: [],
  offersProduct: [],
  allTicket: [],
  infoProduct: {},
  statusModal: false,
  isLogin: false,
  statusbestProduct: false,
  statusComment: false,
  statusMenu: false,
  showForm: false,
  showPassword: false,
  orderModal: false,
  showModalTicket: false,
  showAddModalTicket: false,
  showUsername: "",
  allUsers: [],
  newProduct: () => {},
  setShow_Username: () => {},
  getAllUser: () => {},
  AddTicket_Modal: () => {},
  getNew_AllTicket: () => {},
  showTicket_Modal: () => {},
  showOrder: () => {},
  ShowPasswordHandler: () => {},
  ShowFormHandler: () => {},
  showOffer: () => {},
  showModalMenu: () => {},
  showModalComment: () => {},
  bestshowModal: () => {},
  showInfoProduct: () => {},
  login: () => {},
  logout: () => {},
  showModal: () => {},
});

export default Context;
