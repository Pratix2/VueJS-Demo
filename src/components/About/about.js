import axios from 'axios'
import queryString from 'query-string'

export default {
  name: 'about',
  data() {
    return {
      businesses: [],
      isLoading: false,
      query: {
        term: '',
        location: '',
        limit: '',
        price: [],
      },
    }
  },
  methods: {
    onSearch() {
      const myElement = document.querySelector('.btn')
      if (!this.query.location) {
        myElement.style.display = 'inline'
      } else {
        myElement.style.display = 'none'
        this.fetchYelpStuff(this.query)
      }
    },
    onPopover(e) {
      $(e.target).popover('show')
    },
    fetchYelpStuff(query) {
      this.isLoading = true
      const stringQuery = queryString.stringify(query)
      axios.get(`http://localhost:3000/yelp-api?${stringQuery}`, { headers: { Accept: 'application/json' } })
      .then(response => response.data)
      .then((res) => {
        this.businesses = res.businesses
        this.isLoading = false
      })
      .catch((err) => {
        console.error(err)
        this.isLoading = false
      })
    },
  },
}
