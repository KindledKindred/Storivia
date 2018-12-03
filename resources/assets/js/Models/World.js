import { Model } from '@vuex-orm/core'
import WorldPanel from './WorldPanel'

export default class World extends Model {
    static fields() {
        return {
            id: this.attr(null),
            panels: this.hasMany(WorldPanel, 'world_id'),
            world_note: this.attr('')
        }
    }
}

World.entity = 'worlds'