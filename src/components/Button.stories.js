import Button from "primevue/button"

export default {
  title: 'PrimeVue/Button',
  component: Button,
  argTypes: {
    label: {
      control: "text",
    },
    severity: {
      control: "select",
      options: ['primary/[empty]','secondary','success','info','warning','help','danger']
    },
    disabled: {
      control: "boolean"
    },
    raised: {
      control: "boolean"
    },
    rounded: {
      control: "boolean"
    },
    text: {
      control: "boolean"
    },
    outlined: {
      control: "boolean"
    },
    badge: {
      control: "text"
    },
    badgeClass: {
      control: "select",
      options: ['p-badge-primary','p-badge-secondary','p-badge-success','p-badge-info','p-badge-warning','p-badge-help','p-badge-danger']
    },
    size: {
      control: "select",
      options: ["[empty]", "large", "small"]
    }
    // icon: {
    //   control: "select",
    //   options: ["pi pi-check", "pi-bookmark", ,"pi pi-search", "pi pi-user", "pi pi-bell", "pi pi-heart", "pi pi-times"]
    // }
  },
}

const Template = (args,{argTypes}) => ({
  props: Object.keys(argTypes),
  components: {Button},
  setup() {
    return { args }
  },
  template: `
    <Button type='button' v-bind='args'>
      <template v-if="${'slotTemplate' in args}">${args.slotTemplate}</template>
      <template v-if="${'slotA' in args}">${args.slotA}</template>
      <template v-if="${'slotB' in args}">${args.slotB}</template>
    </Button>
  `
})

export const Default = Template.bind({})
Default.args = {
  label: 'Default'
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Secondary',
  severity: 'secondary',
  disabled: false,
  raised: false,
  rounded: false,
  text: false,
  outlined: false,
  badge: 'new',
  badgeClass: '',
  size: '',
  // icon: ''
}
// TODO: support multiple slots
export const Foo = Template.bind({})
Foo.args = {
  slotTemplate: `<img src="https://www.tps.ca/static/images/toronto-police-service-logo.png">`
}

export const Bar = Template.bind({})
Bar.args = {
  slotA: `<img src="https://www.tps.ca/static/images/toronto-police-service-logo.png">`,
  slotB: `<img src="https://www.tps.ca/static/images/toronto-police-service-logo.png">`
}