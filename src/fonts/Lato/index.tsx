import {Global} from '@mantine/core';
import black from './Lato-Black.woff2';
import bold from './Lato-Bold.woff2';
import regular from './Lato-Regular.woff2';
import light from './Lato-Light.woff2';

export function LatoFont() {
    return (
        <Global
            styles={[
                {
                    '@font-face': {
                        fontFamily: 'Lato',
                        src: `url('${black}') format("woff2")`,
                        fontWeight: 900,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Lato',
                        src: `url('${bold}') format("woff2")`,
                        fontWeight: 700,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Lato',
                        src: `url('${regular}') format("woff2")`,
                        fontWeight: 500,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Lato',
                        src: `url('${light}') format("woff2")`,
                        fontWeight: 300,
                        fontStyle: 'normal',
                    },
                },
            ]}
        />
    );
}
