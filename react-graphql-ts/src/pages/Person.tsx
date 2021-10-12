import { useQuery } from '@apollo/client'
import { Card, CardHeader, CardContent, List, ListItem, Button } from '@material-ui/core'
import { Link, useParams } from 'react-router-dom'
import { onePersonQuery } from '../graphql/queries'
import {
  onePerson as OnePerson,
  onePersonVariables as OnePersonVariables,
  onePerson_person_pets as Pet,
  onePerson_person_pets_Cat as CatType,
  onePerson_person_pets_Dog as DogType,
} from '../graphql/__generated__/onePerson'

export const Person = () => {
  const { id } = useParams<{ id: string | undefined }>()
  const { data, loading } = useQuery<OnePerson, OnePersonVariables>(
    onePersonQuery,
    { variables: { personId: id || '1' } },
  )

  if (loading || data?.person === undefined) {
    return <>loading..</>
  }

  const person = data.person

  return (
    <>
      <Card>
        <CardHeader title={person.name}></CardHeader>
        <CardContent>
          {`${person.name} has ${person.pets.length} pet(s).`}

          <List>
            {person.pets.map((pet: Pet) => (
              <ListItem key={pet.id}>
                - {pet.__typename === 'Dog' && Dog(pet)}{' '}
                {pet.__typename === 'Cat' && Cat(pet)}
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
      <Button variant='contained' color='primary' component={Link} to='/'>
        Back
      </Button>
    </>
  )
}


const Dog = (dog: DogType) => (
  <>{`a dog named ${dog.name} that goes ${dog.barkLoudly} 🐶`}</>
)
const Cat = (cat: CatType) => (
  <>{`a cat named ${cat.name} that goes ${cat.makeSound} 🐱`}</>
)
