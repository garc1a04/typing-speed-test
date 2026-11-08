import type { Meta, StoryObj } from '@storybook/angular';
import { PersonalBestBadge } from './personal-best-badge';

const meta: Meta<PersonalBestBadge> = {
    title: 'Features/TypingTest/PersonalBestBadge',
    component: PersonalBestBadge,
    tags: ['autodocs'],
    argTypes: {
        score: {
            control: { type: 'number', min: 0, max: 300 },
            description: 'Pontuação de WPM (Words Per Minute) do usuário',
        },
    },
};

export default meta;
type Story = StoryObj<PersonalBestBadge>;

// Cenário 1: Pontuação padrão / média
export const Default: Story = {
    args: {
        score: 92,
    },
};

// Cenário 2: Pontuação alta (Highscore)
export const HighScore: Story = {
    args: {
        score: 145,
    },
};

// Cenário 3: Pontuação inicial / baixa
export const LowScore: Story = {
    args: {
        score: 25,
    },
};