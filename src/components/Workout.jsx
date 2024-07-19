import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'

export default function Workout(props) {
  const {workout} = props

  return (
    <div>
      <SectionWrapper id={'workout'} header={'Welcome to'} title={['The', 'DANGER', 'zone']}>
        <div className='flex flex-col gap-4'>
          {workout.map((exercise, exerciseIndex) => {
            return(
              <ExerciseCard exerciseIndex={exerciseIndex}exercise={exercise} key={exerciseIndex} />
            )
          })}
        </div>
      </SectionWrapper>
    </div>
  )
}
