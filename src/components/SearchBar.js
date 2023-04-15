import { Paper, TextField } from "@material-ui/core";
import React from "react";

class SearchBar extends React.Component {
    state = {
        searchTerm: '',

    }
    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value })
    }
    handleSubmit = (event) => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;
        onFormSubmit(searchTerm);
        event.preventDefault();
    }
    render() {
        return (
            <Paper elevation={2} style={{ padding: '25px' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="search....." onChange={this.handleChange} />


                </form>
            </Paper>
        )
    }
}
export default SearchBar;