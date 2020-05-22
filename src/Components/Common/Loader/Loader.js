import React from 'react'
import { SpinnerWrapper ,Spinner} from '../../Common/StyleComponent/style';


export const Loader = () => {
    return (
        <SpinnerWrapper>
            <Spinner />
        </SpinnerWrapper>
    )
}

export default Loader;