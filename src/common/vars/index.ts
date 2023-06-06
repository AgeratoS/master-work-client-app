import { makeVar } from "@apollo/client";
import { Token } from "../types";

/**
 * Токен, предназначенный для запоминания аутентификационной сессии
 */
export const authToken = makeVar<Token | undefined>(undefined);