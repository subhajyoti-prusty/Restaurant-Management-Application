import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleAnimationService {
  initializeAOS() {
    console.log('AOS animations initialized');
    // Simple implementation that won't cause errors
    if (typeof document !== 'undefined') {
      const elements = document.querySelectorAll('.animate-fade-in');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('opacity-100');
        }, index * 100);
      });
    }
  }

  initializeParticles(containerId: string) {
    console.log(`Particles initialized for ${containerId}`);
    // Simple particle effect simulation
    if (typeof document !== 'undefined') {
      const container = document.getElementById(containerId);
      if (container) {
        container.style.background = 'radial-gradient(circle, rgba(255,107,53,0.1) 1px, transparent 1px)';
        container.style.backgroundSize = '20px 20px';
      }
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class SimpleThemeService {
  private currentTheme = 'light';

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    console.log(`Theme switched to: ${this.currentTheme}`);
    
    if (typeof document !== 'undefined') {
      document.body.setAttribute('data-theme', this.currentTheme);
      
      // Simple theme switching
      if (this.currentTheme === 'dark') {
        document.body.style.backgroundColor = '#2C3E50';
        document.body.style.color = '#ECF0F1';
      } else {
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
      }
    }
  }

  initializeTheme() {
    console.log('Theme service initialized');
    const savedTheme = typeof localStorage !== 'undefined' ? 
      localStorage.getItem('restaurant-theme') || 'light' : 'light';
    this.currentTheme = savedTheme;
    
    if (typeof document !== 'undefined') {
      document.body.setAttribute('data-theme', savedTheme);
    }
  }

  getCurrentTheme() {
    return this.currentTheme;
  }
}