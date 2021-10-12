import { useMutation, useQuery } from '@apollo/client'
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
} from '@material-ui/core'
import {
  allPeople,
  allPeople_allPeople as PersonType,
} from '../graphql/__generated__/allPeople'
import { Link } from 'react-router-dom'
import { generateData } from '../graphql/__generated__/generateData'
import {
  allPeopleQuery as query,
  generateDataMutation,
  wipeDataMutation,
} from './../graphql/queries'
import { wipeData } from '../graphql/__generated__/wipeData'

export const Home = () => {
  const { data, loading, refetch } = useQuery<allPeople>(query)
  if (loading) return <>loading..</>

  return (
    <>
      <Grid
        container
        spacing={2}
        alignItems='stretch'
        justifyContent='center'
        direction='row'
      >
        {data?.allPeople.map((person) => (
          <Grid item xs={3} key={person.id}>
            <PersonBox person={person}></PersonBox>
          </Grid>
        ))}
      </Grid>
      <hr />
      <Footer refetch={refetch} disableMutations={loading}></Footer>
    </>
  )
}

const PersonBox = ({ person }: { person: PersonType }) => {
  const nameSplit = person.name.split(' ')
  const first = nameSplit[0]
  const last = nameSplit[nameSplit.length - 1]

  return (
    <Card>
      <CardHeader
        avatar={<Avatar>{`${first.charAt(0)}${last.charAt(0)}`}</Avatar>}
        title={person.name}
      ></CardHeader>
      <CardContent>
        <Link to={`person/${person.id}`} color='inherit'>
          Show more
        </Link>
      </CardContent>
    </Card>
  )
}

const Footer = ({
  refetch,
  disableMutations,
}: {
  refetch: () => Promise<any>
  disableMutations: boolean
}) => {
  const [generateData, { loading: generateDataLoading }] =
    useMutation<generateData>(generateDataMutation, {
      onCompleted: async () => await refetch(),
    })

  const [wipeData, { loading: wipeDataLoading }] = useMutation<wipeData>(
    wipeDataMutation,
    {
      onCompleted: async () => await refetch(),
    },
  )

  const loading = generateDataLoading || wipeDataLoading || disableMutations

  return (
    <>
      <Button
        variant='contained'
        color='primary'
        onClick={async () => await generateData()}
        disabled={loading}
      >
        Generate data
      </Button>{' '}
      <Button
        variant='contained'
        color='secondary'
        onClick={async () => await wipeData()}
        disabled={loading}
      >
        Wipe all data
      </Button>
    </>
  )
}
