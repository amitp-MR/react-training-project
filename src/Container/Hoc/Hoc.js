import React from 'react';
import Header from '../../Components/Common/Header/Header';
import Footer from '../../Components/Common/Footer/Footer';

const Hoc = OrigionalComponent => {
    class NewComponent extends React.Component {
        render() {
            return (
                <div>
                    <Header />
                    <OrigionalComponent />
                    <Footer />

                </div>
            )
        }
    }
    return NewComponent;
}

export default Hoc;
