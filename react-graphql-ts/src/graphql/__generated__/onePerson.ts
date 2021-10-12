/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: onePerson
// ====================================================

export interface onePerson_person_pets_Dog {
  __typename: "Dog";
  id: string;
  name: string;
  barkLoudly: string;
}

export interface onePerson_person_pets_Cat {
  __typename: "Cat";
  id: string;
  name: string;
  makeSound: string;
}

export type onePerson_person_pets = onePerson_person_pets_Dog | onePerson_person_pets_Cat;

export interface onePerson_person {
  __typename: "Person";
  id: string;
  name: string;
  pets: onePerson_person_pets[];
}

export interface onePerson {
  person: onePerson_person;
}

export interface onePersonVariables {
  personId: string;
}
