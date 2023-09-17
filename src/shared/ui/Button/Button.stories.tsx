import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import 'app/styles/index.scss';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button',
};
export const ClearTheme = Template.bind({});
ClearTheme.args = {
    children: 'Button',
    theme: ThemeButton.CLEAR,
};
export const OutlineTheme = Template.bind({});
OutlineTheme.args = {
    children: 'Button',
    theme: ThemeButton.OUTLINE,
};
