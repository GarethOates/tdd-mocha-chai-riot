riot.tag2('hello', '<h1>Hello {name}</h1>', '', '', function(opts) {
    this.name = opts.name || ''
    this.uppercase = function() {
          this.name = this.name.toUpperCase();
    }
});
