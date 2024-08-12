import { configureStore } from '@reduxjs/toolkit'
import animationRiducer from './states/animationSlice'
import stepperRiducer from './states/stepper/slice';
import serviceRiducer from './states/services/slice';
import orderRiducer from './states/order/slice';
import typeAccounRiducer from './states/menu/slice'

export const reduxApp = configureStore({
  reducer: {
    animation:animationRiducer,
    stepper:stepperRiducer,
    service:serviceRiducer,
    order:orderRiducer,
    typeAccount:typeAccounRiducer
  },
})

export type RootState = ReturnType<typeof reduxApp.getState>

export type AppDispatch = typeof reduxApp.dispatch