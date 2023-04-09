import mongoose from 'mongoose';

const schema = mongoose.Schema({
                                   tweet: String,
                                   likes: Number,
                                   liked: Boolean,
                                   dislikes: Number,
                                   topic: String,
                                   userName: String,
                                   time: String,
                                   comments: Number,
                                   retweets: Number,
                                   handle: String,
                                   avatar: String,
                                   image: String
                               }, {collection: 'tuits'});
export default schema;

