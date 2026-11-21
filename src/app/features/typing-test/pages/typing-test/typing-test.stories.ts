import type { Meta, StoryObj } from '@storybook/angular';
import { TypingTest } from './typing-test';

const meta: Meta<TypingTest> = {
    title: 'Features/TypingTest/TypingTest',
    component: TypingTest,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TypingTest>;
export const Default: Story = {};