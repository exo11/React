import {SERVICES_REQUEST} from './actiontype'

export const servicesRequest = id => ({type: SERVICES_REQUEST, payload: {id}})