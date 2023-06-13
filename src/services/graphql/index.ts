import { gql } from "@apollo/client";

const Mutation = {
    createService: gql`
        mutation CreateService($createServiceInput: CreateServiceInput!) {
            createService(createServiceInput: $createServiceInput) {
                id
            }
        }
    `,
    removeServices: gql`
        mutation RemoveServices($servicesIds: [Int!]) {
            removeServices(ids: $servicesIds) {
                count
            }
        }
    `
}

const Query = {
    solutions: gql`
        query Solutions {
            solutions {
                id
                name
            }
        }
    `,
    services: gql`
        query Services {
            serviceAll {
                id
                name
                desc
                externalUrl
                serviceSolutionId
            }
        }
    `
}

export { Query, Mutation }