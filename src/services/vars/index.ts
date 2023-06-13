import { makeVar } from "@apollo/client";
import { Service } from "../types";
import { fakeServices } from "../mocks";

/**
 * Переменная, показывающая, какие сервисы выбраны пользователем
 * в таблице всех сервисов
 */
export const selectedServicesIds = makeVar<number[]>([]);

/**
 * Временная переменная, хранящая фэйковые сервисы.
 * NOTE: Потом удалить
 */
export const tempServices = makeVar<Service[]>([]);