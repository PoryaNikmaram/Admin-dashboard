import { ResponsiveBar } from '@nivo/bar'
import { mockBarData } from '../../Data/data'
import { appColors } from '../../theme'
import { useTheme } from '@mui/material'

function BarChart() {
  const theme = useTheme()
  const colors = appColors(theme.palette.mode)
  const mode = theme.palette.mode

  return (
    <ResponsiveBar
      data={mockBarData}
      keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: false }}
      colors={mode === 'dark' ? { scheme: 'blues' } : { scheme: 'nivo' }}
      theme={{
        text: {
          fontSize: 11,
          fill: colors.grey[100],
          outlineWidth: 0,
          outlineColor: 'transparent',
        },
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
          },
          legend: {
            text: {
              fontSize: 12,
              fill: colors.grey[100],
              outlineWidth: 0,
              outlineColor: 'transparent',
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fontSize: 11,
              fill: colors.grey[100],
              outlineWidth: 0,
              outlineColor: 'transparent',
            },
          },
        },
        tooltip: {
          container: {
            background: colors.grey[900],
            fontSize: 12,
          },
          basic: {},
          chip: {},
          table: {},
          tableCell: {},
          tableCellValue: {},
        },
      }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'fries',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'sandwich',
          },
          id: 'lines',
        },
      ]}
      borderColor={{
        from: 'color',
        modifiers: [['darker', '1.1']],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'country',
        legendPosition: 'middle',
        legendOffset: 32,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'food',
        legendPosition: 'middle',
        legendOffset: -40,
        truncateTickAt: 0,
      }}
      labelSkipHeight={16}
      labelTextColor={{ from: 'color', modifiers: [['darker', '9.1']] }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 110,
          translateY: 0,
          itemsSpacing: 3,
          itemWidth: 100,
          itemHeight: 22,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 18,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
      }
    />
  )
}

export default BarChart
