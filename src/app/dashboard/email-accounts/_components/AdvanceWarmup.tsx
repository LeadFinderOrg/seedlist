import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'

export default function AdvanceWarmup() {
    return (
        <>
            <div className="bg-gray-50 rounded-xl mb-16 mt-4">
                <div className="p-4">
                    <h3 className="text-slate-800 font-medium pb-1 border-b border-gray-300">
                        Warmup Settings Advanced
                    </h3>

                    <section className="my-6">
                        <h3 className="text-slate-800 font-medium">
                            Weekends Only
                        </h3>
                        <div className="flex justify-between gap-4 mt-1">
                            <p className="text-slate-600 text-sm min-w-40">
                                Only send warmup emails on weekdays for a more natural sending
                                pattern.
                            </p>
                            <div className="flex items-center space-x-3">
                                <Switch id="weekdays-only" />
                                <Label htmlFor="weekdays-only" className="text-sm font-medium">Enable</Label>
                            </div>
                        </div>
                    </section>

                    <section className="my-6">
                        <h3 className="text-slate-800 font-medium">
                            Read emulation
                        </h3>
                        <div className="flex justify-between gap-4 mt-1">
                            <p className="text-slate-600 text-sm min-w-40">
                                Spend time and scroll though your warmup to emulate human-like reading.
                            </p>
                            <div className="flex items-center space-x-3">
                                <Switch id="read-emulation" />
                                <Label htmlFor="read-emulation" className="text-sm font-medium">Enable</Label>
                            </div>
                        </div>
                    </section>

                    <section className="my-6">
                        <h3 className="text-slate-800 font-medium">
                            Warm custom tracking domain
                        </h3>
                        <div className="flex justify-between gap-4 mt-1">
                            <p className="text-slate-600 text-sm min-w-40">
                                Including your custom tracking domain in your warmup emails to improve deliverability.
                            </p>
                            <div className="flex items-center space-x-3">
                                <Switch id="warm-custom-tracking-domain" />
                                <Label htmlFor="warm-custom-tracking-domain" className="text-sm font-medium">Enable</Label>
                            </div>
                        </div>
                    </section>

                    <section className="my-6">
                        <h3 className="text-slate-800 font-medium">
                            Open Rate
                        </h3>
                        <div className="flex justify-between gap-4 mt-1">
                            <p className="text-slate-600 text-sm min-w-40">
                                How many of your warm up emails should be opened?
                            </p>
                            <Slider
                                defaultValue={[100]}
                                id="open-rate"
                                max={100}
                                min={0}
                                step={1}
                                className="w-2/5"
                                onValueCommit={(value) => console.log(value)}
                            />
                        </div>
                    </section>
                    <section className="my-6">
                        <h3 className="text-slate-800 font-medium">
                            Spam Protection
                        </h3>
                        <div className="flex justify-between gap-4 mt-1">
                            <p className="text-slate-600 text-sm min-w-40">
                                How many of your warm up emails to save from spam folder?
                            </p>
                            <Slider
                                defaultValue={[100]}
                                id="spam-protection"
                                max={100}
                                min={0}
                                step={1}
                                className="w-2/5"
                                onValueCommit={(value) => console.log(value)}
                            />
                        </div>
                    </section>
                    <section className="mb-3">
                        <h3 className="text-slate-800 font-medium">
                            Mark Important
                        </h3>
                        <div className="flex justify-between gap-4 mt-1">
                            <p className="text-slate-600 text-sm min-w-40">
                                How many of your warm up emails to mark as important?
                            </p>
                            <Slider
                                defaultValue={[100]}
                                id="mark-important"
                                max={100}
                                min={0}
                                step={1}
                                className="w-2/5"
                                onValueCommit={(value) => console.log(value)}
                            />
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
