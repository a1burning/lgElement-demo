import Steps from '../'

export default {
  title: 'Steps',
  component: Steps
}

export const step = () => ({
  components: { Steps },
  template:`
    <div>
      <steps :count="count" :active="active"></steps>
      <button @click="next">下一步</button>
    </div>
  `,
  data () {
    return  {
      count: 4,
      active: 0
    }
  },
  methods: {
    next () {
      console.log(this.active)
      this.active < this.count && this.active++
    }
  }
})
