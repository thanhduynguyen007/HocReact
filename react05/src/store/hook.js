// custom hôok
// lấy state của context
// useSelector()

// Lấy dispatch của context
//useDispatch()
import React, { useContext, useState } from "react";
import { ProviderContext } from "../store/Provider";
export const useSelector = () => {
    const { state } = useContext(ProviderContext);
    return state;
}
export const useDispatch = () => {
    const { dispatch } = useContext(ProviderContext);
    return dispatch;
}