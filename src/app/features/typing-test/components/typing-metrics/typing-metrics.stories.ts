import type { Meta, StoryObj } from '@storybook/angular';
import { Metric } from '../../../../shared/components/metric/metric';
import { TypingMetrics } from './typing-metrics';

const meta: Meta<TypingMetrics> = {
    title: 'Features/TypingTest/TypingMetrics',
    component: TypingMetrics,
    subcomponents: { Metric },
    tags: ['autodocs'],
    argTypes: {
        wpm: { control: 'number', description: 'Palavras por minuto' },
        accuracy: { control: { type: 'range', min: 0, max: 100 }, description: 'Percentagem de precisão' },
        time: { control: 'text', description: 'Tempo decorrido ou restante' },
    },
};

export default meta;
type Story = StoryObj<TypingMetrics>;

/** Estado padrão / inicial */
export const Default: Story = {
    args: {
        wpm: 0,
        accuracy: 100,
        time: '00:00',
    },
};

/** Exemplo durante um teste ativo */
export const InProgress: Story = {
    args: {
        wpm: 65,
        accuracy: 94.5,
        time: '00:45',
    },
};