import React from 'react'
import SequenceLeftPanel from './SequenceLeftPanel'
import SequenceRightPanel from './SequenceRightPanel'

export default function SequencesTab() {
  return (
    <div className="flex h-screen">
      {/* Left Panel */}
      <div className="w-[30%] overflow-y-auto mr-4 scrollbar-none">
        <SequenceLeftPanel />
      </div>

      {/* Right Panel */}
      <div className="w-[70%] h-[788px] p-4 border border-slate-200 rounded-[16px]">
        <SequenceRightPanel />
      </div>
    </div>
  )
}
