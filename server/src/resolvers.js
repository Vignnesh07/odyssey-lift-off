// Best practice to keep resolver functions as thin as possible to keep 
// them resilient to changes 
const resolvers = {
    Query: {
        // Returns an array of Tracks that will be used to populate 
        // the homepage grid of our web client
        // Paramters for recolvers => parent, args, contextValue, info
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksForHome();
        }
    },

    Track: {
        author: ({ authorId }, _, { dataSources }) => {
            dataSources.trackAPI.getAuthor(authorId);
        }
    }
};

module.exports = resolvers;