import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ApexCharts for beautiful charts
import { NgApexchartsModule } from 'ng-apexcharts';

// NGX Charts for data visualization
import { NgxChartsModule } from '@swimlane/ngx-charts';

// Chart.js (already available in package.json)
import { ChartModule as PrimeNgChartModule } from 'primeng/chart';

// NGX Gauge for dashboard metrics
// import { NgxGaugeModule } from 'ngx-gauge'; // Removed due to compatibility issues

// Note: NgxGraphModule removed due to compatibility issues

// Chart configuration interfaces and types
export interface ChartConfig {
  title?: string;
  subtitle?: string;
  width?: string | number;
  height?: string | number;
  animations?: boolean;
  theme?: 'light' | 'dark';
}

export interface LineChartData {
  name: string;
  series: Array<{
    name: string;
    value: number;
  }>;
}

export interface BarChartData {
  name: string;
  value: number;
}

export interface PieChartData {
  name: string;
  value: number;
}

export interface GaugeConfig {
  type: 'arch' | 'semi' | 'full';
  thick?: number;
  min?: number;
  max?: number;
  cap?: 'round' | 'butt';
  size?: number;
  append?: string;
  prepend?: string;
  duration?: number;
  thresholds?: {
    [key: string]: { color: string; bgOpacity?: number; };
  };
}

// Restaurant-specific chart configurations
export const RestaurantChartThemes = {
  restaurant: {
    domain: ['#FF6B35', '#F7931E', '#FFD23F', '#06BCC1', '#0B7A75', '#40514E']
  },
  sales: {
    domain: ['#2E8B57', '#32CD32', '#90EE90', '#98FB98', '#F0FFF0', '#006400']
  },
  orders: {
    domain: ['#FF4500', '#FF6347', '#FF7F50', '#FFA07A', '#FFE4E1', '#DC143C']
  },
  customers: {
    domain: ['#4169E1', '#6495ED', '#87CEEB', '#B0E0E6', '#F0F8FF', '#1E90FF']
  }
};

// Pre-configured chart options for restaurant dashboard
export const DefaultChartOptions = {
  lineChart: {
    xAxis: true,
    yAxis: true,
    showGridLines: true,
    gradient: true,
    showXAxisLabel: true,
    showYAxisLabel: true,
    timeline: true,
    animations: true
  },
  barChart: {
    xAxis: true,
    yAxis: true,
    showGridLines: true,
    gradient: true,
    showXAxisLabel: true,
    showYAxisLabel: true,
    animations: true
  },
  pieChart: {
    gradient: true,
    showLegend: true,
    showLabels: true,
    doughnut: false,
    arcWidth: 0.25,
    animations: true
  },
  gaugeChart: {
    type: 'arch' as const,
    thick: 20,
    size: 200,
    cap: 'round' as const,
    duration: 1500,
    thresholds: {
      '0': { color: '#ff4757' },
      '40': { color: '#ffa502' },
      '75': { color: '#2ed573' },
      '90': { color: '#1e90ff' }
    }
  }
};

@NgModule({
  imports: [
    CommonModule,
    NgApexchartsModule,
    NgxChartsModule,
    PrimeNgChartModule
    // NgxGaugeModule // Removed due to compatibility issues
  ],
  exports: [
    NgApexchartsModule,
    NgxChartsModule,
    PrimeNgChartModule
    // NgxGaugeModule // Removed due to compatibility issues
  ]
})
export class ChartModule { }