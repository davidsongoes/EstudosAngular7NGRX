import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  query,
  stagger,
} from '@angular/animations'

export function transitionMenuFixed() {
  return trigger('transitionMenuFixed', [
    state(
      'shown',
      style({
        opacity: 1,
        transform: 'translateY(0)',
      })
    ),
    state(
      'hidden',
      style({
        opacity: 0,
        transform: 'translateY(-150%)',
      })
    ),
    transition('* => *', animate('0.3s ease-in-out')),
  ])
}

export function expand() {
  return trigger('expand', [
    state('*', style({ opacity: 1, transform: 'translateX(0)' })),
    transition(':enter', [
      style({ transform: 'translateY(-50%)', opacity: 0 }),
      animate(
        '200ms ease-in',
        style({ opacity: 1, transform: 'translateX(0)' })
      ),
    ]),
  ])
}

export function fadeIn() {
  return trigger('fadeIn', [
    state('*', style({ opacity: 1 })),
    transition(':enter', [
      style({ opacity: 0 }),
      animate('600ms 0s ease-in-out'),
    ]),
  ])
}
export function fadeInOut() {
  return trigger('fadeInOut', [
    state('void => *', style({ opacity: 1 })),
    transition(':enter', [style({ opacity: 0 }), animate('300ms 0s ease-in')]),
    transition(':leave', [animate('300ms 0s ease-out', style({ opacity: 0 }))]),
  ])
}

export function fadeInOutDelayIn() {
  return trigger('fadeInOutDelayIn', [
    state('void => *', style({ opacity: 1 })),
    transition(':enter', [
      style({ opacity: 0 }),
      animate('300ms 300ms ease-in'),
    ]),
    transition(':leave', [animate('300ms 0s ease-out', style({ opacity: 0 }))]),
  ])
}

export function flyIn() {
  return trigger('flyIn', [
    state('void => *', style({ transform: 'translateX(0)' })),
    transition(':enter', [
      style({ transform: 'translateX(-5%)' }),
      animate('300ms 0s ease-in'),
    ]),
    transition(':leave', [
      animate('300ms ease-out', style({ transform: 'translateX(100%)' })),
    ]),
  ])
}

export function shrinkOut() {
  return trigger('shrinkOut', [
    state('in', style({ height: '*' })),
    transition('* => void', [
      style({ height: '*' }),
      animate(250, style({ height: 0 })),
    ]),
  ])
}

export const speedDialFabAnimations = [
  trigger('fabToggler', [
    state(
      'inactive',
      style({
        transform: 'rotate(0deg)',
      })
    ),
    state(
      'active',
      style({
        transform: 'rotate(225deg)',
      })
    ),
    transition('* <=> *', animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  ]),
  trigger('speedDialStagger', [
    transition('* => *', [
      query(':enter', style({ opacity: 0 }), { optional: true }),

      query(
        ':enter',
        stagger('40ms', [
          animate(
            '200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
            keyframes([
              style({ opacity: 0, transform: 'translateY(10px)' }),
              style({ opacity: 1, transform: 'translateY(0)' }),
            ])
          ),
        ]),
        { optional: true }
      ),

      query(
        ':leave',
        animate(
          '200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
          keyframes([style({ opacity: 1 }), style({ opacity: 0 })])
        ),
        { optional: true }
      ),
    ]),
  ]),
]
