import React, { Component } from 'react';
import { Cardgallery } from '../../Components/Common/StyleComponent/style';
import Listcard from '../Common/Listcard/Listcard';
import Axios from 'axios';
import Loader from '../Common/Loader/Loader';

class RecipeCardListContainer extends Component {
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
            <Cardgallery>
                {
                    this.state.cardgallerydata.map((conitems, idx) => {
                        return (
                           this.state.errorstate ? <Loader /> : <Listcard  listdata={conitems} key={idx}/>
                    )
                    })
                }
            </Cardgallery>
        );
    }
}


export default RecipeCardListContainer;