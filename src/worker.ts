import { Application, Router } from '@cfworker/web'
import createTelegrafMiddware from 'cfworker-middware-telegraf'
import secret from './secrets'

import bot from './bot'

const router = new Router()
router.post(`/webhook-${secret.webhook}`, createTelegrafMiddware(bot))
new Application().use(router.middleware).listen()
