import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import classes from './App.module.scss';
import { fetchData } from './api';
import { Cards, Charts, CountryPicker, Footer } from './components';
import covid19Image from './images/covid19.png';

class App extends Component {

    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country })
    }

    render() {

        const { data, country } = this.state;

        return (
            <React.Fragment>
                <CssBaseline />
                <div className={classes.container}>
                    <img src={covid19Image} alt='COVID-19' />
                    <Cards data={data} />
                    <CountryPicker handleCountryChange={this.handleCountryChange} />
                    <Charts data={data} country={country} />
                    <Footer />
                </div>
            </React.Fragment>
        )
    }
}

export default App;