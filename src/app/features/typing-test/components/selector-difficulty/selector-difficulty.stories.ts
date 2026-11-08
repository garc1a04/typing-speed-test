import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonSelector } from '../../../../shared/components/button-selector/button-selector';
import { Selector } from '../../../../shared/components/selector/selector';
import { SelectorDifficulty } from './selector-difficulty';

const meta: Meta<SelectorDifficulty> = {
    title: 'Features/TypingTest/SelectorDifficulty',
    component: SelectorDifficulty,
    subcomponents: { ButtonSelector, Selector },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SelectorDifficulty>;
export const Default: Story = {};
