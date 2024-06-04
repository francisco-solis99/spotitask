import {
  CircularProgress, CircularProgressLabel, Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Grid,
  Tag,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export default function Stadistics({ total, rest }: { total: number, rest: number }) {
  const doneTasksPorcentaje = Number(((rest * 100) / total).toFixed(1))
  const valueDone = isNaN(doneTasksPorcentaje) ? 0 : doneTasksPorcentaje
  const [progressColor, setProgressColor] = useState('white')

  useEffect(() => {
    if (doneTasksPorcentaje <= 20) setProgressColor('red')
    else if (doneTasksPorcentaje > 20 && doneTasksPorcentaje < 60) setProgressColor('yellow')
    else setProgressColor('green')
  }, [rest])


  return (
    <>
      <Grid templateColumns='repeat(3, 1fr)' justifyItems={'center'} alignItems={'center'} gap={6}>
        <Stat>
          <StatLabel>Total Tasks</StatLabel>
          <StatNumber textAlign={'center'}>
            <Tag marginBlockStart={'.25em'} size={'lg'} variant='solid' colorScheme='teal'>
              {total}
            </Tag>
          </StatNumber>
          <StatHelpText></StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Tasks Done</StatLabel>
          <StatNumber textAlign={'center'}>
            <Tag marginBlockStart={'.25em'} size={'lg'} variant='solid' colorScheme='green'>
              {rest}
            </Tag>
          </StatNumber>
          <StatHelpText></StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Tasks Progress</StatLabel>
          <CircularProgress size='80px' thickness='7px' value={valueDone} color={`${progressColor}.400`}>
            <CircularProgressLabel fontSize={'1rem'}>{valueDone}%</CircularProgressLabel>
          </CircularProgress>
        </Stat>
      </Grid>

    </>
  )
}
