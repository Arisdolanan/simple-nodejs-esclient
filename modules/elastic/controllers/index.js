const elasticsearch = require('elasticsearch')

const client = new elasticsearch.Client( {  
    log: 'trace',
    host: [
      {
        host: '127.0.0.1',
        // auth: '[username]:[password]',
        protocol: 'http',
        port: 9200,
      },
    ],
    "apiVersion": "7.6"
  });

const getTestElastic = async (req, res, next) => {
    client.ping({ requestTimeout: 30000 }, (err, response) => {
        console.error('response = ', response);
        if (!err) {
            res.status(200).send({
                status: response,
                message: "Everything is okay.",
            });
        }else{
            res.status(400).send({
                status: response,
                message: "Elasticsearch cluster is down!",
            });                   
        }
    })
}

const getAllElastic = async(req, res) => {
    await client.search({ 
        index: req.query.indeks, 
        body: {
            size: 10000,
            from: 0,    
            query: {
                "match_all": {}
            }
        },
        type: '_doc' 
    }).then((results) => {
        res.send({
            status: true,
            length: results.hits.hits.length,
            message: 'get data',
            data: results.hits.hits
        });
    }).catch((err) => {
        console.log(err);
        res.status(400).send({message:err.message});
    });    
}

const getAllBySearchElastic = async(req, res) => {
    await client.search({ 
        index: req.query.indeks,
        body: {
            size: 200,
            from: 0,    
            query: {
                match: { '_id': req.query.id }
            }
        },
        type: '_doc' 
    }).then((results) => {
        res.send({
            status: true,
            length: results.hits.hits.length,
            message: 'get data',
            data: results.hits.hits
        });
    }).catch((err) => {
        console.log(err);
        res.status(400).send({message:err.message});
    });       
}

const getByIdElastic = async(req, res) => {
    await client.get({
        index: req.query.indeks,
        id: req.query.id
    }).then((results) => {
        res.send({
            status: true,
            message: 'get data',
            data: results
        });
    }).catch((err) => {
        console.log(err);
        res.status(400).send({message:err.message});
    });       
}

const createDataByIndexElastic = async(req, res) => {
    await client.index({
        index: req.query.indeks,
        type: '_doc',
        body: req.body
    }).then((results) => {
        res.send({
            status: true,
            message: 'created data',
            data: results
        });
    }).catch((err) => {
        console.log(err);
        res.status(400).send({message:err.message});
    });   
}

const updateDataByIndexElastic = async(req,res) => {
    await client.update({
        index: req.query.indeks,
        id: req.query.id,
        body: {
            doc:req.body
        },
    }).then((results) => {
        res.send({
            status: true,
            message: 'updated data',
            data: results
        });
    }).catch((err) => {
        console.log(err);
        res.status(400).send({message:err.message});
    });   
}

const getCountDataByIndexElastic = async(req, res) => {
    await client.count({
        index: req.query.indeks
    }).then((results) => {
        res.send({
            status: true,
            message: 'get count data',
            data: results
        });
    }).catch((err) => {
        console.log(err);
        res.status(400).send({message:err.message});
    });   
}

const deleleDataByIdElastic = async(req, res) => {
    await client.delete({
        index: req.query.indeks,
        id: req.query.id
    }).then((results) => {
        res.send({
            status: true,
            message: 'deleted data',
            data: results
        });
    }).catch((err) => {
        console.log(err);
        res.status(400).send({message:err.message});
    });
}

module.exports = {
    getTestElastic,
    getAllElastic,
    getAllBySearchElastic,
    createDataByIndexElastic,
    getByIdElastic,
    updateDataByIndexElastic,
    getCountDataByIndexElastic,
    deleleDataByIdElastic,
}