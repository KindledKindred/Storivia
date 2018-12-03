import { Model } from '@vuex-orm/core'
import Character from './Character'
import WorldPanel from './WorldPanel'

export default class Action extends Model {
    static fields() {
        return {
            id: this.attr(null),
            function31: this.attr(''),
            scene: this.belongsTo(WorldPanel),
            actor: this.belongsTo(Character),
            motive: this.attr(''),
            action_note: this.attr('')
        }
    }
}

Action.entity = 'actions'