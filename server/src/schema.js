// Converts GraphQL strings into format expected by Apollo libraries
// Also enables syntax highlighting
const gql = require('graphql-tag');

const typeDefs = gql`
    type Query {
        "Query to get tracks array for the homepage grid"
        tracksForHome: [Track!]!
    }

    "A track is a group of Modules that teaches about a specific topic."
    type Track {
        "The track's id which is defines its uniqueness"
        id: ID!
        "The track's title"
        title: String!
        "The track's main author"
        author: Author!
        "The track's main illustration to display in track card or track page detail"
        thumbnail: String
        "The track's approximate length to complete, in minutes"
        length: Int
        "The number of modules this track contains"
        modulesCount: Int
    }

    "Author of a complete Track"
    type Author {
        "The author's id defining each unique author"
        id: ID!
        "The author's first and last name"
        name: String!
        "The author's profile picture url"
        photo: String
    }
`;

module.exports = typeDefs;