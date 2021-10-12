import { loader } from 'graphql.macro'

export const allPeopleQuery = loader('./allPeople.graphql')
export const onePersonQuery = loader('./onePerson.graphql')

export const generateDataMutation = loader('./generateData.graphql')
export const wipeDataMutation = loader('./wipeData.graphql')