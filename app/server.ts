import { createApp } from 'sonik'
import { showRoutes } from 'hono/dev'

const app = createApp()
showRoutes(app)

export default app
