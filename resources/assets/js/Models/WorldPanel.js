import { Model } from '@vuex-orm/core'
import World from './World'

export default class WorldPanel extends Model {
    static fields() {
        return {
            id: this.attr(null),
            world_id: this.belongsTo(World),
            light: this.attr(null),
            sound: this.attr(null),
            panel_note: this.attr(null)
        }
    }
}

WorldPanel.entity = 'world_panels'