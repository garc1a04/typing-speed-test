import type { Meta, StoryObj } from '@storybook/angular';
import { PersonalBestBadge } from '../personal-best-badge/personal-best-badge';
import { SelectorDifficulty } from '../selector-difficulty/selector-difficulty';
import { SelectorMode } from '../selector-mode/selector-mode';
import { TypingMetrics } from '../typing-metrics/typing-metrics';
import { TypingHeader } from './typing-header';

const meta: Meta<TypingHeader> = {
    title: 'Features/TypingTest/TypingHeader',
    subcomponents: { PersonalBestBadge, SelectorDifficulty, SelectorMode, TypingMetrics },
    component: TypingHeader,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TypingHeader>;
export const Default: Story = {
    args: {
        personalBestScore: 95,
    },
};