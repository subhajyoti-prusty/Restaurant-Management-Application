import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular built-in animations
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group,
  query,
  stagger,
  animateChild
} from '@angular/animations';

// Custom animation definitions for the restaurant app
export const slideInAnimation = trigger('slideIn', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)', opacity: 0 }),
    animate('300ms ease-in', style({ transform: 'translateX(0%)', opacity: 1 }))
  ])
]);

export const fadeInAnimation = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms ease-in', style({ opacity: 1 }))
  ])
]);

export const slideUpAnimation = trigger('slideUp', [
  transition(':enter', [
    style({ transform: 'translateY(100%)', opacity: 0 }),
    animate('400ms ease-out', style({ transform: 'translateY(0%)', opacity: 1 }))
  ])
]);

export const scaleInAnimation = trigger('scaleIn', [
  transition(':enter', [
    style({ transform: 'scale(0)', opacity: 0 }),
    animate('300ms cubic-bezier(0.35, 0, 0.25, 1)', 
      style({ transform: 'scale(1)', opacity: 1 })
    )
  ])
]);

export const bounceInAnimation = trigger('bounceIn', [
  transition(':enter', [
    animate('600ms', 
      keyframes([
        style({ transform: 'scale3d(0.3, 0.3, 0.3)', opacity: 0, offset: 0 }),
        style({ transform: 'scale3d(1.1, 1.1, 1.1)', opacity: 1, offset: 0.2 }),
        style({ transform: 'scale3d(0.9, 0.9, 0.9)', opacity: 1, offset: 0.4 }),
        style({ transform: 'scale3d(1.03, 1.03, 1.03)', opacity: 1, offset: 0.6 }),
        style({ transform: 'scale3d(0.97, 0.97, 0.97)', opacity: 1, offset: 0.8 }),
        style({ transform: 'scale3d(1, 1, 1)', opacity: 1, offset: 1 })
      ])
    )
  ])
]);

export const flipInAnimation = trigger('flipIn', [
  transition(':enter', [
    style({ 
      transform: 'perspective(400px) rotateY(90deg)', 
      opacity: 0 
    }),
    animate(
      '400ms ease-in',
      style({ 
        transform: 'perspective(400px) rotateY(0deg)', 
        opacity: 1 
      })
    )
  ])
]);

export const staggerAnimation = trigger('stagger', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(-15px)' }),
      stagger('50ms', [
        animate('300ms ease-out', 
          style({ opacity: 1, transform: 'translateY(0px)' })
        )
      ])
    ], { optional: true })
  ])
]);

export const cardHoverAnimation = trigger('cardHover', [
  state('normal', style({ transform: 'scale(1)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' })),
  state('hovered', style({ 
    transform: 'scale(1.05)', 
    boxShadow: '0 8px 25px rgba(0,0,0,0.15)' 
  })),
  transition('normal <=> hovered', animate('200ms ease-in-out'))
]);

export const pulseAnimation = trigger('pulse', [
  transition(':enter', [
    animate('1.5s ease-in-out infinite alternate', 
      keyframes([
        style({ transform: 'scale(1)', offset: 0 }),
        style({ transform: 'scale(1.05)', offset: 1 })
      ])
    )
  ])
]);

// Route animations for page transitions
export const routeAnimation = trigger('routeAnimation', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ left: '-100%' })
    ], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ left: '100%' }))
      ], { optional: true }),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%' }))
      ], { optional: true })
    ]),
    query(':enter', animateChild(), { optional: true })
  ])
]);

// Loading animations
export const loadingAnimation = trigger('loading', [
  transition(':enter', [
    animate('2s ease-in-out infinite', 
      keyframes([
        style({ opacity: 0.3, offset: 0 }),
        style({ opacity: 1, offset: 0.5 }),
        style({ opacity: 0.3, offset: 1 })
      ])
    )
  ])
]);

@NgModule({
  imports: [
    CommonModule
  ],
  exports: []
})
export class AnimationModule { }

// Export all animations for easy import
export {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group,
  query,
  stagger,
  animateChild
};