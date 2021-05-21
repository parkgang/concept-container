import { atom, selector } from "recoil";
import axios from "axios";

export const pageNameState = atom({
  key: "pageNameState",
  default: "",
});

export const getNameSelector = selector({
  key: "getNameSelector",
  get: async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/hello");
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
      return res.data;
    } catch (error) {
      console.log(`getNameSelector 에러 발생`);
    }
  },
});
