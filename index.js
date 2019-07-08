const fastify = require('fastify')({
  logger: true
  })

  fastify.register(require('fastify-cors'), { 
    // put your options here
    origin: true
  })
  
  // Declare a route
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })
  
  // Run the server!
  const start = async () => {
    try {
      await fastify.listen(3001, '0.0.0.0')
      fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()

  const routes = require(`./routes`);
  routes.forEach((route, index) => {
    fastify.route(route)
   })

  // Require external modules
const mongoose = require('mongoose')

// Connect to DB
mongoose.connect(`mongodb://localhost/kafla`)
 .then(() => console.log(`MongoDB connected…`))
 .catch(err => console.log(err))