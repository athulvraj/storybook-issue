import { addParameters } from '@storybook/react';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import fg_theme from './fg_theme';
import React from 'react';
import 'fundamental-styles/dist/fundamental-styles.css';

import {
    Title,
    Subtitle,
    Description,
    Primary,
    Heading,
    Props,
    Stories,
} from '@storybook/addon-docs/blocks';
addParameters({
    docs: {
        container: DocsContainer,
        page: () => (
            <>
                <Title />
                <Subtitle />
                <Description />
                <Primary />
                <Stories />
                <Heading>Properties</Heading>
                <Props />
            </>
        ),
    },
    options: {
        showRoots: true,
        theme: fg_theme
    },
});
