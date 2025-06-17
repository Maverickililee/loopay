"use client";

import { setContact } from "@/store/slices/contactSlice";
import store from "@/store/store";
import { Provider } from "react-redux";
import { useEffect } from "react";

const ClientProvider = ({ data , children}) => {
  useEffect(() => {
    if (data?.contactDetail) {
      store.dispatch(setContact({ data: data.contactDetail }));
    }
  }, [data]);

  return <Provider store={store}>{children}</Provider>;
};

export default ClientProvider;
