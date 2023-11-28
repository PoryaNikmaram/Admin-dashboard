import { useTheme } from '@mui/material'
import { ResponsivePie } from '@nivo/pie'
import { appColors } from '../../theme'
import { mockPieData } from '../../Data/data'

function PieChart() {
  const theme = useTheme()
  const colors = appColors(theme.palette.mode)
  const mode = theme.palette.mode
  return (
    <ResponsivePie
      data={mockPieData}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      colors={mode === 'light' ? { scheme: 'nivo' } : { scheme: 'blues' }}
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
      startAngle={-180}
      innerRadius={0.55}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 2]],
      }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'ruby',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'c',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'go',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'python',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'scala',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'lisp',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'elixir',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'javascript',
          },
          id: 'lines',
        },
      ]}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
    />
  )
}

export default PieChart
