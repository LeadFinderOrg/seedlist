import { ResponsiveBar } from '@nivo/bar'

export default function WarmupEmailsChart() {
  const data = [
    { day: 'Mon', warmup: 5, spam: 2 },
    { day: 'Tue', warmup: 8, spam: 0 },
    { day: 'Wed', warmup: 4, spam: 0 },
    { day: 'Thu', warmup: 10, spam: 0 },
    { day: 'Fri', warmup: 15, spam: 0 },
    { day: 'Sat', warmup: 10, spam: 13 },
    { day: 'Sun', warmup: 20, spam: 10 },
  ]

  return (
    <div className="w-full bg-gray-100 p-4 rounded-xl">

      <h2 className="text-lg font-semibold mb-2">Warmup Emails Sent</h2>

      <div className="h-72">
        <ResponsiveBar
          data={data}
          keys={['warmup', 'spam']}
          indexBy="day"
          groupMode="stacked"
          margin={{ top: 20, right: 20, bottom: 35, left: 35 }}
          padding={0.3}
          borderRadius={4}
          colors={({ id }) => (id === 'warmup' ? '#34D399' : '#EF4444')}
          enableLabel={false}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 0,
            tickPadding: 10,
          }}
          axisLeft={{
            tickSize: 0,
            tickPadding: 10,
          }}
          enableGridX={false}
          enableGridY={true}
          theme={{
            grid: {
              line: {
                stroke: '#e5e7eb',
                strokeWidth: 1,
                strokeDasharray: '3 3',
              },
            },
          }}
          tooltip={({ data }) => {
            const { day, warmup, spam } = data
            return (
              <div className="bg-white p-3 rounded shadow text-sm">
                <div className="font-semibold mb-2">{day}</div>

                {warmup > 0 && (
                  <div className="flex items-center mb-1">
                    <span className="inline-block w-4 h-4 bg-emerald-400 rounded mr-2" />
                    <span>Warmup Emails Sent: {warmup}</span>
                  </div>
                )}

                {spam > 0 && (
                  <div className="flex items-center mb-1">
                    <span className="inline-block w-4 h-4 bg-red-500 rounded mr-2" />
                    <span>Landed in spam: {spam}</span>
                  </div>
                )}
              </div>
            )
          }}
          motionConfig="gentle"
        />
      </div>
    </div>
  )
}
