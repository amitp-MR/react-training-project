import React, { Component } from 'react';
import { Gridgallery } from '../Common/StyleComponent/style';
import Gridcard from '../Common/GridCard/Gridcard';
import Axios from 'axios';
import Loader from '../Common/Loader/Loader';


class RecipeCardGridContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            cardgallerydata:[],
            loading: false,
            errorstate:false
        }
    }
    componentDidMount() {
        this.setState({ loading: true }, () => {
            Axios.get(`http://www.mocky.io/v2/5ec78f702f00006e00427230`)
                .then(res => {
                    const cardgallerydata = res.data;
                    this.setState({
                        loading: false,
                        cardgallerydata
                    });
                }).catch(error => {
                    this.setState({
                        errorstate:true
                    });
                })
                .finally(() => {

                });
        });


    }
    render() {
        return (
            <Gridgallery>
                {
                    this.state.cardgallerydata.map((conitems, idx) => {
                        return (
                            this.state.loading ? <Loader/> :
                           <Gridcard griddata={conitems} key={idx} />
                        )
                    })
                }
            </Gridgallery>
            
        );
    }
}


export default RecipeCardGridContainer;