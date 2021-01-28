import LgButton from '../'

export default {
  title: 'LgButton',
  component: LgButton
}

export const button = () => ({
  components: { LgButton },
  template: `
    <lg-button @click="click">click me~</lg-button>
  `,
  methods: {
    click () {
      alert('click me~')
    }
  }
})