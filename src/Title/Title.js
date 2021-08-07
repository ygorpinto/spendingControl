import React from 'react';
import TitleStyles from './TitleStyles';
import mock from '../../mocks.json'

const Title = () => {
    return (
        <TitleStyles>
            {mock.title}
        </TitleStyles>
    )
}

export default Title;