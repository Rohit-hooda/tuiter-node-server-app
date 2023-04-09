import * as tuitsDao from './tuits-dao.js'


const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "avatar": "nasa-logo.webp",
    "dislikes": 0
};


const createTuit = async (req, res) => {
    const newTuit = req.body
    newTuit.likes = 0;
    newTuit.liked = false;
    const newTuitt  = {...currentUser, ...newTuit}

    const insertedTuit = await tuitsDao.createTuit(newTuitt);
    res.json(insertedTuit);
}

const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
    res.sendStatus(200);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}