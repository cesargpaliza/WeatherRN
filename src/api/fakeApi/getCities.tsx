import { city as dataCity }from './city';

export const getCities = () => {
    const resp = dataCity.map( c => ({label: c.name, value: c.id }))
    return resp
}