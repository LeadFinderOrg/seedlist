import React, { useState } from 'react'
import { CirclePlus, Trash } from 'lucide-react'
import SequenceCardItem from './SequenceCardItem'
import { Button } from '@/components/ui/button'

interface Card {
    label: string;
    description: string;
}

interface SequenceStepProps {
    stepNumber: number;
}

const SequenceStep: React.FC<SequenceStepProps> = ({ stepNumber }) => {
    const [cards, setCards] = useState<Card[]>([
        {
            label: 'A',
            description: 'Agency Owners: Save Time on Reporting and Refocus on...',
        },
        {
            label: 'B',
            description: 'Are Admin Tasks Slowing Down Your Agency? Fix Clie...',
        },
        {
            label: 'C',
            description: 'Boost Your Agency’s Efficiency by Cutting Down on Client...',
        },
    ]);

    const handleAddCard = () => {
        const newCard: Card = {
            label: String.fromCharCode(65 + cards.length), // 'A', 'B', 'C', etc.
            description: 'New description for the card.',
        };
        setCards((prevCards) => [...prevCards, newCard]);
    };

    const handleDeleteCard = (index: number) => {
        setCards((prevCards) => prevCards.filter((_, i) => i !== index));
    };

    const handleSwitchChange = (index: number, checked: boolean) => {
        console.log(`Switch toggled for card ${index}:`, checked);
    };

    return (
        <div className="w-full bg-gray-100 rounded-[16px] p-4">
            <div className="flex items-center justify-between">
                <p className="text-base font-medium text-slate-800">Step {stepNumber}</p>
                <Trash className="h-6 w-6 text-slate-500 cursor-pointer" />
            </div>

            <hr className="mt-2 text-gray-300" />

            <div className="flex flex-col gap-3 mt-4">
                {cards.map((card, index) => (
                    <SequenceCardItem
                        key={index}
                        label={card.label}
                        description={card.description}
                        switchChecked={true}
                        onSwitchChange={(checked) => handleSwitchChange(index, checked)}
                        onDelete={() => handleDeleteCard(index)}
                    />
                ))}
            </div>

            <div className="flex justify-center items-center mt-4">
                <Button
                    variant="ghost"
                    className="text-customBlue hover:text-customBlue/90"
                    onClick={handleAddCard}
                >
                    <CirclePlus className="h-6 w-6" />
                    <span className="text-sm font-medium">Add Variant</span>
                </Button>
            </div>

            <hr className="mt-6 text-gray-300" />

            <div className="flex items-center gap-3 mt-2 px-2">
                <span className="text-sm text-slate-500">Wait for</span>
                <span className="w-[70px] bg-white border-slate-300 rounded-lg px-2">4</span>
                <span className="text-sm text-slate-500">days, then</span>
            </div>
        </div>
    );
};

export default SequenceStep;