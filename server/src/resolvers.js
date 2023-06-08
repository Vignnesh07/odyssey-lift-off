// Best practice to keep resolver functions as thin as possible to keep 
// them resilient to changes 
const resolvers = {
    Query: {
        // Returns an array of Tracks that will be used to populate 
        // the homepage grid of our web client
        // Paramters for recolvers => parent, args, contextValue, info
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksForHome();
        },

        // Get a single track by Id, for the track page
        track: (_, { id }, { dataSources }) => {
            return dataSources.trackAPI.getTrack(id);
        }
    },

    Track: {
        author: ({ authorId }, _, { dataSources }) => {
            return dataSources.trackAPI.getAuthor(authorId);
        },
        modules: ({ id }, _, { dataSources }) => {
            return dataSources.trackAPI.getTrackModules(id);
        }
    }
};

module.exports = resolvers;