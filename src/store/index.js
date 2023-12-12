import auth from "~/store/auth";
import modal from "~/store/modal";
import appearance from "~/store/appearance";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
	reducer: {
		auth,
		modal,
		appearance,
	}
})

export default store