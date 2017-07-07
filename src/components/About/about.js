import axios from 'axios'
import queryString from 'query-string'

export default {
  name: 'about',
  data() {
    return {
      businesses: [],
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
      if (!this.query.location) {
        alert('You must provide a location')
      } else {
        this.fetchYelpStuff(this.query)
      }
    },
    fetchYelpStuff(query) {
      const stringQuery = queryString.stringify(query)
      axios.get(`http://localhost:3000/yelp-api?${stringQuery}`, { headers: { Accept: 'application/json' } })
      .then(response => response.data)
      .then((res) => {
        this.businesses = res.businesses
      })
      .catch((err) => {
        console.error(err)
      })
    },
  },
}
