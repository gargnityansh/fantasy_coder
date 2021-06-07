class Auth {
  constructor(){
    this.authenticated = false;
    this.username = '';
  }
  login(cb) {
    this.authenticated = true;
    cb();
  }
  logout(cb) {
    this.authenticated = false;
    cb();
  }
  isAuthenticated() {
    return this.authenticated;
  }
  createUser(user) {
    this.username = user;
    console.log(this.username);
  }
  getUser() {
    return this.username;
  }
}

export default new Auth();