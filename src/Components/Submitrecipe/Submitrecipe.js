import React, { Component } from 'react';
import { Ttlebar, Recipefrom, RecipeBlock } from './style';
import Footer from '../Common/Footer/Footer';
import Header from '../Common/Header/Header';

class Submitrecipe extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <div>
               
                <Ttlebar>
                    <div>
                        <p>Submit Recipe</p>
                    </div>
                </Ttlebar>
                <Recipefrom onSubmit={this.handleSubmit}>
                    <RecipeBlock>
                        <label>Recipe Title</label>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </RecipeBlock>
                    <RecipeBlock>
                        <label>Choose Category</label>
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </RecipeBlock>
                    <RecipeBlock>
                        <label>Short summary</label>
                        <textarea value={this.state.value} onChange={this.handleChange} />
                    </RecipeBlock>
                    <RecipeBlock>
                        <label>Upload your photos</label>
                        <input type="file" placeholder="asdad" />
                    </RecipeBlock>
                </Recipefrom>
            </div>
        );
    }
}


export default Submitrecipe;