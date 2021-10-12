/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: allPeople
// ====================================================

export interface allPeople_allPeople_pets {
  __typename: "Cat" | "Dog";
  id: string;
  name: string;
}

export interface allPeople_allPeople {
  __typename: "Person";
  id: string;
  name: string;
  pets: allPeople_allPeople_pets[];
}

export interface allPeople {
  allPeople: allPeople_allPeople[];
}
