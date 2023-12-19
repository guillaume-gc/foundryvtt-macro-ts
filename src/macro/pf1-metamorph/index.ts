import { findBuffInActor } from './buff'

try {
  const {
    tokens: { controlled },
  } = canvas

  const actor = controlled[0].actor

  const actorBuff = findBuffInActor(actor, 'Vision magique')

  console.log('actorBuff', actorBuff)
} catch (error) {
  ui.notifications.error("Erreur, voir la console pour plus d'information")
  console.error(error)
}
