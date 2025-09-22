import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import all custom modules
import { AnimationModule } from './AnimationModule';
import { ChartModule } from './ChartModule';
import { MaterialModule } from './MaterialModule';
import { NgZorroModule } from './NgZorroModule';
import { PrimeNgModule } from './PrimeNgModule';

// Utility services for enhanced UX
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  // AOS (Animate On Scroll) initialization
  async initializeAOS() {
    if (typeof window !== 'undefined') {
      const AOS = await import('aos');
      AOS.default.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        offset: 100,
        delay: 0,
        anchorPlacement: 'top-bottom'
      });
    }
  }

  // GSAP animations helper
  async animateElement(element: any, animation: any): Promise<any> {
    if (typeof window !== 'undefined') {
      const { gsap } = await import('gsap');
      return gsap.to(element, animation);
    }
    return Promise.resolve();
  }

  // Simple particle background (CSS-based alternative)
  initializeParticles(containerId: string, config?: any) {
    if (typeof window !== 'undefined' && document.getElementById(containerId)) {
      const container = document.getElementById(containerId);
      if (container) {
        container.innerHTML = `
          <div class="particles-bg">
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
          </div>
        `;
        
        // Add CSS for animated particles
        const style = document.createElement('style');
        style.textContent = `
          .particles-bg {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: -1;
          }
          .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: #FF6B35;
            border-radius: 50%;
            animation: float 6s ease-in-out infinite;
          }
          .particle:nth-child(1) { left: 20%; animation-delay: 0s; }
          .particle:nth-child(2) { left: 40%; animation-delay: 1s; }
          .particle:nth-child(3) { left: 60%; animation-delay: 2s; }
          .particle:nth-child(4) { left: 80%; animation-delay: 3s; }
          .particle:nth-child(5) { left: 90%; animation-delay: 4s; }
          @keyframes float {
            0%, 100% { transform: translateY(100vh) scale(0); }
            50% { transform: translateY(-10px) scale(1); }
          }
        `;
        document.head.appendChild(style);
      }
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = 'light';

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', this.currentTheme);
    localStorage.setItem('restaurant-theme', this.currentTheme);
  }

  initializeTheme() {
    const savedTheme = localStorage.getItem('restaurant-theme') || 'light';
    this.currentTheme = savedTheme;
    document.body.setAttribute('data-theme', savedTheme);
  }

  getCurrentTheme() {
    return this.currentTheme;
  }
}

// Restaurant-specific chart configurations
export const RESTAURANT_CHART_CONFIGS = {
  salesChart: {
    type: 'line',
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(255, 107, 53, 0.1)'
          }
        },
        x: {
          grid: {
            color: 'rgba(6, 188, 193, 0.1)'
          }
        }
      },
      plugins: {
        legend: {
          position: 'top' as const,
          labels: {
            usePointStyle: true,
            padding: 20
          }
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: '#FF6B35',
          bodyColor: '#ffffff',
          borderColor: '#06BCC1',
          borderWidth: 1,
          cornerRadius: 8
        }
      },
      animation: {
        duration: 2000,
        easing: 'easeInOutQuart'
      }
    }
  },
  
  ordersChart: {
    type: 'doughnut',
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom' as const,
          labels: {
            padding: 20,
            usePointStyle: true
          }
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: '#FF6B35',
          bodyColor: '#ffffff'
        }
      },
      animation: {
        animateRotate: true,
        animateScale: true,
        duration: 2000
      }
    }
  },

  revenueChart: {
    type: 'bar',
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(255, 107, 53, 0.1)'
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: '#FF6B35',
          bodyColor: '#ffffff'
        }
      },
      animation: {
        duration: 1500,
        easing: 'easeOutBounce'
      }
    }
  }
};

// Enhanced module that exports everything
@NgModule({
  imports: [
    CommonModule,
    AnimationModule,
    ChartModule,
    MaterialModule,
    NgZorroModule,
    PrimeNgModule
  ],
  exports: [
    AnimationModule,
    ChartModule,
    MaterialModule,
    NgZorroModule,
    PrimeNgModule
  ],
  providers: [
    AnimationService,
    ThemeService
  ]
})
export class EnhancedUiModule { }