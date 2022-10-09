import { useState } from 'react'
import { addDays, subDays,format, formatISO } from "date-fns"
import { ptBR } from 'date-fns/locale'

import { Icon } from '~/components/Icon' 


export const DateSelect = ({currentDate, onChange}) => {
  
  //const [currentDate, setCurrentDate] = useState(new Date('2022-11-20T00:00:00Z'))
  const date = new Date(currentDate)

  const prevDay = () => {
    const nextDate = subDays(date, 1)
    onChange(formatISO(nextDate))
  }

  const nextDay = () => {
    const nextDate = addDays(date, 1)
    onChange(formatISO(nextDate))
  }

  return(
    <div className="p-4 flex space-x-4 items-center justify-center">
      <Icon name="arrowLeft" className="w-6 text-red-500" onClick={prevDay}/>
      <span className="font-bold">{format(date,"d 'de' MMMM",{ locale: ptBR})}</span>
      <Icon name="arrowRight" className="w-6 text-red-500" onClick={nextDay} />
  </div>
  )
}
