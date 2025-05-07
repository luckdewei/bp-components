import { defineComponent } from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Switcher',
    setup() {
        return () => (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="M12 8l10 8l-10 8z"></path>
          </svg>
        )
    }
})