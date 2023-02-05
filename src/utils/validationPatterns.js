const validationPatterns = {
  name: /^[a-z\s]{2,}$/i,
  email: /^\w+([+.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i,
  message: /.{20,}/is,
}

export default validationPatterns;