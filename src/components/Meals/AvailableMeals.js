import { useEffect, useState } from 'react'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'
import classes from './AvailableMeals.module.css'
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99
  }
]
const AvailableMeals = () => {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [httpError, setHttpError] = useState()

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://react-dessert-default-rtdb.firebaseio.com/meals.json')
      const responseData = await response.json()

      const loadedMeals = []
      for (const key in responseData) {
        loadedMeals.push({
          ...responseData[key],
          id: key
        })
      }
      setMeals(loadedMeals)
      setIsLoading(false)
    }
    fetchMeals().catch((error) => {
      setIsLoading(false)
      setHttpError(error.message)
    })

    //fetchMeals是一個異步函數，因此他總是返回一個response，但是如果現在拋出一個錯誤導致response不能被處理，那麼就會被拋出來 並不會執行下方try catch
    // try {
    //   fetchMeals()
    // } catch (error) {
    //   setIsLoading(false)
    //   setHttpError(error.message)
    // }
  }, [])

  //寫在這邊的原因是因為想要isLoading = false時 就不會觸發整個組件的更新，
  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    )
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    )
  }

  const mealsList = meals.map((meal) => (
    <MealItem description={meal.description} key={meal.id} id={meal.id} name={meal.name} price={meal.price} />
  ))

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}
export default AvailableMeals
