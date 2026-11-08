import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonSelector } from '../../../../shared/components/button-selector/button-selector';
import { Selector } from '../../../../shared/components/selector/selector';
import { SelectorMode } from './selector-mode';

const meta: Meta<SelectorMode> = {
    title: 'Features/TypingTest/SelectorMode',
    component: SelectorMode,
    subcomponents: { ButtonSelector, Selector },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SelectorMode>;
export const Default: Story = {};