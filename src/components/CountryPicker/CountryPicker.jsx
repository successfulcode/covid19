import React, { useState, useEffect } from 'react';
import classes from './CountryPicker.module.scss';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            setFetchedCountries(await fetchCountries())
        }
        fetchApi()
    }, [setFetchedCountries])

    return (
        <FormControl className={classes.countryPicker}>
            <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
                <option value=''>Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
};

export default CountryPicker;