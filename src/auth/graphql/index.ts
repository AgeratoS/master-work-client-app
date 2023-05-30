import { gql } from "@apollo/client"

const Mutation = {
    createDeveloper: gql`
        mutation CreateDeveloper($createDeveloperInput: CreateDeveloperInput!) {
            createDeveloper(createDeveloperInput: $createDeveloperInput) {
                login
                password
            }
        }
    `,
    updateDeveloper: gql`
        mutation UpdateDeveloper($updateDeveloperInput: UpdateDeveloperInput!) {
            updateDeveloper(updateDeveloperInput: $updateDeveloperInput) {
                id
                login
                password
            }
        }
    `
}

const Query = {
    verifyDeveloper: gql`
        query VerifyDeveloper($login: String!, $password: String!) {
            verifyDeveloper(login: $login, password: $password) {
                id
                login
                password
            }
        }
    `
}

export { Mutation, Query }