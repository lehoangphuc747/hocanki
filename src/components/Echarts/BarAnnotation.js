import React, { useEffect, useRef } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import * as echarts from 'echarts';

const LineBarCombo = ({
  title = 'Dynamic Chart',
  sectionTitle = '',
  xAxisData = [],
  seriesData = [],
  seriesType = 'bar',
  themeColors = { light: '#4caf50', dark: '#00FF84' },
  figsize = { width: '100%', height: '400px' },
  annotations = [],
  annotSymbol = 'triangle', // Available values: pin, diamond, arrow, triangle, roundRect, rect, circle, none
  annotSymbolSize=15,
  annotSymbolColor='blue',
  annotSymbolRot=180, // 'none' to disable Rotation
  tooltipFormatter = '{b}: {c}',
  showYAxis = true,
  showDataLabels = true,
  xAxisTitle = '',
  yAxisTitle = '',
  titleSpacing = 20,
  barWidth = 30, // Set the fixed width of bars
  centerChart = true, // Center-align the chart container
  fontFamily = 'Lexend', // Font family for the chart
}) => {
  const chartRef = useRef(null);

  // Fallback for color mode
  let colorMode = 'light'; // Default to light mode

  try {
    const colorModeContext = useColorMode();
    colorMode = colorModeContext.colorMode; // Use Docusaurus context if available
  } catch (error) {
    console.warn(
      'ColorModeProvider is not available. Defaulting to light mode.'
    );
  }

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const commonOptions = {
      title: {
        text: title,
        subtext: sectionTitle,
        left: 'center',
        top: `${titleSpacing}px`,
        textStyle: {
          fontFamily, // Use the custom font family
          color: colorMode === 'dark' ? '#ccc' : '#000',
          fontWeight: 'bold',
        },
        subtextStyle: {
          fontFamily, // Use the custom font family
          color: colorMode === 'dark' ? '#aaa' : '#555',
          fontSize: 14,
        },
      },
      xAxis: {
        type: 'category',
        data: xAxisData,
        name: xAxisTitle,
        nameLocation: 'middle',
        nameGap: 25,
        axisLine: {
          lineStyle: {
            color: colorMode === 'dark' ? '#fff' : '#000',
          },
        },
        axisLabel: {
          fontFamily, // Use the custom font family
        },
        splitLine: { show: false },
      },
      yAxis: {
        show: showYAxis,
        type: 'value',
        name: yAxisTitle,
        nameLocation: 'middle',
        nameGap: 35,
        axisLine: {
          lineStyle: {
            color: colorMode === 'dark' ? '#fff' : '#000',
          },
        },
        axisLabel: {
          fontFamily, // Use the custom font family
        },
        splitLine: { show: false },
      },
      tooltip: {
        trigger: 'item',
        formatter: tooltipFormatter,
        textStyle: {
          fontFamily, // Use the custom font family
        },
      },
      series: [
        {
          name: title,
          type: seriesType,
          data: seriesData,
          barWidth, // Apply fixed bar width
          label: {
            show: showDataLabels,
            position: 'top',
            formatter: (params) =>
              seriesType === 'bar' ? `${(params.value / 1000).toFixed(1)}K` : params.value,
            fontFamily, // Use the custom font family
          },
          markPoint: {
            data: annotations.map((event) => ({
              name: event.name,
              coord: event.coord,
              value: event.value,
              label: {
                position: event.labelPosition || 'top',
                distance: 10,
                color: '#333',
                fontFamily, // Use the custom font family
              },
              symbol: annotSymbol,
              symbolSize: annotSymbolSize,
              symbolRotate: annotSymbolRot, // Rotate triangle to point downwards
            })),
            itemStyle: {
              color: annotSymbolColor,
            },
          },
        },
      ],
    };

    const lightOptions = {
      ...commonOptions,
      color: [themeColors.light],
      backgroundColor: '#fff',
    };

    const darkOptions = {
      ...commonOptions,
      color: [themeColors.dark],
      backgroundColor: '#333',
    };

    chart.setOption(colorMode === 'dark' ? darkOptions : lightOptions);

    return () => {
      if (chart) {
        chart.dispose();
      }
    };
  }, [
    colorMode,
    title,
    sectionTitle,
    xAxisData,
    seriesData,
    seriesType,
    themeColors,
    annotations,
    tooltipFormatter,
    showYAxis,
    showDataLabels,
    xAxisTitle,
    yAxisTitle,
    titleSpacing,
    barWidth,
    fontFamily,
  ]);

  return (
    <div
      style={{
        display: centerChart ? 'flex' : 'block', // Center-align chart if enabled
        justifyContent: centerChart ? 'center' : 'flex-start',
      }}
    >
      <div
        ref={chartRef}
        style={{
          ...figsize,
          fontFamily, // Apply font family to the chart container
        }}
      />
    </div>
  );
};

export default LineBarCombo;
