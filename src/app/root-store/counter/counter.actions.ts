import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');


export const setNotificationCount = createAction(
    '[Admin] Set Notification Count',
    props<{ notificationCount: number }>()
)