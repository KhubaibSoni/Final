import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

// components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: json })
      }
    }

    fetchWorkouts()
  }, [dispatch])

  return (
    <div className="blogs">
      {workouts && workouts.length > 0 ? (
        workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))
      ) : (
        <h1>There is no Blog</h1>
      )}
    </div>
  )
}

export default Home
