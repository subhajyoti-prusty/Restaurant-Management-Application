import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SimpleAnimationService, SimpleThemeService } from './SimpleServices';

@Component({
  selector: 'app-ui-showcase',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="ui-showcase-container min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-6">
      
      <!-- Header Section -->
      <div class="text-center mb-8 animate-fade-in">
        <h1 class="text-4xl font-bold text-white mb-4">
          🍽️ Restaurant Management - Premium UI Showcase
        </h1>
        <p class="text-xl text-white opacity-90">
          Featuring the best UI frameworks and animations
        </p>
      </div>

      <!-- Theme Toggle -->
      <div class="text-center mb-8">
        <button 
          class="btn-premium hover-lift"
          (click)="toggleTheme()">
          🎨 Toggle Theme
        </button>
      </div>

      <!-- Feature Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        
        <!-- Angular Material Card -->
        <div class="premium-card hover-lift p-6 animate-scale-in">
          <div class="mb-4">
            <h3 class="text-xl font-bold text-gray-800">Angular Material</h3>
            <p class="text-gray-600">Modern Material Design</p>
          </div>
          <div class="mb-4">
            <p class="text-gray-700 mb-3">Beautiful Material Design components with animations</p>
            <div class="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div class="bg-blue-600 h-2 rounded-full" style="width: 85%"></div>
            </div>
            <p class="text-sm text-gray-600">Implementation: 85%</p>
          </div>
          <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            LEARN MORE
          </button>
        </div>

        <!-- PrimeNG Card -->
        <div class="premium-card hover-lift p-6 animate-fade-in">
          <div class="text-center p-4 bg-gradient-to-r from-orange-500 to-teal-500 text-white rounded-lg mb-4">
            <h3 class="text-xl font-bold">PrimeNG Suite</h3>
          </div>
          <div class="mb-4">
            <p class="text-gray-700 mb-3">Rich set of UI components with premium themes</p>
            <div class="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div class="bg-green-600 h-2 rounded-full" style="width: 92%"></div>
            </div>
            <p class="text-sm text-gray-600">Features: 92%</p>
          </div>
          <button class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
            🔍 Explore
          </button>
        </div>

        <!-- Ng-Zorro Card -->
        <div class="premium-card hover-lift p-6 animate-bounce-in">
          <h3 class="text-xl font-bold text-gray-800 mb-4">Ng-Zorro Antd</h3>
          <p class="text-gray-700 mb-3">Enterprise-class UI design language</p>
          <div class="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div class="bg-purple-600 h-2 rounded-full animate-pulse" style="width: 88%"></div>
          </div>
          <p class="text-sm text-gray-600 mb-4">Components: 88%</p>
          <div class="border-t border-gray-200 pt-4">
            <button class="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
              🚀 Get Started
            </button>
          </div>
        </div>

      </div>

      <!-- Chart Showcase -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        
        <!-- Sales Chart Placeholder -->
        <div class="premium-card p-6 animate-slide-in-left">
          <h3 class="text-2xl font-bold mb-4" style="color: #FF6B35;">📈 Sales Analytics</h3>
          <div class="h-64 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
            <div class="text-center">
              <div class="text-6xl mb-4">📊</div>
              <p class="text-gray-600">ApexCharts Integration Ready</p>
              <p class="text-sm text-gray-500 mt-2">Real-time sales data visualization</p>
            </div>
          </div>
        </div>

        <!-- Orders Chart Placeholder -->
        <div class="premium-card p-6 animate-slide-in-right">
          <h3 class="text-2xl font-bold mb-4" style="color: #06BCC1;">🍕 Order Distribution</h3>
          <div class="h-64 bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg flex items-center justify-center">
            <div class="text-center">
              <div class="text-6xl mb-4">🥧</div>
              <p class="text-gray-600">NGX-Charts Integration Ready</p>
              <p class="text-sm text-gray-500 mt-2">Interactive pie charts for orders</p>
            </div>
          </div>
        </div>

      </div>

      <!-- Animation Showcase -->
      <div class="premium-card p-6 mb-8 animate-fade-in">
        <h3 class="text-2xl font-bold mb-6 text-center text-gray-800">🎭 Animation Gallery</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-2 rounded-lg animate-bounce flex items-center justify-center"
                 style="background-color: #FF6B35;">
              <span class="text-white text-2xl">🎯</span>
            </div>
            <p class="text-sm text-gray-600">Bounce</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-2 rounded-lg animate-pulse flex items-center justify-center"
                 style="background-color: #06BCC1;">
              <span class="text-white text-2xl">💫</span>
            </div>
            <p class="text-sm text-gray-600">Pulse</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-2 rounded-lg animate-spin flex items-center justify-center"
                 style="background-color: #2E8B57;">
              <span class="text-white text-2xl">⚡</span>
            </div>
            <p class="text-sm text-gray-600">Spin</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-2 rounded-lg animate-ping flex items-center justify-center"
                 style="background-color: #FF4444;">
              <span class="text-white text-2xl">🌟</span>
            </div>
            <p class="text-sm text-gray-600">Ping</p>
          </div>

        </div>
      </div>

      <!-- Interactive Elements -->
      <div class="premium-card p-6 animate-scale-in">
        <h3 class="text-2xl font-bold mb-6 text-center text-gray-800">🚀 Interactive Elements</h3>
        
        <div class="flex flex-wrap justify-center gap-4 mb-6">
          <button class="btn-premium hvr-grow">Grow on Hover</button>
          <button class="btn-premium hvr-glow">Glow Effect</button>
          <button class="btn-premium hvr-float">Float Animation</button>
        </div>

        <div class="text-center">
          <div class="inline-block p-6 rounded-full bg-gradient-to-r from-orange-500 to-teal-500 text-white mb-4">
            <span class="text-3xl font-bold">{{knobValue}}%</span>
          </div>
          <p class="text-lg text-gray-700">Interactive Progress: {{knobValue}}%</p>
          <div class="mt-4 flex justify-center gap-2">
            <button (click)="decreaseValue()" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">-</button>
            <button (click)="increaseValue()" class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">+</button>
          </div>
        </div>
      </div>

      <!-- Particles Background -->
      <div id="particles-js" class="fixed inset-0 pointer-events-none opacity-30 z-0"></div>

    </div>
  `,
  styles: [`
    .ui-showcase-container {
      position: relative;
      z-index: 1;
    }
    
    .premium-card {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 12px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }
    
    .premium-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    }
  `]
})
export class UiShowcaseComponent implements OnInit {
  knobValue = 75;

  constructor(
    private animationService: SimpleAnimationService,
    private themeService: SimpleThemeService
  ) {}

  ngOnInit() {
    // Initialize animations and effects
    try {
      this.animationService.initializeAOS();
      this.animationService.initializeParticles('particles-js');
      this.themeService.initializeTheme();
    } catch (error) {
      console.log('Animation services not fully loaded yet');
    }
  }

  toggleTheme() {
    try {
      this.themeService.toggleTheme();
    } catch (error) {
      console.log('Theme service not available');
    }
  }

  increaseValue() {
    if (this.knobValue < 100) {
      this.knobValue += 10;
    }
  }

  decreaseValue() {
    if (this.knobValue > 0) {
      this.knobValue -= 10;
    }
  }
}