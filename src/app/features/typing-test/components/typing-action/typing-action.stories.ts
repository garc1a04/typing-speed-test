import type { Meta, StoryObj } from '@storybook/angular';
import { TypingAction } from './typing-action';

const meta: Meta<TypingAction> = {
    title: 'Features/TypingTest/TypingAction',
    component: TypingAction,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TypingAction>;
export const Default: Story = {};
