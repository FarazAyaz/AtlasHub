import React from 'react'

import axios from 'axios';
import { MdConstruction } from 'react-icons/md';

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1"
})
// Http Method
export const getCountryData = () => {
    return api.get("/all?fields=name,population,region,capital,flags")
}