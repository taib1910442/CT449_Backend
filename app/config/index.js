const config = {
    app: {
        port: process.env.PORT || 3000,
    },
    db: {
        uri: process.env.MONGODB_URI || "mongodb+srv://trantantai00931:th281202@contactbook.vzipmhh.mongodb.net/?retryWrites=true&w=majority"
    }
}

module.exports = config;
