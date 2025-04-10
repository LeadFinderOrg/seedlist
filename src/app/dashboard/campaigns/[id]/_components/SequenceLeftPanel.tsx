import React from 'react'
import SequenceStep from './SequenceStep'

export default function SequenceLeftPanel() {
    return (
        <div className="flex flex-col gap-4 h-full">
            <SequenceStep stepNumber={1} />
            <SequenceStep stepNumber={2} />
            <SequenceStep stepNumber={3} />
        </div>
    )
}
