import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	currentAccount: {
		id: 1,
		username: 'User1',
		fullName: 'User1',
		avatar: '/src/assets/göl.jpg'
	},
	accounts: [
		{
			id: 1,
			username: 'User1',
			fullName: 'User1',
			avatar: '/src/assets/göl.jpg'
		},
		{
			id: 2,
			username: 'User2',
			fullName: 'User2',
			avatar: '/src/assets/kız_kulesi.png'
		}
	]
}

const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		// State Manipulating Methods
		_addAccount: (state, action) => {
			state.accounts.push(action.payload)
		},
		_removeAccount: (state, action) => {
			state.accounts = state.accounts.filter(account => account.id !== action.payload)
			if (state.currentAccount && action.payload === state.currentAccount.id) {
				this._setCurrentAccount(false)
			}
		},
		_setCurrentAccount: (state, action) => {
			state.currentAccount = action.payload
		}
	}
})

export const { _addAccount, _setCurrentAccount, _removeAccount } = auth.actions
export default auth.reducer