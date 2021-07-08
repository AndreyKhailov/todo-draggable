import { colorList } from './colorList'

export function getColor() {    
    return colorList[Math.round(Math.random() * (colorList.length-1))]
}