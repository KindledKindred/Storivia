import { Model } from '@vuex-orm/core'

export default class Character extends Model {
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(''),
            role_main: this.attr(''),
            role_sub: this.attr(''),
            age: this.attr(''),
            sex: this.attr(''),
            character_note: this.attr('')
        }
    }
}

Character.entity = 'characters'