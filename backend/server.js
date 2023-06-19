const express = require('express');
const app = express();

const port = 8000;
app.listen(port, () => {
  console.log(`Servidor backend en ejecución en el puerto ${port}`);
});

const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'], // Cambia esto por la dirección IP de tu clúster de Cassandra
  localDataCenter: 'datacenter1', // Cambia esto por el nombre del centro de datos de tu clúster
  keyspace: 'mykeyspace' // Cambia esto por el nombre de tu keyspace en Cassandra
});

// Aquí puedes realizar operaciones en la base de datos utilizando el cliente Cassandra
