import { Switch } from '@/components/ui/switch';
import { CheckCircle2, Clock, Send, Shield, Zap } from 'lucide-react';

const EmailWarmupStats = () => {
  return (
    <div className="w-full">
      {/* Header section */}
      <section className="flex items-center justify-between pt-3 pb-4 border-b border-gray-300">
        <div className="flex items-center gap-2">
          <span className="text-gray-500">
            <Clock size={18} />
          </span>
          <span className="text-slate-800 font-medium">Started on October 24, 2024</span>
          <span className="text-slate-600 ml-2">4 months ago</span>
        </div>
        <div className="flex items-center gap-2">
          <Switch id="warmup-toggle" />
          <div className="flex items-center gap-2">
          <Zap color="#2184c6" size="20" fill='#2184c6' />
            <p className="font-medium text-slate-800">Enable Warmup</p>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section>
        <h2 className="text-base font-semibold text-slate-800 mt-3">Overall Warmup Stats</h2>
        <p className="text-slate-600 text-sm mb-4">See how your warmup emails are performing</p>

        <div className="bg-gray-100 rounded-xl mb-6">
          <div className="p-4">
            <h3 className="text-slate-800 font-medium pb-1 border-b border-gray-300">Summary for past week</h3>
            <section className="flex flex-wrap gap-6 mt-3">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">
                  <CheckCircle2 size={18} />
                </span>
                <span className="font-semibold text-gray-800">29</span>
                <span className="text-gray-600">warmup emails received</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-gray-400">
                  <Send size={18} />
                </span>
                <span className="font-semibold text-gray-800">17</span>
                <span className="text-gray-600">warmup emails sent</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-gray-400">
                  <Shield size={18} />
                </span>
                <span className="font-semibold text-gray-800">0</span>
                <span className="text-gray-600">saved from spam</span>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailWarmupStats; 