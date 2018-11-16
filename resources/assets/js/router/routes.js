import FrontView from '@/components/Templates/FrontView.vue'
import LoginModal from '@/components/Templates/FrontView.vue'
import WorkspaceView from '@/components/Templates/FrontView.vue'
import ActionView from '@/components/Templates/FrontView.vue'
import CharacterView from '@/components/Templates/FrontView.vue'
import WorldView from '@/components/Templates/FrontView.vue'
import ActionModal from '@/components/Templates/ActionModal.vue'
import CharacterModal from '@/components/Templates/ActionModal.vue'
import WorldModal from '@/components/Templates/ActionModal.vue'

export default [{
    mode: 'history',
    path: '/',
    component: FrontView,
}, {
    mode: 'history',
    path: '/login',
    component: LoginModal
}, {
    mode: 'history',
    path: '/workspace',
    component: WorkspaceView,
    meta: { requiresAuth: true }
}, {
    mode: 'history',
    path: '/action',
    component: ActionView,
    meta: { requiresAuth: true }
}, {
    mode: 'history',
    path: '/character',
    component: CharacterView,
    meta: { requiresAuth: true }
}, {
    mode: 'history',
    path: '/world',
    component: WorldView,
    meta: { requiresAuth: true }
}, {
    mode: 'history',
    path: '/action-detail',
    component: ActionModal,
    meta: { requiresAuth: true }
}, {
    mode: 'history',
    path: '/character-detail',
    component: CharacterModal,
    meta: { requiresAuth: true }
}, {
    mode: 'history',
    path: '/world-detail',
    component: WorldModal,
    meta: { requiresAuth: true }
}, {
    mode: 'history',
    path: '*',
    redirect: '/'
}]